// const output = document.querySelector("pre");
// const image = document.querySelector("img");

// image.addEventListener("load", (event) => {
//   const { naturalWidth, naturalHeight, width, height } = image;
//   output.textContent = `Natural size: ${naturalWidth} x ${naturalHeight} pixels
//     Displayed size: ${width} x ${height} pixels`;
// });

function updateTime() {
  const utcTimeElement = document.getElementById("utc-time");
  const utcDayElement = document.querySelector('[data-testid="currentDay"]');
  const now = new Date();

  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, "0"); // months are zero based
  const dayOfMonth = String(now.getUTCDate()).padStart(2, "0");
  const hours = String(now.getUTCHours()).padStart(2, "0");
  const minutes = String(now.getUTCMinutes()).padStart(2, "0");
  const seconds = String(now.getUTCSeconds()).padStart(2, "0");

  const formattedTime = `${year}-${month}-${dayOfMonth}-${hours}:${minutes}:${seconds} UTC`;
  // console.log(formattedTime);
  utcTimeElement.textContent = formattedTime;

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[now.getUTCDay()];
  utcDayElement.textContent = dayOfWeek;
}

// Geolocation function to display city and country
function updateLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const api_key = "86a18b62efdd0f6e5a388228e2775e9e";
        const api_Endpoint = "https://api.openweathermap.org/data/2.5/";
        const api_Url = `${api_Endpoint}weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`;
        // Use OpenWeather One Call API to get city and country based on lat/lon
        fetch(api_Url)
          .then((response) => response.json())
          .then((data) => {
            const city = data.name || "Unknown City";
            const country = data.sys.country || "Unknown Country";
            const locationElement = document.getElementById("location");
            locationElement.textContent = `Current location: 📍${city}, ${country}`;
          })
          .catch((error) => console.error("Error fetching location:", error));
      },
      (error) => {
        console.error("Geolocation error:", error);
      }
    );
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
  console.log("Location updated");
}
console.log(updateLocation());

setInterval(updateTime, 1000);
updateTime();
updateLocation(); // Call this function to update city and country
