export default class Spin {

    constructor (object, { duration, angle, onUpdate }) {
        this.animation = gsap.to(this, {
            duration,
            angle,
            repeat: -1,
            ease: Power0.easeNone,
            onUpdate
        });
    }

    play () {

    }

}