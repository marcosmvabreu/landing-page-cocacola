const slides = document.querySelectorAll('.slides')
const dots = document.querySelectorAll('.dot')

function setActive(i){
    
    slides.forEach(element=>{
        element.classList.remove('active')
        slides[i].classList.add('active')
    })

   /* for(let slide of slides){ REVISAR
        slide.classList.remove('active')
        slides[i].classList.add('active')
    }*/
    

    // add active class in indicator
    /*for(let dot of dots){
        dot.classList.remove('active')
        dots[i].classList.add('active')
    }*/

    dots.forEach(element=>{
        element.classList.remove('active')
        dots[i].classList.add('active')
    })
    

}

for(let j = 0; j < dots.length; ++j){
    dots[j].addEventListener('click',()=>{
        setActive(j)
    })
}