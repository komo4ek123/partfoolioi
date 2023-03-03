document.querySelectorAll('.anim').forEach(item=>{item.addEventListener('click',e=>{document.querySelector('.load').classList.remove('loaded')})})
const buttons=document.querySelectorAll('.buttonText')
const hoverText=document.querySelectorAll('.hoverText')
buttons.forEach(item=>{let b=item.className.split(' ').slice(2).join(' ')
item.addEventListener('mouseover',e=>{for(let i=0;i<hoverText.length;i++){let a=hoverText.item(i).className.split(' ').slice(1).join(' ')
if(a==b){hoverText.item(i).classList.add('active')}}})
item.addEventListener('mouseleave',e=>{for(let i=0;i<hoverText.length;i++){let a=hoverText.item(i).className.split(' ').slice(1).join(' ')
if(a!=b){hoverText.item(i).classList.remove('active')}}})})
document.querySelectorAll('a').forEach(item=>{item.addEventListener('click',e=>{function redirect(){let href=item.title
window.location=href}
setTimeout(redirect,300)})})
function load(){document.querySelector('.load').classList.add('loaded')}
setTimeout(load,300)
