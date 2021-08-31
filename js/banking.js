document.getElementById('deposite-button').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-input');
    const depositInputText = depositeInput.value;
    const currentDepositeInput = parseFloat(depositInputText);

    //get currnent deposite 
    const totalDeposite = document.getElementById('deposite-total');
    const totalDepositeText = totalDeposite.innerText;
    const previousTotalDeposite = parseFloat(totalDepositeText);

    totalDeposite.innerText = previousTotalDeposite + currentDepositeInput;




    //upadate toytal balace 

    const totalbalance = document.getElementById('total-amount');
    const totalbalanceText = totalbalance.innerText;
    const previousTotalBalance = parseFloat(totalbalanceText);

    totalbalance.innerText = previousTotalBalance + currentDepositeInput;




    // set value blanck

    depositeInput.value = '';

})