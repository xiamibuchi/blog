FROM node:12.19.0-stretch AS builder

WORKDIR /app
ADD package.json /app
ADD yarn.lock /app
# 安装依赖
RUN yarn

ADD . /app
# 编译
RUN yarn build

FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html
RUN nginx
EXPOSE 80
