const p = document.getElementById('js');
const txt = 'JavaScript'
let i = 0
function typeWriter(){
    if(i<txt.length){
        p.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 200);
    } else {
        p.innerHTML = "";
        i=0;
        typeWriter();
    }
}