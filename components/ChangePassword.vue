<template>
  <v-dialog v-model="dialogPassword" width="500">
    <v-card>
      <v-card-title class="headline" primary-title>Изменить пароль</v-card-title>
      <v-form ref="form" v-model="valid" lazy-validation class="px-3">
        <v-text-field
          type="password"
          v-model="kaper.Pasword"
          :counter="10"
          :rules="passwordRules"
          label="Пароль"
          required
        ></v-text-field>

        <v-text-field
          v-model="passwordConfirm"
          :append-icon="show1 ? 'visibility' : 'visibility_off'"
          :type="show1 ? 'text' : 'password'"
          :rules="passwordConfirmRules"
          @click:append="show1 = !show1"
          label="Подтвердить пароль"
          required
        ></v-text-field>
      </v-form>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="!valid" color="success" @click="validate">Изменить</v-btn>
        <v-btn color="error" @click="reset">Сброс</v-btn>
        <v-btn color="primary" @click="dialogPassword = false">Отменить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data () {
    return {
      show1: false,
      valid: true,
      password: '',
      passwordRules: [
        v => !!v || 'Требуется пароль',
        v => (v && v.length <= 10) || 'Введите не более 10 символов'
      ],
      passwordConfirm: '',
      passwordConfirmRules: [
        v => !!v || 'Требуется подтверждение пароля',
        v =>
          (v && v === this.kaper.Pasword) ||
          'Пароль и подтверждение пароля должны совпадать'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail должен быть правильный'
      ]
    }
  },
  computed: {
    kaper: {
      get () {
        return this.$store.getters['kaper/getKaper']
      },
      set (newValue) {
        this.$store.dispatch('kaper/setKapper', newValue)
      }
    },
    dialogPassword: {
      get () {
        return this.$store.state.kaper.dialogPassword
      },
      set (newValue) {
        this.$store.dispatch('kaper/setDialogPassword', newValue)
      }
    }
  },

  methods: {
    async validate () {
      if (this.$refs.form.validate()) {
        await this.$store.dispatch('kaper/setKapper', this.kaper)
        this.$notify({
          title: 'Успешно!',
          type: 'success',
          message: 'Пароль успешно обновлен!'
        })
        this.dialogPassword = false
      }
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>