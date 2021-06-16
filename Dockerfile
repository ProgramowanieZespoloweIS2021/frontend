FROM node:latest

WORKDIR /app

RUN apt-get update
RUN apt-get install nginx -y
RUN npm install -g yarn --force

COPY . .

RUN yarn install
RUN yarn run build

ENV NODE_ENV=production
RUN cp -r build/. /var/www/html/

EXPOSE 80

CMD ["nginx", "-g","daemon off;"]
