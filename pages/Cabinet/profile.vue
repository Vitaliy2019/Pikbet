<template>
  <v-container grid-list-xl align-center justify-center>
    <v-layout wrap column justify-center align-center>
      <bread-crumbs :items="items"></bread-crumbs>
      <v-layout row wrap align-start justify-center>
        <v-flex xs12 sm12 md4>
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
        <v-flex xs12 sm12 md8>
          <v-card class="pt-2">
            <v-form ref="form" v-model="valid" lazy-validation width="100%">
              <v-layout wrap class="mx-1">
                <v-flex xs12 sm12 md6>
                  <v-card class="px-2">
                    <v-text-field v-model="kaper.City" label="Город"></v-text-field>
                    <v-select v-model="kaper.Pol" :items="itemsP" label="Выберите пол"></v-select>
                    <v-text-field v-model="kaper.Family" label="Фамилия"></v-text-field>
                    <v-text-field v-model="kaper.Fnme" label="Имя"></v-text-field>
                    <v-text-field v-model="kaper.Email" label="E-mail"></v-text-field>
                    <v-text-field v-model="kaper.Tel" label="Телефон"></v-text-field>
                    <v-text-field v-model="kaper.N_yandex_dengi" label="Яндекс.Деньги"></v-text-field>
                    <v-text-field
                      required
                      :rules="passwRules"
                      v-model="kaper.Pasword"
                      label="Пароль"
                    ></v-text-field>
                  </v-card>
                </v-flex>
                <v-flex xs12 sm12 md6>
                  <v-card class="px-2">
                    <div class="pt-3">
                      <label class="pr-2">Счет</label>
                      <v-chip>
                        <v-avatar class="yellow darken-2">₽</v-avatar>
                        {{this.$options.filters.nFormatter(kaper.Score)}}
                      </v-chip>
                    </div>
                    <div class="pt-3">
                      <label>Рейтинг</label>
                      <v-rating
                        readonly
                        v-model="kaper.Rating"
                        color="yellow accent-4"
                        hover
                        size="18"
                      ></v-rating>
                    </div>
                    <div class="pt-3">
                      <label>Остаток</label>
                      <v-chip>{{this.$options.filters.nFormatter(kaper.Count_stavok)}}</v-chip>
                    </div>
                    <div class="pt-3">
                      <label>Доход</label>
                      <v-chip>{{this.$options.filters.nFormatter(kaper.Dodhod)}}</v-chip>
                    </div>
                    <div class="pt-3">
                      <label>Проход</label>
                      <v-chip>{{this.$options.filters.nFormatter(kaper.Prohod)}}</v-chip>
                    </div>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-form>
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
      ],
      itemsP: ['мужской', 'женский']
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
  created () {
    console.log(this.$options.filters)
    // console.log(this.kaper)
  },
  methods: {}
}
</script>