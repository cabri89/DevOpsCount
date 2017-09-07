#!/bin/bash
docker pull phpmyadmin/phpmyadmin
docker pull mysql/mysql-server
docker pull ubuntu
docker build -f nginx -t nginx .
docker pull grafana/grafana