'use strict';

const CommonBin = require('common-bin');
const runner = require('./parent');

class TestCommand extends CommonBin.Command {
  * run() {
    console.log('run at common-bin');
    runner();
  }
}

module.exports = TestCommand;
