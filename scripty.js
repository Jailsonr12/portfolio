let h1 = document.getElementById("insertName");
let element1 = document.createTextNode(" Jailson");
let element2 = document.createTextNode(" Jailson DA SILVA ROTH");
let element3 = document.createTextNode(" Jailson Roth");

function changeName() {
    setTimeout(function() {
      h1.textContent = element3.textContent;
    }, 3000);
  
    setTimeout(function() {
      h1.textContent = element2.textContent;
    }, 6000);
  
    setTimeout(function() {
      h1.textContent = element3.textContent;
    }, 9000);
  
  }
  

changeName();