export default ($scope,$state,$stateParams) => {
    'ngInject';
    var objects = [];
    var APP_ID = '5bvO8DuAvNBimTFK5lnA40fw-gzGzoHsz';

// 应用 Key，用来校验权限（Web 端可以配置安全域名来保护数据安全）
var APP_KEY = 'VM1HMyD5YnNYB9SYKQbBRBkD';

// 初始化
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
var query = new AV.Query('TestObject');
query.contains('testabc','abc123');
query.find().then(function(res){
  console.log(res);
},function(err){
  
});
// var TestObject = AV.Object.extend('TestObject');
// AV.Object.fetchAll(objects).then(function (objects) {
//     console.log(objects);
//   }, function (error) {
//     // 异常处理
//   });
// var testObject = new TestObject();
// testObject.save({
//   testabc: 'abc123'
// }).then(function() {
//   console.log('LeanCloud works!');
// }).catch(function(err) {
//   console.log('error:' + err);
// });
    $scope.partTitle = $stateParams.type;
    console.log($stateParams.type);
}
