export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      // abstract: true,
      url: '/',
      templateUrl: 'app/main/main.html',
      controller:'MainController'
    })
    .state('about',{
      url:'/about',
      templateUrl:'app/about/about.html'
    })
    .state('blogmain',{
      abstract:true,
      url:'/blogmain',
      templateUrl:'app/blog/blog.html',
      controller:'blogController'
    })
    .state('blogmain.tec',{
      url:'/blogmain/tec/:type',
      templateUrl:'app/blog/blogcontent.html',
      controller:'blogController'
    })
    .state('blogmain.some',{
      url:'/blogmain/some/:type',
      templateUrl:'app/blog/blogcontent.html',
      controller:'blogController'
    })
    .state('blogmain.thought',{
      url:'/blogmain/thought/:type',
      templateUrl:'app/blog/blogcontent.html',
      controller:'blogController'
    });

  $urlRouterProvider.otherwise('/');
}
