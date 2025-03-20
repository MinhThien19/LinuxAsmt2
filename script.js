// ChatGPT Conversation Links:
// 1. https://chatgpt.com/share/67d64ef8-101c-800d-8c92-a2c5ca15a071


const form = document.getElementById('madlib-form');
const inputs = form.querySelectorAll('input, select');
const submitButton = document.getElementById('submit-btn');
const storyContainer = document.getElementById('story-container');
const formContainer = document.getElementById('madlib-form-container');
const resetButton = document.getElementById('reset-btn');


const validationRules = {
    'student-name': /^[A-Z][a-zA-Z]+$/, 
    'professor-name': /^[A-Z][a-zA-Z. ]+$/, 
    'adjective': /^.{5,}$/, 
    'verb': /^\w+ing$/, 
    'number': /^(?:[1-9][0-9]?|100)$/, 
    'phone-number': /^\d{3}-\d{3}-\d{4}$/, 
    'cartoon-character': /^.+$/, 
    'song-title': /^.+$/ 
};

function validateField(input) {
    const rule = validationRules[input.id];
    const errorMessage = document.getElementById(`${input.id}-error`);
    
    if (rule && !rule.test(input.value.trim())) {
        errorMessage.textContent = 'Invalid input';
        return false;
    } else {
        errorMessage.textContent = '';
        return true;
    }
}

function checkFormValidity() {
    let allValid = true;
    inputs.forEach(input => {
        if (input.id in validationRules) {
            if (!validateField(input)) {
                allValid = false;
            }
        }
    });
    submitButton.disabled = !allValid;
}

inputs.forEach(input => {
    if (input.id in validationRules) {
        input.addEventListener('input', () => {
            validateField(input);
            checkFormValidity();
        });
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    document.getElementById('story-student-name').textContent = document.getElementById('student-name').value;
    document.getElementById('story-student-name-2').textContent = document.getElementById('student-name').value;
    document.getElementById('story-professor-name').textContent = document.getElementById('professor-name').value;
    document.getElementById('story-professor-name-2').textContent = document.getElementById('professor-name').value;
    document.getElementById('story-adjective').textContent = document.getElementById('adjective').value;
    document.getElementById('story-verb').textContent = document.getElementById('verb').value;
    document.getElementById('story-number').textContent = document.getElementById('number').value;
    document.getElementById('story-phone-number').textContent = document.getElementById('phone-number').value;
    document.getElementById('story-cartoon-character').textContent = document.getElementById('cartoon-character').value;
    document.getElementById('story-song-title').textContent = document.getElementById('song-title').value;
    document.getElementById('story-colour').textContent = document.getElementById('colour').value;
    
  
    document.body.style.backgroundColor = document.getElementById('colour').value;
    
   
    formContainer.classList.add('hidden');
    storyContainer.classList.remove('hidden');
});


resetButton.addEventListener('click', () => {
    form.reset();
    checkFormValidity(); 
    document.body.style.backgroundColor = '';
    formContainer.classList.remove('hidden');
    storyContainer.classList.add('hidden');
});

checkFormValidity();
