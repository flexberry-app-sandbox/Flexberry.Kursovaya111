docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya11-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursovaya11-java/app ../../..
