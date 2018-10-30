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

const Charoite = new Pebble({
    img: `https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi29YiQs6zeAhUhTd8KHYUlCDEQjRx6BAgBEAU&url=http%3A%2F%2Fwww.lightworker.co.za%2FInformation%2FCrystals%2Fmobile%2F&psig=AOvVaw32Y_vqNIK_vVUJ944DS_uI&ust=1540928203644062`,
    name: `Charoite`,
    color: `Purple`,
    description: `Charoite helps the wearer have a wider perspective on life, seeing the day to day events within a larger pattern of the Universe unfolding. This leads to a sense of peace and the wisdom to discern the best use of one’s energy. It also means becoming aware of synchronicities which allow your life to have a sense of flow and magic.`,
    powers: [Clarity, Grounding]
})

const Malachite = new Pebble({
    img: `https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjW5fqhtazeAhWNvlMKHQ9fAlkQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pngarts.com%2Fexplore%2F32527&psig=AOvVaw1hlq2JMFtgkEDUZpztlbrm&ust=1540928763382578`,
    name: `Malachite`,
    color: `Green`,
    description: `Malachite is a stalwart protector and bolsterer of your strength and willpower. It helps you access your innate power and protects you from negativity as you take action in the world. Malachite is a classic protection stone. It can help you stay alert and avoid danger, as well as strengthen your boundaries so you are not affected by negative energies.`,
    powers: [Strength, Will]
})

const Spinel = new Pebble({
    img: `https://www.google.com/imgres?imgurl=http%3A%2F%2Fgemkids.gia.edu%2Fimages%2FMF_-_Spinel_Hero_68460_886977_450x450.png&imgrefurl=http%3A%2F%2Fgemkids.gia.edu%2Fgem%2Fspinel&docid=laLJ5Q69mXzKhM&tbnid=KZeQjMBCqaHR-M%3A&vet=10ahUKEwi_zN2IvKzeAhUrm-AKHQM4Dr8QMwhFKAUwBQ..i&w=450&h=450&bih=746&biw=1420&q=spinel%20png&ved=0ahUKEwi_zN2IvKzeAhUrm-AKHQM4Dr8QMwhFKAUwBQ&iact=mrc&uact=8`,
    name: `Spinel`,
    color: `Pink`,
    description: `Spinel is a stone of hope, revitalization, and feeling the joy of being alive. It comes in a wide range of colors, which means it can be used to revitalize every chakra. Spinel is perfect to to reach for when you’re feeling a lack of energy or enthusiasm, or finding it hard to pull out of negative thoughts. Spinel helps bring fresh energy to your mind, body, heart and spirit.`,
    powers: [Harmony, Focus]
})

const Labradorite = new Pebble({
    img: `https://www.google.com/imgres?imgurl=http%3A%2F%2Fmoonstone.za.com%2Fwp-content%2Fuploads%2F2014%2F03%2FLabradorite.png&imgrefurl=http%3A%2F%2Fmoonstone.za.com%2Fabout%2Fmetaphysical-properties%2Flabradorite%2F&docid=RIWHMAvwyn4DOM&tbnid=hdnlnJ0aEj_uYM%3A&vet=10ahUKEwizwZOFvqzeAhWvmOAKHb4UCs8QMwhJKAwwDA..i&w=261&h=261&bih=746&biw=1420&q=labradorite%20png&ved=0ahUKEwizwZOFvqzeAhWvmOAKHb4UCs8QMwhJKAwwDA&iact=mrc&uact=8`,
    name: `Labradorite`,
    color: `Metallic blue, green, gold, and purple`,
    description: `Labradorite facilitates awareness of multiple layers of reality at the same time; thus it is a good stone for shamanic work and those working with the Akashic records. Labradorite is a protective crystal for doing this work, keeping your aura strong and blocking intruders. It can also help you remember your experiences while journeying in other realms, or recall past life memories.`,
    powers: [Strength, Psychokinesis]
})

const Moonstone = new Pebble({
    img: `https://www.google.com/imgres?imgurl=https%3A%2F%2Fbanner2.kisspng.com%2F20180630%2Fqsr%2Fkisspng-gemstone-white-opal-zircon-moonstone-5b38038d0a0240.801602511530397581041.jpg&imgrefurl=https%3A%2F%2Fwww.kisspng.com%2Fpng-gemstone-white-opal-zircon-moonstone-4539246%2F&docid=Ok_LdkvWbU3WoM&tbnid=BvH_EXADqUIhoM%3A&vet=10ahUKEwjwz7KLwKzeAhWimuAKHSiGAzcQMwhIKAowCg..i&w=900&h=780&bih=746&biw=1420&q=moonstone%20png&ved=0ahUKEwjwz7KLwKzeAhWimuAKHSiGAzcQMwhIKAowCg&iact=mrc&uact=8`,
    name: `Moonstone`,
    color: `Translucent`,
    description: `Moonstone corresponds with the High Priestess card. It can stimulate right-brain thinking, which is non-linear and makes leaps of insight rather than step-by-step analysis. If you want to get in touch with your femininity (whether male or female) and integrate your unconscious, carry moonstone in your pocket or wear moonstone jewelry.`,
    powers: [Revitalize, Harmony, Clarity]
})

