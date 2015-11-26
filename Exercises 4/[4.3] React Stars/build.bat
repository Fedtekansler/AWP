mkdir build
browserify -t [ babelify --presets [ react ] ] src/app.js -o build/app.js