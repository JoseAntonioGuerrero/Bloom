(function App() {

  var header = document.getElementsByTagName('header')[0];
  var pageContent = document.querySelector(".page-content");
  var footer = document.getElementsByTagName('footer')[0];
  var background = document.querySelector(".bg");
  var backgroundMobile = document.querySelector(".bg-mobile");

  var mobileMenu = document.querySelector(".menu-wrapper");
  var menuOpener = document.querySelector(".menu-mobile-icon");
  var menuCloser = document.querySelector(".menu-close");
  var mobileMenu = document.querySelector(".menu-wrapper");
  
  var link0 = document.querySelector(".header-logo");
  var link1 = document.querySelector(".link1");
  var link2 = document.querySelector(".link2");
  var link3 = document.querySelector(".link3");
  var link4 = document.querySelector(".link4");

  menuOpener.addEventListener("click", openMenu);
  menuCloser.addEventListener("click", closeMenu);

  link0.addEventListener("click", () =>{
    closeMenu();
    banishPage();
    translateHeaderDown();
    setTimeout(() => (window.location.href = './index.html'), 1000);
  });

  link1.addEventListener("click", () =>{
    closeMenu();
    banishPage();
    setTimeout(() => (window.location.href = './vision.html'), 1000);
  });

  link2.addEventListener("click", () =>{
    closeMenu();
    banishPage();
    setTimeout(() => (window.location.href = './productos.html'), 1000);
  });
  
  link3.addEventListener("click", () =>{
    closeMenu();
    banishPage();
    setTimeout(() => (window.location.href = './aliados.html'), 1000);
  });
  
  link4.addEventListener("click", () =>{
    closeMenu();
  });

  //Open and close menu are only used on phone, or tablet vertical screen position.
  function openMenu() {
    mobileMenu.style.transition = "0.4s";
    mobileMenu.style.opacity = 1;
    mobileMenu.style.visibility = "visible";
  }
  function closeMenu() {
    mobileMenu.style.opacity = 0;
    mobileMenu.style.visibility = "hidden";
    setTimeout(() => {
      mobileMenu.style.transition = "none";
    }, 3000);
  }

  function translateHeaderUp() {
    let ytravel;
    screen.availWidth < 768
      ? (ytravel = (window.innerHeight - 128.938) / 2 - 30)
      : (ytravel = (window.innerHeight - 169.62) / 2 - 30);
    header.style.transform = `translate(0px,-${ytravel}px)`;
  }

  function translateHeaderDown() {
    let ytravel;
    screen.availWidth < 768
      ? (ytravel = (window.innerHeight - 128.938) / 2 - 30)
      : (ytravel = (window.innerHeight - 169.62) / 2 - 30);
    header.style.transform = `translate(0px,${ytravel}px)`;
  }
  function banishPage() {
    if (pageContent) pageContent.style.transition = "0.3s";
    if (pageContent) pageContent.style.opacity = "0";
    
    if (footer) footer.style.transition = "0.3s"; 
    if (footer) footer.style.opacity = "0";

    if (background) background.style.transition = "0.6s";
    if (background) background.style.opacity = "0";

    if (backgroundMobile) backgroundMobile.style.transition = "1s";
    if (backgroundMobile) backgroundMobile.style.opacity = "0";

    setTimeout(() => {
      if (pageContent) pageContent.style.transition = "none";
      if (pageContent) pageContent.style.visibility = "hidden";

      if (footer) footer.style.transition = "none";
      if (footer) footer.style.visibility = "hidden";
    }, 300);
  }

  function fadeInPage() {
    if (pageContent) pageContent.style.transition = "0.6s";
    if (pageContent) pageContent.style.opacity = "1";

    if (footer) footer.style.transition = "0.6s"; 
    if (footer) footer.style.opacity = "1";

    if (background) background.style.transition = "0.6s";
    if (background) background.style.opacity = "1";

    if (backgroundMobile) backgroundMobile.style.transition = "0.6s";
    if (backgroundMobile) backgroundMobile.style.opacity = "1";
  }
setTimeout(() => fadeInPage(),1);
})();
