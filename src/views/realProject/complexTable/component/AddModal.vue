<template>
  <div class="add-modal">
    <a-button type="primary" @click="showModal">新增</a-button>
    <a-modal v-model:visible="visible" title="新增项目" @ok="handleSubmit">
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
import { ref, reactive, toRaw } from 'vue'
import { Form } from 'ant-design-vue'
const useForm = Form.useForm

const visible = ref(false)
const modelRef = reactive({
  name: '',
  // star: 0,
  upgraded: undefined,
  status: true,
})
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

const emits = defineEmits(['add'])
const handleSubmit = () => {
  validate()
    .then(() => {
      console.log(toRaw(modelRef))
      visible.value = false
      resetFields()
      emits('add')
    })
    .catch((err) => {
      console.log('error', err)
    })
}

const showModal = () => {
  visible.value = true
}
</script>
<style lang="scss"></style>
