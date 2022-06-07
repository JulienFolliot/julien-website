(function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });

    if (document.querySelector('html').classList.contains('has-scroll-smooth')) {
        new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"));
    }

    var typedOptions = {
        strings: ['Code', 'Livres', 'Bricolage', 'Matos', 'Toolbox', 'Musique', 'Bonnes pratiques', 'Découvertes'],
        typeSpeed: 34,
        backDelay: 1200,
        loop: true,
        loopCount: Infinity,
        showCursor: false
      };
      
      var typed = new Typed('.typed', typedOptions);

  })();