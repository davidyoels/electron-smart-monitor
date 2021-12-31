const socket = io();

let counter = 0;
let counter_times = 0;
let containerZmanimTable = `<th></th><th></th>`;
let containerSahhabatTimesTable = `<th></th><th></th>`;
let containerholidaysTimes = ``;
let zmanimElement;
let temp;

socket.on("schedule_swap_text", () => {
  let isShowingZmanim = false;
  let zmanimElement = $("#zmanim-table-data");
  let middleTitleElement = $("#s-m-middle-title");

  let zmanimElement1 = document.getElementById("zmanim-table-data");
  let middleTitleElement1 = document.getElementById("s-m-middle-title");

  const fadeTime = 2000;
  const thirtySeconds = 30 * 1000;
  const twoSeconds = 2 * 1000;
  const dayTimesText = "זמני היום";
  const shabbatTimesText = "זמני שבת";

  setTimeout(() => {
    if (zmanimElement && middleTitleElement) {
      temp = containerZmanimTable;
      temp += containerZmanimTable;
      console.log("data");
      zmanimElement1.innerHTML = temp;
      middleTitleElement.innerText = dayTimesText;
    }
  }, twoSeconds);

  setInterval(() => {
    if (zmanimElement) {
      if (isShowingZmanim) {
        temp = containerZmanimTable;
        temp += containerZmanimTable;
        zmanimElement.fadeOut(fadeTime, function () {
          zmanimElement1.innerHTML = temp;
          zmanimElement.fadeIn(fadeTime);
        });
        middleTitleElement.fadeOut(fadeTime, function () {
          middleTitleElement1.innerText = dayTimesText;
          middleTitleElement.fadeIn(fadeTime);
        });
      } else {
        temp = containerSahhabatTimesTable;
        temp += containerSahhabatTimesTable;
        zmanimElement.fadeOut(fadeTime, function () {
          zmanimElement1.innerHTML = temp;
          zmanimElement.fadeIn(fadeTime);
        });
        middleTitleElement.fadeOut(fadeTime, function () {
          middleTitleElement1.innerText = shabbatTimesText;
          middleTitleElement.fadeIn(fadeTime);
        });
      }
    }
    isShowingZmanim = !isShowingZmanim;
  }, thirtySeconds);
});

socket.on("zmanim", (zmanim_data) => {
  console.log("zmanim", counter++);
  containerZmanimTable = "";
  for (let i in zmanim_data) {
    containerZmanimTable += `<tr>
        <td>
          <h2>
            <strong>${i}:</strong>
          </h2>
        </td>
        <td>
          <h2>
            <strong>${zmanim_data[i]}</strong>
          </h2>
        </td>
      </tr>`;
  }
});

socket.on("sahhabat_times", (sahhabat_times) => {
  console.log("sahhabat_times", counter_times++);
  containerSahhabatTimesTable = "";
  const sahhabtTimesInHebrew = sahhabat_times["sahhabtTimesInHebrew"];
  const todayPrayTimeDisplay = sahhabat_times["todayPrayTimeDisplay"];
  const holidaysTimesInHeberw = sahhabat_times["holidaysTimesInHeberw"];

  containerSahhabatTimesTable += `<tr class="title-container">
      <td class="clock-icon-container">
        <img style="margin: 0" height="40" width="40" src="../../img/clock-icon.png" />
      </td>
      <td class="title">
        <h2>
        <strong>זמני תפילות חול</strong>
        </h2>
      </td>
      <td class="clock-icon-container">
        <img style="margin: 0" height="40" width="40" src="../../img/clock-icon.png" />
      </td>
    </tr>`;

  for (let i in todayPrayTimeDisplay) {
    containerSahhabatTimesTable += `<tr>
        <td>
          <h2>
            <strong>${i}:</strong>
          </h2>
        </td>
        <td>
          <h2>
            <strong>${todayPrayTimeDisplay[i]}</strong>
          </h2>
        </td>
      </tr>`;
  }

  containerSahhabatTimesTable += `<tr class="title-container">
    <td class="clock-icon-container">
      <img style="margin: 0;" height="40" width="40" src="../../img/clock-icon.png" />
    </td>
    <td class="title">
      <h2>
      <strong>זמני תפילות שבת</strong>
      </h2>
    </td>
    <td class="clock-icon-container">
      <img style="margin: 0" height="40" width="40" src="../../img/clock-icon.png" />
    </td>
  </tr>`;

  for (let i in sahhabtTimesInHebrew) {
    console.log(sahhabtTimesInHebrew[i]);
    if (i == "parashat") {
      document.getElementById("parasha").innerHTML = sahhabtTimesInHebrew[i];
    } else if (i == "mevarchim") {
      var paraha = document.getElementById("parasha").innerHTML;
      document.getElementById("parasha").innerHTML =
        paraha + sahhabtTimesInHebrew[i];
    } else {
      containerSahhabatTimesTable += `<tr>
          <td>
            <h2>
              <strong>${i}:</strong>
            </h2>
          </td>
          <td>
            <h2>
              <strong>${sahhabtTimesInHebrew[i]}</strong>
            </h2>
          </td>
        </tr>`;
    }
  }

  for (let i in holidaysTimesInHeberw) {
    containerholidaysTimes += `<text>
    ${holidaysTimesInHeberw[i]}
    </text>
  </tr>`;
  }

  // document.getElementById("shabbat-times-table-data").innerHTML =
  //   containerSahhabatTimesTable;
  // document.getElementById("shabbat-times-table-data").innerHTML +=
  //   containerSahhabatTimesTable;
  // document.getElementById("bottom-news").innerHTML = containerholidaysTimes;
});

socket.on("today_hebrew_date", (todayHebrewDate) => {
  document.getElementById("today-herbew-date").innerHTML = todayHebrewDate;
});
