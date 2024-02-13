function validateForm() {
    
    let principleAmount = document.getElementById("principleAmount");
    let interestRate = document.getElementById('interestRate');
    let loanLength = document.getElementById('loanLength');
    let postalCode = document.getElementById('postalCode');
    let validationAlert = document.getElementById('validationAlert');
    let ResultDisplay = document.getElementById('monthlyPayment');
    let monthlyPayment = 0;
    let n = 0;
    let r = 0;

    let errors = [];
    validationAlert.className = 'alert d-none'; 

    if ( principleAmount.value < 0 || !principleAmount.value || isNaN(principleAmount.value)) 
    {
        errors.push('Mortgage Amount is not valid, has to be higher than Zero');
        principleAmount.classList.add('is-invalid');
    } else 
    {
        principleAmount.classList.remove('is-invalid');
        principleAmount.classList.add('is-valid');
    }
    if (!interestRate.value || interestRate.value <= 0 || isNaN(interestRate.value)) 
    {
        errors.push('Interest Rate is not valid, has to be higher than Zero');
        interestRate.classList.add('is-invalid');
    } else 
    {
        interestRate.classList.remove('is-invalid');
        interestRate.classList.add('is-valid');
    }
    if (!loanLength.value || loanLength.value < 5 || loanLength.value > 30 || isNaN(loanLength.value)) 
    {
        errors.push('Loan Length must be between 5 years to 30 years');
        loanLength.classList.add('is-invalid');
    } else 
    {
        loanLength.classList.remove('is-invalid');
        loanLength.classList.add('is-valid');
    }
    if (!postalCode.value || postalCode.value[0] !== 'L' || postalCode.value.length !== 7) 
    {
        errors.push('Must be located in Hamilton Example "L0X 0X0"');
        postalCode.classList.add('is-invalid');
    } else 
    {
        postalCode.classList.remove('is-invalid');
        postalCode.classList.add('is-valid');
    }
    if (errors.length > 0) 
    {
        validationAlert.innerHTML = '<ul>' + errors.map(error => `<li>${error}</li>`).join('') + '</ul>';
        validationAlert.classList.add('alert-danger');
        validationAlert.classList.remove('d-none');
    } else 
    {
        validationAlert.textContent = 'Mortgage calculation successful!'; 
        validationAlert.classList.add('alert-success');
        validationAlert.classList.remove('alert-danger');
        validationAlert.classList.remove('d-none');
        r = interestRate.value / 100 / 12
        n = loanLength.value * 12
        monthlyPayment = principleAmount.value * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        monthlyPayment = Math.round(monthlyPayment);
        ResultDisplay.innerHTML = "Monthly Payment is: $"+ monthlyPayment;
    }
}
function refreshPage(){
    window.location.reload();
}