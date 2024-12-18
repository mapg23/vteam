#!/bin/bash

# Set the backup directory
BACKUP_DIR="./backups"
DB_NAME="vteam"
DB_USER="root"
DB_PASSWORD="vteampass"

# Create backup directory if it does not exist
mkdir -p $BACKUP_DIR && chmod 777 $BACKUP_DIR

# Dump the database to a file

until mysql -h "$DB_HOST" -u "$DB_USER" -p"$DB_PASSWORD" -e "SHOW DATABASES;" > /dev/null 2>&1; do
  echo "Waiting for database to initialize..."
  sleep 5
done

while true; do
    mariadb-dump -u $DB_USER -p$DB_PASSWORD $DB_NAME > $BACKUP_DIR/${DB_NAME}.sql
    sleep 240
done