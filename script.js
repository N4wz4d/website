document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    toggleButton.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
    });

    // Image slideshow functionality
    const images = [
        "../new_website/images/Artist-250.jpg",
        "../new_website/images/design-250.jpg",
        "../new_website/images/front-end-250.jpg",
        "../new_website/images/Back-End-250.jpg",
        // Add more image paths as needed
    ];

    const descriptions = [
        { title: "Artist", text: "" },
        { title: "Design", text: "" },
        { title: "Front-End Developer", text: "" },
        { title: "Back-End Developer", text: "" },
        // Add more descriptions corresponding to the images
    ];

    let currentIndex = 0;
    const slideshow = document.getElementById("slideshow");
    const descriptionElement = document.getElementById("description");

    function changeImageAndDescription() {
        currentIndex = (currentIndex + 1) % images.length;
        slideshow.src = images[currentIndex];
        descriptionElement.innerHTML = `<h1>${descriptions[currentIndex].title}</h1><p>${descriptions[currentIndex].text}</p>`;
        descriptionElement.style.animation = 'none'; // Reset animation
        void descriptionElement.offsetWidth; // Trigger reflow to restart animation
        descriptionElement.style.animation = 'floatIn 1s ease-in-out forwards'; // Apply animation
    }

    setInterval(changeImageAndDescription, 4000); // Change image and description every 4 seconds




      // About text functionality
    const aboutTexts = [
        "ژ وانا شی بۆ نموونە دیزاینەر بۆ وێبسایتان یان رەسام یان سیستەم ژ بۆ دکان و صیدەلیا یان هەر بوارەکی دی تو پێتڤی بیێ",
        "   انشاللە دێ شێین باشترین شێواز خزمەتا هەوە یێن بەرێز کەین(MN_Company) بخێر بهێن ژ بۆ",
        "دێ مە خزمەت گۆزاریێن جودا جودا بەر دەست هەبن کو زۆربە یا مە پێتڤی دبنێ ",
        // Add more texts as needed
    ];

    let aboutIndex = 0;
    const aboutTextElement = document.getElementById("about-text");

    function changeAboutText() {
        aboutIndex = (aboutIndex + 1) % aboutTexts.length;
        aboutTextElement.innerHTML = aboutTexts[aboutIndex];
    }

    setInterval(changeAboutText, 6000); // Change text every 6 seconds




// This is for enable and disable the cards 

   // Dropdown functionality
   const dropdownItems = document.querySelectorAll('.dropdown-content a');
   const cards = document.querySelectorAll('.card');

   dropdownItems.forEach(item => {
       item.addEventListener('click', function(e) {
           e.preventDefault();
           const selectedGroup = item.getAttribute('data-group');
           cards.forEach(card => {
               card.classList.remove('hidden'); // Ensure all cards are visible
               const cardGroup = card.getAttribute('data-group');
               if (selectedGroup === 'all' || cardGroup === selectedGroup) {
                   card.classList.add('show'); // Apply class to show card
               } else {
                   card.classList.remove('show'); // Remove class to hide card
                   card.classList.add('hidden'); // Apply class to hide card
               }
           });
       });
   });

   // Initial setup to show all cards
   cards.forEach(card => {
       card.classList.add('show');
   });

   // Initial setup
   changeImageAndDescription();
   changeAboutText();
});


// Function to enable or disable cards based on availability
function updateCardAvailability(group, available) {
    const cards = document.querySelectorAll(`.card[data-group="${group}"]`);
    
    cards.forEach(card => {
        if (!available) {
            card.classList.add('disabled');
            card.querySelector('h2').textContent = 'Artist (Coming Soon)';
            card.querySelector('p').textContent = 'SOON...';
            const link = card.querySelector('a');
            link.textContent = 'Link 4';
            link.setAttribute('disabled', true);
        } else {
            card.classList.remove('disabled');
            card.querySelector('h2').textContent = 'Artist';
            card.querySelector('p').textContent = 'Drawing person image or anything else';
            card.querySelector('a').textContent = 'Link 4';
            card.querySelector('a').removeAttribute('disabled');
        }
    });
}

// Example usage: Disable the 'Artist' card
updateCardAvailability('art', false);



// this is for contact us page 
function validateForm() {
    const message = document.getElementById('message').value;
    if (message.length < 5) {
        alert("Message must be at least 5 characters long.");
        return false;
    }
    return true;
}

// end for contact us page 
