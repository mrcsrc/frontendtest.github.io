let menuContent = document.querySelector('#menu-content');
let menuClose = document.querySelector('#menu-close');
let menuOpen = document.querySelector('#menu-open');

menuClose.classList.add('visible-true');

const menuOpenHandler = () => {
  menuContent.classList.add('hide-menu');
  menuClose.classList.remove('visible-true');
  menuOpen.classList.add('visible-true');
}

const menuCloseHandler = () => {
  menuContent.classList.remove('hide-menu');
  menuOpen.classList.remove('visible-true');
  menuClose.classList.add('visible-true');
}