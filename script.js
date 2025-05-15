
    // ====================typing effect==================
   
const textArray = ["Front-End Developer!", "UI/UX Designer!"];
let textIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingSpan = document.querySelector(".typing-text");

function typeEffect() {
    currentText = textArray[textIndex];
    if (isDeleting) {
        typingSpan.textContent = currentText.substring(0, charIndex--);
    } else {
        typingSpan.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500); 
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length; 
        setTimeout(typeEffect, 500); 
    } else {
        setTimeout(typeEffect, isDeleting ? 100 : 150); 
    }
}

typeEffect(); 
 // ====================typing effect exit==================


//  ===========Bootstrap validation + success message handler=============== 
const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  if (!form.checkValidity()) {
    e.stopPropagation();
    form.classList.add("was-validated");
    return;
  }

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.reset();
      form.classList.remove("was-validated");
      successMessage.classList.remove("d-none");

      
      setTimeout(() => {
        successMessage.classList.add("d-none");
      }, 2000);
    } else {
      alert("Oops! Something went wrong. Try again.");
    }
  } catch (error) {
    alert("There was a problem submitting the form.");
  }
});

  //  ===========Bootstrap validation + success message handler exit===============


 
  // ===============Toggle icons when toggler is clicked (only for mobile/tablet)====================
  
  document.addEventListener("DOMContentLoaded", function () {
    var toggler = document.querySelector(".navbar-toggler");
    var iconOpen = document.querySelector(".toggler-icon");
    var iconClose = document.querySelector(".toggler-close");
    var navbarCollapse = document.querySelector(".navbar-collapse");
    var navLinks = document.querySelectorAll(".nav-link");

    
    toggler.addEventListener("click", function () {
        if (window.innerWidth < 992) {
            if (iconOpen.style.display === "none") {
                iconOpen.style.display = "inline";
                iconClose.style.display = "none";
            } else {
                iconOpen.style.display = "none";
                iconClose.style.display = "inline";
            }
        }
    });

    // Collapse navbar and reset icons when any nav-link is clicked
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (window.innerWidth < 992) {
             const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();

                 iconOpen.style.display = "inline";
                iconClose.style.display = "none";
            }
        });
    });
});
// ===============Toggle icons when toggler is clicked (only for mobile/tablet) exit====================


