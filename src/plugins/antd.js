import { Form, Input, Button } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import { App, createApp } from 'vue'
export function setupAntd(app: App<Element>) {
  app.use(Button)
}
