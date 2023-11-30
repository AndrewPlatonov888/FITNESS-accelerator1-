//
const subscriptions = document.querySelector('[data-subscription="taplist"]');
const pricelists = document.querySelector('[data-subscription="pricelist"]');


function clearActiveSubscription() {
  const activeSubscription = subscriptions.querySelector('.is-active');
  const activePricelist = pricelists.querySelector('.is-open');
  activeSubscription.classList.remove('is-active');
  activePricelist.classList.remove('is-open');
}

function selectSubscription() {
  subscriptions.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('subscription__time')) {
      clearActiveSubscription();
      evt.target.classList.add('is-active');
      evt.target.getAttribute('data-time');
      const data = `${'[data-time='}${evt.target.getAttribute('data-time')}${']'}`;
      pricelists.querySelector(data).classList.add('is-open');
    }
  });
}

function hoverSubscriptionOption() {
  pricelists.addEventListener('mouseover', function (evt) {
    if (evt.target.classList.contains('pricelist__item')) {
      evt.target.classList.add('is-active');
      evt.target.querySelector('.pricelist__link').classList.add('is-active');
    }
  });
  pricelists.addEventListener('mouseout', function (evt) {
    if (evt.target.classList.contains('pricelist__item') && !evt.target.classList.contains('pricelist__link')) {
      evt.target.classList.remove('is-active');
      evt.target.querySelector('.pricelist__link').classList.remove('is-active');
    }
  });
}


export {selectSubscription, hoverSubscriptionOption};
