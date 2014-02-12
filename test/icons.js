var should = require('should'),
  _ = require('underscore'),
  path = require('path'),
  fs = require('fs-extended'),
  ticons = require('../');

var tmpDir = path.join(__dirname, '..', 'tmp');

describe('icons', function() {

  describe('alloy', function() {
    this.timeout(10000);

    before(function() {
      fs.createDir(tmpDir, 0755);
    });

    it('generates 25 files', function(done) {

      ticons.icons({
        input: path.join(__dirname, 'icon.png'),
        outputDir: tmpDir,
        alloy: true
      }, function(err, output) {

        if (err) {
          return done(new Error(err));
        }

        _.size(output).should.be.equal(25);

        should(_.every(output, function(output, name) {
          return fs.existsSync(output);
        })).be.true;

        done();

      });

    });

    after(function() {
      fs.deleteDirSync(tmpDir);
    });

  });

});