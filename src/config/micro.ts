/**
 * 微前端相关
 * @author Jack
 * @Date 20241011
 */

export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    console.log('component-bootstrap =>', props);
  },
  // 应用 render 之前触发
  async mount(props) {
    console.log('component-mount =>', props);
  },
  // 应用卸载之后触发
  async unmount(props) {
    console.log('component-unmount =>', props);
  },
};
