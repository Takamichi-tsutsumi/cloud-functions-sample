exports.helloWorld = function helloWorld (event, callback) {
  console.log(`My Cloud Function: ${event.data.message}`);
  callback();
};

exports.httpSample = function httpSample (req, res) {
  res.status(200).send('Hello from cloud functions');
};
