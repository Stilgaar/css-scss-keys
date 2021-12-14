// dépendances pour que Gulp fonctionne. toujours mieux de l'installer
// commande : npm i gulp gulp-sass sass --save-dev
// penser à installer gulp en général : npm i -g gulp si t'as un message d'erreur
// pour lancer GULP, tappe GULP

const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

// plugin de gulp permetant d'utiliser que le CSS qu'on a utilisé. Genre à utiliser une fois que
// l'on a terminé le site et que
const purgecss = require('gulp-purgecss')

// fonction pour qu'il toppe les fichiers ou il faut
// et qu'il les transforme en css
// tout du moins je pense

function buildStyles() {
    return src('SASS-SCSS/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({ content: ['*.html'] })) // ici on lui dit de checker au niveau des HTML 
        // il va exclure tout le CSS que le HTML n'utilise pas 
        .pipe(dest('css'))
}

// Function Watch dans Gulp-Sass checkant le dossier avec lequel nous lui 
// avont dit de regarder. Y Appliquer buildStyles plus haut
// on va aussi lui dire de checker le HTML (ici toutes les pages) pour checker si ya un changement
// du coup si on enlève ou remet une classe dans le HTML il reconstruit l'index.css avec la classe qu'on a 
// soit rajouté, soit retiré. 
function watcher() {
    watch(['SASS-SCSS/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watcher)