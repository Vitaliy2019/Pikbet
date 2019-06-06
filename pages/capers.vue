<template>
  <v-container>
    <v-layout column justify-center align-center>
      <bread-crumbs :items="items"></bread-crumbs>
      <v-data-table :headers="headers" :items="desserts" style="width:100%">
        <template v-slot:items="props">
          <td>
            <v-btn to="/Cabinet">{{ props.item.name }}</v-btn>
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

