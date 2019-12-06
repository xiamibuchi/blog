# docker

[文档](https://docs.docker.com/)

Docker 项目的目标是实现轻量级的操作系统虚拟化解决方案。 Docker 的基础是 Linux 容器（LXC）等技术。

在 LXC 的基础上 Docker 进行了进一步的封装，让用户不需要去关心容器的管理，使得操作更为简便。用户操作 Docker 的容器就像操作一个快速轻量级的虚拟机一样简单。可见容器是在操作系统层面上实现虚拟化，直接复用本地主机的操作系统，而传统方式则是在硬件层面实现。

## Docker 组件

The Docker Engine – Docker Engine 是一个基于虚拟化技术的轻量级并且功能强大的开源容器引擎管理工具。它可以将不同的 work flow 组合起来构建成你的应用。
Docker Hub 可以分享和管理你的images镜像的一个 Saas 服务。

## Image

由于 Docker 使用一个统一文件系统，Docker 进程认为整个文件系统是以读写方式挂载的。 但是所有的变更都发生顶层的可写层，而下层的原始的只读镜像文件并未变化。由于镜像不 可写，所以镜像是无状态的

所有镜像都是通过一个 64 位十六进制字符串 （内部是一个 256 bit 的值）来标识的。 为简化使用，前 12 个字符可以组成一个短ID，可以在命令行中使用。短ID还是有一定的 碰撞机率，所以服务器总是返回长ID。

可以使用 docker pull 命令来从仓库获取所需要的镜像

## container

```bash
# 显示容器 -a全部 -q只显示container id
docker ps

# 删除所有 container
docker rm $(docker ps -aq)

# 下载 node 镜像,运行一个名为 mynode 的容器，并在容器里运行 /bin/bash
docker run -it --name mynode node /bin/bash

# 下载 node 镜像,运行一个名为 mynode 的容器，并在容器里运行 /bin/bash，并将宿主机上的/data目录挂载到container中的 /data
docker run -it -v /data:/data --name mynode node /bin/bash
# 退出 container
exit

# 关闭 container
docker stop mynode

# 重启 container
docker start mynode

# 重启后,在mycentos再打开/bin/bash
docker exec -ti mynode /bin/bash
```
