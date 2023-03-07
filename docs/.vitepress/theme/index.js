import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { ElForm, ElFormItem, ElInput, ElInputNumber, ElButton, ElRadio, ElSlider, ElColorPicker } from 'element-plus'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(ElementPlus)
    ctx.app.component(ElForm.name, ElForm)
    ctx.app.component(ElFormItem.name, ElFormItem)
    ctx.app.component(ElInput.name, ElInput)
    ctx.app.component(ElInputNumber.name, ElInputNumber)
    ctx.app.component(ElButton.name, ElButton)
    ctx.app.component(ElRadio.name, ElRadio)
    ctx.app.component(ElSlider.name, ElSlider)
    ctx.app.component(ElColorPicker.name, ElColorPicker)
  }
}
