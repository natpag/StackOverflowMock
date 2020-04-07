docker build -t stack-overflow-mock-image .

docker tag stack-overflow-mock-image registry.heroku.com/sdg-stackoverflow-mock-site/web


docker push registry.heroku.com/sdg-stackoverflow-mock-site/web

heroku container:release web -a sdg-stackoverflow-mock-site