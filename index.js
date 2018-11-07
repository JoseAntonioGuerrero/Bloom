(function App() {
  var urlBase = "http://127.0.0.1:5500/";
  var mobileMenu = document.querySelector("#menu-wrapper");
  var menuOpener = document.querySelector("#menu-mobile-icon");
  var menuCloser = document.querySelector("#menu-close");
  var mobileMenu = document.querySelector("#menu-wrapper");
  var link1 = document.querySelector("#link1");
  var link2 = document.querySelector("#link2");
  var link3 = document.querySelector("#link3");
  var link4 = document.querySelector("#link4");
  var wrapper = document.querySelector(".wrapper");
  var linkHome = document.querySelector("#link-home");
  var textAuxContainer = document.querySelector("#text-aux-container");
  var section1 = document.querySelector("#section1");
  var menuIndicator = document.querySelector("#indicator");
  var footer = document.querySelector("#footer");
  var bg = document.querySelector(".bg"); //in case you want to add animation to the background.
  var page = document.querySelector("#page");
  var sectionTitle = document.querySelector("#section-title");

  var adapterImages = document.querySelectorAll('.product-img-container>img');

  menuOpener.addEventListener("click", openMenu);
  menuCloser.addEventListener("click", closeMenu);
  //Change urls according to your needs.
  //Notice that at this point urls are expressed in terms of a dev host.
  link1.addEventListener(
    "click",
    linkHandler(
      urlBase + "vision.html",
      true,
      1300
    )
  );
  link2.addEventListener(
    "click",
    linkHandler(
      urlBase + "productos.html",
      true,
      1300
    )
  );
  link3.addEventListener(
    "click",
    linkHandler(
      urlBase + "aliados.html",
      true,
      1300
    )
  );
  link4.addEventListener(
    "click",
    linkHandler(
      urlBase + "contacto.html",
      true,
      1300
    )
  );

  for (var i = 0; i < adapterImages.length; i++) {
    adapterImages[i].index = i; // Add an index to property to uniquely identify each element later
    adapterImages[i].addEventListener("mouseover", function(event) {
      changeImageOnHover(event);
    });
    adapterImages[i].addEventListener("mouseout", function(event) {
      changeImageOnMouseOut(event);
    });
  }

  function changeImageOnHover(event) {
    event.target.style.opacity = 0;
    setTimeout(function() {
      switch (event.target.index) {
        case 0:
          event.target.src = "../img/Rectangle 61.png";
          break;
        case 1:
          event.target.src = "../img/Rectangle 61.png";
          break;
        case 2:
          event.target.src = "../img/Rectangle 65.png";
          break;
        case 3:
          event.target.src = "../img/Rectangle 65.png";
      }
      event.target.style.opacity = 1;
    }, 300); // Linked to css transition time
  }

  function changeImageOnMouseOut(event) {
    event.target.style.opacity = 0;
    setTimeout(function() {
      switch (event.target.index) {
        case 0:
          event.target.src = "../img/untitled.23.png";
          break;
        case 1:
          event.target.src = "../img/untitled.26.png";
          break;
        case 2:
          event.target.src = "../img/U1.642.png";
          break;
        case 3:
          event.target.src = "../img/2.651.png";
      }
      event.target.style.opacity = 1;
    }, 300); // Linked to css transition time
  }

  if (linkHome)
    linkHome.addEventListener(
      "click",
      linkHandler(urlBase + "index.html", false, 1300)
    );
  /**
   * Animations Below
   */

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
    wrapper.style.transform = `translate(0px,-${ytravel}px)`;
  }
  function translateHeaderDown() {
    //TODO>
    let ytravel;
    screen.availWidth < 768
      ? (ytravel = (window.innerHeight - 128.938) / 2 - 30)
      : (ytravel = (window.innerHeight - 169.62) / 2 - 30);
    wrapper.style.transform = `translate(0px,${ytravel}px)`;
  }
  function banishPageContent() {
    if (textAuxContainer) textAuxContainer.style.transition = "0.3s";
    if (textAuxContainer) textAuxContainer.style.opacity = "0";

    if (section1) section1.style.transition = "0.3s";
    if (section1) section1.style.opacity = "0";

    if (sectionTitle) sectionTitle.style.transition = "0.3s";
    if (sectionTitle) sectionTitle.style.opacity = "0";

    if (menuIndicator) menuIndicator.style.transition = "0.3s";
    if (menuIndicator) menuIndicator.style.opacity = "0";

    if (footer) footer.style.transition = "0.3s";
    if (footer) footer.style.opacity = "0";

    setTimeout(() => {
      if (textAuxContainer) textAuxContainer.style.transition = "none";
      section1.style.transition = "none";
      menuIndicator.style.transition = "none";
      footer.style.transition = "none";
      if (sectionTitle) sectionTitle.transition = "none";

      if (textAuxContainer) textAuxContainer.style.visibility = "hidden";
      section1.style.visibility = "hidden";
      menuIndicator.style.visibility = "hidden";
      footer.style.visibility = "hidden";
      if (sectionTitle) sectionTitle.transition = "hidden";
    }, 300);
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
})();

for (let i = 0; i < array.length; i++) {
  const element = array[i];
}