const Larimar = new Pebble({
    img: `https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj5jNLwwazeAhWhTd8KHfueCyEQjRx6BAgBEAU&url=https%3A%2F%2Fwww.rubylane.com%2Fitem%2F671407-VSRingLarimarSz9x2e25%2FLarimar-Blue-Ring-Sterling-Silver-Vintage&psig=AOvVaw1gfXHfMUdYI148QqKnsZwC&ust=1540932186949415`,
    name: `Larimar`,
    color: `Pale Blue`,
    description: `Larimar empowers you to speak directly from the heart. It is one of the best stones for diffusing anger and transmuting it to relaxed, clear communication. It helps you tap into a deep sense of calm that transcends the current situation and your emotional responses to it–helping you to accept what is, and see the Divine in every moment.`,
    powers: [Communication, Focus, Clarity]
})

const Morganite = new Pebble({
    img: `https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.tivonjewels.com%2Fassets%2Fcomponents%2Fphpthumbof%2Fcache%2Fmorganite.40c38c343d9d4cfdcec236d14155473f.png&imgrefurl=https%3A%2F%2Fwww.tivonjewels.com%2Fgems%2Fcatalogue%2Fmorganite&docid=fTKFNZDM3Ma1DM&tbnid=cZ1Aj3qCCkFA0M%3A&vet=10ahUKEwiduJPxwqzeAhXilOAKHejZBDMQMwhDKAMwAw..i&w=340&h=340&bih=746&biw=1420&q=morganite%20png&ved=0ahUKEwiduJPxwqzeAhXilOAKHejZBDMQMwhDKAMwAw&iact=mrc&uact=8`,
    name: `Morganite`,
    color: `Peach`,
    description: `Morganite is a heart chakra stone and carries the energy of Divine love and compassion. It is an excellent stone to work with emotional trauma. It helps you come to terms with past pain and see the meaning and purpose of it in the larger path of your life. This helps you to release the heartache and learn the lessons it was meant to show you. If you are ready to transform pain and trauma into wisdom and compassion, this is your stone.`,
    powers: [Clarity, Grounding, Focus]
})

const Serpentine = new Pebble({
    img: `https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiO97-UxKzeAhVtS98KHRgWDmwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.rockonmineralsanddesign.com%2Fsecurity%2F&psig=AOvVaw05k0nqQJPYaK8uByraIDmQ&ust=1540932799021167`,
    name: `Serpentine`,
    color: `Pale Yellowish - Green to Green`,
    description: `Serpentine is associated with the energy of the serpent, or snake. It’s an earth oriented crystal that connects with the resonance and vibration of the natural world, helping you embody your true nature. The serpent’s energy is one of transformation and rebirth, as it releases its old skin and embodies a new version of itself again and again.`,
    powers: [Grounding, Revitalize, Will]
})


//  ===== USERS: #3 =====
const Raquel = new User({
    username: `Raq-Mama 56`,
    img: `https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiQnNfBx6zeAhWsm-AKHblgCrwQjRx6BAgBEAU&url=http%3A%2F%2Fwww.entertainmentgh.com%2Frelationship%2Fpurposefully-scared-learn-simple-ways-trust-abusive-relationship%2Fattachment%2Fhappy-black-woman%2F&psig=AOvVaw1USjr4Y0_BO4YvjrQlg8Ua&ust=1540933684652596`,
    rocks: [Larimar, Spinel, Charoite, Labradorite],
    description: `Keeping my mind clear and focusing on me!`
})

const Chad = new User({
    username: `|  Chad  |`,
    img: `https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiLna3-9azeAhVLhuAKHYYwDZgQjRx6BAgBEAU&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_91987068_absolute-peace-nice-handsome-peaceful-man-holding-his-head-and-closing-his-eyes-while-feeling-harmon.html&psig=AOvVaw1bVGF81_Mz9EY-14mjYM3p&ust=1540934972400831`,
    rocks: [Agate, Moonstone, Malachite],
    description: `Nothin beats a chill day like my pebbles, lightin up a mellow incense, and catchin some meditation!
    #inthezone`
})

const Doggo = new User({
    username: `g0oD-B0183`,
    img: `https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjSusOP-KzeAhVvneAKHWCyBQoQjRx6BAgBEAU&url=http%3A%2F%2Fwww.sanmiguelicons.com%2Fagnostic-faith%2Fpeaceful-dog%2F&psig=AOvVaw3gtewEP4P_A5gzhxjQboUB&ust=1540946745705217`,
    rocks: [Aventurine, Serpentine, Morganite],
    description: `Bork! Bork bork bork bork! Bork bork bork bork bork bork bork bork bork!`
})

User.remove({})
    .then(() => Power.insertMany([Harmony, Strength, Clarity, Psychokinesis, Communication, Grounding, Revitalize, Focus, Will, Luck]))
    .then(() => Pebble.insertMany([Agate, Aventurine, Charoite, Malachite, Spinel, Labradorite, Moonstone, Larimar, Morganite, Serpentine]))
    .then(() => Raquel.save())
    .then(() => Chad.save())
    .then(() => Doggo.save())
    .then(() => console.log(`Database seeding success`))
    .then(() => mongoose.connection.close())