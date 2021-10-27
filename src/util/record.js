import moment from "moment";

export const recordToList = function (array) {
  let obj = [];
  array.forEach(i => {
    if (i.count < 0) {
      i.type = 'expend'
    } else {
      i.type = 'income'
    }
    const date = moment(i.spendTimeStamp).format("YYYY.MM.DD")
    i.date = date
    const target = obj.find(ii => {
      return ii.title === date
    })
    if (target) {
      target.array.push(i)
    } else {
      let t = {
        title: date,
        array: [i]
      }
      obj.push(t)
    }
  });
  return obj;
};
