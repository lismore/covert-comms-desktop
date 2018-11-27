# Covert-Comms-Desktop

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Covert-Comms-Desktop is a ethereum blockchain based, encrypted, secure, untraceable communications desktop application built with Electron.

  - Untraceable communications
  - Secure
  - Encrypted 


You can also:
  - Send and recieve files 
  - Self Destruct Dapp / Server / Message 



### Tech

Covert-Comms uses a number of open source projects to work properly:

* [node.js] - evented I/O for the backend Covert Comms DApp
* Electron - for cross platform GUI experience 
* [Express] - fast node.js network app framework
* Go - the Ethereum Whisper P2P Server

### Installation

Covert-Comms-Desktop requires 

Go - to run the Ethereum Whisper Protocol P2P server (geth)
[Node.js](https://nodejs.org/) v4+ to run the Dapp

Install the dependencies and devDependencies and start the server.

```sh
$ cd covert-comms
$ npm install -d
$ node app
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```
### Development

Want to contribute? Great!

Covert-Comms uses HTML5 & Javascript.

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app
```


### Todos

 - Write MORE Tests
 - Add Group Chat
 - Social Integration 

License
----

MIT
