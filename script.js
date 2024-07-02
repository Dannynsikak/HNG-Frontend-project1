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
  const month = String(now.getUTCMonth() + 1).padStart(2, "0"); //months are zero based
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

setInterval(updateTime, 1000);
updateTime();
