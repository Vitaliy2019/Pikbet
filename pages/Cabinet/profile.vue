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
            <div>
              <v-speed-dial
                v-model="fab"
                :top="top"
                :bottom="bottom"
                :right="right"
                :left="left"
                :direction="direction"
                :open-on-hover="hover"
                :transition="transition"
                style="padding-left: 32px"
              >
                <template v-slot:activator>
                  <v-tooltip bottom>
                    <template v-slot:activator="{on}">
                      <v-btn v-on="on" v-model="fab">Изменить аватар</v-btn>
                    </template>
                    <span>Выберите аватар</span>
                  </v-tooltip>
                </template>
                <template v-for="(item, index) in selectAvatars">
                  <pan-thumb :image="item.Avatar" :key="index" @click="clickAvatar" />
                </template>
              </v-speed-dial>
            </div>
            <div>
              <v-btn @click="clickPassword">Изменить пароль</v-btn>
            </div>
            <v-list>
              <v-list-tile>
                <v-list-tile-title class="text-xs-center">
                  <span>Логин: {{kaper.Login}}</span>
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
            <div class="text-xs-center pb-3">
              <v-btn color="success" @click="save">Сохранить</v-btn>
            </div>
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
                      <v-chip>{{this.$options.filters.nFormatter(kaper.Count_stavok)}}</v-chip>
                      <label>Остаток</label>
                    </div>
                    <div class="pt-3">
                      <v-chip>{{this.$options.filters.nFormatter(kaper.Dodhod)}}</v-chip>
                      <label>Доход</label>
                    </div>
                    <div class="pt-3">
                      <v-chip align-end>{{this.$options.filters.nFormatter(kaper.Prohod)}}</v-chip>
                      <label>Проход</label>
                    </div>
                    <div class="pt-3">
                      <v-chip align-end>{{this.$options.filters.nFormatter(kaper.Sr_koeff)}}</v-chip>
                      <label>Ср. коэфф</label>
                    </div>
                    <div class="pt-3">
                      <v-chip align-end>{{this.$options.filters.nFormatter(kaper.Roi)}}</v-chip>
                      <label>ROI</label>
                    </div>
                    <div class="pt-3">
                      <v-chip align-end>{{this.$options.filters.nFormatter(kaper.Roi)}}</v-chip>
                      <label>ROI</label>
                    </div>
                    <div class="pt-3">
                      <v-chip align-end>{{this.$options.filters.nFormatter(kaper.Vyigreshey)}}</v-chip>
                      <label>Выигрыш</label>
                    </div>
                    <div class="pt-3">
                      <v-chip align-end>{{this.$options.filters.nFormatter(kaper.Vozvratov)}}</v-chip>
                      <label>Возвраты</label>
                    </div>
                    <div class="pt-3">
                      <v-chip align-end>{{this.$options.filters.nFormatter(kaper.Proigreshey)}}</v-chip>
                      <label>Проигрыш</label>
                    </div>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
    <change-password></change-password>
  </v-container>
</template>
    
<script>
import BreadCrumbs from '~/components/Page/Header/BreadCrumbs'
import PanThumb from '~/components/PanThumbNoTransition'
import ChangePassword from '~/components/ChangePassword'

export default {
  middleware: ['auth'],
  components: { BreadCrumbs, PanThumb, ChangePassword },
  name: 'profile',
  data () {
    return {
      valid: true,
      direction: 'bottom',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition',

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
      itemsP: ['мужской', 'женский'],
      selectAvatars: []
    }
  },
  computed: {
    dilogPassword: {
      get () {
        return this.$store.getters['kaper/getDilogPassword']
      },
      set (newValue) {
        debugger; //eslint-disable-line
        this.$store.dispatch('kaper/setDialogPassword', newValue)
      }
    },
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
  async created () {
    const { avatars } = await this.$axios.$get('/api/Avatars')
    this.selectAvatars = avatars
  },
  methods: {
    clickPassword () {
      this.$store.dispatch('kaper/setDialogPassword', true)
    },
    clickAvatar (avatar) {
      this.kaper.Avatar = avatar
    },
    async save () {
      await this.$store.dispatch('kaper/setKapper', this.kaper)
      if (this.prOperation === 'ok') {
        this.$store.dispatch('kaper/setPrGetList', true)
        this.dialogForm = false
        this.$notify({
          title: 'Выполнено',
          type: 'success',
          message: 'Данные изменены'
        })
      } else {
        this.$notify({
          title: 'Ошибка!',
          type: 'error',
          message: 'Упс... Что-то пошло не так...'
        })
      }
    }
  }
}
</script>
<style scoped>
/* This is for documentation purposes and will not be needed in your application 
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}*/
</style>