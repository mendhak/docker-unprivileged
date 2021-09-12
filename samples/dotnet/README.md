## Running ASP.NET Core with an unprivileged user

The ASP.NET Core image does not come with a built-in unprivileged user, so we must [create it ourselves](Dockerfile#L14) and set it as the owner of the `/app` directory.  

Note that this is a multistage Dockerfile, and the 'build' stage runs as root.  The final stage, where the application runs unprivileged, just [copies files](Dockerfile#L20) from the build stage.  




## Demo

Build and run the image

```
docker-compose up
```

Then browse to http://localhost:3000/Hello

In a new window, run whoami to see the user the process is running as:  

```
docker-compose exec webserver whoami
# app
```

Try mounting a volume, and you should fail. 

```
docker-compose exec webserver mount /dev/null /mnt/test
# mount: permission denied (are you root?)
```

Try installing nmap, and you should fail. 

```
docker-compose exec webserver apk add nmap
# ERROR: Unable to lock database: Permission denied
# ERROR: Failed to open apk database: Permission denied
```

You can stop the container now, and don't forget to clean up

```
docker-compose down
```
