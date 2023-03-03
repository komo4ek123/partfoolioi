const content=document.querySelectorAll('.content')
const x=document.querySelectorAll('.x')
const spoilers=document.querySelectorAll('.spoiler').forEach(item=>{item.addEventListener('click',e=>{for(let i=0;i<content.length;i++){let b=item.id
let a=content[i].id
let c=x[i].id
if(a==b&&a==c){content[i].classList.toggle('active')
x[i].classList.toggle('active')}}})})
window.onscroll=function(){headerChange()};function headerChange(){let item=document.querySelector('.getIn')
let coordinats=item.getBoundingClientRect().top
let logoText=document.querySelector('.logoText')
let archivoMedium=document.querySelectorAll('.archivoMedium.head')
if(coordinats<375){let header=document.querySelector('.header').classList.add('active')
logoText.style.color='black'
archivoMedium.forEach(item=>{item.style.color='black'})}else{let header=document.querySelector('.header').classList.remove('active')
logoText.style.color='white'
archivoMedium.forEach(item=>{item.style.color='white'})}}
function load(){document.querySelector('.load').classList.add('loaded')}
setTimeout(load,300)
document.querySelectorAll('.anim').forEach(item=>{item.addEventListener('click',e=>{document.querySelector('.load').classList.remove('loaded')})})
document.querySelectorAll('a').forEach(item=>{item.addEventListener('click',e=>{function redirect(){let href=item.title
if(href=='')return;window.location=href}
setTimeout(redirect,300)})})
function back(){window.history.back();}
document.querySelector('.back').addEventListener('click',e=>{setTimeout(back,300)})