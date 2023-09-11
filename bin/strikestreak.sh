#!/usr/bin/env bash
# exit on error
set -o errexit

# front end build commands 
rm -rf public
npm install --prefix client && npm run build --prefix client
cp -a client/build/. public/

# backend build commands
bundle install
bundle exec rake db:migrate db:seed
# Will this work for postgresql?  May need `bundle exec rails db:create db:migrate db:seed` and `bundle exec rails db:drop?`