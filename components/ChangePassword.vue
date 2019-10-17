<template>
  <v-dialog v-model="dialogPassword" width="500">
    <v-card>
      <v-card-title class="headline" primary-title>Изменить пароль</v-card-title>
      <v-form ref="form" v-model="valid" lazy-validation class="px-3">
        <v-text-field
          type="password"
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Пароль"
          required
        ></v-text-field>

        <v-text-field v-model="email" :rules="emailRules" label="Подтвердить пароль" required></v-text-field>
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
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Требуется пароль',
        v => (v && v.length <= 10) || 'Введите не более 10 стмволов'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  computed: {
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
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>