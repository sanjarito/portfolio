console.log("main js is working")
function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')

  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);

$( ".who" ).mouseover(function() {
  $('.who').find('.about-span').addClass("show")
})

$( ".why" ).mouseover(function() {
  $('.why').find('.about-span').addClass("show")
})

$( ".how" ).mouseover(function() {
  $('.how').find('.about-span').addClass("show")
})

$('#work').one('click','img',function(e){
  let img_Coordinates = ($(this).offset())
  console.log(img_Coordinates['top'])
  console.log(img_Coordinates['left'])
  // $('.project-description').append(`<span>mnbmsdnbsdnbfnsbdfmnbsmndbfmnsbdsmnfb</span>`)
  // $('.project-description').find('span').toggleClass('work-span')
  // $('.project-description').find('div').css("top",`${img_Coordinates['top']}`)
  // $('.project-description').find('div').css("left",`${img_Coordinates['left']}`)
  // .offset()
})

$('.portfolio-item').on('click',function(){
  $(this).children().toggle()
})

$('div.who').on('touchstart', function (e) {
    'use strict'; //satisfy code inspectors
    var link = $(this); //preselect the link
    if (link.hasClass('hover')) {
        return true;
    } else {
        link.addClass('hover');
        $('div.who').not(this).removeClass('hover');
        e.preventDefault();
        return false; //extra, and to make sure the function has consistent return points
    }
});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var items = document.querySelectorAll(".timeline li");

// code for the isElementInViewport function

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
