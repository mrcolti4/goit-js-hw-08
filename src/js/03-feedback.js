import { throttle } from 'lodash';
import { refs } from './refs';
import localStorageApi from './localStorageApi';
import { isObjEmpty } from './isObjEmpty';

const FORM_KEY = 'feedback-form-state';

const localStorageValues = localStorageApi.load(FORM_KEY);
const formObj = isObjEmpty(localStorageValues)
  ? { email: '', message: '' }
  : { ...localStorageValues };

const clearObj = () => {
  formObj.email = '';
  formObj.message = '';
  localStorageApi.remove(FORM_KEY);
};

const showObj = () => {
  console.log(formObj);
};

const handleFeedBackInputs = ({ target }) => {
  if (target.nodeName === 'INPUT') {
    formObj.email = target.value;
    localStorageApi.save(FORM_KEY, formObj);
  }
  if (target.nodeName === 'TEXTAREA') {
    formObj.message = target.value;
    localStorageApi.save(FORM_KEY, formObj);
  }
};

const handleForm = e => {
  const target = e.target;
  e.preventDefault();
  target.reset();
  if (formObj.email !== '' && formObj.message !== '') {
    showObj();
    clearObj();
  }
};

const onDocumentLoadFillForm = e => {
  refs.feedBackInput.value = formObj.email;
  refs.feedBackTextArea.value = formObj.message;
};

refs.feedBackForm.addEventListener(
  'input',
  throttle(handleFeedBackInputs, 500)
);
refs.feedBackForm.addEventListener('submit', handleForm);
document.addEventListener('DOMContentLoaded', onDocumentLoadFillForm);
