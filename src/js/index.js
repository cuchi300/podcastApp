document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
})

function iniciarApp() {
    headerEfectos();
    scrollPodcast();
    scrollBeneficios();
    scrollEstadisticas();
    scrollPlanes();
    scrollTestimonial();
    copyEfecto();
}

function headerEfectos() {
    const logoHeader = document.querySelector('#logo-header');
    setTimeout(() => {
        logoHeader.classList.add('mostrar-logo');
    }, 1500);
}

function scrollPodcast() {
    document.addEventListener('scroll', function(){
        const podcast = document.querySelector('#podcast');
        const contenidoPodcast = document.querySelector('#contenido-podcast');

    if(podcast.getBoundingClientRect().top < 0){
        contenidoPodcast.classList.add('mostrar-podcast');
    }
    })
}

function scrollBeneficios() {
    document.addEventListener('scroll', function() {
        const beneficios = document.querySelector('.beneficios')
        const contenido = document.querySelector('.contenido-beneficios');

        if(beneficios.getBoundingClientRect().top < 0) {
            contenido.classList.add('mostrar-beneficios');
        }
    })
}

function scrollEstadisticas() {
    document.addEventListener('scroll', function() {
        const estadisticas = document.querySelector('.estadisticas');
        const imagen = document.querySelector('#imagen-estadisticas');

        if(estadisticas.getBoundingClientRect().top < 0) {
            imagen.classList.add('mostrar-imagen');
        }
    })
}

function scrollPlanes() {
    document.addEventListener('scroll', function() {
        const planes = document.querySelector('.planes');
        const inicio = document.querySelector('.inicio');
        const pro = document.querySelector('.pro');

        if(planes.getBoundingClientRect().top < 0){
            inicio.classList.add('mostrar-inicio');
            pro.classList.add('mostrar-pro');
        }
    })
}

function scrollTestimonial() {
    document.addEventListener('scroll', function() {
        const testimoniales = document.querySelector('.testimoniales');
        const caja = document.querySelectorAll('.testimonial');

        if(testimoniales.getBoundingClientRect().top < 0){
            setTimeout(() => {
                caja[0].classList.add('mostrar-testimonial');
            }, 1200);
            setTimeout(() => {
                caja[1].classList.add('mostrar-testimonial');
            }, 1300);
            setTimeout(() => {
                caja[2].classList.add('mostrar-testimonial');
            }, 1400);
        }
    })
}

function copyEfecto() {
    const footer = document.querySelector('.footer');
    const nombre = document.querySelector('#nombre');

    document.addEventListener('scroll', function() {
        if(footer.getBoundingClientRect().bottom < 0){
            setInterval(() => {
                nombre.classList.add('nombre-efecto');
            }, 3000);
        }
    })

}