FROM node:argon-alpine
RUN mkdir -p /opt/wikipedia-telnet
WORKDIR /opt/wikipedia-telnet
COPY . /opt/wikipedia-telnet
RUN npm install
CMD [ "node", "index.js", "1081" ]
