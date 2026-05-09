const onRead=function(){
    new Carousel(document.querySelector('.carousel1'),{
        slideToScroll:2,
        slideVisible: 3,
        infinite:true,
        pagination:true
    })

    new Carousel(document.querySelector('.carousel2'),{
        slideToScroll:2,
        slideVisible: 2,
        pagination:true
    })

    new Carousel(document.querySelector('.carousel3'),{
    })
}



document.addEventListener('DOMContentLoaded', onRead) 