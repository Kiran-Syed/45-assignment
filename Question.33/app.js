// ================{ Question : 33 }===============
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNumbers = numbers_1[_i];
    var oridinalNumbers = void 0;
    if (oneNumbers === 1) {
        oridinalNumbers = "st";
        console.log("".concat(oneNumbers).concat(oridinalNumbers));
    }
    if (oneNumbers === 2) {
        oridinalNumbers = "nd";
        console.log("".concat(oneNumbers).concat(oridinalNumbers));
    }
    if (oneNumbers === 3) {
        oridinalNumbers = "rd";
        console.log("".concat(oneNumbers).concat(oridinalNumbers));
    }
    else {
        oridinalNumbers = "th";
        console.log("".concat(oneNumbers).concat(oridinalNumbers));
    }
}
