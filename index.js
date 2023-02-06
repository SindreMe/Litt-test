function oppdaterTekst() {
    document.getElementById('tekstDiv').innerHTML ="Godt jobbet"
}

//var number = 5;
//var floatNumber = 5.5;
//var text = "en liten tekstbit";
//var enkeltTegn = 'a';
//var booleans = false;

var outputDiv = document.getElementById('output');
var numToShow = 0;

function setNum(selectedNum) {
    numToShow = selectedNum;
    outputDiv.innerHTML = numToShow;
}

function increaseNum() {
    numToShow++;
    outputDiv.innerHTML = numToShow;
}

function decreaseNum() {
    numToShow--;
    outputDiv.innerHTML = numToShow;
}


function farge(color,width,height) {
    document.getElementById('mainDiv').innerHTML = /*html*/`
    <div style="background-color:${color}; width: ${width}%; height:${height}px;"></div>
    `;
}

function randomImage(element) {

        let bil = Math.floor(Math.random() *3) +1;
            if(bil == 1){
                element.src="img/bilde1.jpg";
                }
            else if(bil == 2){
                element.src="img/bilde3.jpg";
            }
            else {
                element.src="img/bilde2.jpg";
            }
            
       
    }





