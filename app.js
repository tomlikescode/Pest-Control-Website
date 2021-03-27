// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
// linksContainer.classList.toggle("show-links");
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});


// ********** fixed navbar ************
const navbar = document.getElementById('nav');

const outstanding = document.getElementById('outstanding');
const afford = document.getElementById('afford');
const best = document.getElementById('best');

window.addEventListener('scroll', function () {
    
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    const test = document.getElementById('test');
    const testOffset = test.getBoundingClientRect().top;    

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }

    if (testOffset < 400) {
        outstanding.removeAttribute('id','outstanding');
        outstanding.setAttribute('id','outstanding-one');
    }

    if (testOffset < 250) {
        afford.removeAttribute('id','afford');
        afford.setAttribute('id','afford-one');
    }

    if (testOffset < 50) {
        best.removeAttribute('id', 'best');
        best.setAttribute('id','best-one');
    }
})


// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        
        e.preventDefault();

        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;


        if(!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 89.25) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });

        linksContainer.style.height = 0;
    });
});

// ********** click on services cards ************
const cards = document.querySelectorAll('.services-card');


cards.forEach(function(card) {
    card.addEventListener('click', function() {
        card.classList.toggle('services-card-click');
        card.classList.toggle('services-card-click img');
        card.classList.toggle('services-card-click h3');
        card.classList.toggle('services-card-click p');
    })
    
})


// ********** modify svg size by screen width ************

function onresize () {
    const mosqImg = document.getElementById('mosq-img');
    let resizeWidth = document.body.clientWidth;

    if (resizeWidth < 800) {
        mosqImg.setAttribute('width', '300');
        mosqImg.setAttribute('height', '300');
    }  
    else {
        mosqImg.setAttribute('width', '400');
        mosqImg.setAttribute('height', '400');
    }
}

window.addEventListener('resize', onresize);

function ready() {
    const mosqImg = document.getElementById('mosq-img');
    let startWidth = document.body.clientWidth;

    if (startWidth < 800) {
        mosqImg.setAttribute('width', '300');
        mosqImg.setAttribute('height', '300');
    } 
    else {
        mosqImg.setAttribute('width', '450');
        mosqImg.setAttribute('height', '450');
    }
}

document.addEventListener('DOMContentLoaded', ready);

// *********** Tips Array ******************

const tipsArray = [
    {
        id: 1,
        img: './tips/moisture.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellendus blanditiis inventore quaerat, earum vero eaque ullam libero sequi animi?',
    },
    {
        id: 2,
        img: './tips/leaking_faucet.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellendus blanditiis inventore quaerat, earum vero eaque ullam libero sequi animi?',
    },
    {
        id: 3,
        img: './tips/rotting_roof.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellendus blanditiis inventore quaerat, earum vero eaque ullam libero sequi animi?',
    },
    {
        id: 4,
        img: './tips/weather_stripping.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellendus blanditiis inventore quaerat, earum vero eaque ullam libero sequi animi?',
    },
    {
        id: 5,
        img: './tips/gutter.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellendus blanditiis inventore quaerat, earum vero eaque ullam libero sequi animi?',
    },
    {
        id: 6,
        img: './tips/termites.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellendus blanditiis inventore quaerat, earum vero eaque ullam libero sequi animi?',
    },
    {
        id: 7,
        img: './tips/exterior_window.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellendus blanditiis inventore quaerat, earum vero eaque ullam libero sequi animi?',
    },
    {
        id: 8,
        img: './tips/gap_home.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellendus blanditiis inventore quaerat, earum vero eaque ullam libero sequi animi?',
    },
    {
        id: 9,
        img: './tips/consider.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellendus blanditiis inventore quaerat, earum vero eaque ullam libero sequi animi?',
    },
];



const img = document.getElementById('tips-img');
const info = document.querySelector('.tips-info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
    const item = tipsArray[currentItem];
    img.src = item.img;
    info.textContent = item.text;
})

function showTip(tip) {
    const item = tipsArray[tip];
    img.src = item.img;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > tipsArray.length - 1) {
        currentItem = 0;
    }
    showTip(currentItem);
})

prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = tipsArray.length - 1;
    }
    showTip(currentItem);
})

// ****** set date ******

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

