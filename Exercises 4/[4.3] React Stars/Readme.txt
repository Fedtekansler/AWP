[Install node package manager (npm)]
google

[Install browserify globally]
npm install -g browserify

[Install React locally]
(set current directory to the one that contains this file and the /src folder)
npm install --save react react-dom babelify babel-preset-react

[Build app]
browserify -t [ babelify --presets [ react ] ] src/app.js -o build/app.js
(or just click build.bat)