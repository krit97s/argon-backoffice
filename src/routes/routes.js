import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/Dashboard.vue'),
      },
      {
        path: '/icons',
        name: 'icons',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Icons.vue')
      },
      {
        path: '/report',
        name: 'report',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Report.vue')
      },
      {
        path: '/source',
        name: 'source',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Source.vue')
      },
      {
        path: '/anounce',
        name: 'anounce',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Anounce.vue')
      },
      {
        path: '/carousel',
        name: 'carousel',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Carousel.vue')
      },
      {
        path: '/marketing',
        name: 'marketing',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Marketing.vue')
      },
      {
        path: '/payment',
        name: 'payment',
        component: () => import(/* webpackChunkName: "demo" */ '../views/payment/add.vue')
      },
      {
        path: '/invest',
        name: 'invest',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Invest.vue')
      },
      {
        path: '/deposit',
        name: 'deposit',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Deposit.vue')
      },
      {
        path: '/category',
        name: 'category',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Category.vue')
      },
      {
        path: '/credit',
        name: 'credit',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/CreditLog.vue')
      },
      {
        path: '/setting',
        name: 'setting',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Setting.vue')
      },
      {
        path: '/product',
        name: 'product',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Product.vue')
      },
      {
        path: '/addmarketing',
        name: 'add marketing',
        component: () => import(/* webpackChunkName: "demo" */ '../views/marketing/add.vue')
      },
      {
        path: '/addanounce',
        name: 'add anounce',
        component: () => import(/* webpackChunkName: "demo" */ '../views/anounce/add.vue')
      },
      {
        path: '/addcarousel',
        name: 'add carousel',
        component: () => import(/* webpackChunkName: "demo" */ '../views/carousel/add.vue')
      },
      {
        path: '/addproduct',
        name: 'add product',
        component: () => import(/* webpackChunkName: "demo" */ '../views/product/add.vue')
      },
      {
        path: '/addsource',
        name: 'add source',
        component: () => import(/* webpackChunkName: "demo" */ '../views/source/add.vue')
      },
      {
        path: '/addcategory',
        name: 'add category',
        component: () => import(/* webpackChunkName: "demo" */ '../views/category/add.vue')
      },
      {
        path: '/editorder',
        name: 'edit order',
        component: () => import(/* webpackChunkName: "demo" */ '../views/order/edit.vue')
      },
      {
        path: '/editmarketing',
        name: 'edit marketing',
        component: () => import(/* webpackChunkName: "demo" */ '../views/marketing/edit.vue')
      },
      {
        path: '/editsetting',
        name: 'edit setting',
        component: () => import(/* webpackChunkName: "demo" */ '../views/setting/edit.vue')
      },
      {
        path: '/editanounce',
        name: 'edit anounce',
        component: () => import(/* webpackChunkName: "demo" */ '../views/anounce/edit.vue')
      },
      {
        path: '/editcarousel',
        name: 'edit carousel',
        component: () => import(/* webpackChunkName: "demo" */ '../views/carousel/edit.vue')
      },
      {
        path: '/editsource',
        name: 'edit source',
        component: () => import(/* webpackChunkName: "demo" */ '../views/source/edit.vue')
      },
      {
        path: '/editcategory',
        name: 'edit category',
        component: () => import(/* webpackChunkName: "demo" */ '../views/category/edit.vue')
      },
      {
        path: '/addinvest',
        name: 'add invest',
        component: () => import(/* webpackChunkName: "demo" */ '../views/invest/add.vue')
      },
      {
        path: '/editinvest',
        name: 'edit invest',
        component: () => import(/* webpackChunkName: "demo" */ '../views/invest/edit.vue')
      },
      {
        path: '/editproduct',
        name: 'edit product',
        component: () => import(/* webpackChunkName: "demo" */ '../views/product/edit.vue')
      },
      {
        path: '/maps',
        name: 'maps',
        component: () => import(/* webpackChunkName: "demo" */ '../views/GoogleMaps.vue')
      },
      {
        path: '/tables',
        name: 'tables',
        component: () => import(/* webpackChunkName: "demo" */ '../views/RegularTables.vue')
      }
    ],

  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;
