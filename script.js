
function validateEmail(email) 
{
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

document.querySelector('.page__form__button').addEventListener('click', event => {
    if (validateEmail(document.querySelector('.page__form__input').value)){
        document.querySelector('.page__form__validation').classList = 'page__form__validation visible valid';
        document.querySelector('.page__form__validation').textContent = 'Email sent';
        document.querySelector('.page__form__input').classList.remove('invalid');


    }
    else{
        document.querySelector('.page__form__validation').classList = 'page__form__validation visible invalid';
        document.querySelector('.page__form__validation').textContent = 'Oops! Please check your email';
        document.querySelector('.page__form__input').classList.add('invalid');
    }

})
document.querySelector('.page__form__input').addEventListener('change', function(){
    if (validateEmail(document.querySelector('.page__form__input').value)){
        document.querySelector('.page__form__validation').classList = 'page__form__validation visible valid';
        document.querySelector('.page__form__validation').textContent = 'Email sent';
        document.querySelector('.page__form__input').classList.remove('invalid');

    }
    else{
        document.querySelector('.page__form__validation').classList = 'page__form__validation visible invalid';
        document.querySelector('.page__form__validation').textContent = 'Oops! Please check your email';
        document.querySelector('.page__form__input').classList.add('invalid');
    }
})
