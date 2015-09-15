# Wikipedia Telnet Server
[![NPM][NPM1]][NPM2]

Sometime, browsing over http/https is just too insecure.
For those times when you must absolutely guarantee no executable code
will be served to you, we present:

Wikipedia via [telnet].

Uses the nice [mw-ocg-texter] package to do pleasant Unicode rendering
of Wikipedia content, via the Wikipedia REST API.

Based on the gist by [Ori Livneh] at https://gist.github.com/atdt/4037228

## Installation
Install the node package dependencies with:
```
npm install
```
## Running
Start a telnet server on port 1081:
```
$ node index.js 1081
```
or:
```
$ wikipedia-telnet 1081
```

Sample session:
```
$ telnet localhost 1081
Trying ::1...
Connected to skiffserv.dyndns.org.
Escape character is '^]'.
 ▄▄▄▄▄▄▄░▄▄▄▄▄▄▄░▄▄▄▄▄▄░▄▄▄▄▄
 ░░▀███░░░░▀██░░░░██▀░░░░██░░
 ░░░▀██░░░░░▀██░░▄█░░░░░▄█░░░
 ░░░░███░░░░░▀██▄█░░░░░░█░░░░
 ░░░░░███░░░░░▀██░░░░░░█▀░░░░
 ░░░░░░███░░░░▄███░░░░█▀░░░░░
 ░░░░░░░██▄░░▄▀░███░░█▀░░░░░░
 ░░░░░░░▀██▄█▀░░░███▄▀░░░░░░░
 ░░░░░░░░▀██▀░░░░░███░░░░░░░░
 ░░░░░░░░░▀▀░░░░░░░▀░░░░░░░░░

Use "host xx.wikipedia.org" to switch wikipedias.
Type "quit" to exit.


>>> telnet
telnet

Not to be confused with Telenet.

Telnet is a session layer protocol used on the Internet or local area
networks to provide a bidirectional interactive text-oriented communication
facility using a virtual terminal connection. User data is interspersed
in-band with Telnet control information in an 8-bit byte oriented data
connection over the Transmission Control Protocol (TCP).

[...]
>>> host es.wikipedia.org
Using es.wikipedia.org for future articles.


>>> telnet
telnet

Telnet (Telecommunication Network¹ ) es el nombre de un protocolo de red
que nos permite viajar a otra máquina para manejarla remotamente como si
estuviéramos sentados delante de ella. También es el nombre del programa
informático que implementa el cliente. Para que la conexión funcione, como
en todos los servicios de Internet, la máquina a la que se acceda debe
tener un programa especial que reciba y gestione las conexiones. El puerto
que se utiliza generalmente es el 23.

[...]
>>> quit
Bye!
Connection closed by foreign host.
```
## License

Copyright (c) 2015 C. Scott Ananian

Licensed under AGPLv3.

[mw-ocg-texter]: https://github.com/wikimedia/mediawiki-extensions-Collection-OfflineContentGenerator-text_renderer
[telnet]:        https://en.wikipedia.org/wiki/Telnet
[Ori Livneh]:    https://github.com/atdt/

[NPM1]: https://nodei.co/npm/wikipedia-telnet.png
[NPM2]: https://nodei.co/npm/wikipedia-telnet/
