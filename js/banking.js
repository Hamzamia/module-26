document.getElementById('deposite-button').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-input');
    const depositInputText = depositeInput.value;
    const currentDepositeInput = parseFloat(depositInputText);

    //get currnent deposite 
    const totalDeposite = document.getElementById('deposite-total');
    const totalDepositeText = totalDeposite.innerText;
    const previousTotalDeposite = parseFloat(totalDepositeText);

    totalDeposite.innerText = previousTotalDeposite + currentDepositeInput;




    //upadate total balace 

    const totalbalance = document.getElementById('total-amount');
    const totalbalanceText = totalbalance.innerText;
    const previousTotalBalance = parseFloat(totalbalanceText);

    totalbalance.innerText = previousTotalBalance + currentDepositeInput;

    //get withdraw




    // set value blanck

    depositeInput.value = '';

})



document.getElementById('withdraw-button').addEventListener('click', function () {
    const newWithdraw = document.getElementById('withdraw-input');
    const newWithdrawText = newWithdraw.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);

    const totalWithdrawbalance = document.getElementById('withdraw-total');
    const totalWithdrawbalanceText = totalWithdrawbalance.innerText;
    const totalWithdrawAmount = parseFloat(totalWithdrawbalanceText);

    totalWithdrawbalance.innerText = totalWithdrawAmount + newWithdrawAmount;

    //update balance total after withdraw

    const balanceTotal = document.getElementById('total-amount');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - newWithdrawAmount;
    newWithdraw.value = '';

    // console.log(newWithdrawText);
})