function writeAction(e) {
    var btn = e.target || e.srcElement;

    document.getElementById("res").innerHTML +=   
        document.getElementById(btn.id).innerHTML;
}

document.getElementById('btn0').addEventListener('click', writeAction);
document.getElementById('btn1').addEventListener('click', writeAction);
document.getElementById('btnSum').addEventListener('click', writeAction);
document.getElementById('btnSub').addEventListener('click', writeAction);
document.getElementById('btnMul').addEventListener('click', writeAction);
document.getElementById('btnDiv').addEventListener('click', writeAction);

document.getElementById('btnClr').addEventListener('click', e =>{
    document.getElementById("res").innerHTML = '';
});

document.getElementById('btnEql').addEventListener('click', e =>{
    let expression = document.getElementById("res").innerHTML;
    let operands = expression.split(/\+|-|\*|\//);
    operands[0] = parseInt(operands[0],2);
    operands[1] = parseInt(operands[1],2);
    if (expression.search(/\+/) != -1){
        document.getElementById("res").innerHTML = Number(operands[0] + operands[1]).toString(2);    
    } else if (expression.search(/-/) != -1) {
        document.getElementById("res").innerHTML = Number(operands[0] - operands[1]).toString(2);
    }else if(expression.search(/\*/) != -1) {
        document.getElementById("res").innerHTML = Number(operands[0] * operands[1]).toString(2);
    }else if(expression.search(/\//) != -1) {
        document.getElementById("res").innerHTML = Math.floor(operands[0] / operands[1]).toString(2);
    } 
});
