<template>
  <v-layout align-center justify-center>
    <v-flex xs12>
      <v-card class="elevation-12">
        <v-toolbar dark color="yellow">
          <v-toolbar-title>Введите данные для входа в личный кабинет</v-toolbar-title>
          <v-spacer />
        </v-toolbar>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="onSubmit">
            <v-text-field
              color="yellow"
              v-model="email"
              prepend-icon="person"
              name="login"
              label="E-mail"
              type="text"
              :error-messages="emailErrors"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            />
            <v-text-field
              color="yellow"
              id="password"
              v-model="password"
              prepend-icon="lock"
              name="password"
              label="Пароль"
              type="password"
              :error-messages="passwordErrors"
              required
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
            />
            <vue-recaptcha
              ref="invisibleRecaptcha"
              size="invisible"
              sitekey="6LfZuqcUAAAAAKm_TlDV3SWrAhrUpejjlOJ_FAV5"
              @verify="onVerify"
              @expired="onExpired"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-tooltip bottom>
            <v-btn slot="activator" :loading="loading" color="success" @click="onSubmit">Войти</v-btn>
            <span>Вход в личный кабинет</span>
          </v-tooltip>
          <v-tooltip bottom>
            <v-btn
              slot="activator"
              class="ml-2"
              color="yellow"
              to="/registration"
              @click="Registration"
            >Регистрация</v-btn>
            <span>Регистрация для входа в личный кабинет</span>
          </v-tooltip>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import VueRecaptcha from 'vue-recaptcha'
export default {
  components: { VueRecaptcha },
  mixins: [validationMixin],
  validations: {
    password: { required },
    email: { required, email }
  },
  /* props: {
    source: String
  }, */
  data: () => ({
    loading: false,
    drawer: null,
    valid: true,
    password: '',
    email: ''
  }),
  computed: {
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Требуется пароль.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('E-mail должен быть правильный')
      !this.$v.email.required && errors.push('Требуется e-mail')
      return errors
    }
  },
  head: {
    title: '🚀 Авторизация для входа в личный кабинет',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Авторизация для входа в личный кабинет'
      }
    ]
  },
  created () {
    this.$v.$touch()
  },
  methods: {
    Registration () {
      this.$store.commit('viewLogin')
      this.$router.push('/registration')
    },
    onSubmit: function () {
      // debugger; // eslint-disable-line
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$refs.invisibleRecaptcha.execute()
        // this.$store.commit('viewLogin')
        // this.$router.push('/Cabinet')
      }
    },
    onVerify: async function (response) {
      try {
        debugger; // eslint-disable-line
        this.loading = true
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })
        debugger; // eslint-disable-line
        this.loading = false
        this.$store.commit('viewLogin')
        this.$router.push('/Cabinet/default')
      } catch (e) {
        this.$notify({
          type: 'error',
          title: 'Внимание',
          message: e
        })

        this.resetRecaptcha()
        this.$message({
          message: 'Неверный логин или пароль',
          type: 'error'
        })
      }
    },
    onExpired: function () {},
    resetRecaptcha () {
      this.loading = false
      this.$refs.invisibleRecaptcha.reset() // Direct call reset method
    }
  }
}
</script>

