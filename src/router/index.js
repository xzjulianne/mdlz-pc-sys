import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layouts";
import EmptyLayout from "@/layouts/EmptyLayout";

Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index"),
      },
    ],
  },
];

/*当settings.js里authentication配置的是intelligence时，views引入交给前端配置*/
export const asyncRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "Index",
        component: () => import("@/views/index/index"),
        meta: {
          title: "首页",
          icon: "home",
          affix: true,
          noCache: true,
        },
      },
    ],
  },
  //用户管理
  {
    path: "/userManage",
    component: Layout,
    redirect: "noRedirect",
    children: [
      {
        path: "userManage",
        name: "UserManage",
        component: () => import("@/views/byui/userManage/index"),
        meta: {
          title: "用户管理",
          icon: "user-friends",
          roles: ["admin", "test"],
        },
      },
    ],
  },
  //心水管理
  {
    path: "/contentManage",
    component: Layout,
    redirect: "noRedirect",
    children: [
      {
        path: "contentManage",
        name: "ContentManage",
        component: () => import("@/views/byui/contentManage/index"),
        meta: {
          title: "心水管理",
          icon: "file-contract",
          roles: ["admin", "test"],
        },
      },
    ],
  },
  //热搜管理
  {
    path: "/topSearchManage",
    component: Layout,
    redirect: "noRedirect",
    children: [
      {
        path: "topSearchManage",
        name: "TopSearchManage",
        component: () => import("@/views/byui/topSearchManage/index"),
        meta: {
          title: "热搜管理",
          icon: "search-location",
          roles: ["admin", "test"],
        },
      },
    ],
  },
  //曝光管理
  {
    path: "/exposureManage",
    component: Layout,
    redirect: "noRedirect",
    children: [
      {
        path: "exposureManage",
        name: "ExposureManage",
        component: () => import("@/views/byui/exposureManage/index"),
        meta: {
          title: "曝光管理",
          icon: "eye",
          roles: ["admin", "test"],
        },
      },
    ],
  },
  //分类管理
  {
    path: "/sortManage",
    component: Layout,
    redirect: "noRedirect",
    children: [
      {
        path: "sortManage",
        name: "SortManage",
        component: () => import("@/views/byui/sortManage/index"),
        meta: {
          title: "分类管理",
          icon: "bars",
          roles: ["admin", "test"],
        },
      },
    ],
  },
  //分类管理（子菜单）
  // {
  //   path: "/sort",
  //   component: Layout,
  //   redirect: "noRedirect",
  //   name: "Sort",
  //   meta: { title: "分类管理", icon: "bars" },
  //   alwaysShow: true,
  //   children: [
  //     {
  //       path: "sortManage",
  //       name: "SortManage",
  //       component: () => import("@/views/byui/sortManage/index"),
  //       meta: {
  //         title: "分类",
  //         roles: ["admin", "test"],
  //       },
  //     },
  //   ],
  // },
  {
    path: "/error",
    component: EmptyLayout,
    redirect: "noRedirect",
    name: "Error",
    meta: { title: "错误页", icon: "bug" },
    alwaysShow: true,
    children: [
      {
        path: "/401",
        name: "401",
        component: () => import("@/views/401"),
        meta: { title: "401" },
      },
      {
        path: "/404",
        name: "404",
        component: () => import("@/views/404"),
        meta: { title: "404" },
      },
    ],
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },
];

const router = new VueRouter({
  mode: "hash",
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: constantRoutes,
});

export function resetRouter() {
  router.matcher = new VueRouter({
    mode: "hash",
    scrollBehavior: () => ({
      y: 0,
    }),
    routes: constantRoutes,
  }).matcher;
}

export default router;
