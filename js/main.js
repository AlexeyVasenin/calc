(function () {
 
var inchToMm = 25.4;
 
function calcInch() {
var sizeInch = document.getElementById('sizeinch').value;
var toleranceUpInch = document.getElementById('toleranceupinch').value;
var toleranceDownInch = document.getElementById('tolerancedowninch').value; 
var sizeUpInch = Number(sizeInch) + Number(toleranceUpInch); 
var sizeDownInch = Number(sizeInch) + Number(toleranceDownInch);

document.getElementById('sizeupinch').value = sizeUpInch;
document.getElementById('sizedowninch').value = sizeDownInch; 

}

function setCalcInchToMm() {
var sizeInch = document.getElementById('sizeinch').value;
var toleranceUpInch = document.getElementById('toleranceupinch').value;
var tolerantDownInch = document.getElementById('tolerancedowninch').value; 

var size = sizeInch * inchToMm;
document.getElementById('size').value = size.toFixed(4);

var toleranceUp = document.getElementById('toleranceup').value = toleranceUpInch * inchToMm;
var toleranceDown = document.getElementById('tolerancedown').value = tolerantDownInch*inchToMm;

var calc1 = Number(size) + Number(toleranceUp);
var calc2 = Number(size) + Number(toleranceDown);

document.getElementById('sizeup').value = calc1.toFixed(4);
document.getElementById('sizedown').value = calc2.toFixed(4);

}

setInterval(calcInch, 1000);
setInterval(setCalcInchToMm, 1000);
})();