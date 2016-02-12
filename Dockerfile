FROM node:5.4

ADD . /app

RUN cd /app
RUN npm install -quiet
RUN npm run build

WORKDIR /app

CMD node server.js

EXPOSE 3000
