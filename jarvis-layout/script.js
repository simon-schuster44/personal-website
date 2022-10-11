var i = 0;
var txt1 = "Waiting for host...";
var txt2 = "Connecting...";
var duration = 80;
var timer = 8;
var j = 0;
var code =
  "'ns': 'yt',  'el': 'detailpage',  'cpn': 'Jd8STlqiPLEtey9D',  'ver': 2,  'cmt': '0.556',  'fmt': '398',<br>  'fs': '0',  'rt': '1042.3',  'euri': '',  'lact': 0,  'cl': '479184154',  'mos': 0,  'state': '4',  'volume': 90,  'cbr': 'Opera',  'cbrver': '91.0.4516.65',  'c': 'WEB',  'cver': '2.20221006.09.00',  'cplayer': 'UNIPLAYER',  'cos': 'Windows',  'cosver': '10.0',  'cplatform': 'DESKTOP',  'hl': 'de_DE',  'cr': 'DE',  'len': '212.061',  'fexp': '23858057,23983296,23986016,24001373,24002022, 24002025,2400444,24007246, 24080738,24135310,24135692, 24169501,24175560,24219382,24225483,24226335,24229161,24248385, 24255165, 24263273,24277988,24278546,24279628,24283280,24288485,24289901,24290131, 24290256,24292954,24298640,24298652,24390262,39322278,39322399',  'feature': 'search',  'afmt': '251',  'muted': '0',  'docid': 'dQw4w9WgXcQ',  'ei': 'WVJEY7TLEIWS1gLGsbH4Dw',  'plid': 'AAXqsUGL2J6bre7s',  'referrer': ',  'sourceid': 'ys',  'of': 'C_lOWSiPUNuY87Lrnp2m1Q',  'vm': 'CAMQARgBOjJBTGV0MXV6T0loTDhCSUVOU2puanB 5Q2dTYnh2czN3aXFNanhSS1UybS0wcnltcWdDZ2JfQVBta0tETFoxMWp1djBKYlJIbG9oaTBmTk1GcnV ubFVFbEhSVElQRzhiOGdHRFA3VDJ4MmowdERBZ0cxWERpYlAwR3FrekE0Q0tjamZzVF9IZk04NE56R2NXQTNDRUk',  'vct': '0.556',  'vd': '212.061',  'vpl': '0.000-0.556',  'vbu': '0.000-122.880',  'vpa': '1',  'vsk': '0',  'ven': '0',  'vpr': '1',  'vrs': '4',  'vns': '2',  'vec': 'null',  'vemsg': '',  'vvol': '0.8058282852836581',  'vdom': '1',  ";

function typeWriter() {
  if (i < txt1.length) {
    document.getElementById("demo").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, duration);
  } else {
    point();
  }
}

function clear() {
  document.getElementById("go").innerHTML = "";
  document.getElementById("overlay").style.opacity = "0";
}

function point() {
  if (j < timer) {
    document.getElementById("demo").innerHTML += ".";
    j++;
    setTimeout(unpoint, 500);
  } else {
    codeWriter();
  }
}

function unpoint() {
  if (j < timer) {
    document.getElementById("demo").innerHTML = txt1;
    j++;
    setTimeout(point, 500);
  } else {
    codeWriter();
  }
}

function userNumber() {
  document.getElementById("number").innerHTML = Math.ceil(
    Math.random() * 20000000
  );
}

function codeWriter() {
  document.getElementById("demo").innerHTML = "";
  if (i < code.length) {
    document.getElementById("go").innerHTML += code.charAt(i);
    i++;
    setTimeout(codeWriter, 2);
  } else {
    setTimeout(clear, 2000);
  }
}

function start() {
  //typeWriter();
  //userNumber();
}
