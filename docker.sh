#!/bin/bash
docker pull phpmyadmin/phpmyadmin
docker pull mysql/mysql-server
docker pull ubuntu
cd /usr/ubuntu
git clone https://github.com/cabri89/DevOpsCount.git
cd DevOpsCount
docker build -f nginx -t nginx .
git clone https://github.com/stefanprodan/dockprom.git
docker-compose up & > web.logs
cd dockprom
docker-compose up & > graphana.logs