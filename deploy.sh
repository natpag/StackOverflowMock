docker build -t StackOverflowMock-image .

docker tag StackOverflowMock-image registry.heroku.com/StackOverflowMock/web


docker push registry.heroku.com/StackOverflowMock/web

heroku container:release web -a StackOverflowMock