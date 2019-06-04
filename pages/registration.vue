<template>
  <v-container>
    <v-layout column justify-center align-center>
      <bread-crumbs :items="items"></bread-crumbs>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-card class="mx-auto" max-width="500">
          <v-card-title class="title font-weight-regular justify-space-between">
            <span>{{ currentTitle }}</span>
            <v-avatar
              color="yellow lighten-2"
              class="subheading black--text"
              size="24"
              v-text="step"
            ></v-avatar>
          </v-card-title>

          <v-window v-model="step">
            <v-window-item :value="1">
              <v-card-text>
                <v-text-field
                  label="Email"
                  v-model="email"
                  color="yellow"
                  :error-messages="emailErrors"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
                <span
                  class="caption grey--text text--darken-1"
                >Это адрес электронной почты, который вы будете использовать для входа в свою учетную запись PIKBET.</span>
              </v-card-text>
            </v-window-item>

            <v-window-item :value="2">
              <v-card-text>
                <v-text-field
                  color="yellow"
                  label="Пароль"
                  type="password"
                  v-model="password"
                  :error-messages="passwordErrors"
                  required
                  @input="$v.password.$touch()"
                  @blur="$v.password.$touch()"
                ></v-text-field>
                <v-text-field
                  color="yellow"
                  label="Подтверждение пароля"
                  type="password"
                  v-model="repeatPassword"
                  :error-messages="repeatPasswordError"
                  @input="$v.repeatPassword.$touch()"
                  @blur="$v.repeatPassword.$touch()"
                ></v-text-field>
                <span
                  class="caption grey--text text--darken-1"
                >Пожалуйста введите пароль для вашего аккаунта</span>
              </v-card-text>
            </v-window-item>

            <v-window-item :value="3">
              <div class="pa-3 text-xs-center">
                <v-img class="mb-3" contain height="128" src="/logo.jpg"></v-img>
                <h3 class="title font-weight-light mb-2">Добро пожаловать в PIKBET</h3>
                <span class="caption grey--text">Спасибо за регистрацию!</span>
              </div>
            </v-window-item>
          </v-window>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn :disabled="step === 1" flat @click="step--">Назад</v-btn>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="step === 3"
              color="yellow"
              class="black--text"
              depressed
              @click="step++"
            >Следующий</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-layout>
  </v-container>
</template>
<script>
import BreadCrumbs from '~/components/Page/Header/BreadCrumbs'
import { validationMixin } from 'vuelidate'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  validations: {
    password: { required, minLength: minLength(3) },
    repeatPassword: { sameAsPassword: sameAs('password') },
    email: { required, email },
    // tel: { required },
    checkbox: { sameAsTrue: sameAs(() => true) }
  },
  name: 'my-registr',
  components: { BreadCrumbs },
  data: () => ({
    valid: false,
    email: 'info@pikbet.ru',
    password: '',
    repeatPassword: '',
    step: 1,
    items: [
      {
        text: 'Главная',
        disabled: false,
        href: '/'
      },
      {
        text: 'регистрация',
        disabled: true,
        href: ''
      }
    ]
  }),

  computed: {
    checkboxErrors () {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.sameAsTrue &&
        errors.push('Вы должны принять условия использования для продолжения!')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.minLength &&
        errors.push('Пароль должен быть не менее трех символов')
      !this.$v.password.required && errors.push('Требуется пароль.')
      return errors
    },
    repeatPasswordError () {
      const errors = []
      if (!this.$v.repeatPassword.$dirty) return errors
      !this.$v.repeatPassword.sameAsPassword &&
        errors.push('Пароль и подтверждение пароля должны совпадать')
      //! this.$v.repeatPassword.required && errors.push('Требуется подтверждение пароля.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('E-mail должен быть правильный')
      !this.$v.email.required && errors.push('Требуется e-mail')
      return errors
    },
    currentTitle () {
      switch (this.step) {
        case 1:
          return 'Ввод основных данных'
        case 2:
          return 'Create a password'
        default:
          return 'Создать пароль'
      }
    }
  }
}
</script>