"use strict";

/**
 * 将药丸放入7*5的盒子里
 * @param periodOfTaking 服药周期
 * @param periodOfStopping 停药周期
 */
function fakePills(periodOfTaking, periodOfStopping) {
  var arr = [];
  var totalPeriod = periodOfTaking + periodOfStopping;
  for (var i = 1, len = 7 * 5; i <= len; i++) {
    if (i % totalPeriod > 0 && i % totalPeriod <= periodOfTaking) {
      arr.push(true);
    } else {
      arr.push(false);
    }
  }
  return arr;
}
console.log(fakePills(3, 2));

//# sourceMappingURL=main.js.map