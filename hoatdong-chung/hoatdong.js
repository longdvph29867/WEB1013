const slideimgs = document.getElementsByClassName("list-img").length;
const slideContainer = document.getElementsByClassName("slide-img-hoatdong");
const slide = document.getElementsByClassName("list-img");

slideContainer[0].style.width = `${slideimgs * 876}px`;
let index = 0;
function next() {
  if (index < slideimgs - 1) {
    index++;
  } else {
    index = 0;
  }
  slideContainer[0].style.transform = `translateX(-${index * 876}px)`;
}
setInterval(function () {
  next();
}, 2000);
