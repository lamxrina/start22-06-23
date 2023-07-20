//Task 1

function myFunction() {
    document.getElementById("myMenu").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
  
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  //Task 1 modification

function changeText(ev) {
    if(ev.getAttribute('data-show') === "true") {
        ev.innerText = "less"
        ev.setAttribute('data-show', "false"); 
    }
    else {
        ev.innerText = "more"
        ev.setAttribute('data-show', "true"); 
    }
}

//Task 2


    