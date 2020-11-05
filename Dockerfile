FROM node:latest
WORKDIR /opt/app/server
COPY ./src/server .
RUN npm install
CMD ["npm", "run", "server-dev"]