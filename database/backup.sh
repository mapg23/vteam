#!/bin/bash

# Set the backup directory
BACKUP_DIR="."
DB_NAME="vteam"
DB_USER="root"
DB_PASSWORD="vteampass"

# Create backup directory if it does not exist
mkdir -p $BACKUP_DIR

# Dump the database to a file
mysqldump -u $DB_USER -p$DB_PASSWORD $DB_NAME > $BACKUP_DIR/${DB_NAME}.sql
