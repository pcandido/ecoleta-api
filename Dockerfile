FROM node:12

EXPOSE 3000

WORKDIR /opt/app

COPY package*.json ./

RUN npm ci

COPY dist ./dist
COPY uploads ./uploads

ENTRYPOINT npm start