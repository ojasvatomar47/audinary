 // Slideshow functionality
 var slideIndex = 0;
 showSlides();

 function showSlides() {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slides.length) {slideIndex = 1}
   slides[slideIndex-1].style.display = "block";
   setTimeout(showSlides, 5000);
 }

 var slideindex = 0;
 showslides();

 function showslides() {
   var i;
   var Slides = document.getElementsByClassName("container-slides");
   for (i = 0; i < Slides.length; i++) {
     Slides[i].style.display = "none";
   }
   slideindex++;
   if (slideindex > Slides.length) {slideindex = 1}
   Slides[slideindex-1].style.display = "block";
   setTimeout(showslides, 5000);
 }

 var slideindex1 = 0;
 showslides1();

 function showslides1() {
   var i;
   var Slides1 = document.getElementsByClassName("container-slides1");
   for (i = 0; i < Slides1.length; i++) {
     Slides1[i].style.display = "none";
   }
   slideindex1++;
   if (slideindex1 > Slides1.length) {slideindex1 = 1}
   Slides1[slideindex1-1].style.display = "block";
   setTimeout(showslides1, 5000);
 }

 var slideindex2 = 0;
 showslides2();

 function showslides2() {
   var i;
   var Slides1 = document.getElementsByClassName("container-slides2");
   for (i = 0; i < Slides1.length; i++) {
     Slides1[i].style.display = "none";
   }
   slideindex2++;
   if (slideindex2 > Slides1.length) {slideindex2 = 1}
   Slides1[slideindex2-1].style.display = "block";
   setTimeout(showslides2, 5000);
 }

 const subtextItems = document.querySelectorAll(".subtext-item");
 let currentIndex = 0;

 function updateSubtext() {
   subtextItems.forEach((item, index) => {
     if (index === currentIndex) {
       item.style.fontSize = "35px";
       item.style.textDecoration = "underline";
       // item.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
     } else {
       item.style.fontSize = "30px";
       item.style.textDecoration = "none"
       // item.style.backgroundColor = "transparent";
     }
   });
   
   currentIndex++;
   if (currentIndex === subtextItems.length) {
     currentIndex = 0;
   }
 }

 setInterval(updateSubtext, 2000);

//  var navbar = document.getElementById("navbar");
//  var originalPosition = navbar.offsetTop;
//  var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     // var scrollPosition = window.pageYOffset;
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     // var scrollPosition = window.pageYOffset;
//     document.getElementById("navbar").style.top = "500px";
//   }
//   prevScrollpos = currentScrollPos;
// }

//  window.onscroll = function() {myFunction()};

//  var navbar = document.getElementById("navbar");
//  var sticky = navbar.offsetTop;

//  function myFunction() {
//    if (window.pageYOffset >= sticky) {
//      navbar.classList.add("sticky")
//    } else {
//      navbar.classList.remove("sticky");
//    }
//  }

 function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }

  function myFunction1() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
