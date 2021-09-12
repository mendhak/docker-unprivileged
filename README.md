# Unprivileged Docker Samples

_Work in progress_

A collection of Docker samples running with unprivileged users.  

## Background

By default, processes in Docker containers run as the root user.  The running application having root access inside the container translates to root access on the host itself.  Either through a bug, a vulnerability in the application, a vulnerability in another container on the same host, or deliberately, running as root increases the risk to your applications and infrastructure.  Attackers can run undesirable or malicious processes and use it as a starting point for scanning your systems, injecting code, or attacking your infrastructure through [lateral movement](https://www.crowdstrike.com/cybersecurity-101/lateral-movement/).  

The risk can be reduced by having your processes in the container run as a non-root user.  This follows the [principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege) and is considered a [security best practice](https://snyk.io/blog/10-docker-image-security-best-practices/).      

This repository is a collection of few samples, based on official images, and aims to show how to run the application as an unprivileged user.  

## Samples  

[NodeJS sample](samples/nodejs/)  
[Nginx sample](samples/nginx/)  
[ASP.NET Core sample](samples/dotnet/)  

// TODO  
Java  
Postgres  
MSSQL  
PHP  
Python  


## Other notes

Not to be confused with [rootless mode](https://docs.docker.com/engine/security/rootless/).  The Docker _daemon_ itself runs as a root user, and it is possible to install, configure and run that daemon as a non-root user.  The advantage here is that it takes care of both the docker daemon as well as the container runtime.  But take note of the current limitations with this.  
