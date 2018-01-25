# MEAN_Docker
Dockerized Task Manager MEAN Application

# Steps to run on Docker

### Single Instance of Docker

Start Docker instance

run docker-compose up --build on cmd to build the docker images and run it once the build is successful.
The configuration file for docker-compose is docker-compose.yml.

3 docker images will start running - Angular UI, Express NodeJS server, MongoDb Database

Navigate to http://localhost:4200/ to test the application.

### Docker Swarm Mode

Start Docker Swarm on local using - docker swarm init

#### Running using my published docker images on Docker Hub

Remove the "build" and "links" commands from the docker-compose.yml. They are not needed since data is being picked from images and not from local.

run docker stack deploy --compose-file docker-compose.yml mean_docker to start the application.
3 docker images will start running - Angular UI, Express NodeJS server, MongoDb Database

Navigate to http://localhost:4200/ to test the application.

#### Running using locally setting up a registry instead of central registry like Docker Hub

Change image paths in docker-compose.yml

angular: 
  image: 127.0.0.1:5000/todoapp_angular
express:
  image: 127.0.0.1:5000/todoapp_express

Start local registry - docker service create --name registry --publish published=5000,target=5000 registry:2
Check it using - docker service ls.

Run docker-compose build to build your local images.
Run docker-compose push to push the images to the registry

run docker stack deploy --compose-file docker-compose.yml mean_docker to start the application.
3 docker images will start running - Angular UI, Express NodeJS server, MongoDb Database

Navigate to http://localhost:4200/ to test the application.

------------------------------------------------------------------------------------------------------------------------
Docker Hub Link - https://hub.docker.com/r/ruchitgandhi/mean-docker/

Help Links - https://docs.docker.com/engine/swarm/stack-deploy/#deploy-the-stack-to-the-swarm

# Steps to run on Local without Docker

## Todoapp-Angular

### Setup Project
Run cd todoapp-angular to go inside the directory

Run npm install to install all the dependencies.

Run npm install -g @angular/cli to install Angular CLI globally.

Run npm start to run the Development Server 
(If running on local, then you have to change the package.json. Edit the "start" command under "scripts" to be "ng serve")
(If running on Docker, then keep the package.json file as it is.) 
#### TIP
The "start" command is different when you run it on Docker - "ng serve --host 0.0.0.0"
If you just use "ng serve" to run development server and it by default starts on loop interface (available only on localhost). 
You should provide specific parameter "--host 0.0.0.0" to run it on all interfaces.

Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Todoapp-Express

### Database Setup
Download and install MongoDB. Make sure that the database is running at localhost:27017

### Setup Project
Run cd todoapp-express to go inside the directory

Run npm install to install all the dependencies.

Run npm install -g nodemon to install Nodemon Globally.

Run npm start to run the NodeJS Server.

(If running on local, then you have to change the app.js file. Edit the mongodb connect url to "mongodb://localhost:27017/todoapp")
(If running on Docker, then keep the app.js file as it is)

#### TIP 
The mongodb connect url with Docker is - mongodb://mongo/todoapp - where the mongo in the middle is the name of the mongodb instance
as given in docker-compose file.

Port Used - 3000

# Links to upload Docker images to Docker Hub
https://docs.docker.com/docker-cloud/builds/push-images/

https://docs.docker.com/docker-hub/repos/#creating-a-new-repository-on-docker-hub

## Link to my Docker Hub images
https://hub.docker.com/r/ruchitgandhi/mean-docker/tags/

#### References
https://medium.com/netscape/mean-app-tutorial-with-angular-4-part-1-18691663ea96
