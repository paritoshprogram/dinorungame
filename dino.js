document.addEventListener('DOMContentLoaded',()=>{

const dino = document.querySelector('.dino')

const grid =document.querySelector('.grid')

let jumping =false

let gravity = 0.9

let isgameover=false;

function control(e){

    if(e.keyCode === 32){
         
        if(!jumping){
        console.log('pressed');

        jump();

 } } }

document.addEventListener('keyup',control)

let position=0;
function jump(){

    let count=0

let timer = setInterval(function(){



if(count===15)

{
   clearInterval(timer)
   console.log('down')
   let downtimer = setInterval(function(){
       if(count===0)
       {
           clearInterval(downtimer)
           jumping=false
       }

    position-=5
    count-- 
    position=position*gravity
    dino.style.bottom = position+'px';






   },30)

}



console.log('up');
count++
position+=30
position=position*gravity
dino.style.bottom = position+ 'px';





},30)


}


function generateobstacles(){

let randomtime = Math.random()*4000

let obstacleposition =1000;
const obstacle = document.createElement('div')
if(!isgameover) obstacle.classList.add('obstacle');
grid.appendChild(obstacle);

obstacle.style.left= obstacleposition+'px'

let timeob = setInterval(function(){

    if(obstacleposition>0 && obstacleposition<55 && position<55)
    {

        clearInterval(timeob)
        alert('Game Over!!!')

        isgameover=true
         
        while(grid.firstChild){
            grid.removeChild(grid.lastChild)
        }

    }

obstacleposition-=10
obstacle.style.left = obstacleposition+'px'



},20)

if(!isgameover) setTimeout(generateobstacles,randomtime)

}

generateobstacles();


})