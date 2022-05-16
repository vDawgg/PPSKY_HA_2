FROM openjdk:11-jre-slim
MAINTAINER veit.cf
COPY /backend/build/libs/backend-0.0.1-SNAPSHOT.jar backend-0.0.1-SNAPSHOT.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","backend-0.0.1-SNAPSHOT.jar"]