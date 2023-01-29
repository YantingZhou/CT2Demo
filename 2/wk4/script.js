let mainImg = document.getElementById('main-img');
let thumb1 = document.getElementById('thumb1');
let thumb1Src = document.getElementById('thumb1').src;
let thumb2 = document.getElementById('thumb2');
let thumb2Src = document.getElementById('thumb2').src;
let thumb3 = document.getElementById('thumb3');
let thumb3Src = document.getElementById('thumb3').src;
let thumb4 = document.getElementById('thumb4');
let thumb4Src = document.getElementById('thumb4').src;

thumb1.addEventListener("click", function(){
    mainImg.src=thumb1Src
})

thumb2.addEventListener("click", function(){
    mainImg.src=thumb2Src
})

thumb3.addEventListener("click", function(){
    mainImg.src=thumb3Src
})

thumb4.addEventListener("click", function(){
    mainImg.src=thumb4Src
})




// function changeImg() {
//     console.info(mainImg.alt);
//     if(mainImg.alt == "dumas1"){
//         mainImg.src = thumb2Src
//     }else if(mainImg.alt =="dumas2"){
//         mainImg.src = thumb3Src
//     }else if(mainImg.alt =="dumas3"){
//         mainImg.alt = thumb4Src
//     }else if(mainImg.alt =="dumas4"){
//         mainImg.alt = thumb1Src
//     }
// }

// setInterval(changeImg, 2000);


var i = 0;
var images = [];
var time = 2000;

images[0] = './images/dumas1.jpeg'
images[1] = './images/dumas2.jpeg'
images[2] = './images/dumas3.jpeg'
images[3] = './images/dumas4.jpeg'

function changeImg() {
    mainImg.src = images[i];
    if(i < images.length - 1){
    i++
    }else{
        i=0
    }
}

setInterval(changeImg, time);

window.onload = changeImg;