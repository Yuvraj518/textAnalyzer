// console.log("ram");
const data={
    "good":{"definition": "that which is pleasing or valuable or useful",
       "partOfSpeech": "noun",
       "synonyms":"goodness",
       "antonyms":"bad"},
    "new":{"definition": "original and of a kind not seen before",
       "partOfSpeech": "adjective",
       "synonyms":"fresh",
       "antonyms":"old"},
    "top":{"definition": "be the culminating event",
       "partOfSpeech": "verb",
       "synonyms":"crown",
       "antonyms":"bottom"},
 }
// active 
const wordInputZone=document.getElementById("wordZone");
const paragraphZone=document.getElementById("paragraphZone");
const wordGroup=document.getElementById("word-group");
const paraGroup=document.getElementById("para-group");

wordInputZone.addEventListener("click",()=>{
    wordInputZone.classList.add("active");
    paragraphZone.classList.remove("active")
    wordGroup.classList.add("current");
    paraGroup.classList.remove("current")
})
paragraphZone.addEventListener("click",()=>{
    paragraphZone.classList.add("active");
    wordInputZone.classList.remove("active")
    paraGroup.classList.add("current")
    wordGroup.classList.remove("current")
})

//word
const wordInput=document.getElementById("search-word-input");
const processButton=document.getElementById("process");
const tdElements=document.getElementsByTagName("td");
// console.log(tdElements)
const defination1=document.getElementById("defination-value");
const speech1=document.getElementById("speech-value");
const synonyms1=document.getElementById("synonyms-value");
const antonyms1=document.getElementById("antonyms-value");


processButton.addEventListener("click",()=>{
    let wordKey=wordInput.value;
    tdElements[0].innerHTML=wordKey.length;
    console.log(wordKey,":",data[wordKey])
    //fetch the data from api
    //suppose we have fetch the data and saved in data variable.
    // data: good,new,top
    if(typeof data[wordKey]!="undefined"){
    defination1.innerHTML=data[wordKey].definition;
    speech1.innerHTML=data[wordKey].partOfSpeech;
    synonyms1.innerHTML=data[wordKey].synonyms;
    antonyms1.innerHTML=data[wordKey].antonyms;
    }
})

//para
const paraInput=document.getElementById("search-para");
//tdElements=> [ , ,characters,words,sentences,paragraphs,spaces,punctuations]
//td first 2 elements are for wordZone


function calculateParameters(e){
    e.preventDefault();
    // console.log(e.target.value)
    const paragraph=(e.target.value).trim();      //removed the start and end spaces


    const characters = paragraph.length;  // no of characters 
    tdElements[2].innerHTML=characters;
    const words = paragraph.split(/\s+/).length;      //words
    tdElements[3].innerHTML=words;
    let sentences = paragraph.split(/[.!?]+/).length; 
    //here i assumed that each sentence end with .,!,?. 
    //we can do further modification  as per our requirment
    const lastCharacter=paragraph[characters-1];
    if(lastCharacter=='.' || lastCharacter=='?' || lastCharacter=='!'){
        sentences--;
    }
    tdElements[4].innerHTML=sentences;
    const paragraphs = paragraph.split(/\n+/).length;  // assumed new para start from new line
    tdElements[5].innerHTML=paragraphs;
    let splitedPara=paragraph.split(/\s+/);
    let updatedPara=""
    splitedPara.forEach((key)=>{updatedPara+=key});console.log(updatedPara,updatedPara.length)
    const spaces=characters-updatedPara.length;
    // const spaces = words - 1;   //spaces
    tdElements[6].innerHTML=spaces;
    const punctuations = (paragraph.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g) || []).length;
    tdElements[7].innerHTML=punctuations;
}
paraInput.addEventListener("input",calculateParameters)
