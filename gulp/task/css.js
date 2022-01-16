import ccsmin from 'gulp-cssmin';
export const css = () => {
  return app.gulp
    .src(app.path.src.css)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'CSS',
          message: `Error: <%= error.message %>`,
        })
      )
    )
    .pipe(app.plugins.if(app.isBuild, ccsmin()))

    .pipe(app.gulp.dest(app.path.build.css));
};
