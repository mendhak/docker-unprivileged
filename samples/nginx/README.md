## Running Nginx with an unprivileged user

This sample uses the official nginx image from Docker hub.  

Although this image comes with an `nginx` user, there is additional work required to get to serve files.  

We have to [chown several paths](Dockerfile#L5) so that the process running under the `nginx` user can access it.  

Because nginx is now running as an unprivileged user, we must also [set the port to a number higher than 1024](default.conf#L2) in the `default.conf`.  


## Demo

For the demo, start the web server:

```
docker-compose up
```

Browse to http://localhost:3000/

In a new window, run whoami to see the user the process is running as:  

```
docker-compose exec webserver whoami
# nginx
```


And remember to clean up

```
docker-compose down
```
