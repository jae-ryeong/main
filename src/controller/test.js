const models = require('../models');


console.log('prop', models.prototype);

console.log('prot', models.__proto__);

function _fn_ok () {
  console.log(this);
}

const _fn_ok2 = () => {
  console.log(this);
}

console.log('momo', _fn_ok());
console.log('momo1', _fn_ok2());

const obj = {
  name: 1,
  age: 2,
}

const _fn_ok3 = _fn_ok.bind(obj);

_fn_ok3();
console.log(_fn_ok3.__proto__);
// _fn_ok();

const obj2 = new _fn_ok();

console.log(obj2.__proto__);