<template>
  <v-container align-center justify-center>
    <bread-crumbs :items="items"></bread-crumbs>
    <v-layout align-center justify-center>
      <v-flex offset-sm1 shrink>
        <h2>Администрация:</h2>
        <hr class="white">
        <v-layout my-2 align-center>
          <v-icon aria-hidden="true" class="mr-3 yellow--text">phone</v-icon>
          <span class="subheading">+7 xxx xxx xx xx</span>
          <span>&nbsp;-&nbsp;позвони администрации</span>
        </v-layout>
        <v-layout my-2 align-center>
          <v-icon aria-hidden="true" class="mr-3 yellow--text">alternate_email</v-icon>
          <span class="subheading">info@pikbet.ru</span>
          <span>&nbsp;-&nbsp;напиши администрации</span>
        </v-layout>
        <h2>Отдел по работе с клиентами:</h2>
        <hr class="white">
        <v-layout my-2 align-center>
          <v-icon aria-hidden="true" class="mr-3 yellow--text">phone</v-icon>
          <span class="subheading">+7 yyy yyy yy yy</span>
          <span>&nbsp;-&nbsp;работа с клиентами</span>
        </v-layout>
        <v-layout my-2 align-center>
          <v-icon aria-hidden="true" class="mr-3 yellow--text">alternate_email</v-icon>
          <span class="subheading">contact@pikbet.ru</span>
          <span>&nbsp;-&nbsp;работа с клиентами</span>
        </v-layout>
        <h2>Технический отдел:</h2>
        <hr class="white">

        <v-layout my-2 align-center>
          <v-icon aria-hidden="true" class="mr-3 yellow--text">phone</v-icon>
          <span class="subheading">+7 xxx xxx xx xx</span>
          <span>&nbsp;-&nbsp;техническая поддержка</span>
        </v-layout>
        <v-layout my-2 align-center>
          <v-icon aria-hidden="true" class="mr-3 yellow--text">alternate_email</v-icon>
          <span class="subheading">support@pikbet.ru</span>
          <span>&nbsp;-&nbsp;техническая поддержка</span>
        </v-layout>
        <h2>Социальные сети:</h2>
        <hr class="white">
        <v-layout my-2 align-center>
          <v-icon aria-hidden="true" class="mr-3 yellow--text">fa fa-vk</v-icon>
          <span class="subheading">
            <a href="#" target="_blank">В контакте</a>
          </span>
        </v-layout>
        <v-layout my-2 align-center>
          <v-icon aria-hidden="true" class="mr-3 yellow--text">fa fa-facebook</v-icon>
          <span class="subheading pl-2">
            <a href="#" target="_blank">facebook</a>
          </span>
        </v-layout>
        <v-layout my-2 align-center>
          <v-icon aria-hidden="true" class="mr-3 yellow--text">fa fa-telegram</v-icon>
          <span class="subheading">telegram</span>
        </v-layout>

        <h2>Наш адрес:</h2>
        <hr class="white">
        <v-layout my-2 align-center>
          <v-icon aria-hidden="true" class="mr-3 yellow--text">account_balance</v-icon>
          <span class="subheading">МО, г. Краснознаменск, ул. Связистов, д.1, оф. 112</span>
        </v-layout>
      </v-flex>
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
      itemss: ['Тема 1', 'Тема 2', 'Тема 3', 'Тема 4'],
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

