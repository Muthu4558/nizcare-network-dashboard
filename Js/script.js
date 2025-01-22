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
document.getElementById("botButton").addEventListener("click", function (e) {
  e.preventDefault();
  const chatContainer = document.getElementById("chatContainer");
  chatContainer.style.display = chatContainer.style.display === "none" || chatContainer.style.display === "" ? "flex" : "none";
});

// Available cities, hospitals, and doctors
const cityHospitals = {
  chennai: {
    "Apollo Hospital": [
      { name: "Dr. Arjun", specialty: "Cardiologist" },
      { name: "Dr. Priya", specialty: "Dermatologist" },
    ],
    "Fortis Malar": [
      { name: "Dr. Kiran", specialty: "Orthopedic" },
      { name: "Dr. Swetha", specialty: "Neurologist" },
    ],
  },
  madurai: {
    "Meenakshi Mission": [
      { name: "Dr. Vimal", specialty: "Pediatrician" },
      { name: "Dr. Lakshmi", specialty: "Gynecologist" },
    ],
  },
};

// Available time slots
const timeSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM"];

// Display default options on load
document.addEventListener("DOMContentLoaded", function () {
  const chatBody = document.getElementById("chatBody");
  showOptions(chatBody);
});

// Function to handle sending messages
function sendMessage() {
  const userInput = document.getElementById("userInput");
  const chatBody = document.getElementById("chatBody");

  if (userInput.value.trim() !== "") {
    const userMessage = document.createElement("div");
    userMessage.textContent = userInput.value;
    userMessage.style.cssText = "background: #229ea6; color: white; padding: 8px; border-radius: 5px; margin-bottom: 5px; align-self: flex-end;";
    chatBody.appendChild(userMessage);

    const userText = userInput.value.trim().toLowerCase();
    userInput.value = "";

    if (userText === "book consultant") {
      botReply(chatBody, "Enter your current location:");
    } else if (cityHospitals[userText]) {
      showHospitals(chatBody, userText);
    } else {
      botReply(chatBody, "Sorry, I didn't understand that.");
    }

    chatBody.scrollTop = chatBody.scrollHeight;
  }
}


// Function to display options
function showOptions(chatBody) {
  // Create a container for the options
  const optionsContainer = document.createElement("div");
  optionsContainer.style.cssText =
    "background: #ffffff; padding: 10px; border: 1px solid #ccc; border-radius: 8px; margin: 10px 0;";

  // Add the heading
  const heading = document.createElement("p");
  heading.textContent = "Please choose an option:";
  heading.style.cssText = "font-weight: bold; margin-bottom: 10px;";

  optionsContainer.appendChild(heading);

  // Options list
  const options = ["Book Consultant", "Health Queries"];

  // Loop through the options and create buttons
  options.forEach((option) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.style.cssText =
      "background: #f0f0f0; color: black; padding: 8px 12px; border: none; margin: 5px 0; border-radius: 5px; cursor: pointer; display: block; width: 100%; text-align: left;";

    optionButton.addEventListener("click", function () {
      // Display the user's selected option as a message bubble
      const userMessage = document.createElement("div");
      userMessage.textContent = option.toLowerCase();
      userMessage.style.cssText =
        "background: #229ea6; color: white; padding: 8px; border-radius: 5px; margin-bottom: 5px; align-self: flex-end;";
      chatBody.appendChild(userMessage);

      // Respond based on the selected option
      if (option === "Book Consultant") {
        botReply(chatBody, "Enter your current location:");
      } else if (option === "Health Queries") {
        botReply(chatBody, "Please describe your health query:");
      }

      // Scroll to the bottom of the chat
      chatBody.scrollTop = chatBody.scrollHeight;
    });

    optionsContainer.appendChild(optionButton);
  });

  // Append the entire options container to the chat body
  chatBody.appendChild(optionsContainer);
}

// Function to display hospitals for a city
function showHospitals(chatBody, city) {
  // Create a container for the hospitals list
  const hospitalContainer = document.createElement("div");
  hospitalContainer.style.cssText =
    "background: #ffffff; padding: 10px; border: 1px solid #ccc; border-radius: 8px; margin: 10px 0;";

  // Add the heading
  const heading = document.createElement("p");
  heading.textContent = `Hospitals in ${city.charAt(0).toUpperCase() + city.slice(1)}:`;
  heading.style.cssText = "font-weight: bold; margin-bottom: 10px;";

  hospitalContainer.appendChild(heading);

  // Loop through the hospitals and add buttons
  Object.keys(cityHospitals[city]).forEach((hospital) => {
    const hospitalButton = document.createElement("button");
    hospitalButton.textContent = hospital;
    hospitalButton.style.cssText =
      "background: #f0f0f0; color: black; padding: 8px 12px; border: none; margin: 5px 0; border-radius: 5px; cursor: pointer; display: block; width: 100%; text-align: left;";

    hospitalButton.addEventListener("click", function () {
      showDoctors(chatBody, city, hospital);
    });

    hospitalContainer.appendChild(hospitalButton);
  });

  // Append the entire container to the chat body
  chatBody.appendChild(hospitalContainer);
}

