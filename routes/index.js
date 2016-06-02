var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'koa2 title'
  };

  var p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("hello");
    }, 3000)
  });
  //异步转同步写法， await 期待一个promise 对象。
  var test=await p1;

  await ctx.render('index', {
    test: test
  });
});


module.exports = router;
