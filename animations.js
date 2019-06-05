var shadeWidth = 0;
var i = 0;
function launchTransition() {
  i = 0;
  setTimeout(function () {
    document.getElementById('s1').style.setProperty("right", null);
    document.getElementById('s2').style.setProperty("right", null);
    document.getElementById('s3').style.setProperty("right", null);
    document.getElementById('s4').style.setProperty("right", null);
    document.getElementById('s5').style.setProperty("right", null);
    document.getElementById('s1').style.setProperty("left", "0");
    document.getElementById('s2').style.setProperty("left", "20vw");
    document.getElementById('s3').style.setProperty("left", "40vw");
    document.getElementById('s4').style.setProperty("left", "60vw");
    document.getElementById('s5').style.setProperty("left", "80vw");
  }, 500);
  console.log('anchor updated: left')
  for (i = 0; i < 20; i++) {
      console.log('shadeAddition:' + shadeWidth);
      shadeWidth = shadeWidth + 1;
      document.getElementById("s1").style.width =  shadeWidth + "vw";
      document.getElementById("s2").style.width =  shadeWidth + "vw";
      document.getElementById("s3").style.width =  shadeWidth + "vw";
      document.getElementById("s4").style.width =  shadeWidth + "vw";
      document.getElementById("s5").style.width =  shadeWidth + "vw";
  }
}
function closeTransition() {
  i = 0;
  setTimeout(function () {
    document.getElementById('s1').style.setProperty("left", null);
    document.getElementById('s2').style.setProperty("left", null);
    document.getElementById('s3').style.setProperty("left", null);
    document.getElementById('s4').style.setProperty("left", null);
    document.getElementById('s5').style.setProperty("left", null);
    document.getElementById('s1').style.setProperty("right", "80vw");
    document.getElementById('s2').style.setProperty("right", "60vw");
    document.getElementById('s3').style.setProperty("right", "40vw");
    document.getElementById('s4').style.setProperty("right", "20vw");
    document.getElementById('s5').style.setProperty("right", "0");
  }, 500);
  console.log('anchor updated: right');
  for (i = 0; i < 20; i++) {
      console.log('shadeReduction:' + shadeWidth);
      shadeWidth = shadeWidth - 1;
      document.getElementById("s1").style.width =  shadeWidth + "vw";
      document.getElementById("s2").style.width =  shadeWidth + "vw";
      document.getElementById("s3").style.width =  shadeWidth + "vw";
      document.getElementById("s4").style.width =  shadeWidth + "vw";
      document.getElementById("s5").style.width =  shadeWidth + "vw";
  }
}
// SLIDER transition
function launchTransition2() {
  i = 0;
  setTimeout(function () {
    document.getElementById('s2').style.setProperty("right", null);
    document.getElementById('s3').style.setProperty("right", null);
    document.getElementById('s4').style.setProperty("right", null);
    document.getElementById('s5').style.setProperty("right", null);
    document.getElementById('s2').style.setProperty("left", "20vw");
    document.getElementById('s3').style.setProperty("left", "40vw");
    document.getElementById('s4').style.setProperty("left", "60vw");
    document.getElementById('s5').style.setProperty("left", "80vw");
  }, 500);
  console.log('anchor updated: left')
  for (i = 0; i < 20; i++) {
      console.log('shadeAddition:' + shadeWidth);
      shadeWidth = shadeWidth + 1;
      document.getElementById("s2").style.width =  shadeWidth + "vw";
      document.getElementById("s3").style.width =  shadeWidth + "vw";
      document.getElementById("s4").style.width =  shadeWidth + "vw";
      document.getElementById("s5").style.width =  shadeWidth + "vw";
  }
}
function closeTransition2() {
  i = 0;
  setTimeout(function () {
    document.getElementById('s2').style.setProperty("left", null);
    document.getElementById('s3').style.setProperty("left", null);
    document.getElementById('s4').style.setProperty("left", null);
    document.getElementById('s5').style.setProperty("left", null);
    document.getElementById('s2').style.setProperty("right", "60vw");
    document.getElementById('s3').style.setProperty("right", "40vw");
    document.getElementById('s4').style.setProperty("right", "20vw");
    document.getElementById('s5').style.setProperty("right", "0");
  }, 500);
  console.log('anchor updated: right');
  for (i = 0; i < 20; i++) {
      console.log('shadeReduction:' + shadeWidth);
      shadeWidth = shadeWidth - 1;
      document.getElementById("s2").style.width =  shadeWidth + "vw";
      document.getElementById("s3").style.width =  shadeWidth + "vw";
      document.getElementById("s4").style.width =  shadeWidth + "vw";
      document.getElementById("s5").style.width =  shadeWidth + "vw";
  }
}
//MENU transition
function launchTransition3() {
  i = 0;
  setTimeout(function () {
    document.getElementById('s1').style.setProperty("right", null);
    document.getElementById('s1').style.setProperty("left", "0");
  }, 500);
  console.log('anchor updated: left')
  for (i = 0; i < 20; i++) {
      console.log('shadeAddition:' + shadeWidth);
      shadeWidth = shadeWidth + 1;
      document.getElementById("s1").style.width =  shadeWidth + "vw";
  }
}
function closeTransition3() {
  i = 0;
  setTimeout(function () {
    document.getElementById('s1').style.setProperty("left", null);
    document.getElementById('s1').style.setProperty("right", "80vw");
  }, 500);
  console.log('anchor updated: right');
  for (i = 0; i < 20; i++) {
      console.log('shadeReduction:' + shadeWidth);
      shadeWidth = shadeWidth - 1;
      document.getElementById("s1").style.width =  shadeWidth + "vw";
  }
}
console.log('transitions imported');


/*
var outlinkHandler = document.getElementById('outlink');
outlinkHandler.onclick = outlink(link);

function outlink(link) {
  window.location.href = "" + link + "";
}
*/
