const getTodayPrayTimes = () => {
  return [
    {
      key: "שחרית",
      value: "8:30"
    },
    {
      key: "מנחה",
      value: "12:30"
    },
    {
      key: "ערבית",
      value: "07:30"
    }
  ];
};

module.exports = {
  getTodayPrayTimes: getTodayPrayTimes
};
