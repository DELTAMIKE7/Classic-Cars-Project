var cursor = document.querySelector(".cursor");
// var cars=document.querySelector(".cars");
// var flag=0;

document.addEventListener("mousemove",function(e){
    cursor.style.top=e.pageY +`px`;
    cursor.style.left=e.pageX +`px`;
})
// var img=document.querySelector(".img");
 
