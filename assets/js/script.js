/*
|--------------------------------------------------------------------------
| DropDOwn BTN in Header
|--------------------------------------------------------------------------
*/

function dropdown() {
  document.getElementById("clickDrop").classList.toggle("click-show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn') && !event.target.matches('.dd-btn')) {
    var dropdowns = document.getElementsByClassName("click-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('click-show')) {
        openDropdown.classList.remove('click-show');
      }
    }
  }
}


/*
|--------------------------------------------------------------------------
| Slide Show Section
|--------------------------------------------------------------------------
*/

document.addEventListener('DOMContentLoaded', function () {
  var main = new Splide('#main-carousel', {
    type: 'loop',
    rewind: true,
    pagination: true,
    arrows: true,
    autoplay: true,
    interval: 4000,
    speed: 1000,
    rewindSpeed: 1000
  });

  main.mount();
});