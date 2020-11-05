FROM node:latest
WORKDIR /opt/app/server
COPY server .
RUN npm install
CMD ["npm", "run", "server-dev"]