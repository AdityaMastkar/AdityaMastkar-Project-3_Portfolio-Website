// toggle icon navbar
let menuIcon = document. querySelector( '#menu-icon');
let navbar = document. querySelector(' .navbar');
menuIcon.onclick = () => {
menuIcon.classList. toggle('bx-x');
navbar. classList. toggle('active' );
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href *= ' + id + ']').classList.add('active');
            });  I
        };
    });
    
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const form = document . querySelector ( "form" );
function sendEmail () {
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "adityamastkar94@gmail.com",
    Password : "5A6471EC9B539AE6A096DDA19EBBB05D9EAE",
    To : 'adityamastkar94@gmail.com',
    From : "adityamastkar94@gmail.com",
    Subject : subject.value,
    Body : bodymessage
}).then(
message => {
if (message == "OK") {
Swal.fire({
title: "Success!",
text: "Message sent successfully!",
icon: "success"
});
}
}
);
}
function checkInputs() {
const items = document.querySelectorAll(".item");
for (const item of items) {
    if (item.value == "") {
    item.classList.add("error");
    item.parentElement.classList.add("error");
    }
    if (items[1].value != "") {
    checkEmail();
    }
    items[1].addEventListener("keyup", () => { I
    checkEmail();
    });
    item.addEventListener("keyup", () => {
    if (item.value != "") {
    item.classList.remove("error");
    item.parentElement.classList.remove("error");
    }
    else {
    item.classList.add("error");
    item.parentElement.classList.add("error");
}
});
}
}

// function checkEmail() {
//     const emailRegex = /^([a-z\d\.-]+)@([a-z\d]+)\.([a-z]{2,3})(\.[a-z]{2,
//     3})?$/;
//     const errorTxtEmail = document.querySelector(".error-txt.email");
//     if (!email.value.match(emailRegex)) {
//     email.classList.add("error");
//     email.parentElement.classList.add("error");
//     if (email.value != "") {
//     errorTxtEmail.innerText = "Enter a valid email address";
//     }
//     else {
//         errorTxtEmail.innerText = "Email Address can't be blank";
//     }
//     }
//     else {
//         email.classList.remove("error");
//         email.parentElement.classList.remove("error");
//     }
// }

function checkEmail() {
    const emailInput = document.querySelector('input[type="email"]');
    const emailRegex = /^[a-z0-9.-]+@[a-z0-9-]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");
  
    if (!emailInput.value.trim()) {
      emailInput.classList.add("error");
      emailInput.parentElement.classList.add("error");
      errorTxtEmail.innerText = "Email Address can't be blank";
    } else if (!emailInput.value.match(emailRegex)) {
      emailInput.classList.add("error");
      emailInput.parentElement.classList.add("error");
      errorTxtEmail.innerText = "Enter a valid email address";
    } else {
      emailInput.classList.remove("error");
      emailInput.parentElement.classList.remove("error");
    }
  }

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
    if (!fullName.classList.contains("error") && !email.classList.contains
    ("error") && !phone.classList.contains("error") && !subject.classList.
    contains("error") && !mess.classList.contains("error")) {
    sendEmail();
    form.reset();
    return false;
    }
    });

