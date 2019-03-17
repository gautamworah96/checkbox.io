const assert = require('assert');
const expect = require('chai').expect;
const got   = require('got');
const main = require('../server')
var fs = require("fs");

describe('main', function() {
    describe('#start()', function() {
      it('Should start server on port 9001', async () => {

      await main.start();

      const response = await got('http://localhost:'+process.env.APP_PORT+'/api/study/listing', {timeout:50000})
	  console.log(response.body);

          // Stop server
	  console.log(response.statusCode);
	  console.log("^^^ Status code of repsonse");
      expect(response.statusCode.toString()).to.include('200');
	  await main.stop();
      });

      it('An error file that records the errors (according to custom metric) should not exist', function(){

	      	fs.exists("/home/vagrant/checkBoxErrors", function(result) {
	        console.log('TEST MODE: fs.exists callback RAN.');
	        console.log('TEST MODE: fs.exists: should be false, and is: ', result);
	        assert.equal(false, result);
	      })
      });

    });
});
























