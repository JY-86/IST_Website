var navbar = document.querySelector('#tmNav');

document.addEventListener('scroll', () => {
    var scroll = getElementScrollScale(document.documentElement)
    if (scroll < 0.1) {
        navbar.classList.remove('scroll');
    }
    else {
        navbar.classList.add('scroll')
    }
})


function getElementScrollScale(domElement){
    return domElement.scrollTop / (domElement.scrollHeight - domElement.clientHeight);
}