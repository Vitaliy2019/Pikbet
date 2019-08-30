<template>
  <v-container>
    <v-layout column justify-center align-center>
      <bread-crumbs :items="items"></bread-crumbs>

      <v-card>
        <v-toolbar>
          <v-icon color="green">check_circle</v-icon>
          <v-toolbar-title>Успешная регистрация</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <h1 style="text-align:center">Вы успешно зарегистрировались!</h1>
          <p class="pt-3">Теперь Вам доступны все сервисы нашего сайта.</p>
          <p>
            В сутки разрешено публиковать не более 20 прогнозов, максимальная
            ставка не более 500 виртуальных евро, минимальная ставка 50 виртуальных евро.
          </p>
          <p>
            На ваш счет зачаисленно
            <strong class="green--text">10 000</strong> виртуальных евро.
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
