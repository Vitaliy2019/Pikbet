<template>
  <v-container>
    <v-layout column justify-center align-center>
      <bread-crumbs :items="items"></bread-crumbs>
      <h1 class="text-xs-center">Помощь по сайту. Форма обратной связи</h1>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Имя" required></v-text-field>

        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-select
          v-model="select"
          :items="itemss"
          :rules="[v => !!v || 'Требуется заполнить']"
          label="Тема"
          required
        ></v-select>
        <v-textarea :rules="nameMess" solo name="input-7-4" label="Введите свое сообщение" value></v-textarea>
        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'Вы должны согласиться, чтобы продолжить!']"
          label="Вы согласны?"
          required
        ></v-checkbox>

        <v-btn :disabled="!valid" color="success" @click="validate">Проверить</v-btn>

        <v-btn color="error" @click="reset">Сбросить форму</v-btn>

        <v-btn color="warning" @click="resetValidation">Сбросить валидацию</v-btn>
      </v-form>
      <p>Много ответов уже есть в разделе. «Часто задаваемые вопросы».</p>
    </v-layout>
  </v-container>
</template>
<script>
import BreadCrumbs from '~/components/Page/Header/BreadCrumbs'
import WindowIndex from '~/components/WindowIndex'
export default {
  name: 'prog-noz',
  components: { BreadCrumbs, WindowIndex },
  data () {
    return {
      items: [
        {
          text: 'Главная',
          disabled: false,
          href: '/'
        },
        {
          text: 'помощь по сайту',
          disabled: true,
          href: ''
        }
      ],
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Требуется имя',
        v => (v && v.length <= 10) || 'Имя должно быть не более 10 символов'
      ],
      nameMess: [v => !!v || 'Требуется значение'],
      email: '',
      emailRules: [
        v => !!v || 'Требуется E-mail',
        v => /.+@.+/.test(v) || 'E-mail должен быть правильный'
      ],
      select: null,
      itemss: ['Тема 1', 'Тема 2', 'Тема 3', 'Тема 4'],
      checkbox: false
    }
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
}
</script>

