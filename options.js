// Save this script as `options.js`

// Saves options to localStorage.
function save_options() {
  var interval = document.getElementById("interval");
  var status = document.getElementById("status");
  if(interval) {
    localStorage["refresh_interval"] = interval.value;  

  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
  }
  else {
    status.innerHTML = "Unable to get Interval"

  }
  

  // Update status to let user know options were saved.
  
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var interval = localStorage["refresh_interval"];
  if (!interval) {
    interval = 300;
  }
  var intervalField = document.getElementById("interval");
  intervalField.value = interval;
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);