"use strict";

var fs = require('fs');
var dns = require('../dns');
var request;

var idx = 0;

var txt = fs.readFileSync('dns-error.bak', 'utf-8');
	var domains = txt.split("\n");
	for(var i in domains){
		var domain = domains[i].trim().replace('http://', '');
		if(domain == ''){
			continue;
		}
    request = dns.resolve( domain, 'A', function (err, results) {
      console.log("---- Direct Request ----");
      console.dir(results);
      console.log("------------------------");
    });
    idx++;
    if(idx > 1000){
      break;
    }
  }


process.on('uncaughtException', function(err){
  console.dir('Caught exception:' + err);
  console.log( err.stack);
    
});


