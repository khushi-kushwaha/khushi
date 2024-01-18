var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");
var h1 = document.querySelector("h1");

main.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x+"px";
    cursor.style.top = dets.y+"px";
})

h1.addEventListener("mouseenter",function(){
    cursor.style.scale = 3;
})

h1.addEventListener("mouseleave",function(){
    cursor.style.scale = 1;
})
// var rect = document.querySelector("#rect");
// rect.addEventListener("click", function(){
//     console.log("hello");
//     rect.style.backgroundColor = "red";
//     rect.style.borderRadius = "50%";
// })

// var main = document.querySelector("#main");
// main.addEventListener("click", function(){
//    var green = Math.floor(Math.random()*256);
//    var blue = Math.floor(Math.random()*256);
//    var red = Math.floor(Math.random()*256);

//   main.style.backgroundColor = `rgb(${red},${green},${blue})`;
// })

// var main = document.querySelector("#main");
// var h1 = document.querySelector("#mian h1");

// main.addEventListener("keydown",function(dets){
//     console.log(dets);
// })