FROM node:5.4

ADD . /app

RUN \
  npm install -g forever && \
  cd /app && \
  npm install --quiet && \
  npm run build

WORKDIR /app

CMD forever server.js

EXPOSE 3000
