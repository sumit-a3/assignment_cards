'use strict';

describe('contentCardsApp.version module', function() {
  beforeEach(module('contentCardsApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});