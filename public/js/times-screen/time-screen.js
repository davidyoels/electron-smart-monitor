const io = require("socket.io-client");
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
  containerSahhabatTimesTable += `<tr>
        <td>
          <h2>
            <strong>זמני תפילות חול</strong>
          </h2>
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

  containerSahhabatTimesTable += `<tr>
      <td>
        <h3>--------------------</h3>
      </td>
    </tr>`;
  containerSahhabatTimesTable += `<tr>
        <td>
          <h2>
            <strong>זמני תפילות שבת</strong>
          </h2>
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
