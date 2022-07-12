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
console.log(navLinks, "navlinks");
console.log(navLinks.children);
navLinks.children[0].textContent = "Services";
navLinks.children[1].textContent = "Product";
navLinks.children[2].textContent = "Vision";
navLinks.children[3].textContent = "Features";
navLinks.children[4].textContent = "About";
navLinks.children[5].textContent = "Contact";

const italics = navLinks.querySelectorAll('a');
console.log(italics);

for(let i = 0; i<italics.length; i++){
  console.log(italics[i]);
  italics[i].classList.add('italic');
}






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


const mainContent = document.querySelector(".main-content");
// console.log(mainContent);

const topContent = mainContent.querySelector(".top-content");
console.log(topContent.children);
const featureDiv = topContent.children[0];
  const featuresH = featureDiv.children[0];
  featuresH.textContent = "Features";
  const featuresP = featureDiv.children[1];
  featuresP.textContent = `Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
  in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
  scelerisque quis.`

const aboutDiv = topContent.children[1];
  const aboutH = aboutDiv.children[0];
  aboutH.textContent="About";
  const aboutP = aboutDiv.children[1];
  aboutP.textContent =  `About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
            interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
            scelerisque quis.`


const middleImg = document.querySelector(".middle-img");
middleImg.src = `http://localhost:9000/img/accent.png`

const bottomContent = document.querySelector('.bottom-content');
console.log(bottomContent.children);
const servicesDiv = bottomContent.children[0];
console.log(servicesDiv);
  const servicesH = servicesDiv.children[0];
  servicesH.textContent = "Services"
  const servicesP = servicesDiv.children[1];
  servicesP.textContent = `Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
  in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
  scelerisque quis.`



const productDiv = bottomContent.children[1];
  const productH = productDiv.children[0];
  productH.textContent = "Product"
  const productP = productDiv.children[1];
  productP.textContent = `Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
  interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
  scelerisque quis.`
const visionDiv = bottomContent.children[2];
  const visionH = visionDiv.children[0];
  visionH.textContent = "Vision";
  const visionP = visionDiv.children[1];
  visionP.textContent = `Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
  interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
  scelerisque quis.`



  const contact = document.querySelector(".contact");
  console.log(contact);
  contact.children[0].textContent="Contact";
  contact.children[1].textContent = "123 Way 456 Street Somewhere, USA"
  contact.children[2].textContent = "1 (888) 888-8888"
  contact.children[3].textContent = "sales@greatidea.io"
  console.log(contact);

const footerLink = document.querySelector('footer').children[0];
footerLink.textContent = "Copyright Great Idea! 2021";
footerLink.classList.add('bold');