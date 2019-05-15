# Wikipedia Telnet Server
[![npm banner][npm-banner-image]][npm-package-link]

Sometime, browsing over http/https is just too insecure.
For those times when you must absolutely guarantee no executable code
will be served to you, we present:

Wikipedia via [telnet].

Uses the nice [mw-ocg-texter] package to do pleasant Unicode rendering
of Wikipedia content, via the Wikipedia REST API.

Based on the gist by [Ori Livneh] at https://gist.github.com/atdt/4037228

## Installation
To install the binary, use:
```
npm install -g wikipedia-telnet
```

Or else for local development, install the node package dependencies with:
```
npm install
```

## Running

Start a telnet server on port 1081:
```
$ wikipedia-telnet 1081
```

If developing locally, use:
```
$ node index.js 1081
```

Sample session:
```
$ telnet localhost 1081
Trying ::1...
Connected to skiffserv.dyndns.org.
Escape character is '^]'.
                         ,'"/      ,^.___.--./`.
                       ,' ;"     ,-`     '-.  m `.
                      /v\./      \,.  __  (   _  ,^.
                     / .  `;      .J (  )__\,- `~' '.
                    /_ ' /"      _|___)     )    g  \
                   ;_':_|___  ,-' \        (_,.   _ |.
                   |    |  (__) ,-'   W  __    \,' L'|
                   |  ,-'    _  \_,.    (  |_,-"\_   |
                   |  `"}  _( )_    \   _|   .   _)  |
                   |^\__|____  __,--+--'   |/|  (   /|
                   '.   |   (__)    \_,-.  '     \,'\;
                    \ n `.-.  , /,    _,'  ,")_,-\  /
                     \_. ;-'  * #    (   __)   ,-' /
                      `\-+,.._   _,---\-'   q  "},'
                        `.'\  (__)  ,-->   _,..,'
                          `.L .  ~  '-[:>.' _,"
                             '--.<=L=:_,-=-'
                   _ _ _   _  _ _  __   ___  __     __
                   | | | | |_/  | |__) |___ |  \ | |__|
                   |_|_| | | \_ | |    |___ |__/ | |  |
                          The Free Encyclopedia
--------------------------------------------------------------------------
Version 1.26                    15 Sep 2015                  122,548 Users
--------------------------------------------------------------------------
                            MotD last updated: 08:12 PM September 15, 2015

Welcome to Wikipedia!  We are the world's largest community driven dial-in
hypertext encyclopedia with over 4.9 million articles in English.

-------------------------------
  C O M M U N I T Y   N E W S
-------------------------------
Type "WP:SIGNPOST" at the prompt to read more.

- Gallery: Being Welsh
- Op-ed: DYK, or proudly displaying incorrect information on the Main Page
  with alarming regularity
- News and notes: The Swedish Wikipedia's controversial two-millionth
  article
- In the media: Calling all scientists!; More Wikipedia editors in the
  Netherlands than all of Africa combined
- Featured content: Killed by flying debris
- Traffic report: Mass media production traffic
- Technology report: Tech news in brief

-------------------------------
     O T H E R   A R E A S
-------------------------------

Featured article of the day:
 * Bill Denny

Be sure to check out some of our sister projects:
 * Wikisource                                 Type: "use en.wikisource.org"
   - Our digital book library
 * Wiktionary                                 Type: "use en.wiktionary.org"
   - A powerful multilingual dictionary
 * Wikiquote                                  Type: "use en.wikiquote.org"
   - Up-to-date compilations of quotes
 * Wikimedia Commons                          Type: "use commons.wikimedia.org"
   - An extensive online multimedia archive

-------------------------------
      S U P P O R T   U S
-------------------------------

* Learn how to edit: type "WP:CTW" at the prompt.
* Find out how to support us: type "WP:FUND" at the prompt.

Type an article name to read an article.
Type "use xx.wikipedia.org" to switch projects.
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
>>> use es.wikipedia.org
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
>>> use en.wiktionary.org
Using en.wiktionary.org for future articles.

>>> telnet
telnet

English

Pronunciation

-

Etymology

telecommunication network

Alternative forms

- Telnet
- TELNET

Noun

Wikipedia

telnet ‎(uncountable)

- (computing) A network protocol that enables one computer to communicate
  with another via the Internet; the program that acts as the client in
  this situation

Verb

telnet ‎(third-person singular simple present telnets, present participle
telnetting or telneting, simple past and past participle telnetted or
telneted)

- (computing, intransitive) To use such a program to make such a connection

Anagrams

- letten
- nettle


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

[npm-banner-image]: https://nodei.co/npm/wikipedia-telnet.png
[npm-package-link]: https://www.npmjs.com/package/wikipedia-telnet
