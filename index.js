ScrollReveal({ 
    reset: false,
    distance: '80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.Logo, .para, .consumer-img, .sub2, .comm-header, .communityhd, .level-header, #Footer', { origin: 'top' });

ScrollReveal().reveal('.consumer, .abt-comm, .son', { origin: 'bottom' });

ScrollReveal().reveal('.run, .sun', { origin: 'left' });
