// side menu element
const sideMenu = document.querySelector('aside');
// side menu buttons
const sideMenuBtn = document.querySelectorAll('#sidemenu');
// side menu status
let sideMenuStatus = false;
// side menu buttons event listeners
sideMenuBtn.forEach((button) => {
  button.addEventListener('click', () => {
    // muda sideMenuStatus
    sideMenuStatus = !sideMenuStatus;
    // side menu classes
    let sideMenuClass = sideMenuStatus ? 'visible' : 'hidden';
    let sideMenuOpositeClass = !sideMenuStatus ? 'visible' : 'hidden';
    // insere sideMenuDisplay no side menu
    sideMenu.classList.remove(sideMenuOpositeClass);
    sideMenu.classList.add(sideMenuClass);
  });
});

// all items of all lists
const listItems = document.querySelectorAll('li');
// items event listeners
listItems.forEach((li) => {
  li.addEventListener('click', () => {
    const text = li.textContent;
    console.log(text);
  });
});
