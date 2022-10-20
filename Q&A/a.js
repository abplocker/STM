/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").classList.add("isOpen");
    document.getElementById("mySidenav").style.width = "1000px";
    document.getElementById("main").style.margin = "1000px";
    document.body.classList.add("overflow-hidden");
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").classList.remove("isOpen");
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.body.classList.remove("overflow-hidden");
    document.body.style.backgroundColor = "white";
  }