function getPromise(loc) {
  return new Promise(function(resolve, reject) {
    resolve(30);
    reject('not found');
  });
}

getPromise('Belgrade').then(function(temp) {
  console.log('promise success! ' + temp);
}, function(err) {
  console.log('promise error: ' + err);
});

