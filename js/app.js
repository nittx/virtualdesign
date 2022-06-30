//find the height of navbar both methods are correct

//  var clientHeight = document.getElementById('myDiv').clientHeight;

// prevent right click options

// document.addEventListener('contextmenu', event => event.preventDefault());

let clientHeight = document.getElementById("navbar").offsetHeight
console.log(clientHeight)

//add box shadow to navbar on scroll

let navShadow = document.getElementById("navShadow")

// When the user scrolls down 40px from the top of the document, Add a shadow

window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    navShadow.classList.add("shadow")
  } else {
    navShadow.classList.remove("shadow")
  }
}
