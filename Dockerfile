FROM node:lts-alpine3.14

#sudo docker build -t eurl .
#sudo docker run -p 3000:3000 -i -t eurl

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

CMD [ "npm", "start" ]
