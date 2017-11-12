import gulp from 'gulp';
import gulpif from 'gulp-if';//gulp 语句判读
import concat from 'gulp-concat';//处理文件拼接
import webpack from 'webpack';//打包
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';//文件重命名 标志
import livereload from 'gulp-livereload';//热更新
import plumber from 'gulp-plumber';//处理文件信息流
import rename from 'gulp-rename';//文件重新名
import uglify from 'gulp-uglify';//压缩js
import {log,colors} from 'gulp-util';//命令号工具输出
import args from './util/args';//命令行参与数解析

gulp.task('scripts',()=>{
  //打开文件
  return gulp.src(['app/js/index.js'])
  //处理错误逻辑 抛出异常
    .pipe(plumber({
      errorHandle:function(){

      }
    }))
    //重新命名
    .pipe(named())
    //编译
    .pipe(gulpWebpack({
      module:{
        loaders:[{
          test:/\.js$/,
          loader:'babel-loader'
        }]
      }
    }),null,(err,stats)=>{
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
    .pipe(gulp.dest('server/public/js'))
    .pipe(rename({
      basename:'cp',
      extname:'.min.js'
    }))
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
    .pipe(gulp.dest('server/public/js'))
    .pipe(gulpif(args.watch,livereload()))
})
