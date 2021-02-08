// Write your JavaScript code here!

   window.addEventListener("load", function() {
   let endpointURL = "https://handlers.education.launchcode.org/static/planets.json"

      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
         response.json().then(function(json){
            const div = document.getElementById("missionTarget");
            const destination = Math.round(Math.random()*5)
            const data = json[index]

            div.innerHTML =`
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[destination].name}</li>
               <li>Diameter: ${json[destination].diameter}</li>
               <li>Star: ${json[destination].star}</li>
               <li>Distance from Earth: ${json[destination].distance}</li>
               <li>Number of Moons: ${json[destination].moons}</li>
            </ol>
            <img src="${json[destination].image}"></img>
            `;
         });
      })

     


      let form = document.getElementById("Form");

   
   
   form.addEventListener("submit", function(event){
      let pilot = document.querySelector("input[name=pilot]");
      let copilot = document.querySelector("input[name=copilot]");
      let fuelLevel = document.querySelector("input[name=fuel");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      
      let isPilotTrue = true;
      let isCopilotTrue = true;
      let isFuellevelTrue = true;
      let isCargoMassTrue = true;

   if(pilot.value === "" | copilot.value === "" |fuelLevel.value === "" |  cargoMass.value === ""){
      alert("Please submit information");
   }
   if (isNaN(pilot.value) === false){
      alert("Please enter the Pilot's name");
      isPilotTrue = false;
   }
   if (isNaN(copilot.value) === false){
      alert("Please enter the Co-Pilot's name");
      isCopilotTrue = false;
   }
   if(isNaN(fuelLevel.value) === true){
      alert("Please input Fuel Level");
      isFuellevelValid = false;
   }
   if(isNaN(cargoMass.value)=== true){
      alert("Please input Cargo Mass");
      isCargoMassValid = false;
   }

   if (isPilotTrue && isCopilotTrue && isFuellevelTrue && isCargoMassTrue) {
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotInput.value} Ready`;
      document.getElementById("copilotStatus").innerHTML = `Pilot ${copilotInput.value} Ready`

      if(fuelLevelInput.value <= 10000){            
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for    Launch";
         document.getElementById("launchStatus").style.color = "red"
         document.getElementById('fuelStatus').innerHTML = "Fuel is too low!"
      }
      if(cargoMassInput.value >= 10000){
         document.getElementById("faultyItems").style.visibility = "visible"
         document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
         document.getElementById("launchStatus").style.color = "red"
         document.getElementById('cargoStatus').innerHTML = "Cargo is too heavy!"
      }
      if(fuelLevelInput.value > 10000 && cargoMassInput.value < 10000) {
         document.getElementById("launchStatus").innerHTML = "Shuttle Is Ready for  Launch!";
         document.getElementById("launchStatus").style.color = "green"
      }
      event.preventDefault()
   }



});

});
