#!/usr/bin/env bash
# Updates the site on the server: pull, install, build, restart the API.
set -euo pipefail

cd /var/www/tv-mount
git pull --ff-only
npm ci
npm run build
systemctl restart tv-mount-api
echo "Deploy finished: $(date)"
