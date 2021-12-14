// dépendances pour que Gulp fonctionne. toujours mieux de l'installer
// commande : npm i gulp gulp-sass sass --save-dev
// penser à installer gulp en général : npm i -g gulp si t'as un message d'erreur
// pour lancer GULP, tappe GULP

const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

// fonction pour qu'il toppe les fichiers ou il faut
// et qu'il les transforme en css
// tout du moins je pense

function buildStyles() {
    return src('SASS-SCSS/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

// Function Watch dans Gulp-Sass checkant le dossier avec lequel nous lui 
// avont dit de regarder. Y Appliquer buildStyles plus haut
function watcher() {
    watch(['SASS-SCSS/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watcher)