FROM node:5.4

ADD . /src

RUN cd /src
RUN npm install -quiet
RUN npm run build

WORKDIR /src

CMD node server.js

EXPOSE 3000
