export function initSliders() {
    function initSlider(className, responsive) {
        if (document.getElementsByClassName(className)[0] != undefined) {
            var slider = tns({
                container: '.' + className,
                loop: true,
                navPosition: "bottom",
                speed: 400,
                mouseDrag: true,
                controls: false,
                autoplay: true,
                autoplayButtonOutput: false,
                responsive: responsive
            });
        }
    }



    initSlider('weather-slider', {
        640: {
            edgePadding: 20,
            gutter: 20,
            items: 1
        },
        700: {
            edgePadding: 20,
            gutter: 30,
            items: 1
        },
        900: {
            edgePadding: 20,
            items: 1
        }
    });
}