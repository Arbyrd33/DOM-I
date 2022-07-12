const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const header = document.querySelector('header');


// header.child[0].textContent = 'Services';
const navLinks = header.children[0];
console.log(navLinks);
console.log(navLinks.children);
navLinks.children[0].textContent = "Services";
navLinks.children[1].textContent = "Product";
navLinks.children[2].textContent = "Vision";
navLinks.children[3].textContent = "Features";
navLinks.children[4].textContent = "About";
navLinks.children[5].textContent = "Contact";


const logoImg = document.getElementById('logo-img');
console.log(logoImg);
logoImg.src = "http://localhost:9000/img/logo.png";

const cta = document.querySelector(".cta");
const ctaText = document.querySelector(".cta-text");
console.log(cta, ctaText);

const ctaHeader = ctaText.querySelector('h1');
// console.log(ctaHeader);
ctaHeader.textContent = 'DOM Is Awesome';

const ctaButton = cta.querySelector('button');
// console.log(ctaButton);
ctaButton.textContent = "Get Started";

const ctaImg = document.querySelector('#cta-img');
// console.log(ctaImg);
ctaImg.src = "http://localhost:9000/img/cta.png";