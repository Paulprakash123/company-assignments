function check(){

    let p1 = Number(document.getElementById("p1").value);
    let p2 = Number(document.getElementById("p2").value);
    let p3 = Number(document.getElementById("p3").value);
    let p4 = Number(document.getElementById("p4").value);
    let p5 = Number(document.getElementById("p5").value);

    let q1 = Number(document.getElementById("q1").value);
    let q2 = Number(document.getElementById("q2").value);
    let q3 = Number(document.getElementById("q3").value);
    let q4 = Number(document.getElementById("q4").value);
    let q5 = Number(document.getElementById("q5").value);

    let pricearr = [p1, p2, p3, p4, p5];
    let quantityarr = [q1, q2, q3, q4, q5];

    let totalamount = 0;

    for(let i = 0; i < pricearr.length; i++){
        totalamount = totalamount + (pricearr[i] * quantityarr[i]);
    }

    let final = totalamount;

    if(final > 5000){
        final = final - (final * 0.10);
    }

    let coup = document.getElementById("coupon").value;
    

    if(coup === "SAVE100"){
        final = final - 100;
        
    }
    else{
        document.getElementById("result1").innerText="Wrong Coupon Code.";
        return;
    }

    if(final < 0){
        final = 0;
    }

    

    document.getElementById("result1").innerHTML =
        "<h3>Total Amount: ₹" + totalamount + "</h3>";

    document.getElementById("result2").innerHTML =
        "<h3>Final Payable: ₹" + final + "</h3>";

    return false;
}