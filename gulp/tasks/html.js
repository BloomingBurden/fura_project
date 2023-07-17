import prettyHtml from 'gulp-pretty-html';
import pug from 'gulp-pug';

export function html() {
    return app.gulp.src(app.path.src.html, { sourcemaps: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            })))
        .pipe(pug({
            pretty: true,
            verbose: true,
        }))
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(prettyHtml({
            indent_char: ' ',
            indent_size: 2,
        }))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.sync.stream());
}