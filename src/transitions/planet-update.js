import { translate } from '@/helpers/animations'

export default function (planet, system) {

    const planetOrbitSize = system.active ? system.activeOrbitSizes[planet.orbit.index + 1] : system.normalOrbitSizes[planet.orbit.index];
    const moonOrbitSize = system.active ? system.activeOrbitSizes.moon : system.normalOrbitSizes.moon;


    // move planet to the orbit

    translate(planet, {
        distance: planetOrbitSize / 2
    })


    // change moon orbit size

    planet.moonOrbit.size = moonOrbitSize;
    planet.moonOrbit.setSize();


}