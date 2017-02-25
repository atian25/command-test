# command-test

will not trigger parent's singal callback:
```bash
$ npm run commander
$ kill -s TERM <process id>
```

will trigger parent's singal callback:
```bash
$ npm run plain
$ kill -s TERM <process id>
```
