
// carousel shoes

const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
   
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; 
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; 
       
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); 
    });
});

const autoSlide = () => {
    
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); 
    let firstImgWidth = firstImg.clientWidth + 14;
    
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { 
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);


// // mobile buger nav

// const hamburger = document.querySelector(".burger");
// const mobileNav = document.querySelector(".mobile-nav");
// const closebttn = document.querySelector(".xbttn");
// const container = document.querySelector(".content-container")

// hamburger.addEventListener("click", () => {
//     mobileNav.classList.toggle("openDrawer");
//     container.classList.toggle("blur");
    
    
    
// });
// // container.addEventListener("click", () => {
// //   mobileNav.classList.toggle("openDrawer");
// //   container.classList.toggle("blur");
  
  
  
// // });

// closebttn.addEventListener("click", () => {
//     mobileNav.classList.toggle("openDrawer");
//     container.classList.toggle("blur");
// });

// // drop down nav
// function navDrop(x){
//     if (x === 1){
//       document.querySelector('#new-feature').classList.toggle('show');
//       document.querySelector('.content-container').classList.toggle("blur");
//     }
//     if (x === 2){
//       document.querySelector('#men').classList.toggle('show');
//       document.querySelector('.content-container').classList.toggle("blur");
//     }
//     if (x === 3){
//       document.querySelector('#womenn').classList.toggle('show');
//       document.querySelector('.content-container').classList.toggle("blur");
//     }
//     if (x === 4){
//       document.querySelector('#kids').classList.toggle('show');
//       document.querySelector('.content-container').classList.toggle("blur");
//     }
//     if (x === 5){
//       document.querySelector('#sales').classList.toggle('show');
//       document.querySelector('.content-container').classList.toggle("blur");
//     }
//     if (x === 6){
//       document.querySelector('#jordan').classList.toggle('show');
//       document.querySelector('.content-container').classList.toggle("blur");
//     }
//   }
//   function navHides(x){
//     if (x === -1){
//       document.querySelector('#new-feature').classList.toggle('show');
//       document.querySelector('.content-container').classList.toggle("blur");
//     }
//     if (x === -2){
//       document.querySelector('#men').classList.toggle('show');
//       document.querySelector('.content-container').classList.toggle("blur");
//     }
//     if (x === -3){
//       document.querySelector('#womenn').classList.toggle('show');
//       document.querySelector('.content-container').classList.toggle("blur");
//     }
//     if (x === -4){
//       document.querySelector('#kids').classList.toggle('show');
//       document.querySelector('.content-container').classList.toggle("blur");
//     }
//     if (x === -5){
//       document.querySelector('#sales').classList.toggle('show');
//       document.querySelector('.content-container').classList.toggle("blur");
//     }
    
//   }

