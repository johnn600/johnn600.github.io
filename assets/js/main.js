jQuery(document).ready(function($) {

   
        AOS.init({
            offset: 100,
            once: true,
            duration: 800,
            throttleDelay: 50,
            disable: window.innerWidth < 768
        });
   

});

//function for copying text to clipboard
function copyToClipboard(){
    var email = document.getElementById("emailText");
    navigator.clipboard.writeText(email.innerText);

    //change the class of the button to solid
    var button = document.getElementById("copyButton");
    button.classList.remove("fa-regular");
    button.classList.add("fa-solid");
}


//reference: https://codepen.io/dbilanoski/pen/LabpzG?editors=1111
const sections = document.querySelectorAll("section[id]");
console.log(sections);

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 150;
    sectionId = current.getAttribute("id");

    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector("section#"+sectionId).classList.add("section-active");

      //change the image src of image element with id "display-image" based on the section id
      //use switch case
        switch(sectionId){
            case "personal":
                document.getElementById("display-image").src = "../assets/images/profile.png";
                break;
            case "education":
                document.getElementById("display-image").src = "../assets/images/profile.png";
                break;
            case "skills":
                document.getElementById("display-image").src = "../assets/images/skills.png";
                break;
            case "achievements":
                document.getElementById("display-image").src = "../assets/images/achievements.jpg";
                break;
            case "grants":
                document.getElementById("display-image").src = "../assets/images/scholars.png";
                break;
            case "certifications":
                document.getElementById("display-image").src = "../assets/images/badges.png";
                break;
            case "awards":
                document.getElementById("display-image").src = "../assets/images/awards.png";
                break;
            case "affiliations":
                document.getElementById("display-image").src = "../assets/images/affiliations.png";
                break;
            case "events":
                /*
                const images = [
                    {
                        src: "../assets/images/google_io.png",
                        caption: "Google I/O Extended Davao 2023, Attendee"
                    },
                    {
                        src: "../assets/images/boot_camp.jpg",
                        caption: "DOST SEI Scholars Leadership Boot Camp (Butuan City)"
                    }
                ]


                let i = 0;
                setInterval(function(){
                    document.getElementById("display-image").src = images[i].src;
                    document.getElementById("caption").innerHTML = images[i].caption;
                    i++;
                    if(i == images.length){
                        i = 0;
                    }

                }, 4000);
                */

                document.getElementById("display-image").src = "../assets/images/ylac.png";
                document.getElementById("caption").innerHTML = "Youth Leaders of Agribusiness Congress 2023 (at SEARCA)";
                break;
            default:
                document.getElementById("display-image").src = "assets/images/profile.png";
        }


    } else {
        document.querySelector("section#"+sectionId).classList.remove("section-active");
    }
  });
}

