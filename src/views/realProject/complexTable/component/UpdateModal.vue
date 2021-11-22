<template>
  <div class="add-modal">
    <a-modal :visible="visible" title="更新项目" @ok="handleSubmit" @cancel="emits('cancel')">
      <a-form :label-col="{ span: 6 }">
        <a-form-item label="Name" v-bind="validateInfos.name">
          <a-input v-model:value="modelRef.name" />
        </a-form-item>
        <!-- <a-form-item label="Star" v-bind="validateInfos.star">
          <a-rate v-model:value="modelRef.star" />
        </a-form-item> -->
        <a-form-item label="upgraded" v-bind="validateInfos.upgraded">
          <a-select v-model:value="modelRef.upgraded" placeholder="please select your upgraded">
            <a-select-option v-for="i in 10" :key="i" :value="i">
              {{ i }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="status" v-bind="validateInfos.status">
          <a-radio-group v-model:value="modelRef.status">
            <a-radio :value="true" name="status">Online</a-radio>
            <a-radio :value="false" name="status">Offline</a-radio>
          </a-radio-group>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup>
import { reactive, toRaw, defineEmits, defineProps, toRefs } from 'vue'
import { Form } from 'ant-design-vue'
const useForm = Form.useForm

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  updateData: {
    type: Object,
    default: () => {},
  },
})
// console.log(isProxy(props.updateData))
// const modelRef = reactive({
//   name: '',
//   star: 0,
//   upgraded: undefined,
//   status: [],
// })
const modelRef = toRefs(...props.updateData)
// console.log(isReactive(modelRef))
// console.log(props,props.updateData,modelRef)
const rulesRef = reactive({
  name: [
    {
      required: true,
      message: 'Please input name',
    },
  ],
  // star: [
  //   {
  //     required: true,
  //     message: 'Please input star',
  //   },
  // ],
  upgraded: [
    {
      required: true,
      message: 'Please select upgraded',
    },
  ],
  status: [
    {
      required: true,
      message: 'Please select status',
      // type: 'array',
    },
  ],
})
const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef)
// console.log(props)
const emits = defineEmits(['update'])
const handleSubmit = () => {
  validate()
    .then(() => {
      console.log(toRaw(modelRef))
      // visible.value = false
      resetFields()
      emits('update')
    })
    .catch((err) => {
      console.log('error', err)
    })
}
</script>
<style lang="scss"></style>
