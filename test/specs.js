var should = require('should'),
  _ = require('underscore'),
  specs = require('../lib/specs');

describe('specs', function() {

  describe('#exports', function() {

    it('exist', function() {
      specs.should.be.an.Object;
    });

    it('have a `ios-iTunesArtwork` with right spec', function() {

      specs['ios-iTunesArtwork'].should.be.an.Object;
      specs['ios-iTunesArtwork'].should.be.eql({
        type: 'icon',
        path: ':assets:/iphone/iTunesArtwork',
        size: 512,
        platforms: [
          "ios"
        ]
      });
    });

  });

});