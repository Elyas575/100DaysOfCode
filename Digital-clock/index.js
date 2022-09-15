
let currentTime;
let currentDate;


const setTime = () => {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  console.log(seconds)
  console.log(minutes)

  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();
  
  currentTime = `${hours} : ${minutes} : ${seconds}`
  currentDate = `${day}/${month}/${year}`

}


const render = () => {

  setTime();

  document.getElementById("time-section").innerText = currentTime;
  document.getElementById("date-section").innerText = currentDate;
  let t = setTimeout(function(){ render(); }, 1000);
}



render();




