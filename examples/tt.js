"use strict";

var dns = require('../dns');
var request;

//request = dns.resolve('www.linode.com', 'A', '127.0.0.1', function (err, results) {
request = dns.resolve('www.linode.com', 'A', function (err, results) {
  console.log("---- Direct Request ----");
  results.forEach(function (result) {
    console.log(result);
  });
  console.log("------------------------");
});



request = dns.resolve('www.linode.com', 'A', function (err, results) {
  console.log("---- Direct Request ----");
  results.forEach(function (result) {
    console.log(result);
  });
  console.log("------------------------");
});
