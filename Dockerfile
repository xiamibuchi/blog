FROM node:12.19.0-stretch AS builder
WORKDIR /app
COPY ./ ./
# 安装依赖
RUN yarn
# 编译
RUN yarn build
# 删除多余代码
RUN rm -rf node_modules

# FROM registry.cn-hangzhou.aliyuncs.com/space-xm/nginx:latest
FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html
RUN nginx
EXPOSE 80
