FROM nginx:alpine

ENV LEADS_API_BASE_URL=https://hom-api-comercial.iforce.com.br

COPY index.html /usr/share/nginx/html/index.html
COPY favicon.svg /usr/share/nginx/html/favicon.svg
COPY frontend /usr/share/nginx/html/frontend
COPY default.conf.template /etc/nginx/templates/default.conf.template

EXPOSE 80
