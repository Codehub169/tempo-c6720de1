#!/bin/bash

set -e

echo "Ensuring db directory exists..."
mkdir -p db

echo "Installing dependencies (this may take a few minutes)..."
npm install

echo "Building frontend application..."
npm run build

echo "Starting server on port 9000..."
# Ensures the application runs on port 9000 as required.
PORT=9000 npm start
