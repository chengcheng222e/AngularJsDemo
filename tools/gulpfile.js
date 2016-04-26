var //gulp组件
    gulp = require('gulp'),
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
    watchPath_view = sourcePath + 'views/',

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