<template>
  <section>
    <carousel-hader/>

    <v-container>
      <v-layout column justify-center align-center>
        <bread-crumbs :items="items"></bread-crumbs>
        <benef-item></benef-item>
        <v-toolbar>
          <v-toolbar-title>СПИСОК ТОПОВЫX ПРОГНОЗОВ</v-toolbar-title>
        </v-toolbar>
        <v-data-table
          :headers="headers"
          :items="desserts"
          class="elevation-1 hidden-sm-and-down"
          style="width:100%"
        >
          <template v-slot:no-data>
            <v-alert
              :value="true"
              color="warning"
              icon="warning"
            >Извините на данный момент данных нет</v-alert>
          </template>
        </v-data-table>
        <!--<v-card>
          <v-card-title class="headline"></v-card-title>
          <v-card-text></v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat nuxt to="/inspire">Continue</v-btn>
          </v-card-actions>
        </v-card>-->
      </v-layout>
    </v-container>
  </section>
</template>
<script>
import CarouselHader from '~/components/Page/Header/CarouselHader'
import BreadCrumbs from '~/components/Page/Header/BreadCrumbs'
import BenefItem from '~/components/Page/Index/BenefItem'
export default {
  components: { CarouselHader, BreadCrumbs, BenefItem },
  data () {
    return {
      expand: false,
      headers: [
        {
          text: 'Дата',
          align: 'left',
          sortable: true,
          value: 'date'
        },
        { text: 'Спорт', value: 'sport' },
        { text: 'Чемпионат', value: 'chempionat' },
        { text: 'Команда1-Команда2', value: 'comands12' },
        { text: 'Исход', value: 'ishod' },
        { text: 'Коэфф', value: 'koefcnt' },
        { text: 'Сделано ставок', value: 'CountStavok' }
      ],
      desserts: [],

      items: [
        {
          text: 'Главная',
          disabled: true,
          href: '/'
        } /*,
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1'
        } ,
    {
      text: 'Link 2',
      disabled: true,
      href: 'breadcrumbs_link_2'
    } */
      ]
    }
  }
}
</script>
<style>
a {
  color: white;
}
</style>

