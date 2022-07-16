;
(()=>{
    /*
    ||swipperFunc|| > Pasar parámetro en este orden: 
    classParent: type String nombre de la clase padre del slider
    slidesPerView: type Number, 
    spaceBetween: type Number,
    pagination: type String, nombre de la clase para los bullets, sino dejarlo como 'null'
    nextEl: type String, nombre de la clase para la fecha derecha, sino dejarlo como 'null'
    prevEl: type String, nombre de la clase para las fecha izquierda, sino dejarlo como 'null'
    */
    swipperFunc('cards__listigns', 2, 20, '.cont__cards__listigns .swiper-pagination', null, null)
    swipperFunc('cards__discover', 2, 35,null, '.cont__slider--discover .discover-next', '.cont__slider--discover .discover-prev')
    swipperFunc('cards__lifstyle', 1, 0,null, '.cont__cards--lifstyle .discover-next', '.cont__cards--lifstyle .discover-prev')
    swipperFunc('cards__testimonials', 1, 0,null, '.cont__cards--testimonials .discover-next', '.cont__cards--testimonials .discover-prev')
    
    function swipperFunc(classParent='swiper', slidesPerView, spaceBetween, pagination=null, nextEl=null, prevEl= null){
        return new Swiper(`.${classParent}`, {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
                el: pagination, //bullet 
                clickable: true,
            },
            navigation: {
                nextEl, //arrow nex
                prevEl, //arrow prev
            },
            breakpoints:{
                750: {
                    slidesPerView,
                    spaceBetween,
                }
            }
        });

    }
    // LIKE heart
    document.addEventListener('click', (e)=>{
        if(e.target.matches('.hover__script')){
            const parentHeart = e.target.parentElement
            parentHeart.querySelector('.fill_heart').classList.toggle('activeFill')
            
        }
    })
    // CREATE VIDEO DINAMIC
    const cont__video__lazy = document.querySelector('.cont__video__lazy')
    const play__video__click = document.querySelector('.play__video__click')
    play__video__click.addEventListener('click', ()=>{
        createVideo('.cont__video__lazy', 'Zc9micxmm50')
        cont__video__lazy.classList.add('video-responsive')
    })
    function createVideo(tagVideo, YoutubeID){
        document.querySelector(tagVideo).innerHTML = '<iframe  src="https://www.youtube.com/embed/' + YoutubeID + '?autoplay=1&mute=0" name="youtube embed" allow="autoplay; encrypted-media" frameborder="0" allowfullscreen ></iframe>';
    }
    // CLONAR MENU
    const cloneHeaderMenu = document.querySelector('.header').cloneNode(true)
    const newTagFixed = document.createElement('div')
    newTagFixed.setAttribute('class', 'fixed__menu')
    newTagFixed.appendChild(cloneHeaderMenu)
    document.body.appendChild(newTagFixed)
    
    fixed__menu = document.querySelector('.fixed__menu')
    // SCRIPT FIXED MENU
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            if (currentScrollPos >= 350) {
                fixed__menu.classList.add('visible__menu--fixed');
            } else {
                fixed__menu.classList.remove('visible__menu--fixed');
            }
            fixed__menu.classList.add('visible__menu--fixed')
        } else {
            fixed__menu.classList.remove('visible__menu--fixed')
        }
        prevScrollpos = currentScrollPos;
    }


    // CARGA DIFERIDA DE IMÁGENES
    lazy_load_pipo()
    function lazy_load_pipo(){
        let imgSRCobserver = lozad('.lozad', {
            rootMargin: '10px 0px',
            threshold: 0.5,
            load: function(el) {
                el.src = el.getAttribute("data-src");
                el.onload = function() {
                    el.style.opacity = '1'
                    el.style.transition = 'all .5s'
                }
            }
        })
        let backgroundObserver = lozad('.lozad-background', {
            rootMargin: '10px 0px',
            threshold: 0.5
        })
        imgSRCobserver.observe()
        backgroundObserver.observe()
    }   

})();

