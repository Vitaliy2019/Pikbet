<template>
  <v-container grid-list-xl>
    <v-layout column justify-center>
      <bread-crumbs :items="items"></bread-crumbs>
      <v-layout row wrap align-center>
        <v-flex xs4>
          <v-card class="text-xs-center">
            <v-avatar size="70" class="my-3">
              <img :src="kaper.Avatar" alt="alt" />
            </v-avatar>
            <v-btn>Изменить аватар</v-btn>
            <v-list>
              <v-list-tile>
                <v-list-tile-title class="text-xs-center">
                  <span>Логин: {{kaper.Login}}</span>
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
            <div class="text-xs-center pb-3">
              <v-btn @click="$auth.logout()">Выход</v-btn>
            </div>
          </v-card>
        </v-flex>
        <v-flex xs8>
          <v-card>
            <v-layout >
              <v-flex xs5>
                <v-card>
                iougffgjhiy
              </v-card></v-flex>
              <v-flex xs5>bcbsdkcsdhbc</v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>
    
<script>
import BreadCrumbs from '~/components/Page/Header/BreadCrumbs'
export default {
  middleware: ['auth'],
  components: { BreadCrumbs },
  name: 'profile',
  data () {
    return {
      profile: {},
      items: [
        {
          text: 'Главная',
          disabled: false,
          href: '/'
        },
        {
          text: 'личный кабинет каппера',
          disabled: false,
          href: '/Cabinet/default'
        },
        {
          text: 'профиль',
          disabled: true,
          href: ''
        }
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
    prOperation: {
      get () {
        return this.$store.getters['kaper/getPrOperation']
      },
      set (newValue) {
        this.$store.commit('kaper/SET_PR_OPERATION', newValue)
      }
    }
  },
  methods: {}
}
</script>