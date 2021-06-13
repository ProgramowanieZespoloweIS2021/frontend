FROM node:latest

WORKDIR /app

ARG AUTH_SERVICE_URL
ARG OFFERS_SERVICE_URL
ARG ORDERS_SERVICE_URL
ARG CART_SERVICE_URL
ARG CHAT_SERVICE_URL
ARG CHAT_SERVICE_WS_URL

ENV REACT_APP_AUTH_SERVICE_URL=${AUTH_SERVICE_URL}
ENV REACT_APP_OFFERS_SERVICE_URL=${OFFERS_SERVICE_URL}
ENV REACT_APP_ORDERS_SERVICE_URL=${ORDERS_SERVICE_URL}
ENV REACT_APP_CART_SERVICE_URL=${CART_SERVICE_URL}
ENV REACT_APP_CHAT_SERVICE_URL=${CHAT_SERVICE_URL}
ENV REACT_APP_CHAT_SERVICE_WS_URL=${CHAT_SERVICE_WS_URL}

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