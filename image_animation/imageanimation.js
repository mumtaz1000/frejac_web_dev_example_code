let myDiv = document.querySelector('.display-info');
let img1 = document.querySelector('.image-subsection1');
let img2 = document.querySelector('.image-subsection2');

img1.addEventListener('mouseover', () => {
    console.log("image1");
    myDiv.style.backgroundImage = `url('./images/page1.jpg')`;
});

img2.addEventListener('mouseover', () => {
    console.log("image2");
    myDiv.style.backgroundImage = `url('./images/page2.jpg')`;
});

img2.addEventListener('mouseleave', () => {
    myDiv.style.backgroundImage = null;
});