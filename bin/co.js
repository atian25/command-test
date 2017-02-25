#!/usr/bin/env node

'use strict';

const co = require('co');
const runner = require('../lib/parent');

co(function* () {
  console.log('run at co');
  runner();
}).catch(err => {
  console.error('got error at co', err);
});
