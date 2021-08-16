
// add event handler deposit button
document.getElementById('deposit-button').addEventListener('click', function(){
    // get input
    const depositInput = document.getElementById('deposit-input');
    const depositText = depositInput.value;
    const newDepositAmount = parseFloat(depositText);
    
    // get deposit
    const depositAdd = document.getElementById('deposit-add');
    const depositGetText = depositAdd.innerText;
    const previousDepositAmount = parseFloat(depositGetText);
    depositAdd.innerText = newDepositAmount + previousDepositAmount;
    
    // get balance
    const balanceAdd = document.getElementById('balance-add');
    const balanceGetText = balanceAdd.innerText;
    const balanceText = parseFloat(balanceGetText);
    const newBalanceTotal = balanceText + newDepositAmount;
    balanceAdd.innerText = newBalanceTotal;

     // clear value
     depositInput.value = '';

});

    // add event handler withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
    // get withdrawInput
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawText);

    // get withdraw
    const withdrawAdd = document.getElementById('withdraw-add');
    const withrawGetText = withdrawAdd.innerText;
    const previousWithdrawAmount = parseFloat(withrawGetText);
    withdrawAdd.innerText = newWithdrawAmount + previousWithdrawAmount;

    // get balance
    const balanceMinus = document.getElementById('balance-add');
    const balanceSetText = balanceMinus.innerText;
    const balanceAmount = parseFloat(balanceSetText);
    const newMinusBalanceTotal = balanceAmount - newWithdrawAmount;
    balanceMinus.innerText = newMinusBalanceTotal;
    // clear value
    withdrawInput.value = '';
})