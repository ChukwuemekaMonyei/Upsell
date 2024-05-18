ScrollReveal({ 
    reset: false,
    distance: '60px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.Logo, .para, .consumer-img, .sub2, .comm-header, .communityhd, .level-header, #Footer', { origin: 'top' });

ScrollReveal().reveal('.consumer, .abt-comm', { origin: 'bottom' });
