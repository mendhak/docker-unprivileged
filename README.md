_Work in progress_

A collection of Docker samples running as unprivileged users.  

## Background

By default, processes in Docker containers run as the root user.  The running application having root access inside the container translates to root access on the host itself.  Either through a bug, vulnerability, or deliberately, running as root increases the risk to your applications and infrastructure.  

The risk can be reduced by having your processes in the container run as a non-root user.  This repository is a collection of few samples, based on official images, and aims to show how to run the application as an unprivileged user.  

## Samples

[NodeJS sample](samples/nodejs/)  
[Nginx sample](samples/nginx/)  
[ASP.NET Core sample](samples/dotnet/)  
