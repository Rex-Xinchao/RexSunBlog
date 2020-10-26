FROM nginx:1.17.9-alpine

COPY docs/.vuepress/dist /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/nginx.conf
COPY config/server.crt /etc/nginx/cert/server.crt
COPY config/server.key /etc/nginx/cert/server.key

EXPOSE 80/tcp 443/tcp

CMD ["nginx", "-g", "daemon off;"]
