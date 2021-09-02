
async function _fn_ok (name) {
  this.name = name;
  return this;
}

const _fn_ok2 = async () => {
  return this;
}

const obj = {
  a: 1,
  b: 2,
  c: 3,
}

// const tmp_fn_ok = _fn_ok.bind(obj);

// tmp_fn_ok().then(result => console.log(result));

const tmp_fn_ok2 = _fn_ok2.bind(obj);

tmp_fn_ok2().then(result => console.log(result));


_fn_ok.call(obj).then(result => console.log(result));