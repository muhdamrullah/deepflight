__*Open Category - Team Deep Flight*__

How to run locally: 

Set up server (python -m SimpleHTTPServer in root) and access trigger.html

Presentation slides are available in sia_opendeepflight.pdf.

This hack is also part of __*RedHat challenge*__. (via extensive Docker deployment)

# **Code Example** 
Code Example

This webapp is part of the __*SIA Open Challenge*__ and the __*RedHat Open Challenge*__

For the sake of brevity, you should download docker. 
```
$ curl -sSL https://get.docker.com/ | sh

```
Make sure that your port 8000 is available for you
```
$ sudo docker run -it -p 8000:8000 muhdamrullah/deepflight python -m SimpleHTTPServer 8000

```
