const routePathes: Array<string> = [
  'home',
  'item-edit',
  'item-add'
]

let routes: Array<object> = []

/**
 * Route registration for all pages in detected in folder
 */
routePathes.forEach(path => {
  const parentRoutes = require(`../pages/${path}/route`).default
  const { children } = parentRoutes
  let childRoutes: Array<object> = []

  if (children && children.length > 0) {
    childRoutes = children.map(childRoute => {
      childRoute.name = `${parentRoutes.name}.${childRoute.name}`
      return childRoute
    })
  }

  delete parentRoutes.children
  childRoutes.push(parentRoutes)
  routes = routes.concat(childRoutes)
})

function routerRegister($urlRouterProvider, $stateProvider): void {
  $urlRouterProvider.otherwise('home')

  routes.forEach(route => {
    $stateProvider.state(route)
  })
}

routerRegister.$inject = ['$urlRouterProvider', '$stateProvider']

export default routerRegister
