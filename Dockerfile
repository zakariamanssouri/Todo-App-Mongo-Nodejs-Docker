FROM node:16-alpine
WORKDIR /home/app
COPY . /home/app
EXPOSE 3000
CMD ["node","/home/app/server.js"]
