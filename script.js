let arr = [4, 0, 2]

var animal = '[\n' +
    '  {\n' +
    '    "name": "Jennifer",\n' +
    '    "img": "./src/pets-jennifer.png",\n' +
    '    "type": "Dog",\n' +
    '    "breed": "Labrador",\n' +
    '    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.",\n' +
    '    "age": "2 months",\n' +
    '    "inoculations": "none",\n' +
    '    "diseases": "none",\n' +
    '    "parasites": "none"\n' +
    '  },\n' +
    '  {\n' +
    '    "name": "Sophia",\n' +
    '    "img": "./src/pets-sophia.png",\n' +
    '    "type": "Dog",\n' +
    '    "breed": "Shih tzu",\n' +
    '    "description": "Sophia here and I\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",\n' +
    '    "age": "1 month",\n' +
    '    "inoculations": "parvovirus",\n' +
    '    "diseases": "none",\n' +
    '    "parasites": "none"\n' +
    '  },\n' +
    '  {\n' +
    '    "name": "Woody",\n' +
    '    "img": "./src/pets-woody.png",\n' +
    '    "type": "Dog",\n' +
    '    "breed": "Golden Retriever",\n' +
    '    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",\n' +
    '    "age": "3 years 6 months",\n' +
    '    "inoculations": "adenovirus, distemper",\n' +
    '    "diseases": "right back leg mobility reduced",\n' +
    '    "parasites": "none"\n' +
    '  },\n' +
    '  {\n' +
    '    "name": "Scarlett",\n' +
    '    "img": "./src/pets-scarlet.png",\n' +
    '    "type": "Dog",\n' +
    '    "breed": "Jack Russell Terrier",\n' +
    '    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",\n' +
    '    "age": "3 months",\n' +
    '    "inoculations": "parainfluenza",\n' +
    '    "diseases": "none",\n' +
    '    "parasites": "none"\n' +
    '  },\n' +
    '  {\n' +
    '    "name": "Katrine",\n' +
    '    "img": "./src/pets-katrine.png",\n' +
    '    "type": "Cat",\n' +
    '    "breed": "British Shorthair",\n' +
    '    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",\n' +
    '    "age": "6 months",\n' +
    '    "inoculations": "panleukopenia",\n' +
    '    "diseases": "none",\n' +
    '    "parasites": "none"\n' +
    '  },\n' +
    '  {\n' +
    '    "name": "Timmy",\n' +
    '    "img": "./src/pets-timmy.png",\n' +
    '    "type": "Cat",\n' +
    '    "breed": "British Shorthair",\n' +
    '    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",\n' +
    '    "age": "2 years 3 months",\n' +
    '    "inoculations": "calicivirus, viral rhinotracheitis",\n' +
    '    "diseases": "kidney stones",\n' +
    '    "parasites": "none"\n' +
    '  },\n' +
    '  {\n' +
    '    "name": "Freddie",\n' +
    '    "img": "./src/pets-freddie.png",\n' +
    '    "type": "Cat",\n' +
    '    "breed": "British Shorthair",\n' +
    '    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",\n' +
    '    "age": "2 months",\n' +
    '    "inoculations": "rabies",\n' +
    '    "diseases": "none",\n' +
    '    "parasites": "none"\n' +
    '  },\n' +
    '  {\n' +
    '    "name": "Charly",\n' +
    '    "img": "./src/pets-charly.png",\n' +
    '    "type": "Dog",\n' +
    '    "breed": "Jack Russell Terrier",\n' +
    '    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",\n' +
    '    "age": "8 years",\n' +
    '    "inoculations": "bordetella bronchiseptica, leptospirosis",\n' +
    '    "diseases": "deafness, blindness",\n' +
    '    "parasites": "lice, fleas"\n' +
    '  }\n' +
    ']'

