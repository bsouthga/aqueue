# aqueue
minimalist asynchronous queue 

A tiny async queue for fun!

If you do...
```javascript
q = queue();

q.enqueue([one, two]);

q.resolve(done);

function one (callback) {
  console.log('one')
  callback();
}

function two (callback) {
  console.log('two');
  callback();
}

function done () {
  console.log('done!');
}
```
you will get...
```shell
one
two
done!
```
