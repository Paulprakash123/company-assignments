function check(){
            let plantname=document.getElementById("plantid").value;
            let prule;
            prule="sol";
            if(prule==plantname.length[0,3]){
                document.getElementById("result1").innerText="hiii";
               
            }
            else{
                document.getElementById("result1").innerText="poo";
                return;
            }



                //         if (!plantname.startsWith("SOL")) {
                //     document.getElementById("result1").innerText =
                //         "Plant ID must start with SOL";
                //     return;
                // } else {
                //     document.getElementById("result1").innerText = "";
                // }








            let d1=+document.getElementById("d1").value;
            let d2=+document.getElementById("d2").value;
            let d3=+document.getElementById("d3").value;
            let d4=+document.getElementById("d4").value;
            let d5=+document.getElementById("d5").value;
            let d6=+document.getElementById("d6").value;
            let d7=+document.getElementById("d7").value;

            let arr=[d1,d2,d3,d4,d5,d6,d7];
            let count=0;
            for (let i=0;i<arr.length;i++){
                if(arr[i]<70){
                    count+=1;
                          
                }
            }
            let status=""
            if(count==0){
                status="Healthy";
            }
            else if(count==1 || count==2){
                status="Warning";
            }
            else {
                status="Critical";
            }
            document.getElementById("result").innerHTML="<h3>Alert Days :</h3>"+count+"<br>"+"<h3> System Status :</h3>"+status;
            return false;
        }