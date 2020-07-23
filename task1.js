var arr1 = [];
var arr2 = [];
var arr3 = [];

var scores = {};
function task1(list) {
  for (var i = 0; i < list.length; i++) {
    arr1.push(list[i].split(" "));
  }
  for (var j = 0; j < arr1.length; j++) {
    for (var k = 0; k < 4; k++) {
      arr2.push(arr1[j][k]);
    }
  }
  for (var l = 0; l < arr2.length; l += 4) {
    var obj = { name: "", score: { Math: "", English: "", Average: "" } };
    (obj.name = arr2[l] + " " + arr2[l + 1]),
      (obj.score.Math = parseInt(arr2[l + 2])),
      (obj.score.English = parseInt(arr2[l + 3]));
    obj.score.Average = (obj.score.Math + obj.score.English) / 2;
    arr3.push(obj);
  }

  console.log(arr3);
}
var trial = [
  "Rashmil Panchani 99 97",
  "Parag Vaid 95 93",
  "Siddharth Sanghavi 98 100",
  "Hriday Modi 92 91",
];
task1(trial);
