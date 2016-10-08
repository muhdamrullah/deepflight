# **Deepflight - A method to use containers to generate deep learning models and build emotion recognition models** 
Code Example

This webapp is part of the __*SIA Open Challenge*__ and the __*RedHat Open Challenge*__

For the sake of brevity, you should download docker on your RHEL or Ubuntu 
```
$ curl -sSL https://get.docker.com/ | sh

```
Make sure that your port 8000 is available for you
```
$ sudo docker pull muhdamrullah/deepflight

$ sudo docker run -it -p 8000:8000 muhdamrullah/deepflight python -m SimpleHTTPServer 8000

```
