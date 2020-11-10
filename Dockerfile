FROM node:12-alpine

RUN mkdir -p /home/node/movies_api/node_modules && chown -R node:node /home/node/movies_api

WORKDIR /home/node/movies_api

COPY package*.json ./

USER node

RUN npm install

