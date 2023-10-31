const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const count = document.getElementById("count");


btn1.addEventListener('click', () =>{
       count.innerHTML--;
       if(count.innerHTML <0) {
        count.style.color = "red";
       }
       else if(count.innerHTML ==0) {
        count.style.color = "black";
       }
});

btn2.addEventListener('click', () =>{
       console.log("clicked")
       count.innerHTML=0;
       if(count.innerHTML ==0) {
        count.style.color = "black";
       }
});

btn3.addEventListener('click', () =>{
       console.log("clicked")
       count.innerHTML++;
       if(count.innerHTML >0) {
        count.style.color = "green";
       }
});

