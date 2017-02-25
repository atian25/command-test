'use strict';
const path = require('path');
const spawn = require('child_process').spawn;

module.exports = () => {
  console.info('[parent] pid: ', process.pid);
  const serverBin = path.join(__dirname, 'child');

  const child = spawn('node', [ serverBin ], {
    detached: false,
    stdio: 'inherit',
    env: process.env,
  });

  function onSignal(code) {
    // `kill -s TERM` but not trigger???
    console.info('[parent] @@@@ should recieve singal ' + code);
    child.kill(code);
    process.exit(0);
  }

  process.once('SIGTERM', () => onSignal('SIGTERM'));
  process.once('SIGQUIT', () => onSignal('SIGQUIT'));
  process.once('SIGINT', () => onSignal('SIGINT'));

  process.once('exit', code => {
    console.info('[parent] exit with code', code);
    console.info('[parent] will kill child with SIGTERM');
    child.kill('SIGTERM');
  });
}
