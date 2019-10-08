const gulp = require("gulp");
const sass = require("gulp-sass");
const del = require("del");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("watch", () => {
  gulp.watch("sass/**/*.scss", done => {
    gulp.series(["clean", "styles"])(done);
  });
});

gulp.task("styles", () => {
  return (
    gulp
      .src("sass/**/*.scss")
      .pipe(sourcemaps.init())
      .pipe(sass().on("error", sass.logError))
      //.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest("./assets/css/"))
  );
});

gulp.task("clean", () => {
  return del(["css/main.css"]);
});

gulp.task("default", gulp.series(["clean", "watch"]));
