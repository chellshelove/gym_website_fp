// copy menu for mobile 
function copyMenu() {
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    //copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    //copy .header-top .warpper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

//show mobile menu
const menuButton = document.querySelector('.trigger'),
    closeButton = document.querySelector('.t-close'),
    addclass = document.querySelector('.site');
menuButton.addEventListener('click', function() {
    addclass.classList.toggle('showmenu')
})

closeButton.addEventListener('click', function() {
    addclass.classList.remove('showmenu')
})


//showsub menu on mobile

const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand');
}

//slider

const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
});


//show search


/* original code

const searchButton = document.querySelector('.t-search'),
      tClose = document.querySelector('.search-close'),
      showClass = document.querySelector('.site');
searchButton.addEventListener('click', function() {
    showClass.classList.toggle('showsearch')
})

tClose.addEventListener('click', function() {
    showClass.classList.remove('showsearch')
})*/

window.onload = function() {
    const searchButton = document.querySelector('.t-search');
    const tClose = document.querySelector('.search-close');
    const showClass = document.querySelector('.site');

    searchButton.addEventListener('click', function() {
        showClass.classList.toggle('showsearch')
    })

    tClose.addEventListener('click', function() {
        showClass.classList.remove('showsearch')
    })
}

//showdpt menu

const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
      dptClass = document.querySelector('.site');
dptButton.addEventListener('click', function() {
    dptClass.classList.toggle('showdpt')
})