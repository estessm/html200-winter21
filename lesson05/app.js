let balance = 0;

function bankOpen(){
let bankOpen = true;
amountWithdrawn = 0;
amountDeposit = 0;
while(bankOpen){
    let option = prompt('Enter Q to quit, W to withdraw, D to deposit, or B to view balance');
    switch(option){
        case 'Q':
            alert('you quit');
            bankOpen = false;
            break;
        case 'B':
            alert('Your balance is: $' + balance);
            break;
        case 'W':
            amountWithdrawn = prompt('How much are you withdrawing?');
            balance = Number(balance) - Number(amountWithdrawn);
            alert('You withdrew $' + amountWithdrawn + ' and your new balance is $' + balance);
            break;
        case 'D':
            amountDeposit = prompt('How much are you depositing?');
            balance = Number(balance) + Number(amountDeposit);
            alert('You deposited $' + amountDeposit + ' and your new balance is $' + balance);
            break;
        default:
            alert('please enter a valid letter. (Q, W, D, or B)');
    }

}
}
