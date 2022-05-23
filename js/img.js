const img = document.querySelector(".image .content");
const imageList = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];
console.log(img);

const chosenImage = imageList[Math.floor(Math.random() * imageList.length)];

img.style.backgroundImage = `url(image/${chosenImage})`;