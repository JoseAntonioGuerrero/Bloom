
var pageContent = document.querySelector(".page-content");
var footer = document.getElementsByTagName('footer')[0];
var background = document.querySelector(".bg");
var backgroundMobile = document.querySelector(".bg-mobile");
let spinner = document.querySelector('.spinner');

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