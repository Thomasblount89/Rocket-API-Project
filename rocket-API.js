
const baseURL = 'https://api.spacexdata.com/v3/launches';
let url;
const myDropdown = document.getElementById('myDropdown');
const dataResults = document.getElementById('dataResults');
const mName = document.getElementById('mName');
const mDate = document.getElementById('mDate');
const mSuccess = document.getElementById('mSuccess');
const lData = document.getElementById('lData');
// const launchN = document.querySelector('mName');
// const launchD = document.createElement('td')
// const launchS = document.createElement('td')


 function submit(){
    //  console.log(myDropdown.value);
    fetch(`${baseURL}?launch_year=${myDropdown.value}`)
    .then(function (result) {
        // console.log(result)
        return result.json()
    })
    .then(function (json){
        console.log(json);  
        displayResults(json); 
    })
}

function displayResults(json){
    // console.log("got my display results");
    // console.log(json);
    while (dataResults.firstChild) {                           
    dataResults.removeChild(dataResults.firstChild);  
    }

    
    let results = json
    // console.log(results)

    if(results === 0) {
      console.log('could not find results')
    }else {
    for ( let i = 0; i < results.length; i++) {
      let row = document.createElement('td')
      let rowTwo = document.createElement('td')
      let rowThree = document.createElement('td')
        // if(results.length > 1){
        //   createElement('card')
        // }
      let missionName = document.createElement('p');
      let missionDate = document.createElement('p');
      let missionSuccess = document.createElement('p');
      
      let current = results[i];
      let name = current.mission_name;
      let date = current.launch_date_local;
      let success = current.launch_success;
      console.log(name);
      
      missionName.innerText = name;
      missionDate.innerText = date;
      missionSuccess.innerText = success;
      
      missionName.setAttribute('class', "missionName");
      missionDate.setAttribute('class', "missionDate");
      missionSuccess.setAttribute('class', "missionSuccess");
      
      dataResults.appendChild(row);
      row.appendChild(missionName);
      dataResults.appendChild(rowTwo);
      rowTwo.appendChild(missionDate);
      dataResults.appendChild(rowThree);
      rowThree.appendChild(missionSuccess);
    }
  }
}