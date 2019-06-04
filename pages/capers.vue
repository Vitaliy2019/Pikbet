<template>
  <v-container>
    <v-layout column justify-center align-center>
      <bread-crumbs :items="items"></bread-crumbs>
      <v-data-table :headers="headers" :items="desserts" style="width:100%">
        <template v-slot:items="props">
          <td>
            <v-btn @click.stop="dialog = true">{{ props.item.name }}</v-btn>
            <v-dialog v-model="dialog" max-width="390">
              <v-card>
                <v-toolbar color="yellow black--text" dark>
                  <v-toolbar-side-icon class="black--text"></v-toolbar-side-icon>

                  <v-toolbar-title>Статистика каппера</v-toolbar-title>
                </v-toolbar>

                <v-list>
                  <v-subheader>Основная</v-subheader>

                  <v-list-tile avatar v-for="(item, index) in itemsC" :key="index">
                    <v-list-tile-content>
                      <v-list-tile-title>{{ item.title }} -- {{ item.value }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-dialog>
          </td>
          <td class="text-xs-right">{{ props.item.reg }}</td>
          <td class="text-xs-right">{{ props.item.roi }}</td>
          <td class="text-xs-right">{{ props.item.pribil }}%</td>
          <td class="text-xs-right">{{ props.item.dohod }}€</td>
        </template>
      </v-data-table>

      <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
        {{ snackText }}
        <v-btn flat @click="snack = false">Close</v-btn>
      </v-snackbar>
    </v-layout>
  </v-container>
</template>
<script>
import BreadCrumbs from '~/components/Page/Header/BreadCrumbs'
export default {
  name: 'kap-pers',
  components: { BreadCrumbs },
  data () {
    return {
      dialog: false,
      itemsC: [
        {
          icon: true,
          title: 'Прибыль',
          value: 10
        },
        {
          title: 'Доход',
          value: 10
        },
        {
          title: 'Проход',
          value: 10
        },
        {
          title: 'Ср. коэф',
          value: 10
        },
        {
          title: 'ROI',
          value: 10
        },
        {
          title: 'Выйгрышей',
          value: 10
        },
        {
          title: 'Возвратов',
          value: 10
        },
        {
          title: 'Проигрышей',
          value: 10
        }
      ],
      items: [
        {
          text: 'Главная',
          disabled: false,
          href: '/'
        },
        {
          text: 'все капперы сайта',
          disabled: true,
          href: ''
        }
      ],
      snack: false,
      snackColor: '',
      snackText: '',

      pagination: {},
      headers: [
        {
          text: 'Каппер',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Регистрация', value: 'reg' },
        { text: 'ROI', value: 'roi' },
        { text: 'Прибыль', value: 'pribil' },
        { text: 'Доход', value: 'dohod' }
      ],
      desserts: [
        {
          name: 'первый',
          reg: '2019-01-02',
          roi: 19,
          pribil: 200,
          dohod: 370
        },
        {
          name: 'второй',
          reg: '2019-02-12',
          roi: 0,
          pribil: 130,
          dohod: 37
        }
      ]
    }
  }
}
</script>

