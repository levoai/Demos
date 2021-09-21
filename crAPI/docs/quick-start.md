

crAPI Quick Start Guide
=====
[TOC]

### Docker (pre-built images)

You'll need to have Docker installed and running on your host system.

1. Start crAPI
    ```
    $ docker-compose -f deploy/docker/docker-compose.yml up -d
    ```
2. Visit `http://localhost:8888`

**Note**: All emails are sent to mailhog service by default and can be checked on `http://localhost:8025`. 



### Docker (local build)

You'll need to have Docker installed and running on your host system.

1. Clone crAPI repository
    ```
    $ git clone [REPOSITORY-URL]
    ```
2. Build all docker images
    ```
    $ deploy/docker/build-all.sh
    ```
3. Start crAPI
    ```
    $ docker-compose -f deploy/docker/docker-compose.yml up -d
    ```
4. Visit `http://localhost:8888`

**Note**: All emails are sent to mailhog service by default and can be checked on`http://localhost:8025`.
You can change the smtp configuration if required however all emails with domain **example.com** will still go to mailhog.



### Vagrant

This option allows you to run crAPI within a virtual machine, thus isolated from
your system. You'll need to have [Vagrant] and, for example [VirtualBox] installed.

1. Clone crAPI repository
    ```
    $ git clone [REPOSITORY-URL]
    ```
2. Start crAPI Virtual Machine
    ```
    $ cd deploy/vagrant && vagrant up
    ```
3. Visit `http://192.168.33.20`

**Note**: All emails are sent to mailhog service and can be checked on `http://192.168.33.20:8025`.

To remove crAPI completely from your system, run the following command from the repository root directory:

```
$ cd deploy/vagrant && vagrant destroy
```




### Kubernetes
If you would like to deploy on kubernetes we have sample k8s configs already created. Check [the setup instructions][setup-k8s] for more details.



[setup-k8s]: ./setup.md#kubernetes-minikube
[Vagrant]: https://www.vagrantup.com/downloads
[VirtualBox]: https://www.virtualbox.org/wiki/Downloads
