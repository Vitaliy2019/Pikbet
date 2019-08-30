<template>
  <v-toolbar>
    <a href="/" class="pt-2">
      <img src="/logo.png" style="height:30px" />
    </a>
    <v-spacer></v-spacer>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" icon right flat class="white--text">
          <v-icon>reorder</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-tile v-for="(item, index) in items" :key="index" @click="toRouter(index)">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'tool-bar-header-md',
  data () {
    return {
      items: [
        { title: 'прогнозы' },
        { title: 'капперы' },
        { title: 'рейтинг бк' },
        { title: 'новости' },
        { title: 'контакты' }
      ],
      title: 'pikbet.ru'
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    toRouter (ind) {
      switch (ind) {
        case 0:
          this.$router.push('/prognoz')
          break
        case 1:
          this.$router.push('/capers')
          break
        case 2:
          this.$router.push('/pravila')
          break
        case 3:
          this.$router.push('/raitingBk')
          break
        case 4:
          this.$router.push('/')
          break
        default:
          this.$router.push('/')
          break
      }
    }
  }
}
</script>
