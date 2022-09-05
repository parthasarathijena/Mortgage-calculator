var pp=0,dp=0,rtime=0,irate=0;
var M=0,P=0;
function purchase(){
    pp = document.getElementById('purchase_price');
    pp=pp.value;
    document.getElementById('input1').innerHTML=pp;
    change();
}
function down(){
    dp = document.getElementById('down_payment');
    dp=dp.value;
    document.getElementById('input2').innerHTML=dp;
    change();
}
function time(){
    rtime = document.getElementById('repayment_time');
    rtime=rtime.value;
    document.getElementById('input3').innerHTML=rtime;
    change();
}
function rate(){
    irate = document.getElementById('interest_rate');
    irate=irate.value;
    document.getElementById('input4').innerHTML=irate;
    change();
}
function change(){
    var pl = pp-dp;
    var mul = Math.pow(1+irate/1200,rtime*12);
    var M = Number(pl*(irate/1200)*mul)/(mul-1);
    document.getElementById('amnt').innerHTML="$"+pl;
    document.getElementById('monmor').innerHTML="$"+ (M|0);
    console.log(pp);
    console.log(dp);
    console.log(rtime);
    console.log(irate);
}
