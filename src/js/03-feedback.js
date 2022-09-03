import throttle from 'lodash.throttle';


const refs = {
form: document.querySelector('.feedback-form'),
email: document.querySelector('input[name="email"]'),
message: document.querySelector('textarea[name="message"]'),
}

const LOCAL_KEY = 'videoplayer-current-time';

refs.form.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('submit', onSubmit);   
 


function onTextareaInput(e) {
    e.preventDefault();
    const objectSave = {email: refs.email.value, message: refs.message.value};
    localStorage.setItem(LOCAL_KEY, JSON.stringify(objectSave));
};

function onSubmit(e) {
    e.preventDefault();
    console.log({
        email: refs.email.value, 
        message: refs.message.value});
    e.currentTarget.reset();
    localStorage.removeItem(LOCAL_KEY);
};

function onFormFeedback () {
    const objectSaveValue = localStorage.getItem(LOCAL_KEY);
    const parseOjectSave = JSON.parse(objectSaveValue);

    if(objectSaveValue) {
        refs.email.value =  parseOjectSave.email;
        refs.message.value =  parseOjectSave.message;
    }
};



