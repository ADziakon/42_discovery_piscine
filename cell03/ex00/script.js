const btn = document.getElementById('change-color');
let countClick = 0;
console.log(0);
function changeColor(color) {
    document.body.style.background = color;
    countClick= countClick + 1;   
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

btn.addEventListener('click', function onClick() {
    console.log(1);
    
    const randomColor = getRandomColor();
    if(countClick == 0){
        changeColor(randomColor);
        document.getElementById('change-color').style.height= "80px";
        document.getElementById('change-color').style.width= '200px';
    }else {
        changeColor(randomColor);
        document.getElementById('change-color').style.height= "100px";
        document.getElementById('change-color').style.width= '250px';
        countClick = 0;
    }
    
    
});