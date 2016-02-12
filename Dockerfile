FROM node:5.4

ADD . /app

WORKDIR /app

RUN cd /app
RUN npm install --quiet
RUN npm run build

CMD node server.js

EXPOSE 3000
