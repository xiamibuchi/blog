import Form from "element-ui/lib/form";
import FormItem from "element-ui/lib/form-item";
import Input from "element-ui/lib/input";
import InputNumber from "element-ui/lib/input-number";
import Button from "element-ui/lib/button";
import Radio from "element-ui/lib/radio";
import Slider from "element-ui/lib/slider";
import ColorPicker from "element-ui/lib/color-picker";

import "element-ui/lib/theme-chalk/form.css";
import "element-ui/lib/theme-chalk/form-item.css";
import "element-ui/lib/theme-chalk/input.css";
import "element-ui/lib/theme-chalk/input-number.css";
import "element-ui/lib/theme-chalk/button.css";
import "element-ui/lib/theme-chalk/radio.css";
import "element-ui/lib/theme-chalk/slider.css";
import "element-ui/lib/theme-chalk/color-picker.css";

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
