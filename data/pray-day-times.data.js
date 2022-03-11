const getTodayPrayTimes = () => {
  return [
    {
      key: "שחרית",
      value: "8:00"
    },
    {
      key: "מנחה",
      value: "12:45"
    },
    {
      key: "מעריב",
      value: "19:00"
    }
  ];
};

module.exports = {
  getTodayPrayTimes: getTodayPrayTimes
};
