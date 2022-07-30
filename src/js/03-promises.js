import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = {
  firstDelay: document.querySelector(`[name=delay]`),
  stepValue: document.querySelector(`[name=step]`),
  amountValue: document.querySelector(`[name=amount]`),
  button:document.querySelector(`.form`),
}


refs.button.addEventListener("submit", trueSubmit);
  
function trueSubmit(evt) {
    
  evt.preventDefault();
  
  let valueFirsDelay = Number(refs.firstDelay.value);
  const valueStep = Number(refs.stepValue.value);
  const valueAmount = Number(refs.amountValue.value);
  
  for (let i = 1; i <= valueAmount; i += 1) {
      createPromise(i, valueFirsDelay)
        .then(makeSuccessPromise)
        .catch(makeErrorPromises);  
        valueFirsDelay += valueStep;
      };
};

function makeSuccessPromise(resolve) {
  Notify.success(resolve, {useIcon: false});
};

function makeErrorPromises(reject) {
  Notify.failure(reject, {useIcon: false});
};



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve,reject)=> {
    setTimeout(() =>{
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      };
    }, delay)
  });
 
};
