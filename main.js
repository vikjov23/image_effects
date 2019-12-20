var img1 = document.getElementById("Img1");
// var img2 = document.getElementById("Img2");
// var img3 = document.getElementById("Img3");
var html = document.getElementsByTagName("html");
console.log("html", html);

html[0].addEventListener("click", changeEffect);
html[0].addEventListener("dblclick", changeImage);

// changeEffect = () => {
//   img1.style.display = "none";
// };
var effects = ["blur(5px)", "grayscale(100%)", "blur(40px)", "blur(0px)"];
var index = 0;

function changeEffect() {
  img1.style.filter = effects[index];
  console.log("the value of index", index);
  if (index == 3) {
    index = index - 4;
    // console.log("hoho", effects);
  }
  index++;
}
var images = [
  "./ocean-wallpapers-high-resolution-3.jpg",
  "./download22.jpg",
  "./download33.png"
];
var i = 0;
function changeImage() {
  img1.setAttribute("src", images[i]); //"url(./download2.jpg)";
  // if ((html[0].style.background = "url(./download2.jpg)")) {
  // img1.style.display = "none";
  // }

  if (i == 2) {
    // img1.style.display = "block";
    i = i - 3;
  }
  i++;
  console.log("images", images);
}
