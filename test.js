let obj = {
  '0': 1,
  0: 2
}

console.log(obj['0'] + obj[0]);
// ----------------------------------------
function User() {

}

let vasya = new User();

vasya.__proto__.name = 'Vasya';

// ------------------------------------------

let f = function (x) {
  console.log(x);
}

  (function () {
    f(1)
  }())



MyObj = function (name) {
  this._myParam = 8;
}

MyObj.prototype = {
  init: function (params) {
    if (params.hasOwnProperty('myParam')) {
      this._myParam = params.myParam;
    }
  },
  incParam: function () {
    this._myParam++;
    setTimeout(function () {
      console.log(this._myParam);
    })
  }
}

MyObj.create = function (params) {
  var self = new MyObj();
  self.init(params);
  return self;
}

let params = { myParam: 10 };
let a = MyObj.create(params);
console.log(a.incParam())



let arr = [22, 501, 13, 612, 11]

let sum = arr.reduce((a, c) => c % 2 !== 0 && c > a ? c : a, 0)

console.log(sum)

// ============================


