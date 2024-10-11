/**
 * 路由配置
 */
export const routes = [
  // 根路径
  {
    path: '/',
    redirect: '/brief',
  },
  // 介绍
  {
    name: '介绍',
    path: '/brief',
    component: '@/pages/Brief',
  },
  // 详情
  {
    name: '详情',
    path: '/detail',
    component: '@/pages/Detail',
  },
];

/**
 * 左侧菜单配置
 */
export const menuData = [
  // 介绍
  {
    // 菜单的名字
    name: '介绍',
    path: '/brief',
    // 在菜单中隐藏子节点
    hideChildrenInMenu: true,
    // layout 的菜单模式
    layout: 'side',
    // 在面包屑中隐藏
    hideInBreadcrumb: true,
    // 在菜单中隐藏自己和子节点
    hideInMenu: true,
    // 不展示菜单
    menuRender: false,
  },
  // 详情
  {
    // 菜单的名字
    name: '详情',
    path: '/detail',
    // 在菜单中隐藏子节点
    hideChildrenInMenu: true,
    // layout 的菜单模式
    layout: 'side',
    // 在面包屑中隐藏
    hideInBreadcrumb: true,
    // 在菜单中隐藏自己和子节点
    hideInMenu: true,
    // 不展示菜单
    menuRender: false,
  },
];
