function check() {
  let routeName = document.getElementById("rn").value;

  let r1 = Number(document.getElementById("r1").value);
  let r2 = Number(document.getElementById("r2").value);
  let r3 = Number(document.getElementById("r3").value);
  let r4 = Number(document.getElementById("r4").value);
  let r5 = Number(document.getElementById("r5").value);
  let r6 = Number(document.getElementById("r6").value);

 
  if (routeName.length < 5) {
    document.getElementById("result").innerText = "Invalid Route Name";
    return;
  }

  let routes = [r1, r2, r3, r4, r5, r6];
  let total = 0;

  
  for (let i = 0; i < routes.length; i++) {
    if (routes[i] >= 8) {
      document.getElementById("result").innerText = "High Risk Route";
      return;
    }
    total = total + routes[i];
  }

  
  let average = total / routes.length;
  let routeStatus = "";

  if (average <= 3) {
    routeStatus = "Safe";
  } else if (average <= 6) {
    routeStatus = "Moderate";
  } else {
    routeStatus = "Risky";
  }

  
  document.getElementById("result").innerHTML =
    "Route: " + routeName + "<br>" +
    "Average: " + average.toFixed(2) + "<br>" +
    "Status: " + routeStatus;
}