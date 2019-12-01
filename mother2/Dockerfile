FROM docker:19.03.5-dind

WORKDIR /mother

RUN \
  # install docker-compose
  apk add --no-cache py-pip &&  pip install --quiet docker-compose~=1.23.0 && \
  # install node and npm
  apk add --update nodejs nodejs-npm