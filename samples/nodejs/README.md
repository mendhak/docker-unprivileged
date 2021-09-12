## Running Node JS with an unprivileged user

The official NodeJS image conveniently comes with an unprivileged user, `node`.  

It's a simple matter of setting [`USER node`](Dockerfile#L9) in the Dockerfile, and copying the application files with [`--chown=node:node`](Dockerfile#L11).  It's also necessary to [set the node user as the owner](Dockerfile#L7) before switching to the node user. 

## Demo

For the demo, start the web server:

```
docker-compose up
```

Browse to http://localhost:3000/

In a new window, run whoami to see the user the process is running as:  

```
docker-compose exec webserver whoami
# node
```

And remember to clean up

```
docker-compose down
```

