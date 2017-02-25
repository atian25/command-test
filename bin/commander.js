#!/usr/bin/env node

'use strict';

const commander = require('commander');
const runner = require('../lib/parent');

commander
  .command('*')
  .action(() => {
    console.log('run at commander');
    runner();
  });

commander.parse(process.argv);
