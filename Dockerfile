FROM python:2
MAINTAINER Team DeepFlight <deepflight@gmail.com>
RUN apt-get update && apt-get install -y \
  build-essential \
  git \
  pkg-config \
  python-dev \
  python-pip \
  python-virtualenv \
  libhdf5-dev \
  libopencv-dev \
  libyaml-dev

EXPOSE 8000
EXPOSE 5000

RUN cd /root && git clone git://github.com/muhdamrullah/deepflight.git
WORKDIR /root/deepflight
