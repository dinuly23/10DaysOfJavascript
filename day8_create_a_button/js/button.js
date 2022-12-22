const button =  document.getElementById("btn");
button.addEventListener('click', e=>{
    let count = +(e.currentTarget.innerHTML) + 1;
    e.currentTarget.innerHTML = count;
})