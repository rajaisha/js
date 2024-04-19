const Ualphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const Lalphabet="abcdefghijklmnopqrstuvwxyz"
const num="0123456789"
const symbol= "@!#%$&"
const ALLchar=Ualphabet+Lalphabet+num+symbol
const passlength=8
function password(){
    let rpassword="";
    rpassword+=Ualphabet[Math.floor(Math.random()*Ualphabet.length)];
    rpassword+=Lalphabet[Math.floor(Math.random()*Lalphabet.length)];
    rpassword+=num[Math.floor(Math.random()*num.length)];
    rpassword+=symbol[Math.floor(Math.random()*symbol.length)];
    while(passlength>rpassword.length){
        rpassword+=ALLchar[Math.floor(Math.random()*ALLchar.length)];
    }
    document.getElementById('input').value=rpassword;
}

