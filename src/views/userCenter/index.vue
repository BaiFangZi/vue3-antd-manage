import import { mapMutations from 'vuex'; import { mapGetters } from 'vuex';
<template>
  <div>
    <h2>切换语言</h2>
    <a-radio-group :default-value="lang" @change="handleChange">
      <a-radio value="zh"> 中文 </a-radio>
      <a-radio value="en"> 英文 </a-radio>
    </a-radio-group>

    <a-divider></a-divider>
    <a-pagination :default-current="1" :total="50" show-size-changer />
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'userCenter',

  computed: {
    ...mapGetters('app', {
      lang: 'getLang',
    }),
  },
  methods: {
    ...mapMutations('app', {
      setLang: 'SET_LANG',
    }),

    handleChange(e) {
      const lang = e.target.value
      // this.$i18n.locale = lang
      this.setLang(lang)
    },
  },
}
</script>
