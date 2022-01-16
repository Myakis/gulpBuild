export const jsPlugins = () => {
  return app.gulp
    .src(app.path.src.jsPlug, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'JavaScriptPlugins',
          message: `Error: <%= error.message %>`,
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.js));
};
