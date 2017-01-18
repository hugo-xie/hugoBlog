export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      // abstract: true,
      url: '/',
      templateUrl: 'app/main/main.html'
    })
    .state('about',{
      url:'/about',
      templateUrl:'app/about/about.html'
    })
    .state('blogmain',{
      abstract:true,
      url:'/blogmain',
      templateUrl:'app/blog/blog.html'
    })
    .state('blogmain.tec',{
      url:'/blogmain/tec',
      templateUrl:'app/blog/blogcontent.html'
    });

  $urlRouterProvider.otherwise('/');
}
