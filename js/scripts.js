/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    function loadSection(sectionFile, containerId) {
        fetch(sectionFile)
            .then(response => response.text())
            .then(data => {
                document.getElementById(containerId).innerHTML = data;
            })
            .catch(error => console.error('Errore nel caricamento della sezione:', error));
    }

    loadSection('/sections/en/about.html', 'about');
    loadSection('/sections/en/awards.html', 'awards');
    loadSection('/sections/en/certifications.html', 'certifications');
    loadSection('/sections/en/education.html', 'education');
    loadSection('/sections/en/experience.html', 'experience');
    loadSection('/sections/en/interests.html', 'interests');
    loadSection('/sections/en/skills.html', 'skills');
});
