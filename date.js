//jshint esversion: 6

exports.getDate = function () {

const today = new Date();
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

const day = today.toLocaleDateString("ru-RU", options);
return day;
};

exports.getDay = function getDay() {
const today = new Date();
const options = {
  weekday: "long",
};


return today.toLocaleDateString("ru-RU", options);
};
