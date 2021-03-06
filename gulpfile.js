//Основной модуль
import gulp from "gulp";

//Импорт путей
import { path } from "./gulp/config/path.js";

//Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

//Передаем значени в глобальную переменную
global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

//Импорт задач
import { copy } from "./gulp/task/copy.js";
import { reset } from "./gulp/task/reset.js";
import { html } from "./gulp/task/html.js";
import { server } from "./gulp/task/server.js";
import { scss } from "./gulp/task/scss.js";
import { js } from "./gulp/task/js.js";
import { images } from "./gulp/task/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/task/fonts.js";
import { svgSprive } from "./gulp/task/svgSprive.js";
import { zip } from "./gulp/task/zip.js";
import { ftp } from "./gulp/task/ftp.js";

//Наблюдатель
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}
//Для запуска svg спрайтов
export { svgSprive };

//Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

//Основные задачи
const mainTasks = gulp.series(
  fonts,
  gulp.parallel(copy, html, scss, js, images)
);

//Построение сценариев выполнения задач
const dev = gulp.series(
  reset,
  svgSprive,
  mainTasks,
  gulp.parallel(watcher, server)
);
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);
//Экспорт сценариев
export { dev };
export { build };
export { deployZIP };
export { deployFTP };
//Выполнение сценария по умолчанию
gulp.task("default", dev);
