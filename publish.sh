DOCKER_NAME=shen_blog
PROJ_DIR=blog-docker

echo "########    Begin $(date +%Y%m%d_%T)         ########"

if [ ! -d "./$PROJ_DIR" ]; then
  git clone https://github.com/xiamibuchi/blog.git
fi


echo "########    Begin git clone                  ########"
cd $PROJ_DIR
git fetch
git pull

echo "########    Begin build dokcer image         ########"
docker build -t $DOCKER_NAME .
echo "######## Begin stop old dokcer container     ########"
docker stop $DOCKER_NAME
echo "######## Begin delete old dokcer container   ########"
docker rm $DOCKER_NAME
echo "######## Begin run dokcer container          ########"
docker run --name $DOCKER_NAME -p 2333:80 -d $DOCKER_NAME
