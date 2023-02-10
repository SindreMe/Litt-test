function changeText() {
    document.getElementById('textDiv').innerHTML = "Good job"
}


//var number = 5;
//var floatNumber = 5.5;
//var text = "en liten tekstbit";
//var enkeltTegn = 'a';
//var booleans = false;

//----------------------------------------------------------------------------

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


function color(color,width,height) {
    document.getElementById('mainDiv').innerHTML = /*html*/`
    <div style="background-color:${color}; width: ${width}%; height:${height}px;"></div>
    `;
}

//----------------------------------------------------------------------------

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

//----------------------------------------------------------------------------

function show() {
    var valueTxt = document.getElementById('number').value;
    var value = parseInt(valueTxt);
    let html = '';
    if (value < 50) html += '<p>Number is less than 50</p>';
    if (value > 50) html += '<p>Number is more than 50</p>';
    if (value == 50) html += '<p>Number is 50</p>';
    html += value;
    document.getElementById('info').innerHTML = html;
}

//----------------------------------------------------------------------------
    
goToA();

    function goToA() {
        document.getElementById('game').innerHTML = /*html*/`
        You are in room A. There are two doors:
        <ul>
            <button onclick="goToB()">Go to B</button>
            <button onclick="goToD()">Go to D</button>
        </ul>
        `;
    }

    function goToB() {
        document.getElementById('game').innerHTML = /*html*/`
        You are in room B. There are two doors:
        <ul>
            <button onclick="goToA()">Go to A</button>
            <button onclick="goToC()">Go to C</button>
        </ul>
        `;
    }

    function goToC() {
        document.getElementById('game').innerHTML = /*html*/`
        You are in room C. There are one door:
        <ul>
            <button onclick="goToB()">Go to B</button>
        </ul>
        `;
    }

    function goToD() {
        document.getElementById('game').innerHTML = /*html*/`
        You made it!
        You are in room D. There are one door:
        <ul>
            <button onclick="goToA()">Go to A</button>
        `;
    }

//----------------------------------------------------------------------------

goToEA();

function goToEA() {
    document.getElementById('game2').innerHTML = /*html*/`
    You are in room E. There are 4 doors:
    <ul>
        <button onclick="goToBA()">Go to B</button>
        <button onclick="goToDA()">Go to D</button>
        <button onclick="goToFA()">Go to F</button>
        <button onclick="goToGA()">Go to G</button>
    </ul>
     `;
}

function goToFA() {
    document.getElementById('game2').innerHTML = /*html*/`
    You are in room F. There are 2 doors:
    <ul>
        <button onclick="goToEA()">Go to E</button>
        <button onclick="goToCA()">Go to C</button>
    </ul>
    `;
}

function goToGA() {
    document.getElementById('game2').innerHTML = /*html*/`
    You are in room G. You have won! There are 1 doors:
    <ul>
        <button onclick="goToEA()">Go to E</button>
    </ul>
    `;
}

function goToBA() {
    document.getElementById('game2').innerHTML = /*html*/`
    You are in room B. There are 3 doors:
    <ul>
        <button onclick="goToAA()">Go to A</button>
        <button onclick="goToCA()">Go to C</button>
        <button onclick="goToEA()">Go to E</button>
    </ul>
    `;
}

function goToAA() {
    document.getElementById('game2').innerHTML = /*html*/`
    You are in room A. There are 2 doors:
    <ul>
        <button onclick="goToBA()">Go to B</button>
        <button onclick="goToDA()">Go to D</button>
    </ul>
    `;
}

function goToDA() {
    document.getElementById('game2').innerHTML = /*html*/`
    You are in room D. There are 2 doors:
    <ul>
        <button onclick="goToAA()">Go to A</button>
        <button onclick="goToEA()">Go to E</button>
    </ul>
    `;
}

function goToCA() {
    document.getElementById('game2').innerHTML = /*html*/`
    You are in room C. There are 3 doors:
    <ul>
        <button onclick="goToBA()">Go to B</button>
        <button onclick="goToFA()">Go to F</button>
    </ul>
    `;
}

//----------------------------------------------------------------------------

var x = document.getElementById("myAudio");

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
} 

//----------------------------------------------------------------------------

walkToA();

function walkToA() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>You are in a forest, find your way out:</h2>
    <p>
        <button onclick="walkToF()">Go down</button>
        <button onclick="walkToB()">Go right</button>
    </p>
     `;
}

function walkToB() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>Rom B:</h2>
    <p>
        <button onclick="walkToA()">Go left</button>
        <button onclick="walkToG()">Go down</button>
        <button onclick="walkToC()">Go right</button>
    </p>
     `;
}

function walkToC() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>Rom C:</h2>
    <p>
        <button onclick="walkToB()">Go left</button>
        <button onclick="walkToH()">Go down</button>
    </p>
     `;
}

function walkToG() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>Rom G:</h2>
    <p>
        <button onclick="walkToF()">Go left</button>
        <button onclick="walkToL()">Go down</button>
        <button onclick="walkToB()">Go up</button>
        <button onclick="walkToH()">Go right</button>
    </p>
     `;
}

