//Owl Carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:370,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

//Variables
//Phone
const phone = ["+880147258369a","+880987654321b","+880123456789c"];

const callUs = document.querySelectorAll('.call > a');
const callUsFooter = document.querySelectorAll('section.contact > a.phone');

for(let i = 0; i < callUs.length; i++) {
    callUs[i].textContent = phone[i];
    callUs[i].setAttribute("href","tel:" + phone[i]);
    callUsFooter[i].textContent = phone[i];
    callUsFooter[i].setAttribute("href","tel:" + phone[i]);
};

//Email
const email = ["support@itload.com test"];

const emailUs = document.querySelectorAll('.email > a');
const emailUsFooter = document.querySelectorAll('section.contact > a.email');

for(let i = 0; i < emailUs.length; i++) {
    emailUs[i].textContent = email[i];
    emailUs[i].setAttribute("href","mailto:" + email[i]);
    emailUsFooter[i].textContent = email[i];
    emailUsFooter[i].setAttribute("href","mailto:" + email[i]);
};

//Address
const add = 'Kha-91, Jaflong, Sylhet';

const addFooter = document.querySelector('section.contact > p.address');
addFooter.textContent = add;

//Social
const social = ["https://facebook.com", "https://twitter.com", "https://instagram.com"]

const socialLinks = document.querySelectorAll('section.social > a');

for(let i = 0; i < socialLinks.length; i++) {
    socialLinks[i].setAttribute("href", social[i])
}

//Packages
const packages = function(name, mb1, mb2, yt, ip, price) {
    this.name = name,
    this.mb1 = mb1,
    this.mb2 = mb2,
    this.yt = yt,
    this.ip = ip,
    this.price = price
}

const one = new packages('Basic', 40, 10, 50, false, 1000);
const two = new packages('Medium', 50, 25, 60, false, 1500);
const three = new packages('Heavy', 100, 50, 150, true, 2000);
const packs = [one, two, three]

const packagesDOM = document.querySelectorAll('h1.packname')
packagesDOM[0].innerHTML = "ngwing";
console.log(packagesDOM);