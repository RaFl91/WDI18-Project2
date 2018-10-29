const User = require('../models/User')
const Pebble = require('../models/Pebble')
const Power = require('../models/Power')
const mongoose = require('./connection')

// ===== POWERS: #10 =====
const Harmony = new Power({
    power: 5
})

const Strength = new Power({
    power: 10
})

const Clarity = new Power({
    power: 12
})

const Psychokinesis = new Power({
    power: 20
})

const Communication = new Power({
    power: 14
})

const Grounding = new Power({
    power: 7
})

const Revitalize = new Power({
    power: 9
})

const Focus = new Power({
    power: 23
})

const Will = new Power({
    power: 11
})

const Luck = new Power({
    power: 25
})


//  ===== PEBBLES: #10 =====
const Agate = new Pebble({
    img: `https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjJrPKPqqzeAhXFzlMKHSKQAUkQjRx6BAgBEAU&url=http%3A%2F%2Fwww.pngmart.com%2Fimage%2F43347&psig=AOvVaw1fEo2RA_pZ0jXckQAfOysw&ust=1540925787628741`,
    name: `Agate`,
    color: `Blue and white`,
    description: `Agate is a translucent variety of microcrystalline quartz. It is used as a semiprecious stone when it is of desirable quality and color. Agate generally forms by the deposition of silica from groundwater in the cavities of igneous rocks.`,
    powers: [Harmony, Clarity]
})

const Aventurine = new Pebble({
    img: `https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwitvYrDrazeAhVI2lMKHbtCAUkQjRx6BAgBEAU&url=https%3A%2F%2Fwww.silverbeadsandfindings.com%2Fproduct%2F1825mm-oval-green-aventurine%2F&psig=AOvVaw2Kk2hRXdeOFcpnTBmwyXRE&ust=1540926565782948`,
    name: `Aventurine`,
    color: `Green`,
    description: `Green Aventurine is a great piece to use when working with the Heart Chakra and/or the Water Elements. Green Aventurine is known as the good luck stone and is often used in rituals with green candles, or kept in cash boxes or drawers to attract money.`,
    powers: [Revitalize, Luck]
})

