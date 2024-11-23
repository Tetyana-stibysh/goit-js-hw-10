const form = document.querySelector('.form');
// console.dir(form);
form.addEventListener('submit', handlerSubmit);
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function handlerSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const inputValue = form.elements.delay.value;
  const checkBox = form.elements.state.value;
  //   console.log(form.elements.delay.value);

  makePromise({
    value: checkBox,
    delay: inputValue,
    shouldResolve: checkBox === 'fulfilled',
  })
    .then(value =>
      iziToast.show({
        class: 'message',
        message: `✅ Fulfilled promise in ${inputValue}ms`,
        messageColor: '#ffffff',
        messageSize: '16px',
        messageLineHeight: '1.5',
        backgroundColor: '#ef4040',
        position: 'topRight',
      })
    )
    .catch(error =>
      iziToast.show({
        class: 'message',
        message: `❌ Rejected promise in ${inputValue}ms`,
        messageColor: '#ffffff',
        messageSize: '16px',
        messageLineHeight: '1.5',
        backgroundColor: '#59A10D',
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
