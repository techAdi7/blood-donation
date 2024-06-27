let points = 0;

function updatePointsDisplay() {
    document.getElementById('points').innerText = points;
}

function donateBlood() {
    points += 1;
    updatePointsDisplay();
}

function redeemReward(cost) {
    if (points >= cost) {
        points -= cost;
        updatePointsDisplay();
        alert('Reward redeemed!');
    } else {
        alert('Not enough points to redeem this reward.');
    }
}

updatePointsDisplay();
