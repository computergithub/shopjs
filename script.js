    
    let actives=document.querySelector('#active');
    let box= document.querySelector('.box');
    
    actives.addEventListener('click', ()=>{
       if(box.style.display=="none"){
        box.style.display="block";
       }else{
        box.style.display="none";
       }
    })

// -------------------------------- nav list --------------------------------
    let menu = document.querySelector(".list");
    let closeBtn = document.querySelector("#closs-btn");
    let openBtn = document.querySelector("#open-btn");

    openBtn.addEventListener('click', () =>{

        menu.style.display="flex"
        openBtn.style.display="none"
        closeBtn.style.display="block"
        
    } )
    
    let offBtn = () =>{
        menu.style.display="none"
        openBtn.style.display="block"
        closeBtn.style.display="none"
        
    }
    closeBtn.addEventListener('click',offBtn);
    
 /* --------------------------------- slider ------------------------------ */
 let imags= document.getElementById('images');
 let right= document.getElementById('right-btn');
 let left= document.getElementById('left-btn');

 let img= document.querySelectorAll('#images img');
 console.log(img)
 let index =0
 let interval = setInterval(run , 2500)
 function run() {
     index++
     changeImage()
 
 }
 function changeImage() {
     if(index>img.length-1){
        index =0

     }else if(index <0){
         index=img.length-1
     }
     imags.style.transform =`translateX(${index * (-25)}rem)`
 }
 function resetInterval() {
     clearInterval(interval)
     interval = setInterval(run,2000)
 }

right.addEventListener('click', () =>{
    index++
   changeImage()
   resetInterval()

})
left.addEventListener('click', () =>{
    index--
   changeImage()
   resetInterval()
     
})