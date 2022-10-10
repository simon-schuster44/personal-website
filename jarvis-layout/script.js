var i = 0;
var txt = 'Waiting for host...';
var duration = 80;
var timer = 10;
var j = 0;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, duration);
  } else{
  point()}
}

function clear(){
    document.getElementById("demo").innerHTML = "";
    document.getElementById("overlay").style.opacity = "0";
}

function point(){
if (j < timer) {
    document.getElementById("demo").innerHTML += ".";
    j++;
    setTimeout(unpoint, 500);
  } else {
    clear()
  }
}

function unpoint(){
    if (j < timer) {
        document.getElementById("demo").innerHTML = txt;
        j++;
        setTimeout(point, 500);
    }else {
        clear()
      }
}

function userNumber(){
  document.getElementById("number").innerHTML = Math.ceil(Math.random() * 20000000)
}

function start(){
  typeWriter();
  userNumber();
}