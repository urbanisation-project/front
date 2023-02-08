FROM node:18.13.0 as node
WORKDIR /app
COPY . .
RUN npm config set proxy $http_proxy
RUN npm config set https-proxy $http_proxy
RUN npm install
RUN npm run build --prod
# Stage 2
FROM nginx:alpine
#COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist/my-app /usr/share/nginx/html