function slide() {
    let pets = JSON.parse(animal)
    let name1 = document.body.querySelector('.nameKatrine')
    let picture1 = document.body.querySelector('.imgKatrine')
    let name2 = document.body.querySelector('.nameJennifer')
    let picture2 = document.body.querySelector('.imgJennifer')
    let name3 = document.body.querySelector('.nameWoody')
    let picture3 = document.body.querySelector('.imgWoody')

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


    let index = getRandomInt(pets.length)

    if (index == arr[0] || index == arr[1] || index == arr[2]) {
        while (index == arr[0] || index == arr[1] || index == arr[2]) {
            index = getRandomInt(pets.length)
        }
        arr.push(index)
    } else {
        arr.push(index)
        index = arr[3]
    }


    let index2 = getRandomInt(pets.length)

    if (index2 == arr[0] || index2 == arr[1] || index2 == arr[2] || index2 == arr[3]) {
        while (index2 == arr[0] || index2 == arr[1] || index2 == arr[2] || index2 == arr[3]) {
            index2 = getRandomInt(pets.length)
        }
        arr.push(index2)
    } else {
        arr.push(index2)
        index2 = arr[4]
    }


    let index3 = getRandomInt(pets.length)

    if (index3 == arr[0] || index3 == arr[1] || index3 == arr[2] || index3 == arr[3] || index3 == arr[4]) {
        while (index3 == arr[0] || index3 == arr[1] || index3 == arr[2] || index3 == arr[3] || index3 == arr[4]) {
            index3 = getRandomInt(pets.length)
        }
        arr.push(index3)
    } else {
        arr.push(index3)
        index3 = arr[5]
    }

    let card1 = document.body.querySelector('.cardKatrine')
    let label1 = document.body.querySelector('.buttonKatrineLabel')
    let button1 = document.body.querySelector('.buttonKatrine')
    let card2 = document.body.querySelector('.cardJennifer')
    let label2 = document.body.querySelector('.buttonJenniferLabel')
    let button2 = document.body.querySelector('.buttonJennifer')
    let card3 = document.body.querySelector('.cardWoody')
    let label3 = document.body.querySelector('.buttonWoodyLabel')
    let button3 = document.body.querySelector('.buttonWoody')

    name1.innerHTML = `${pets[index].name}`
    name1.setAttribute('id', `${index}`)
    card1.setAttribute('id', `${index}`)
    label1.setAttribute('id', `${index}`)
    button1.setAttribute('id', `${index}`)
    picture1.setAttribute('id', `${index}`)
    picture1.setAttribute('style', `background: url(${pets[index].img});`)
    name2.innerHTML = `${pets[index2].name}`
    name2.setAttribute('id', `${index2}`)
    card2.setAttribute('id', `${index2}`)
    label2.setAttribute('id', `${index2}`)
    button2.setAttribute('id', `${index2}`)
    picture2.setAttribute('id', `${index2}`)
    picture2.setAttribute('style', `background: url(${pets[index2].img});`)
    name3.innerHTML = `${pets[index3].name}`
    name3.setAttribute('id', `${index3}`)
    card3.setAttribute('id', `${index3}`)
    label3.setAttribute('id', `${index3}`)
    button3.setAttribute('id', `${index3}`)
    picture3.setAttribute('id', `${index3}`)
    picture3.setAttribute('style', `background: url(${pets[index3].img});`)

    if (arr.length == 6) {
        arr.splice(0, 3)
    }
    console.log(arr)
}


function hide() {
    let burger = document.body.querySelector('.burger')
    // let back = document.body.querySelector('.start')
    let menu = document.body.querySelector('.menu')
    let header = document.body.querySelector('.header')
    let shadow = document.body.querySelector('.shadow')
    if (burger.style.transform == 'unset') {
        window.onscroll = function () {
            window.scrollTo(0, 0);
        }
        burger.style.transform = 'rotate(90deg)'
        header.style.width = '320px'
        header.style.marginRight = '0'
        menu.style.transform = 'translate(-100%)'
        shadow.style.display = 'block'
    } else {
        window.onscroll = true
        burger.style.transform = 'unset'
        // back.style.background = ''
        header.style.width = ''
        header.style.marginRight = ''
        menu.style.transform = 'translate(50%)'
        shadow.style.display = 'none'
    }
}

function modal() {
    let pets = JSON.parse(animal)
    let modal = document.body.querySelector('.modal')
    let target = event.target
    let image =  document.body.querySelector('.modalImage')
    let id = target.id
    let name = document.body.querySelector('.modalName')
    let pet = document.body.querySelector('.modalPet')
    let description = document.body.querySelector('.modalDescription')
    let age = document.body.querySelector('.age')
    let inoculations = document.body.querySelector('.inoculations')
    let diseases = document.body.querySelector('.diseases')
    let parasites = document.body.querySelector('.parasites')

    let arr = [age, inoculations, diseases, parasites]

    for (let i of arr) {
        i.setAttribute('style', 'font-family: Georgia; ' +
            'font-style: normal;\n' +
            'font-weight: 400;\n' +
            'font-size: 15px;\n' +
            'line-height: 110%;\n' +
            '/* or 17px */\n' +
            '\n' +
            'letter-spacing: 0.06em;')
    }

    if (modal.style.display == 'none') {
        window.onscroll = function () {
            window.scrollTo(0, 0);
        }
        modal.style.display = 'block'
        image.setAttribute('style', `background-image: url(${pets[id].img});`)
        name.innerHTML = `${pets[id].name}`
        pet.innerHTML = `${pets[id].type}` + '-' + `${pets[id].breed}`
        description.innerHTML = `${pets[id].description}`
        age.innerHTML = `${pets[id].age}`
        inoculations.innerHTML = `${pets[id].inoculations}`
        diseases.innerHTML = `${pets[id].diseases}`
        parasites.innerHTML = `${pets[id].parasites}`
    } else {
        modal.style.display = 'none'
    }
}