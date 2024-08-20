// Get the dropdown button and content
const dropdownBtn4 = document.querySelector('.dropdown-btn-4');
const dropdownContent4 = document.getElementById('dropdownContent-4');

// Toggle the dropdown on button click
dropdownBtn4.addEventListener('click', () => {
    dropdownContent4.style.display = dropdownContent4.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-btn-4')) {
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        }
    }
});

// Get the dropdown button and content
const dropdownBtn1 = document.querySelector('.dropdown-btn-1');
const dropdownContent1 = document.getElementById('dropdownContent-1');

// Toggle the dropdown on button click
dropdownBtn1.addEventListener('click', () => {
    dropdownContent1.style.display = dropdownContent1.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-btn-1')) {
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        }
    }
});

// Get the dropdown button and content
const dropdownBtn2 = document.querySelector('.dropdown-btn-2');
const dropdownContent2 = document.getElementById('dropdownContent-2');

// Toggle the dropdown on button click
dropdownBtn2.addEventListener('click', () => {
    dropdownContent2.style.display = dropdownContent2.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-btn-2')) {
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        }
    }
});

// Get the dropdown button and content
const dropdownBtn3 = document.querySelector('.dropdown-btn-3');
const dropdownContent3 = document.getElementById('dropdownContent-3');

// Toggle the dropdown on button click
dropdownBtn3.addEventListener('click', () => {
    dropdownContent3.style.display = dropdownContent3.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-btn-3')) {
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        }
    }
});
