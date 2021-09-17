const thumb1 = document.querySelector('.thumb1')
const thumb2 = document.querySelector('.thumb2')
const thumb3 = document.querySelector('.thumb3')
const img = document.querySelector('.img')
const circle = document.querySelector('.circle')

thumb1.addEventListener('click' , ()=>{
    img.src = 'img1.png';
    circle.style.backgroundColor = 'brown';
})

thumb2.addEventListener('click' , ()=>{
    img.src = 'img2.png';
    circle.style.backgroundColor = 'green';
})

thumb3.addEventListener('click' , ()=>{
    img.src = 'img3.png';
    circle.style.backgroundColor = '#d618d6';
})

function animation(e){
    let element =  document.createElement('div');
    element.setAttribute('class' , 'element');
    document.body.appendChild(element);
    element.style.left = e.clientX - 150 + 'px';
    element.style.top = e.clientY - 150 + 'px';

    setTimeout(function(){
        element.remove();
    },1000)
}
document.onmousemove = animation;