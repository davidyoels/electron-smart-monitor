const shabbatEveningTimes = [
  {
    text: "מנחה",
    time: "הדלקת נרות"
  },
  {
    text: "קבלת שבת",
    time: "מיד לאחר מנחה"
  },
  {
    text: "שיעור מפי הרב גד קדוש",
    time: "בזמן"
  },
  {
    text: "ערבית",
    time: "בזמן"
  }
];

const shabbatDayTimes = [
  {
    text: "שחרית",
    time: "08:00"
  },
  {
    text: "קידושא רבא",
    time: "לאחר התפילה"
  },
  {
    text: "שיעור בהלכה",
    time: "4:10"
  },
  {
    text: "מנחה",
    time: "4:10"
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
