docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya11/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t kursovaya11/app ../..
