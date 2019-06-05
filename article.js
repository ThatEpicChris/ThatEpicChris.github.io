var menuState = 1; // 1 = closed. 2 = open
function menuToggle() {
  if (menuState == 1) { //OPEN MENU
    console.log('Opening Menu');
    launchTransition3();

    setTimeout(function() {
      document.getElementById("menuFrame").style.visibility =  'visible';
      document.getElementById("menuToggle").style.color =  'var(--colorCream)';
      document.getElementById("menuToggle").style.backgroundColor = 'var(--colorNavy)';
      document.getElementById("menuToggle").textContent = "CLOSE";
      closeTransition3();
    }, 500);
    menuState = 2;
  } else if (menuState == 2) { //CLOSE MENU
    console.log('Closing Menu');
    launchTransition3();
    document.getElementById("menuFrame").style.visibility =  'hidden';
    document.getElementById("menuToggle").style.color =  'var(--colorNavy)';
    document.getElementById("menuToggle").style.backgroundColor = 'var(--colorCream)';
    setTimeout(function() {
      document.getElementById("menuToggle").textContent = "MENU";
      closeTransition3();
    }, 700);
    menuState = 1;
  }
}
var popUpState = 1; // 1 = closed, 2 = open
function openPopUp(popUpID) {
  console.log(popUpID);
  if (popUpState == 1) { //Check no other popups open; if not, open popup.
    console.log('opening popup');
    document.getElementById("PO" + popUpID).style.visibility = 'visible';
    popUpState = 2;
  }
}

function closePopUp(popUpID) {
  if (popUpState == 2) { //Check no other popups open; if not, open popup.
    console.log('closing popup');
    document.getElementById("PO" + popUpID).style.visibility = 'hidden';
    popUpState = 1;
  }
}
