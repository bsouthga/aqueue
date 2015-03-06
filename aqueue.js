/*
  Asynchronous queue for functions of the form...
  function ( callback ) {
    ...
    callback();
  }
*/

function queue() {

  var funcs = [], q = {};

  q.enqueue = function(fn) {
    fn instanceof Array ?
      (funcs = funcs.concat(fn)) :
      funcs.push(fn);
    return q;
  };

  q.dequeue = function(callback) {
    var next = funcs.shift();
    next ? next(callback) : callback();
    return this;
  };

  q.resolve = function resolve(callback) {
    var next = funcs.shift();
    next ? next(resolve.bind(q, callback)) : callback();
    return this;
  };

  return q;
}

