const data = [
  {
    path: "/",
    component: "Layout",
    redirect: "/index",
    children: [
      {
        path: "index",
        name: "Index",
        component: "index/index",
        meta: {
          title: "首页",
          icon: "home",
          affix: true,
          noCache: true,
        },
      },
    ],
  },
  {
    path: "/401",
    component: "401",
    meta: { title: "401错误页演示", icon: "bug" },
  },
  {
    path: "/404",
    component: "404",
    meta: { title: "404错误页演示", icon: "bug" },
  },
];
export default [
  {
    url: "/menu/navigate",
    type: "post",
    response: (config) => {
      return { code: 200, msg: "success", data: data };
    },
  },
];
