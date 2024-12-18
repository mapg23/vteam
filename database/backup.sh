#!/bin/bash

# Set the backup directory
BACKUP_DIR="./backups"
DB_NAME="vteam"
DB_USER="root"
DB_PASSWORD="vteampass"

# Create backup directory if it does not exist
mkdir -p $BACKUP_DIR && chmod 777 $BACKUP_DIR

# Dump the database to a file
# mariadb-dump -u $DB_USER -p$DB_PASSWORD $DB_NAME > $BACKUP_DIR/${DB_NAME}.sql