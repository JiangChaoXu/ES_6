// {
//   let ajax=function(callback){
//     console.log('执行');
//     setTimeout(function() {
//       callback&&callback.call()
//     },1000)
//   };
//   ajax(function(){
//     console.log('timeOUt1');
//   })
// }
// {
//   let ajax=function () {
//     console.log('执行2')
//     return new Promise(function(resolve,reject){
//       setTimeout(function () {
//         resolve()
//       }, 1000);
//     })
//   }
//   ajax().then(function () {
//     console.log('promise','tiemout2')
//   })
// }
//
//
// {
//   let ajax=function () {
//     console.log('执行3')
//     return new Promise(function(resolve,reject){
//       setTimeout(function () {
//         resolve()
//       }, 1000);
//     })
//   }
//   ajax()
//     .then(function () {
//         return new Promise(function(resolve,reject){
//           setTimeout(function () {
//               resolve();
//           }, 2000)
//         })
//       })
//     .then(function(){
//       console.log('tiemout3')
//     })
// }
//
//
//
// {
//   let ajax=function (num) {
//     console.log('执行4')
//     return new Promise(function(resolve,reject){
//       if(num>5){
//         resolve()
//       }else{
//         throw Error('出错了')
//       }
//     })
//   }
//   ajax(6).then(function(){
//     console.log(6);
//   }).catch(function (err) {
//     console.log('错误',err)
//   })
//
//
//
//   ajax(3).then(function(){
//     console.log(3);
//   }).catch(function (err) {
//     console.log('错误',err)
//   })
// }

{
  // 搜有图片加载完加载页面
  function loadImg(src) {
    return new Promise((resolve,reject)=>function(){
      let img=document.createElemet('img');
      img.src=src;
      img.onload=function () {
        resolve();
      }
      img.onerror=function () {
        reject();
      }
    })
  }
  function showImgs (imgs) {
    console.log('imgs',imgs)
    imgs.forEach(function(img){
      document.body.createElemet(img)
    })
  }

  Promise.all([
    loadImg('https://s17.mogucdn.com/mlcdn/33449f/171111_3de33j7390chlele2fh7kg9kde182_564x282.jpg'),
    loadImg('https://s17.mogucdn.com/mlcdn/33449f/171111_3de33j7390chlele2fh7kg9kde182_564x282.jpg'),
    loadImg('https://s17.mogucdn.com/mlcdn/33449f/171111_3de33j7390chlele2fh7kg9kde182_564x282.jpg')
  ]).then(console.log(111))
}
