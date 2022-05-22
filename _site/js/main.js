(function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });

    if (document.querySelector('html').classList.contains('has-scroll-smooth')) {
        new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"));
    }

  })();