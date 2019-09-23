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
      />
    </a>
    <v-spacer></v-spacer>
    <!-- <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" @click>прогнозы</v-btn>
      </template>
      <v-list>
        <v-list-tile @click>
          <v-list-tile-title>добавить прогноз</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click>
          <v-list-tile-title>поиск капперов</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>-->
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" to="/capers">
          <v-icon left small>fa-plus</v-icon>прогноз
        </v-btn>
      </template>
      <span>Добавить прогноз</span>
    </v-tooltip>

    <v-btn to="/capers">прогнозы</v-btn>
    <v-btn to="/capers">капперы</v-btn>

    <v-btn to="/raitingBk">рейтинг бк</v-btn>
    <v-btn>победители</v-btn>
    <v-btn to="/contact">контакты</v-btn>
    <v-spacer></v-spacer>

    <v-dialog v-model="dialog" width="500" v-if="!isAuthenticated">
      <template v-slot:activator="{ on }">
        <v-btn @click="dialog=true">
          <v-icon>account_box</v-icon>вход
        </v-btn>
      </template>
      <login-in></login-in>
    </v-dialog>
    <v-btn to="/registration" v-if="!isAuthenticated">
      <v-icon>aspect_ratio</v-icon>регистрация
    </v-btn>
    <v-menu
      offset-y
      origin="center center"
      :nudge-right="140"
      :nudge-bottom="10"
      transition="scale-transition"
      v-if="isAuthenticated"
    >
      <v-btn icon large flat slot="activator">
        <v-avatar size="30px">
          <img src="/avatar/default.png" alt="Аватар" />
        </v-avatar>
      </v-btn>
      <v-list class="pa-0">
        <v-list-tile
          v-for="(item,index) in items"
          :to="!item.href ? { name: item.name } : null"
          :href="item.href"
          @click="item.click"
          ripple="ripple"
          :disabled="item.disabled"
          :target="item.target"
          rel="noopener"
          :key="index"
        >
          <v-list-tile-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
<script>
import LoginIn from '~/components/Login'
import { mapGetters } from 'vuex'
export default {
  name: 'tool-bar-header-md',
  components: { LoginIn },
  data () {
    return {
      title: 'pikbet.ru',
      menu: null,
      items: [
        {
          icon: 'menu_book',
          href: '#',
          title: 'Кабинет',
          click: e => {
            this.$router.push('/Cabinet/default')
          }
        },
        {
          icon: 'account_balance',
          href: '#',
          title: 'Баланс',
          click: e => {
            this.$router.push('/Cabinet/balance')
          }
        },
        {
          icon: 'account_circle',
          href: '#',
          title: 'Профиль',
          click: e => {
            this.$router.push('/Cabinet/profile')
          }
        },
        {
          icon: 'star_border',
          href: '#',
          title: 'Мои прогнозы',
          click: e => {
            this.$router.push('/Cabinet/prognozes')
          }
        },
        {
          icon: 'fullscreen_exit',
          href: '#',
          title: 'Выход',
          click: () => this.$auth.logout()
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
    dialog: {
      get () {
        return this.$store.state.login
      },
      set () {
        this.$store.commit('viewLogin')
      }
    }
  },
  mounted () {
    // debugger; // eslint-disable-line
    // console.log(this.isAuthenticated);
  },
  methods: {
    LoginIn () {}
  }
}
</script>
