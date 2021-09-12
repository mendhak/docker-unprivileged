## Running ASP.NET Core with a rootless unprivileged user

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

And remember to clean up

```
docker-compose down
```
