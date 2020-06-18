import {
  Form,
  FormItem,
  Input,
  InputNumber,
  Button,
  Radio,
  Slider,
  ColorPicker,
} from "element-ui";

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
}) => {
  Vue.use(Form);
  Vue.use(FormItem);
  Vue.use(Input);
  Vue.use(InputNumber);
  Vue.use(Button);
  Vue.use(Radio);
  Vue.use(Slider);
  Vue.use(ColorPicker);
};
