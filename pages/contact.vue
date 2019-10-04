<template>
  <v-container align-center justify-center>
    <bread-crumbs :items="items"></bread-crumbs>
    <v-layout column align-center justify-center>
      <v-card width="60%">
        <div>&nbsp;</div>
        <v-spacer></v-spacer>
        <v-flex xs12 align-center justify-center class="text-xs-center">
          <h2>Наши контакты:</h2>

          <v-layout my-2 align-center class="text-xs-center">
            <v-icon aria-hidden="true" class="ml-5 yellow--text">fa-youtube</v-icon>
            <span class="subheading pl-2">
              <a href="#" target="_blank">Мы в ютубе</a>
            </span>
          </v-layout>
          <v-layout my-2 align-center>
            <v-icon aria-hidden="true" class="ml-5 yellow--text">fa-twitter</v-icon>
            <span class="subheading pl-2">
              <a href="#" target="_blank">Мы в твитере</a>
            </span>
          </v-layout>
          <v-layout my-2 align-center>
            <v-icon aria-hidden="true" class="ml-5 yellow--text">fa-instagram</v-icon>
            <span class="subheading pl-2">Мы в инстаграм</span>
          </v-layout>
        </v-flex>
        <v-spacer></v-spacer>
        <div></div>
      </v-card>
    </v-layout>
    <div>
      <h2 class="text-xs-center my-3">Информационная поддержка</h2>
    </div>
    <v-layout align-center justify-center>
      <v-flex offset-sm1 shrink>
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
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import BreadCrumbs from '~/components/Page/Header/BreadCrumbs'
export default {
  name: 'con-tact',
  components: { BreadCrumbs },
  data () {
    return {
      items: [
        {
          text: 'Главная',
          disabled: false,
          href: '/'
        },
        {
          text: 'контакты',
          disabled: true,
          href: ''
        }
      ],
      selected: [2],
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
      itemss: [
        'Не рассчитан или непрвильно рассчитан прогноз',
        'Предложения по улучшению сайта',
        'Комерческое предложение и реклама на сайте',
        'Другое'
      ],
      checkbox: false
    }
  },
  methods: {
    toggle (index) {
      const i = this.selected.indexOf(index)

      if (i > -1) {
        this.selected.splice(i, 1)
      } else {
        this.selected.push(index)
      }
    },
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

<style scoped>
.v-card {
  border-color: white;
  border-style: solid;
}
</style>