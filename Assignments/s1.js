 function check(){
            let a = document.getElementById("username").value;
            let b = +document.getElementById("time").value;
            let c = +document.getElementById("communicate").value;
            let d = +document.getElementById("prblm").value;
            let e = +document.getElementById("team").value;
            let f = +document.getElementById("proffes").value;
            

            if(a.length <=3){
                document.getElementById("result").innerText = "name must be atleast 3 characters";
                return;
            }
                let score = [b,c,d,e,f] ;
                let total=0;

                for(i=0;i<score.length;i++){
                    total+=score[i]/5;
                    let Performance="";
                    if(total<40){
                        performance="Employee Underperforming."
                     }
                     else if(total>=85){
                        performance="Outstanding "
                     }
                     else if(total>=70){
                        performance="Good"
                     }
                     else {
                        performance="Needs Improvement."
                     }
                    // let finalresult=document.getElementById("result").value;
                    document.getElementById("output").innerHTML="Employee :"+a+"<br>"+"Average Score :"+total+"<br>"+"Performance Status:"+performance;
                }
                
                


        }