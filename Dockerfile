
# stretch 包含了 yarn 命令
FROM node:12.19.0-stretch AS builder
# 指定工作目录
WORKDIR /app
# 添加依赖文件，分步安装可以在文件不变时利用缓存
ADD package.json /app
ADD yarn.lock /app
# 安装依赖
RUN yarn

ADD . /app
# 编译
RUN yarn build

FROM nginx
# 拷贝第一阶段的编译结果至nginx的默认目录，也能写成--from=0
COPY --from=builder /app/dist /usr/share/nginx/html
RUN nginx
# 暴露80端口
EXPOSE 80
