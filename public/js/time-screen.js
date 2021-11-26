const socket = io();

let counter = 0;
let counter_times = 0;

socket.on("zmanim", (zmanim_data) => {
  console.log("zmanim", counter++);
  let containerZmanimTable = `<th></th><th></th>`;
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
  document.getElementById("zmanim-table-data").innerHTML = containerZmanimTable;
});

socket.on("sahhabat_times", (sahhabat_times) => {
  console.log("sahhabat_times", counter_times++);
  let containerSahhabatTimesTable = `<th></th><th></th>`;
  const sahhabtTimesInHebrew = sahhabat_times["sahhabtTimesInHebrew"];
  const todayPrayTimeDisplay = sahhabat_times["todayPrayTimeDisplay"];

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
      <img style="margin: 0" height="40" width="40" src="../../img/clock-icon.png" />
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
    if (i == "parashat") {
      document.getElementById("parasha").innerHTML = sahhabtTimesInHebrew[i];
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
  document.getElementById("shabbat-times-table-data").innerHTML =
    containerSahhabatTimesTable;
});

socket.on("today_hebrew_date", (todayHebrewDate) => {
  document.getElementById("today-herbew-date").innerHTML = todayHebrewDate;
});
