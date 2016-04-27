//gulp组件
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-minify-css'),
    views = require('gulp-ng-template'),
    argv = require('yargs').argv,

//路径配置
    sourcePath = '../trunk/',

    watchPath_js = sourcePath + 'js/',
    watchPath_pack = sourcePath + 'js/pack/',
    watchPath_css = sourcePath + 'css/',
    watchPath_img = sourcePath + 'img/',
    watchPath_view = sourcePath + 'view/',

    targetPath = '../release/',
    targetPath_js = targetPath + 'js',
    targetPath_css = targetPath + 'css',
    targetPath_img = targetPath + 'img',

//库路径配置
    libJsSrc = ['angular.min.js', 'angular-route.min.js', 'angular-ui-router.min.js', 'md5.min.js', 'jquery-2.1.3.min.js', 'highcharts.js', 'bootstrap-datetimepicker.min.js', 'bootstrap-datetimepicker.zh-CN.js'].map(function (v) {
        return sourcePath + 'js/lib/' + v
    }),

//版本配置
    versions = ['v1', 'v2', 'v3'];

// 获取满足要求的JS文件路径
function getIndexJsPath(version) {
    var v = version,
        commons = ['service'].map(function (type) {
            return sourcePath + 'js/' + type + '/*.js';
        }),
    // controller、derective 区分版本
        types = ['controller', 'derective'].map(function (type) {
            return sourcePath + 'js/' + type + '/' + v + '/*js';
        })
    return commons.concat(types);
}

//批量声明task -- 构建 index.v.js 和 view.v.js 文件监控任务
function makeWatchTaskOfJs() {
    versions.forEach(function (version) {
        var srcs = getIndexJsPath(version);
        // JS
        gulp.task('js_' + version, function () {
            return gulp.src(srcs)
                .pipe(concat('index.' + version + '.js'))
                .pipe(gulp.dest(watchPath_pack));
        });
        // HTML
        gulp.task('view_' + version, function () {
            return gulp.src(sourcePath + 'view/' + version + '/*.*')
                .pipe(views({moduleName: "ngTemplates", standalone: true}))
                .pipe(concat('view.' + version + '.js'))
                .pipe(gulp.dest(watchPath_pack));
        });
    });
}

gulp.task('build', function () {
    var tasks = [], curTarPath;
    versions.forEach(function (v) {
        var indexJsSrcs = getIndexJsPath(v);
        curTarPath = targetPath + v + '/';
        // html
        tasks.concat(gulp.src(sourcePath + v + '.html').pipe(gulp.dest(curTarPath)));
        // img
        tasks.concat(gulp.src(watchPath_img + '*.*').pipe(gulp.dest(curTarPath + 'img/')));
        // css
        tasks.concat(gulp.src(watchPath_css + '*.css').pipe(gulp.dest(curTarPath + 'css/')));
        // index.v.js
        tasks.concat(gulp.src(indexJsSrcs)
                .pipe(concat('index.' + v + '.source.js'))
                .pipe(gulp.dest(curTarPath + 'js/'))
                .pipe(uglify())
                .pipe(rename('index.' + v + '.js'))
                .pipe(gulp.dest(curTarPath + 'js/pack/'))
        );
        // view.v.js
        tasks.concat(gulp.src(watchPath_view + v + '/*.html')
                .pipe(views({moduleName: "ngTemplates", standalone: true}))
                .pipe(concat('view.' + v + '.js'))
                .pipe(uglify())
                .pipe(gulp.dest(curTarPath + 'js/pack/'))
        );
        // lib.js
        tasks.concat(gulp.src(libJsSrc)
            .pipe(concat('lib.js'))
            .pipe(gulp.dest(curTarPath + 'js/')));
        // index.html
        tasks.concat(gulp.src(sourcePath + 'index.html')
            .pipe(gulp.dest(targetPath)));
    });
    return tasks;
});

// watch
gulp.task('watch', function () {
    var allTasks = [];
    versions.forEach(function (vs) {
        allTasks = allTasks.concat(['js_' + vs, 'view_' + vs]);
        var path1 = getIndexJsPath(vs);
        var path2 = watchPath_view + vs + '/*.html';
        console.log(path2);
        // 对 JS 部分开始watch
        gulp.watch(path1, function () {
            var src = 'js_' + vs;
            console.log(src);
            gulp.start([src]);
        });
        // 对HTML代码块开始watch
        gulp.watch(path2, function () {
            var src = "view_" + vs;
            gulp.start([src]);
        });
    });
    gulp.start(allTasks);
});

// 一定要包含默认
gulp.task('default', function () {
    switch (argv.type) {
        case 'watch':
            makeWatchTaskOfJs();
            gulp.start('watch');
            break;
        case 'build':
            gulp.start('build')
    }
});