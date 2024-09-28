let intervalId;
let hexCode = document.querySelector("#hex-code");

let p = document.createElement("p");

const randomColor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';

    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    
    return color;
    
}

function startChangingColor(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000);
    }
    
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}

function stopChangingColor(){
    clearInterval(intervalId);

    p.classList.add("hex")
    p.textContent = `Hex Code: ${randomColor()}`;
    hexCode.appendChild(p);

    intervalId = null;
}

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);