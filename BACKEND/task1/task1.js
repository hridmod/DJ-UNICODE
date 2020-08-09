//HRIDAYRAJ  MODI NODEJS
function task1(list) {
  var arr1 = [];
  var arr2 = [];
  var arr3 = [];
  for (var i = 0; i < list.length; i++) {
    arr1.push(list[i].split(" "));
  }
  for (var j = 0; j < arr1.length; j++) {
    for (var k = 0; k < 4; k++) {
      arr2.push(arr1[j][k]);
    }
  }
  for (var l = 0; l < arr2.length; l += 4) {
    var obj = { name: "", score: { Math: "", English: "" } };
    (obj.name = arr2[l] + " " + arr2[l + 1]),
      (obj.score.Math = parseInt(arr2[l + 2])),
      (obj.score.English = parseInt(arr2[l + 3]));
    arr3.push(obj);
  }
  arr3.sort((a, b) =>
    (b.score.Math + b.score.English) / 2 > (a.score.Math + a.score.English) / 2
      ? 1
      : -1
  );
  console.log(arr3);
}
//Test Input Array of Strings
var trial = [
  "Rashmil Panchani 99 97",
  "Parag Vaid 95 93",
  "Siddharth Sanghavi 98 100",
  "Hriday Modi 92 91",
];
//Calling the function
task1(trial);
