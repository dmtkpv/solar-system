// ----------------------
// Spin
// ----------------------

export function spin (object, options) {

    object.spin = gsap.to(object, {
        repeat: -1,
        ease: Power0.easeNone,
        onUpdate: () => object.setTransform(),
        ...options
    });

    object.spinStop = () => {
        if (!object.system.paused) object.spin.pause();
    }

    object.spinPlay = () => {
        if (!object.system.paused) object.spin.resume();
        else object.setTransform();
    }

    object.system.on('pause', () => {
        object.spin.pause();
    })

    object.system.on('resume', () => {
        object.spin.resume();
    })

}



// ----------------------
// Fade
// ----------------------

export function fade (object, options) {

    object.fade && object.fade.kill();

    object.fade = gsap.to(object, {
        duration: object.system.options.durations.fade,
        ease: Power1.easeInOut,
        onUpdate: () => object.setOpacity(),
        ...options
    })

}



// ----------------------
// Resize
// ----------------------

export function resize (object, options) {

    object.resize && object.resize.kill();

    object.resize = gsap.to(object, {
        duration: object.system.options.durations.translate,
        ease: Power1.easeInOut,
        onUpdate: () => {
            object.setSize();
            object.setTransform();
        },
        ...options
    })

}



// ----------------------
// Translate
// ----------------------

export function translate (object, options) {

    object.translate && object.translate.kill();

    object.translate = gsap.to(object, {
        duration: object.system.options.durations.translate,
        ease: Power1.easeInOut,
        ...options
    })

}