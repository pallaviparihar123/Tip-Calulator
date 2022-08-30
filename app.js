const calculateTip=() => {
    let billAmount = document.getElementById("billAmount").value;
    let serviceQuality = document.getElementById("serviceQuality").value;
    let numPeople = document.getElementById("totalPeople").value;

    if(billAmount === ""){
        return window.alert("Please enter how much you paid.");
    }
    if (isNaN(billAmount) || isNaN(numPeople)) {
        return window.alert('Please enter a numeric value.');
    }
    if ( serviceQuality == 0){
        return window.alert('Tell us how good it was!');
    }
    
if(numPeople ===""|| numPeople <= 1){
    numPeople = 1;
    document.getElementById('each').style.display = 'none';
}
else{
    document.getElementById('each').style.display = "block";
}

let total = (billAmount *serviceQuality) / numPeople;
total = Math.round(total * 100) / 100;
total = total.toFixed(2);

document.getElementById('totalTip').style.display = 'block';
document.getElementById('tip').innerHTML = total;
}


    document.getElementById("totalTip").style.display = 'none';
document.getElementById("each").style.display = 'none';


document.getElementById("calculate").onclick = () =>calculateTip();
