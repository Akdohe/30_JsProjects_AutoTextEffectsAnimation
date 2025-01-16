const containerEl = document.querySelector(".container");

const careers = ["Youtuber", "WebDev", "FreeLancer", "Instructor"];

let careerIndex = 0;

let characterIndex= 0;
updateText();
function updateText(){
characterIndex++;
// Update the text content
containerEl.innerHTML = `<h1>I am ${careers[careerIndex].slice(0,1)=== "I" ? "an" : "a"} ${careers[careerIndex].slice(0,characterIndex)}</h1>` ;
// Move to the next career if the current one is fully displayed
if(characterIndex === careers[careerIndex].length){
    careerIndex++
    characterIndex = 0
}

 // Reset to the first career if we reach the end of the array
if(careerIndex === careers.length){
    careerIndex=0;
}
setTimeout(updateText,400);
}