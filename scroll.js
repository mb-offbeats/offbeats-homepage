const options = {
    // threshold: 0.5
}

const hiddenIconsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, options);

// this is called everytime the visibility of a element changes
const hiddenCardsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry.target, entry.intersectionRatio)

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, options);


const hiddenIconElements = document.querySelectorAll('.hidden-icon');
const hiddenCardElements = document.querySelectorAll('.hidden-card');

hiddenIconElements.forEach(el => hiddenIconsObserver.observe(el));
hiddenCardElements.forEach(el => hiddenCardsObserver.observe(el));