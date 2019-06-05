
var width1 = 0;
var width2 = 0;
var width3 = 0;
var stage = 1;

setTimeout(function () {
  document.getElementById("sT1").style.width =  width1;
  document.getElementById("sT2").style.width =  width2;
  document.getElementById("sT3").style.width =  width3;
  document.getElementById("hB1").style.visibility =  'visible';
  document.getElementById("hB2").style.visibility =  'hidden';
  document.getElementById("hB3").style.visibility =  'hidden';
}, 250);

function setWidth1() {
  document.getElementById("sT1").style.width =  width1;
}
function setWidth2() {
  document.getElementById("sT2").style.width =  width2;
}
function setWidth3() {
  document.getElementById("sT3").style.width =  width3;
}

function stageCheck() {
  if (stage == 1.5) {
    stage = 2;
    console.log('begin transition to 2');
    launchTransition2();
    setTimeout(function() {
      document.getElementById("hB1").style.visibility =  'hidden';
      document.getElementById("hB2").style.visibility =  'visible';
      document.getElementById("hB3").style.visibility =  'hidden';
      setTimeout(function() {
        closeTransition2();
      }, 500);
    }, 500);
    width1 = 0;
    setWidth1();
    console.log('updated imagery, reset width1 to 0, updated stage to 2');
  } else if (stage == 2.5) {
    stage = 3;
    console.log('begin transition to 3');
    launchTransition2();
    setTimeout(function() {
      document.getElementById("hB1").style.visibility =  'hidden';
      document.getElementById("hB2").style.visibility =  'hidden';
      document.getElementById("hB3").style.visibility =  'visible';
      setTimeout(function() {
        closeTransition2();
      }, 500);
    }, 500);
    width2 = 0;
    setWidth2();
    console.log('updated imagery, reset width2 to 0, updated stage to 3');
  } else if (stage == 3.5) {
    stage = 1;
    console.log('begin transition to 1');
    launchTransition2();
    setTimeout(function() {
      document.getElementById("hB1").style.visibility =  'visible';
      document.getElementById("hB2").style.visibility =  'hidden';
      document.getElementById("hB3").style.visibility =  'hidden';
      setTimeout(function() {
        closeTransition2();
      }, 500);
    }, 500);
    width3 = 0;
    setWidth3();
    console.log('updated imagery, reset width3 to 0, updated stage to 1');
  }
}

//WIDTH CLOCK. Updates every 1/10th second. Stage 4 = in transition.
var widthClockId = setInterval(function() {
  if (width1 == 100) {
    stage = stage + 0.5;
    stageCheck(); //begins transition
  } else if (width2 == 100) {
    stage = stage + 0.5;
    stageCheck(); //begins transition
  } else if (width3 == 100) {
    stage = stage + 0.5;
    stageCheck(); //begins transition
  } else if (stage == 1) {
    document.getElementById("sT1").style.width =  width1 + "%";
    width1++;
  } else if (stage == 2) {
    document.getElementById("sT2").style.width =  width2 + "%";
    width2++;
  } else if (stage == 3) {
    document.getElementById("sT3").style.width =  width3 + "%";
    width3++;
  }
    console.log('w1:' + width1);
    console.log('w2:' + width2);
    console.log('w3:' + width3);
}, 100);
