const button = document.querySelector('button');
button.addEventListener('click', async () => {
  setInterval(() => {
    let minute = document.getElementById("minute").value;
    let seconds = document.getElementById("seconds").value;
    
    if (seconds === "0") {
      // if we've finished the whole time
      if (minute === "0") {
        // show the finished banner
        document.getElementById("done-banner").classList.remove('d-none');
        // make a sound
        document.getElementById("alarm-sound").play();
      } 
      // if we've finished the minute
      else {
        minute--;
        seconds = "59";
      }
    } 
    else {
      seconds--;
    }

    document.getElementById("minute").value = minute;
    document.getElementById("seconds").value = seconds;
  }, 1000)
});