// Function to display doctors for a hospital
function showDoctors(chatBody, city, hospital) {
  // Create a container for the doctors' list
  const doctorContainer = document.createElement("div");
  doctorContainer.style.cssText =
    "background: #ffffff; padding: 10px; border: 1px solid #ccc; border-radius: 8px; margin: 10px 0;";

  // Add the heading
  const heading = document.createElement("p");
  heading.textContent = `Doctors available at ${hospital}:`;
  heading.style.cssText = "font-weight: bold; margin-bottom: 10px;";

  doctorContainer.appendChild(heading);

  // Loop through the doctors and add buttons
  cityHospitals[city][hospital].forEach((doctor) => {
    const doctorButton = document.createElement("button");
    doctorButton.textContent = `${doctor.name} (${doctor.specialty})`;
    doctorButton.style.cssText =
      "background: #f0f0f0; color: black; padding: 8px 12px; border: none; margin: 5px 0; border-radius: 5px; cursor: pointer; display: block; width: 100%; text-align: left;";

    doctorButton.addEventListener("click", function () {
      showDateSelector(chatBody, city, hospital, doctor);
    });

    doctorContainer.appendChild(doctorButton);
  });

  // Append the entire container to the chat body
  chatBody.appendChild(doctorContainer);
}

// Function to show date selector
function showDateSelector(chatBody, city, hospital, doctor) {
  botReply(chatBody, `Select a date for your appointment with ${doctor.name} (${doctor.specialty}):`);
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.min = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split("T")[0];
  dateInput.style.cssText = "margin: 5px 0; padding: 5px;";

  dateInput.addEventListener("change", function () {
    showTimeSlots(chatBody, city, hospital, doctor, dateInput.value);
  });

  chatBody.appendChild(dateInput);
}

// Function to display time slots
function showTimeSlots(chatBody, city, hospital, doctor, date) {
  // Create a container for the time slots
  const slotsContainer = document.createElement("div");
  slotsContainer.style.cssText =
    "background: #ffffff; padding: 10px; border: 1px solid #ccc; border-radius: 8px; margin: 10px 0;";

  // Add the heading
  const heading = document.createElement("p");
  heading.textContent = `Available time slots for ${doctor.name} on ${date}:`;
  heading.style.cssText = "font-weight: bold; margin-bottom: 10px;";

  slotsContainer.appendChild(heading);

  // Loop through the time slots and create buttons
  timeSlots.forEach((slot) => {
    const slotButton = document.createElement("button");
    slotButton.textContent = slot;
    slotButton.style.cssText =
      "background: #f0f0f0; color: black; padding: 8px 12px; border: none; margin: 5px 0; border-radius: 5px; cursor: pointer; display: block; width: 100%; text-align: left;";

    slotButton.addEventListener("click", function () {
      // Trigger the next step in the booking process
      confirmOrCancelBooking(chatBody, city, hospital, doctor, date, slot);
    });

    slotsContainer.appendChild(slotButton);
  });

  // Append the entire slots container to the chat body
  chatBody.appendChild(slotsContainer);
}

// Function to confirm or cancel booking
function confirmOrCancelBooking(chatBody, city, hospital, doctor, date, slot) {
  botReply(chatBody, `Confirm your booking:

📍 **City**: ${city.charAt(0).toUpperCase() + city.slice(1)}
🏥 **Hospital**: ${hospital}
👨‍⚕️ **Doctor**: ${doctor.name} (${doctor.specialty})
📅 **Date**: ${date}
⏰ **Time Slot**: ${slot}`);

  const confirmButton = document.createElement("button");
  confirmButton.textContent = "Confirm";
  confirmButton.style.cssText =
    "background: #229ea6; color: white; padding: 8px 12px; border: none; margin: 5px 0; border-radius: 5px; cursor: pointer;";

  confirmButton.addEventListener("click", function () {
    botReply(chatBody, `✅ Appointment confirmed:

📍 **City**: ${city.charAt(0).toUpperCase() + city.slice(1)}
🏥 **Hospital**: ${hospital}
👨‍⚕️ **Doctor**: ${doctor.name} (${doctor.specialty})
📅 **Date**: ${date}
⏰ **Time Slot**: ${slot}`);
  });

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.style.cssText =
    "background: #f44336; color: white; padding: 8px 12px; border: none; margin: 5px 0; border-radius: 5px; cursor: pointer;";

  cancelButton.addEventListener("click", function () {
    botReply(chatBody, "Thank you for using Nizzy.");
  });

  chatBody.appendChild(confirmButton);
  chatBody.appendChild(cancelButton);
}

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

// JavaScript for Closing Chat
document.getElementById("closeButton").addEventListener("click", function () {
  document.getElementById("chatContainer").style.display = "none";
})