function walkToF() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>Rom F:</h2>
    <p>
        <button onclick="walkToA()">Go up</button>
        <button onclick="walkToK()">Go down</button>
        <button onclick="walkToG()">Go right</button>
    </p>
     `;
}

function walkToK() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>Rom K:</h2>
    <p>
        <button onclick="walkToF()">Go up</button>
        <button onclick="walkToP()">Go down</button>
        <button onclick="walkToL()">Go right</button>
    </p>
     `;
}

function walkToP() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>Rom P:</h2>
    <p>
        <button onclick="walkToK()">Go up</button>
    </p>
     `;
}

function walkToL() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>Rom L:</h2>
    <p>
        <button onclick="walkToF()">Go left</button>
        <button onclick="walkToQ()">Go down</button>
        <button onclick="walkToG()">Go up</button>
        <button onclick="walkToM()">Go right</button>
    </p>
     `;
}

function walkToQ() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>Rom Q:</h2>
    <p>
        <button onclick="walkToP()">Go left</button>
        <button onclick="walkToV()">Go down</button>
        <button onclick="walkToL()">Go up</button>
        <button onclick="walkToR()">Go right</button>
    </p>
     `;
}

function walkToV() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>Rom V:</h2>
    <p>
        <button onclick="walkToU()">Go left</button>
        <button onclick="walkToQ()">Go up</button>
        <button onclick="walkToW()">Go right</button>
    </p>
     `;
}

function walkToU() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>Rom U:</h2>
    <p>
        <button onclick="walkToV()">Go right</button>
    </p>
     `;
}

function walkToW() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>Rom W:</h2>
    <p>
        <button onclick="walkToV()">Go left</button>
        <button onclick="walkToR()">Go up</button>
    </p>
     `;
}

function walkToR() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>Rom R:</h2>
    <p>
        <button onclick="walkToQ()">Go left</button>
        <button onclick="walkToW()">Go down</button>
        <button onclick="walkToM()">Go up</button>
        <button onclick="walkToS()">Go right</button>
    </p>
     `;
}

function walkToM() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>Rom M:</h2>
    <p>
        <button onclick="walkToL()">Go left</button>
        <button onclick="walkToR()">Go down</button>
        <button onclick="walkToH()">Go up</button>
    </p>
     `;
}

function walkToH() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>Rom H:</h2>
    <p>
        <button onclick="walkToG()">Go left</button>
        <button onclick="walkToM()">Go down</button>
        <button onclick="walkToC()">Go up</button>
        <button onclick="walkToI()">Go right</button>
    </p>
     `;
}

function walkToI() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>Rom I:</h2>
    <p>
        <button onclick="walkToH()">Go left</button>
        <button onclick="walkToN()">Go down</button>
        <button onclick="walkToD()">Go up</button>
    </p>
     `;
}

function walkToD() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>Rom D:</h2>
    <p>
        <button onclick="walkToC()">Go left</button>
        <button onclick="walkToI()">Go down</button>
        <button onclick="walkToE()">Go right</button>
    </p>
     `;
}

function walkToE() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>Rom E:</h2>
    <p>
        <button onclick="walkToD()">Go left</button>
        <button onclick="walkToJ()">Go down</button>
    </p>
     `;
}

function walkToJ() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>Rom J:</h2>
    <p>
        <button onclick="walkToI()">Go left</button>
        <button onclick="walkToE()">Go up</button>
        <button onclick="walkToO()">Go down</button>
    </p>
     `;
}

function walkToO() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>Rom O:</h2>
    <p>
        <button onclick="walkToN()">Go left</button>
        <button onclick="walkToJ()">Go up</button>
        <button onclick="walkToT()">Go down</button>
    </p>
     `;
}

function walkToN() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>Rom N:</h2>
    <p>
        <button onclick="walkToM()">Go left</button>
        <button onclick="walkToI()">Go up</button>
        <button onclick="walkToS()">Go down</button>
    </p>
     `;
}

function walkToS() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>Rom S:</h2>
    <p>
        <button onclick="walkToR()">Go left</button>
        <button onclick="walkToN()">Go up</button>
        <button onclick="walkToX()">Go down</button>
    </p>
     `;
}

function walkToX() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>Rom X:</h2>
    <p>
        <button onclick="walkToW()">Go left</button>
        <button onclick="walkToS()">Go up</button>
    </p>
     `;
}

function walkToT() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>Rom T:</h2>
    <p>
        <button onclick="walkToO()">Go up</button>
        <button onclick="walkToY()">Go down</button>
    </p>
     `;
}

function walkToY() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>Rom Y:</h2>
    <p>
        <button onclick="walkToX()">Go left</button>
        <button onclick="walkToT()">Go up</button>
        <button onclick="walkToZ()">Go right</button>
    </p>
     `;
}

function walkToZ() {
    document.getElementById('game3').innerHTML = /*html*/`
    <h2>You made it out!</h2>
    <p>

    </p>
     `;
}