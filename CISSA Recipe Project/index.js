const displayTime = document.querySelector(".display-time");

function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
  setTimeout(showTime, 1000);
}

showTime();


function updateDate() {
  let today = new Date();

  
  let dayName = today.getDay(),
    dayNum = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  const IDCollection = ["day", "daynum", "month", "year"];
  
  const val = [dayWeek[dayName], dayNum, months[month], year];
  for (let i = 0; i < IDCollection.length; i++) {
    document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
  }
}

updateDate();

// const searchButton = document.getElementById("search-button");
// const searchText = document.getElementById("search-text");

// searchButton.addEventListener("click", () => {
//   const query = searchText.value;
//   if (!query) return;
//   fetchNews(query);
//   curSelectedNav?.classList.remove("active");
//   curSelectedNav = null;
// });

// var search_input = document.getElementById("search-text");
// search_input.addEventListener("keypress", function(event){
//   if (event.key === "Enter") {
//     event.preventDefault();
//     document.getElementById("search-button").click();
//   }
// });

