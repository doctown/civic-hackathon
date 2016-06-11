/**
 * Converts a csv to json
 */
var Converter = require('csvtojson').Converter;
var fs = require('fs');

var converter = new Converter({});


// Emit message when finished
converter.on('end_parsed', function(jsonArray) {
  console.log(jsonArray);
});

// read from file
converter.fromFile('./file.csv', function(err, json) {
  // console.log(result);
  fs.writeFile('./file.json', JSON.stringify(json), function(err, res) {
    console.log(res);
  });
});
/*
var converter = new Converter({constructResult:false}); //for big csv data

//record_parsed will be emitted each csv row being processed
converter.on("record_parsed", function (jsonObj) {
  fs.writeFile('./file.json', JSON.stringify(jsonObj), function(err, res) {
    // console.log(jsonObj); //here is your result json object
    console.log('Complete');
  });
});


require("request").get("https://openjustice.doj.ca.gov/downloads/ca_county_agency_contextual_indicators_2009-2014_05-03-2016.csv").pipe(converter);
*/