function showMenu() {
  const menu = document.getElementsByClassName('menu')[0];
  menu.style.height = '100%';
}

function closeMenu() {
  const menu = document.getElementsByClassName('menu')[0];
  menu.style.height = '0';
}

// To fix "no-unused-vars" error, however, is there a more intelligent way of doing this?
showMenu();
closeMenu();