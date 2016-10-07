FROM python:2
MAINTAINER Team DeepFlight <deepflight@gmail.com>
RUN apt-get update

EXPOSE 8000
EXPOSE 5000

CMD cd /root && python -m SimpleHTTPServer 8000 &
