function check(){
            let planname=document.getElementById("plan").value;
            let d1=+document.getElementById("d1").value;
            let d2=+document.getElementById("d2").value;
            let d3=+document.getElementById("d3").value;
            let d4=+document.getElementById("d4").value;
            let d5=+document.getElementById("d5").value;
            let d6=+document.getElementById("d6").value;

            let arr=[d1,d2,d3,d4,d5,d6];
            let totallogins=0;
            for(i=0;i<arr.length;i++){
                totallogins=totallogins+arr[i];
            }
            let loginstatus="";
            if(planname==="basic"){
                if(totallogins>100){
                    loginstatus="Upgrade Required"
                }else{
                    loginstatus="Allowed"
                }

            }
            else if(planname==="pro"){
                if(totallogins>500){
                    loginstatus="Upgrade Required"
                }else{
                    loginstatus="Allowed"
                }

            }
            else{
                loginstatus="Allowed"
            }
            document.getElementById("result").innerHTML="Total logins :"+totallogins+"<br>"+"Status:"+loginstatus;
            
        }