const btn = document.getElementById('red-box');
let countClick = 0;

function changeColor(color) {
    btn.style.background = color;
    countClick= countClick + 1;
}

function changeColorLeave(color) {
    btn.style.background = color;
    countClick= countClick - 1;
}

function changeSize(state){
    let width = btn.offsetWidth;
    let height = btn.offsetHeight;

    if(width < 420 && state == 'rise') {
        width += 10;
        height += 10;
    }else if(width >= 420 && state == 'rise'){
        width = 200;
        height = 200;
    }

    if (width >200 && state == 'down'){
        width -= 5;
        height -= 5;
    }

    btn.style.width = width + 'px';
    btn.style.height = height + 'px';
}

btn.addEventListener('click', function onClick() {
    let state = 'rise';
    if(countClick == 0){
        changeColor('green');
        changeSize(state);
    }else if(countClick == 1){
        changeColor('blue');
        changeSize(state)
    }else {
        changeColor('red');
        changeSize(state);
        countClick = 0;  
    }
  
});

btn.addEventListener('mouseleave', () => {
    let state = 'down';
    changeSize(state);
    if (countClick == 2) {
        changeColorLeave('green');
    }else if (countClick == 1){
        changeColorLeave('red');
    }else  {
        changeColorLeave('blue');
        countClick = 2;  
    }
});