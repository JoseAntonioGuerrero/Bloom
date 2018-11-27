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

  var link1 = document.querySelector(".link1");
  var link2 = document.querySelector(".link2");
  var link3 = document.querySelector(".link3");
  var link4 = document.querySelector(".link4");

  menuOpener.addEventListener("click", openMenu);
  menuCloser.addEventListener("click", closeMenu);

  let spinner = document.querySelector('.spinner');
  let img = document.querySelector('.img1');

  link1.addEventListener("click", () =>{
    closeMenu();
    banishPage();
    translateHeaderUp();
    setTimeout(() => (window.location.href = './vision.html'), 1000);
  });

  link2.addEventListener("click", () =>{
    closeMenu();
    banishPage();
    translateHeaderUp();
    setTimeout(() => (window.location.href = './productos.html'), 1000);
  });
  
  link3.addEventListener("click", () =>{
    closeMenu();
    banishPage();
    translateHeaderUp();
    setTimeout(() => (window.location.href = './aliados.html'), 1000);
  });
  
  link4.addEventListener("click", () =>{
    closeMenu();
    banishPage();
    translateHeaderUp();
    setTimeout(() => (window.location.href = './contacto.html'), 1000);
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
  /*************************************/

  /**
   * This function provides(returns) a function attached to the given URL. When executed,
   * makes the browser navigate to given URL after the timeout is over.. (use period)
   *
   * To assign specific transition behaviors, the param "home" is used.
   * @access     private
   *
   * @param {string}   url           url to navigate.
   * @param {boolean}   home         if true, the returned function moves the header upwards on the screen.
   *                                  if False, disables upwards movement of header animation.
   *                                  (You only want header to move upwards on home screen (Index.html))
   * @param {int}   delay         Delay time to let action performs before launching url.
   *
   * @return {function} goToLinkFromHome or goToHome.
   */
  function linkHandler(url, home, delay) {
    function goToLinkFromHome() {
      closeMenu();
      if (page.className == "page-home") {
        translateHeaderUp();
        banishPageContent();
        setTimeout(() => (window.location.href = url), delay);
      } else {
        (window.location.href = url), delay;
      }
    }
    function goToHome() {
      banishPageContent();
      translateHeaderDown();
      setTimeout(() => (window.location.href = url), delay);
    }
    return home ? goToLinkFromHome : goToHome;
  }
background.onload = () => {
   spinner.style.display = 'none';
   setTimeout(() => fadeInPage(),1);
}
backgroundMobile.onload = () => {
  spinner.style.display = 'none';
  setTimeout(() => fadeInPage(),1);
}
})();
