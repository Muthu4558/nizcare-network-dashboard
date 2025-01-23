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
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Initialize chat options
function initializeChat() {
  const chatBody = document.getElementById("chatBody");

  botReply(chatBody, "Please choose an option:");

  const options = ["Book Teleconsultation", "Health Query"];

  options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.style.cssText = `
          background: #f0f0f0;
          color: black;
          padding: 8px 12px;
          border: none;
          margin: 5px 0;
          border-radius: 5px;
          cursor: pointer;
          display: block;
          width: 100%;
          text-align: left;
      `;
      button.addEventListener("click", () => handleOptionSelection(option));
      chatBody.appendChild(button);
  });
}

// Handle option selection
function handleOptionSelection(option) {
  const chatBody = document.getElementById("chatBody");
  const userMessage = document.createElement("div");
  userMessage.textContent = option;
  userMessage.style.cssText = `
      background: #229ea6;
      color: white;
      padding: 8px;
      border-radius: 5px;
      margin-bottom: 5px;
      align-self: flex-end;
  `;
  chatBody.appendChild(userMessage);

  if (option === "Book Teleconsultation") {
      botReply(chatBody, "Book Your Teleconsultation\nSelect Consultation Date:");
      const dateInput = document.createElement("input");
      dateInput.type = "date";
      dateInput.min = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split("T")[0];
      dateInput.style.cssText = "margin: 5px 0; padding: 5px;";
      dateInput.addEventListener("change", () => handleDateSelection(dateInput.value));
      chatBody.appendChild(dateInput);
  } else {
      botReply(chatBody, "This feature is under development.");
  }
}

// Handle date selection
function handleDateSelection(selectedDate) {
  const chatBody = document.getElementById("chatBody");
  botReply(chatBody, `Choose Your Time Slot for ${selectedDate}:`);

  const timeSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM"];

  timeSlots.forEach(slot => {
      const button = document.createElement("button");
      button.textContent = slot;
      button.style.cssText = `
          background: #f0f0f0;
          color: black;
          padding: 8px 12px;
          border: none;
          margin: 5px 0;
          border-radius: 5px;
          cursor: pointer;
          display: block;
          width: 100%;
          text-align: left;
      `;
      button.addEventListener("click", () => handleTimeSlotSelection(selectedDate, slot));
      chatBody.appendChild(button);
  });
}

// Handle time slot selection
function handleTimeSlotSelection(date, slot) {
  const chatBody = document.getElementById("chatBody");
  botReply(chatBody, `Please share the following details:\n- Full Name:\n- Age:\n- Gender:\n- Mobile Number:`);

  const detailsForm = document.createElement("div");
  detailsForm.style.cssText = "margin: 10px 0;";

  ["Full Name", "Age", "Gender", "Mobile Number"].forEach(field => {
      const input = document.createElement("input");
      input.placeholder = field;
      input.style.cssText = "display: block; margin: 5px 0; padding: 5px; width: 95%;";
      detailsForm.appendChild(input);
  });

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.style.cssText = `
      background: #229ea6;
      color: white;
      padding: 8px 12px;
      border: none;
      margin-top: 5px;
      border-radius: 5px;
      cursor: pointer;
      display: block;
  `;
  submitButton.addEventListener("click", () => handleDetailsSubmission(detailsForm, date, slot));

  detailsForm.appendChild(submitButton);
  chatBody.appendChild(detailsForm);
}

// Handle details submission
function handleDetailsSubmission(form, date, slot) {
  const inputs = form.querySelectorAll("input");
  const details = Array.from(inputs).map(input => input.value);

  if (details.some(detail => detail.trim() === "")) {
      alert("Please fill in all the details.");
      return;
  }

  botReply(
      document.getElementById("chatBody"),
      `OTP sent to ${details[3]}. Verify your number:`
  );

  const otpInput = document.createElement("input");
  otpInput.type = "text";
  otpInput.placeholder = "Enter OTP";
  otpInput.style.cssText = "margin: 5px 0; padding: 5px; width: 95%;";

  const verifyButton = document.createElement("button");
  verifyButton.textContent = "Verify";
  verifyButton.style.cssText = `
      background: #229ea6;
      color: white;
      padding: 8px 12px;
      border: none;
      margin-top: 5px;
      border-radius: 5px;
      cursor: pointer;
  `;

  verifyButton.addEventListener("click", () => {
      botReply(
          document.getElementById("chatBody"),
          `✅ Booking Confirmation!\n\n📅 Date: ${date}\n⏰ Time: ${slot}\n👤 Patient Name: ${details[0]}\n📞 Mobile Number: ${details[3]}`
      );
  });

  const chatBody = document.getElementById("chatBody");
  chatBody.appendChild(otpInput);
  chatBody.appendChild(verifyButton);
}

// Initialize chat on page load
document.addEventListener("DOMContentLoaded", initializeChat);

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









