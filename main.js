const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');


addEventListener('load',()=>{
    const harfX = target.getBoundingClientRect().width / 2;
    const harfY = target.getBoundingClientRect().height / 2;

document.addEventListener('mousemove',(event)=>{
    const x = event.clientX;
    const y = event.clientY; 

    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x - harfX}px, ${y - harfY}px)`;
    tag.style.transform = `translate(${x}px, ${y}px)`;
    tag.innerHTML=`${x}px , ${y}px`;
});

});