

const loginWindow = document.getElementById('hmiLogin');
const loginWindowNotice = document.getElementById('loginWindowNotice');
const hmiPage1 = document.getElementById('hmiPage1');
const hmiPage2 = document.getElementById('hmiPage2');
const pyroPlantA = document.getElementById('PyroPlantA');
const pyroPlantB = document.getElementById('PyroPlantB');
const hmiLogOutButton = document.getElementById('hmiLogOutButton');
const hmiPageLogistics = document.getElementById('hmiPageLogistics');

function scriptLoggedIn() {

  var hmiLoginUserName = document.getElementById('hmiLoginUserName').value;
  var hmiLoginUserPassword = document.getElementById('hmiLoginUserPassword').value;

  if (hmiLoginUserName == 'PYRO-USERX' && hmiLoginUserPassword == 'pyro') {
    loginWindow.classList.replace('hmiLogin', 'hmiLoginHidden');
    hmiPage1.classList.replace('hmiPage1Hidden', 'hmiPage1');
    hmiLogOutButton.classList.replace('logoutButtonHidden', 'logoutButton')
  } else {
    loginWindowNotice.innerHTML = "Invalid Employee ID and or Password";
  }
}

function scriptLogOut() {
  loginWindow.classList.replace('hmiLoginHidden', 'hmiLogin');
  hmiLogOutButton.classList.replace('logoutButton', 'logoutButtonHidden')
  hmiPage1.classList.replace('hmiPage1', 'hmiPage1Hidden');
  hmiPage2.classList.replace('hmiPage2', 'hmiPage2Hidden');
  hmiPageLogistics.classList.replace('hmiPageLogistics', 'hmiPageLogisticsHidden');
  pyroPlantA.classList.replace('PyroPlantA', 'PyroPlantAHidden');
  pyroPlantB.classList.replace('PyroPlantA', 'PyroPlantAHidden');

}


function scriptShowLogistics() {
  hmiPage1.classList.replace('hmiPage1', 'hmiPage1Hidden');
  hmiPageLogistics.classList.replace('hmiPageLogisticsHidden', 'hmiPageLogistics');
}

function scriptShowHmiPage2() {
  hmiPage1.classList.replace('hmiPage1', 'hmiPage1Hidden');
  hmiPage2.classList.replace('hmiPage2Hidden', 'hmiPage2');
}

function scriptShowPyroPlantA() {
  pyroPlantA.classList.replace('PyroPlantAHidden', 'PyroPlantA');
  hmiPage2.classList.replace('hmiPage2', 'hmiPage2Hidden');
}

function scriptShowPyroPlantB() {
  pyroPlantB.classList.replace('PyroPlantAHidden', 'PyroPlantA');
  hmiPage2.classList.replace('hmiPage2', 'hmiPage2Hidden');
}
