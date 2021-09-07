## Node JS

The official NodeJS image comes with an unprivileged user, `node`.  

It's a simple matter of setting `USER node` in the Dockerfile, and copying files with `--chown=node:node`.  

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

