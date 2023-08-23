const hiddenIconsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
}, {threshold: 0.8});

const cardsAppearingObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log({ entry: entry.target, ratio: entry.intersectionRatio });

        if (entry.isIntersecting && !entry.target.classList.contains("visible-card")) {
            entry.target.classList.add("visible-card");
        }
    });
}, {threshold: 0.5});

const cardsDisappearingObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log({ event: 'in disappearing', entry: entry.target, ratio: entry.intersectionRatio });

        if (!entry.isIntersecting && entry.target.classList.contains("visible-card")) {
            entry.target.classList.remove("visible-card");
        }
    });
}, {threshold: 0.4, rootMargin: '5%'});


const hiddenIconElements = document.querySelectorAll('.hidden-icon');
const hiddenCardElements = document.querySelectorAll('.hidden-card');

hiddenIconElements.forEach(el => hiddenIconsObserver.observe(el));
hiddenCardElements.forEach(el => cardsAppearingObserver.observe(el));
hiddenCardElements.forEach(el => cardsDisappearingObserver.observe(el));