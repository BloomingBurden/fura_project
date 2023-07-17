export function video() {
    return app.gulp.src(app.path.src.video)
        .pipe(app.gulp.dest(app.path.build.video));
}