const form = document.querySelector('.form');

form.addEventListener('submit', handlerSubmit);
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconResolv from '../img/ok.svg';
import iconReject from '../img/error.svg';

function handlerSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const inputValue = form.elements.delay.value;
  const checkBox = form.elements.state.value;

  makePromise({
    value: checkBox,
    delay: inputValue,
    shouldResolve: checkBox === 'fulfilled',
  })
    .then(value =>
      iziToast.show({
        message: `Fulfilled promise in ${inputValue}ms`,
        messageColor: '#ffffff',
        title: 'OK',
        titleColor: '#ffffff',
        iconUrl: iconResolv,
        backgroundColor: '#59A10D',
        position: 'topRight',
      })
    )
    .catch(error =>
      iziToast.show({
        message: `Rejected promise in ${inputValue}ms`,
        messageColor: '#ffffff',
        title: 'Error',
        titleColor: '#ffffff',
        iconUrl: iconReject,
        backgroundColor: '#EF4040',
        position: 'topRight',
      })
    );
  form.reset();
}

const makePromise = ({ value, delay, shouldResolve = true }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });
};
