import planetEnter from './planet-enter'

export default function (system) {
    system.on('planet:enter', planetEnter.bind(system));
    system.on('planet:leave', planetEnter.bind(system));
    system.on('moon:enter', planetEnter.bind(system));
    system.on('moon:leave', planetEnter.bind(system));
    system.on('planet:click', planetEnter.bind(system));
    system.on('sun:click', planetEnter.bind(system));
}