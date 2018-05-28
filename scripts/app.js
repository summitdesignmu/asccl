function openMenu() {
    document.getElementById('nav').style.right = " 0";
    document.getElementById('nav').style.opacity = "1";
    document.getElementById('nav').style.visibility = "visible"; 
    document.getElementById('jumbo').style.opacity= "0.3";
    document.getElementsById('jumbo').style.opacity= "0.3";
    
}
function closeMenu() {
    document.getElementById('nav').style.right = " -1000px";
    document.getElementById('nav').style.opacity = "0";
    document.getElementById('nav').style.visibility = "hidden";   
    document.getElementById('jumbo').style.opacity = "1";
    document.getElementsByTagName('section').style.opacity = "1";
    document.getElementsByTagName('header').style.opacity = "1";
}



