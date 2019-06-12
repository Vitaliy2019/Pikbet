<template>
  <v-toolbar fixed app>
    <a
      href="/"
      class="pt-2"
      title="Прогнозы на спорт. Стань успешным каппером. Регистрируйся на сайте и зарабатывай на своих прогнозах. Следи за успешными капперами. Повторяй ставки и выигрывай вместе с ними."
    >
      <img
        src="/logo.png"
        style="height:40px"
        alt="Прогнозы на спорт. Стань успешным каппером. Регистрируйся на сайте и зарабатывай на своих прогнозах. Следи за успешными капперами. Повторяй ставки и выигрывай вместе с ними."
      >
    </a>
    <v-spacer></v-spacer>
    <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" to="/prognoz">прогнозы</v-btn>
      </template>
      <v-list>
        <v-list-tile @click>
          <v-list-tile-title>добавить прогноз</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click>
          <v-list-tile-title>поиск капперов</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>

    <v-btn to="/capers">капперы</v-btn>

    <v-btn to="/raitingBk">рейтинг бк</v-btn>
    <v-btn>победители</v-btn>
    <v-btn to="/contact">контакты</v-btn>
    <v-spacer></v-spacer>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn @click="LoginIn" v-on="on">
          <v-icon>account_box</v-icon>вход
        </v-btn>
      </template>
      <login-in></login-in>
    </v-dialog>
    <v-btn to="/registration">
      <v-icon>aspect_ratio</v-icon>регистрация
    </v-btn>
  </v-toolbar>
</template>
<script>
import LoginIn from '~/components/Login'
export default {
  name: 'tool-bar-header-md',
  components: { LoginIn },
  data () {
    return {
      title: 'pikbet.ru'
    }
  },
  computed: {
    dialog: {
      get () {
        return this.$store.state.login
      },
      set () {
        this.$store.commit('viewLogin')
      }
    }
  },
  methods: {
    LoginIn () {}
  }
}
</script>
