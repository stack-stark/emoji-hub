# 声明镜像基础
FROM nginx
# 声明维护者
LABEL author=stack-stark
# 声明版本
LABEL version="1.0.0"
# 添加配置文件
COPY nginx.conf /etc/nginx/

# 复制打包后的文件到html目录下
COPY dist/ /usr/share/nginx/html/
