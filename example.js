var a= prompt("enter the no of that we want to create OTP ?")
function otp(){
    var x="";
    for(let i=1; i<=a;i++){
        var y=Math.floor(Math.random()*9)
        x+=y;
    }
    document.getElementById('input').value=x;
}