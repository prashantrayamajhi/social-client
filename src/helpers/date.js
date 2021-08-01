const moment = require("moment");

export const formatDate = (date) => {
  return moment(date).format("yyyy-MM-DD");
};
