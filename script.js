// EmailJS setup
emailjs.init('JDAKir3HeAeRMzV4n');
// smooth scrolling for nav links
const links = document.querySelectorAll('a[href^="#"]')

links.forEach(link =>{
    link.addEventListener('click',function(e) {
        e.preventDafault();
        const target = document.querySelector(this.getAttribute('href')); target.scrollintoView({ behavior: 'smooth'});
    });
});
//typing effect
const text = "Hi, l'm Kirabo Maureen";
const speed = 100
let i = 0;

const h1 = document.querySelector('h1');
h1.textContent = '';

function typeWriter(){
    if(i <text.length) {
        h1.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
// Contact form
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.send('service_dxj0de9', 'template_ra7o9fk', {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    })
        .then(function () {
            alert('Message sent successfully!! I will get back to you soon 💜');
            document.getElementById('contact-form').reset();
        })
        .catch(function (error) {
            alert('Oops!! Something went wrong. Please try again!!');
            console.log(error);
        });
});