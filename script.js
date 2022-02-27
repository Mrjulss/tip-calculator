var currency = '$';
function switchcurrency(){
    if(document.getElementById("togBtn").checked){
        currency = '€';
    }
    else{
        currency = '$';
    }
    document.getElementById("priceinput").innerHTML = `<h4>Price:</h4><input type="number" id="price" value="20" min="0">${currency}`
}
function calc(){
    var price = document.getElementById("price");
    var result = document.getElementById("result");


    if(document.getElementById('three').checked) {
        var tip = Math.floor(price.value*3)/100;
    }else if(document.getElementById('five').checked) {
        var tip = Math.floor(price.value*5)/100;
    }else if(document.getElementById('seven').checked) {
        var tip = Math.floor(price.value*7)/100;
    }else if(document.getElementById('unique').checked) {
        var unique = document.getElementById('uniqueval');
        var tip = Math.floor(price.value*unique.value)/100;
    }
    let total = parseFloat(price.value) + parseFloat(tip);
    result.innerHTML = `<p>tip equals ${tip} ${currency} </p> <a id="total"><h4>Total:</h4> <p>${total} ${currency}</p></a>`;
}