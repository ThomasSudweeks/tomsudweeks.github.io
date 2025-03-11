#!/bin/sh
cp dist/index.html dist/404.html
echo "-> Copied index.html to 404.html"

rm -r ./../docs
mv dist ./../docs
echo "-> Moved frontend/dist to docs"

echo "-> Postbuild complete"