#!/bin/bash

# Variables
BACKUP_DIR="/backup"
DB_NAME="vteam"
DB_USER="root"
DB_PASSWORD="vteampass"
DATE=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="${BACKUP_DIR}/${DB_NAME}_backup_${DATE}.sql"

# Ensure the backup directory exists
mkdir -p $BACKUP_DIR

# Perform the backup (adjust according to your MariaDB settings)
mysqldump -u $DB_USER -p$DB_PASSWORD $DB_NAME > $BACKUP_FILE

echo "Backup created: $BACKUP_FILE"
