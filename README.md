# @rhost/sdk

This is a library for Node[1] to make it easier to write execscript scripts for
RhostMUSH[2], by pre-processing the myriad environment variables, and giving a
print() function that munges Unicode into the Rhost-native markup.  It is a port
of Deno-Rhost[3].

* [1] https://nodejs.org/
* [2] http://rhostmush.com/
* [3] https://github.com/RhostMUSH/deno-rhost

## Sample of use:
```JS
const Rhost = require('@rhost/sdk');
try {
	var environment = Rhost.environment()
	Rhost.print(`You are using a server with execscript version: ${environment.version}`)
} catch(e) {
	Rhost.print("Failed parsing Rhost execscript data")
	Rhost.print(e)
}
```

## development
```bash
npm install
npm run test
```