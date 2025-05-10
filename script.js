const line = document.getElementById('line');
let rotate=0;
  
document.addEventListener("DOMContentLoaded",function(){
    setInterval(()=>{
        rotate+=2;
        if(rotate>360){
            rotate=0
        }
        line.style.transform = `rotate(${rotate}deg)`;
    },20)
})
