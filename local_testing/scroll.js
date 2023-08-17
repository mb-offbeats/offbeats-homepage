const hiddenIconsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
}, {threshold: 1});

// this is called everytime the visibility of a element changes
const hiddenCardsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry.target, entry.intersectionRatio)

        entry.target.classList.toggle('visible-card', entry.isIntersecting);

        // if (entry.isIntersecting) {
        //     hiddenCardsObserver.unobserve(entry.target);
        // }
    });
}, {threshold: 0.5});


const hiddenIconElements = document.querySelectorAll('.hidden-icon');
const hiddenCardElements = document.querySelectorAll('.hidden-card');

hiddenIconElements.forEach(el => hiddenIconsObserver.observe(el));
hiddenCardElements.forEach(el => hiddenCardsObserver.observe(el));