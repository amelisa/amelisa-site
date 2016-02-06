import gulp from 'gulp'
import stylus from 'gulp-stylus'
import concat from 'gulp-concat'
import postcss from 'gulp-postcss'
import svgSprite from 'gulp-svg-sprite'
import autoprefixer from 'autoprefixer'
import postcssFilenamePrefix from 'postcss-filename-prefix'

const apps = ['app']
const processors = [autoprefixer, postcssFilenamePrefix]
const svgConfig = {
  mode: {
    defs: {
      dest: './',
      sprite: 'svg-sprite'
    }
  }
}

function css () {
  for (let app of apps) {
    gulp.src(['styles/index.styl', `components/**/*.styl`, `${app}/**/*.styl`])
      .pipe(stylus({
        'include css': true,
        import: [
          __dirname + '/styles/colors.styl'
        ]
      }))
      .pipe(postcss(processors))
      .pipe(concat(`${app}.styles.css`))
      .pipe(gulp.dest('public/css/apps'))
  }
}

gulp.task('css', css)

function svg () {
  gulp.src(['styles/icons/**/*.svg'])
    .pipe(svgSprite(svgConfig))
    .pipe(gulp.dest('public/img/sprites'))
}

gulp.task('svg', svg)

gulp.task('watch', () => {
  for (let app of apps) {
    gulp.watch(`${app}/**/*.styl`, ['css'])
  }
  gulp.watch('styles/**/*.styl', ['css'])
  gulp.watch('styles/icons/**/*.svg', ['svg'])
})

gulp.task('default', ['css', 'svg', 'watch'])

gulp.task('build', ['css', 'svg'])
