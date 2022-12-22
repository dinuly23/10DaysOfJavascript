const button5 =  document.getElementById("btn5");
button5.addEventListener('click', e=>{
    const lableBtns = [];
    for( let i = 1; i <= 9; i++){
        lableBtns.push(document.getElementById(`btn${i}`).innerText);
    }
    document.getElementById("btn1").innerText = lableBtns[3];
    document.getElementById("btn2").innerText = lableBtns[0];
    document.getElementById("btn3").innerText = lableBtns[1];
    document.getElementById("btn4").innerText = lableBtns[6];
    document.getElementById("btn6").innerText = lableBtns[2];
    document.getElementById("btn7").innerText = lableBtns[7];
    document.getElementById("btn8").innerText = lableBtns[8];
    document.getElementById("btn9").innerText = lableBtns[5];
})