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

goToE1();

function goToE1() {
    document.getElementById('game2').innerHTML = /*html*/`
    You are in room E. There are 4 doors:
    <ul>
        <button onclick="goToB1()">Go to B</button>
        <button onclick="goToD1()">Go to D</button>
        <button onclick="goToF1()">Go to F</button>
        <button onclick="goToG1()">Go to G</button>
    </ul>
     `;
}

function goToF1() {
    document.getElementById('game2').innerHTML = /*html*/`
    You are in room F. There are 2 doors:
    <ul>
        <button onclick="goToE1()">Go to E</button>
        <button onclick="goToC1()">Go to C</button>
    </ul>
    `;
}

function goToG1() {
    document.getElementById('game2').innerHTML = /*html*/`
    You are in room G. You have won! There are 1 doors:
    <ul>
        <button onclick="goToE1()">Go to E</button>
    </ul>
    `;
}

function goToB1() {
    document.getElementById('game2').innerHTML = /*html*/`
    You are in room B. There are 3 doors:
    <ul>
        <button onclick="goToA1()">Go to A</button>
        <button onclick="goToC1()">Go to C</button>
        <button onclick="goToE1()">Go to E</button>
    </ul>
    `;
}

function goToA1() {
    document.getElementById('game2').innerHTML = /*html*/`
    You are in room A. There are 2 doors:
    <ul>
        <button onclick="goToB1()">Go to B</button>
        <button onclick="goToD1()">Go to D</button>
    </ul>
    `;
}

function goToD1() {
    document.getElementById('game2').innerHTML = /*html*/`
    You are in room D. There are 2 doors:
    <ul>
        <button onclick="goToA1()">Go to A</button>
        <button onclick="goToE1()">Go to E</button>
    </ul>
    `;
}

function goToC1() {
    document.getElementById('game2').innerHTML = /*html*/`
    You are in room C. There are 3 doors:
    <ul>
        <button onclick="goToB1()">Go to B</button>
        <button onclick="goToF1()">Go to F</button>
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




