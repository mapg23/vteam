FROM mariadb:latest

# Install mariadb-client to get mysqldump
RUN apt-get update && apt-get install -y mariadb-client

# Copy initialization SQL scripts (optional)
COPY ./sql /docker-entrypoint-initdb.d/

# Copy the backup script into the container
COPY *.sh .

# Make the backup script executable
RUN chmod +x ./backup.sh