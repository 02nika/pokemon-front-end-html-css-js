const navSlide = () => {
    let burger = document.getElementById('burgerId');
    let nav = document.getElementById('nav-links-id');

    let navlinks = document.querySelectorAll('.nav-links li');
    
    //toggle
    burger.addEventListener('click', function(){
        console.log('clickeeed');
        nav.classList.toggle('active');

            //animated
        navlinks.forEach((link, index) => {
            link.style.animation = `navlinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            console.log(index / 7); 
        });
    })


}


navSlide();


