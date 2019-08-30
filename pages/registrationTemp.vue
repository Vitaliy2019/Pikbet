<template>
  <v-container>
    <v-layout column justify-center align-center>
      <bread-crumbs :items="items"></bread-crumbs>

      <v-card>
        <v-toolbar>
          <v-icon color="green">check_circle</v-icon>
          <v-toolbar-title>Подтверждение регистрации</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <h1 style="text-align:center">Вам необходимо пройти подтверждение регистрации!</h1>
          <p class="pt-3">
            Вам на почту выслано письмо, в котором
            необходимо пройти подтверждение регистрации.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn to="/">
            <v-icon color="red" left>touch_app</v-icon>На главную
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn to="/Cabinet">
            <v-icon color="light-green" left>touch_app</v-icon>Личный кабинет
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>
<script>
import BreadCrumbs from '~/components/Page/Header/BreadCrumbs'
export default {
  name: 'registration-success',
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
          text: 'Успешная регистрация',
          disabled: true,
          href: ''
        }
      ]
    }
  }
}
</script>
