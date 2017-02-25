#!/usr/bin/env node

'use strict';

const path = require('path');
const CommonBin = require('common-bin');

class Program extends CommonBin.Program {
  constructor() {
    super();
    this.version = require('../package.json').version;
    this.addCommand('test', path.join(__dirname, '../lib/test_command.js'));
  }
}

CommonBin.run(Program);
