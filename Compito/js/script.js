let slideIndex = 1
function go(n) {
    slideIndex += n
  }
let slides = document.getElementById('slides')
slides[slideIndex-1].style.display = "block";
// for(let i = 0)
