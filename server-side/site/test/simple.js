const assert = require('assert');
const expect = require('chai').expect;
const got   = require('got');
const main = require('../server')

describe('main', function() {
    describe('#start()', function() {
      it('should start server on port 3002, vote status api should return ok', async () => {
          
          var childProcess = child_proc.spawn('nodejs',['server.js'], {cwd: "/home/vagrant/checkboxCode/server-side/site/"})
          console.log("Server started on pid:" + childProcess.pid);
          const response = await got('http://localhost:3002/api/study/vote/status', {timeout:500})
          // Stop server
          expect(response.body).to.include('ok');
	  childProcess.kill('SIGINT');
      });
    });
});


describe('main', function() {
    describe('#start()', function() {
      it('should start server on port 9001', async () => {

          await main.start();

          const response = await got('http://localhost:3002/api/study/vote/status', {timeout:500})
	  console.log(response.body);

          // Stop server
          await main.stop();
          expect(response.body).to.include('ok');
      });
    });
});
























