document.getElementById('menuToggle').addEventListener('click', function () {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active'); // Toggle the 'active' class
});

const viewMoreButton = document.getElementById('view-more');
const hiddenButtons = document.querySelector('.hidden-buttons');

viewMoreButton.addEventListener('click', () => {
  hiddenButtons.style.display = 'block';
  viewMoreButton.style.display = 'none';
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    725: {
      slidesPerView: 1,
    },
    950: {
      slidesPerView: 3,
    },
  },

});

var swiper = new Swiper(".slide-content-1", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },

});

const viewMoreButton1 = document.getElementById('view-more-1');
const hiddenButtons1 = document.querySelector('.hidden-buttons-1');


viewMoreButton.addEventListener('click', () => {
  hiddenButtons1.style.display = 'block';
  viewMoreButton1.style.display = 'none';
});

var swiper = new Swiper(".slide-content-3", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },

});


document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.toggle-sidebar');
  const sidebar = document.querySelector('.sidebar');

  toggleButton.addEventListener('click', function () {
    sidebar.classList.toggle('active');
  });
});

// bot
// Function to send bot replies
function botReply(chatBody, message) {
  const botMessage = document.createElement("div");
  botMessage.textContent = message;
  botMessage.style.cssText = `
      white-space: pre-wrap;
      background: #f0f0f0;
      color: black;
      padding: 8px;
      border-radius: 5px;
      margin-bottom: 5px;
      align-self: flex-start;
      font-family: Arial, sans-serif;
  `;
  chatBody.appendChild(botMessage);
}









// bot end

// Event Listener for the "Send" Button
document.getElementById("sendButton").addEventListener("click", sendMessage);

// Event Listener for Enter Key
document.getElementById("userInput").addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// JavaScript for toggling chat visibility
document.getElementById("botButton").addEventListener("click", function (e) {
  e.preventDefault();
  const chatContainer = document.getElementById("chatContainer");
  chatContainer.style.display = chatContainer.style.display === "none" || chatContainer.style.display === "" ? "flex" : "none";
});

// Close chat
document.getElementById("closeButton").addEventListener("click", function () {
  document.getElementById("chatContainer").style.display = "none";
});









