const shabbatEveningTimes = [
  {
    text: "מנחה"
  },
  {
    text: "קבלת שבת"
  },
  {
    text: "שיעור מפי מורנו הרב גד קדוש"
  },
  {
    text: "ערבית"
  }
];

const shabbatDayTimes = [
  {
    text: "שחרית"
  },
  {
    text: "קידושא רבא"
  },
  {
    text: "שיעור בהלכה"
  },
  {
    text: "מנחה"
  }
];

const createEveningTimesEditionTable = () => {
  let containerTimesTable = `<th></th><th></th>`;
  for (let i in shabbatEveningTimes) {
    containerTimesTable += `<tr>
        <td>
          <h2>
            ${shabbatEveningTimes[i].text}:
          </h2>
        </td>
        <td>
          <div class="input-times">
            <input type="text" id="lname" name="lastname" placeholder="12" maxlength="2">
            <h5>:</h5>
            <input type="text" id="lname" name="lastname" placeholder="12" maxlength="2">
          </div>
        </td>
      </tr>`;
  }
  document.getElementById("evening-times-edition").innerHTML =
    containerTimesTable;
};

const createDayTimesEditionTable = () => {
  let containerTimesTable = `<th></th><th></th>`;
  for (let i in shabbatDayTimes) {
    containerTimesTable += `<tr>
        <td>
          <h2>
            ${shabbatDayTimes[i].text}:
          </h2>
        </td>
        <td>
          <div class="input-times">
            <input type="text" id="lname" name="lastname" placeholder="12" maxlength="2">
            <h5>:</h5>
            <input type="text" id="lname" name="lastname" placeholder="12" maxlength="2">
          </div>
        </td>
      </tr>`;
  }
  document.getElementById("day-times-edition").innerHTML = containerTimesTable;
};

const initialSetup = () => {
  createEveningTimesEditionTable();
  createDayTimesEditionTable();
};
