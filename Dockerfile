FROM nginx:1.17.9-alpine

COPY docs/.vuepress/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY server.crt /etc/nginx/cert/server.crt
COPY server.key /etc/nginx/cert/server.key

EXPOSE 80/tcp 443/tcp

CMD ["nginx", "-g", "daemon off;"]
