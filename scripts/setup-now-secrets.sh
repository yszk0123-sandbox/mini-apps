#!/bin/bash -e

now secret add google-client-email "$GOOGLE_CLIENT_EMAIL"
now secret add google-private-key "$GOOGLE_PRIVATE_KEY"
now secret add app-access-token "$APP_ACCESS_TOKEN"
