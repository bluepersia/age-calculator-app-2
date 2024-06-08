import moment from 'moment';
const form = document.querySelector ('.form');

form.addEventListener ('submit', submit);
const inputDay = document.getElementById ('form__input-day');
const inputMonth = document.getElementById ('form__input-month');
const inputYear = document.getElementById ('form__input-year');
const errorMainEl = document.querySelector ('.form__error-main');

const resultYearEl = document.querySelector ('.results__years .results__highlight');
const resultMonthEl = document.querySelector ('.results__months .results__highlight');
const resultDayEl = document.querySelector ('.results__days .results__highlight');

const resultYearLabel = document.querySelector ('.results__years .results__label');
const resultMonthLabel = document.querySelector ('.results__months .results__label');
const resultDayLabel = document.querySelector ('.results__days .results__label');


function submit (e) 
{
    e.preventDefault ();

    resultYearEl.textContent = '--';
    resultMonthEl.textContent = '--';
    resultDayEl.textContent = '--';;

    checkInput (inputDay, 'day');
    checkInput (inputMonth, 'month');
    checkInput (inputYear, 'year');

    form.classList.remove ('invalid');

    const m = moment (`${inputYear.value}-${inputMonth.value}-${inputDay.value}`);

    
    if (!m.isValid ())
    {
        form.classList.add ('invalid');
        errorMainEl.textContent = 'Must be a valid date';
            return;
    }

    const then = new Date (Number(inputYear.value), Number(inputMonth.value), Number(inputDay.value));

    if (then >= Date.now())
    {
        form.classList.add ('invalid');
        errorMainEl.textContent = 'Must be in the past';
        return;
    }
    
    const diff = moment.duration (Date.now() - then);

    const years = diff.years ();
    const months = diff.months ();
    const days = diff.days ();


    resultYearEl.textContent = years;
    resultMonthEl.textContent = months;
    resultDayEl.textContent = days;

    resultYearLabel.textContent = years === 1 ? 'year' : 'years';
    resultMonthLabel.textContent = months === 1 ? 'month' : 'months';
    resultDayLabel.textContent = days === 1 ? 'day' : 'days';
}


function checkInput (input, type)
{
    input.parentElement.classList.remove ('invalid');

    let err;

    if (input.dataset.required && !input.value)
        err =  "This field is required";

    if (!err)
    {
        if ((input.dataset.min && Number(input.value) < Number (input.dataset.min)) || (input.dataset.max && Number(input.value) > Number (input.dataset.max)))
            err = `Must be a valid ${type}`;
    } 

    
    if (err)
    {
        console.log (err);
        input.parentElement.classList.add ('invalid');
        input.parentElement.querySelector ('.form__input-error').textContent = err;
    }
}