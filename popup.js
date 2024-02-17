console.log("heelo");
// show the appropriate things
chrome.alarms.get("timer")
.then(a => {
  // show the appropriate things
  if (a) {
    console.log("there's an ongoing alarm");
    document.getElementById("inputMinute").classList.add("d-none");
    document.getElementById("remainingTime").classList.remove("d-none");
  } else {
    console.log("there is no ongoing alarm");
  }
})

console.log("breakpoint here");

function setAlarm(event) {
  const minutes = document.getElementById("minute").valueAsNumber;
  chrome.action.setBadgeText({ text: 'ON' });
  console.log(minutes);
  chrome.alarms.create({ delayInMinutes: minutes });
  window.close();
}

// An Alarm delay of less than the minimum 1 minute will fire
// in approximately 1 minute increments if released
document.getElementById('startTimer').addEventListener('click', setAlarm);