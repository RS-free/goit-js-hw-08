import throttle from 'lodash.throttle';

const elForm = document.querySelector('.feedback-form');
const elEmail = document.querySelector('.feedback-form input');
const elTextarea = document.querySelector('.feedback-form textarea');

const storageKey = 'feedback-form-state';
let informData = {};
dataForm();

elForm.addEventListener('input', throttle(onInputData, 500));
elForm.addEventListener('submit', onSubForm);

function onInputData(evt) {
  informData[evt.target.name] = evt.target.value;
  localStorage.setItem(storageKey, JSON.stringify(informData));
}
function onSubForm(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(storageKey)));
  evt.target.reset();
  informData = {};
  localStorage.removeItem(storageKey);
}

function dataForm() {
  const savedData = JSON.parse(localStorage.getItem(storageKey));
  if (savedData === null || savedData === undefined) {
    return;
  }
  informData = savedData;

  if (savedData) {
    elEmail.value = savedData.email ? savedData.email : elEmail.value;
    elTextarea.value = savedData.message ? savedData.message : elTextarea.value;
  }
}
