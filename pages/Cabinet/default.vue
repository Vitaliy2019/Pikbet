<template>
  <v-container grid-list-xl>
    <v-layout column justify-center align-center>
      <bread-crumbs :items="items"></bread-crumbs>
    </v-layout>
    <v-layout wrap align-center>
      <v-flex xs12 sm6 d-flex>
        <v-select color="yellow" :items="itemsS" label="Выбрать за"></v-select>
      </v-flex>
    </v-layout>
    <v-layout justify-center align-center wrap>
      <v-flex xs12 class="datacaper">
        <v-toolbar color="#303030" flat>
          <img src="/graphic-light.png" />
          <v-spacer></v-spacer>
          <img src="/calculator.svg"/>
          <v-toolbar-title >
            
            <span class="yellow--text text--darken-2">Статистика капера</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-toolbar color="#303030" flat>
          <v-toolbar-title>
            <span class="yellow--text text--darken-2">За все время</span>
          </v-toolbar-title>
          <img class="pl-1" src="/calendar-icon.png"/>
          <v-spacer/>
          <v-toolbar-title>
            <span class="yellow--text text--darken-2">Баланс: 
              <span class="title green--text">10 000</span></span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-title>
            <span class="yellow--text text--darken-2">В игре: 
              <span class="title green--text">10 000</span></span>
          </v-toolbar-title>
          
        </v-toolbar>
      </v-flex>

      <!--<widget-static
        v-for="(item, index) in itemsC"
        :key="index"
        :sum="item.value"
        :title="item.title"
        :icon="item.icon"
        :zn="item.zn"
      />-->
      <v-divider />
      <menu-cabinet />
    </v-layout>
    <v-layout justify-center align-center wrap>
      <h1 class="display-4 my-5">Статистика каппера</h1>
    </v-layout>
  </v-container>
</template>
<script>
import WidgetStatic from '~/components/Page/Cabinet/StaticCaper/WidgetStatic'
import MenuCabinet from '~/components/Page/Cabinet/menu'
import BreadCrumbs from '~/components/Page/Header/BreadCrumbs'
export default {
  middleware: ['auth'],
  name: 'cabinet-main',
  components: { BreadCrumbs, WidgetStatic, MenuCabinet },
  data () {
    return {
      itemsS: ['последнюю неделю', 'понедельно', 'помесячно', 'за все время.'],
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
          text: 'статистика',
          disabled: true,
          href: ''
        }
      ],

      itemsC: [
        {
          icon: 'account_balance',
          title: 'Количество ставок',
          value: 10,
          zn: ''
        },
        {
          icon: 'account_balance_wallet',
          title: 'Доход',
          value: 10,
          zn: '₽'
        },
        {
          icon: 'arrow_right_alt',
          title: 'Проход',
          value: 10,
          zn: '%'
        },
        {
          icon: 'card_membership',
          title: 'Ср. коэф',
          value: 10
        },
        {
          icon: 'assessment',
          title: 'ROI',
          value: 10
        },
        {
          icon: 'check_circle_outline',
          title: 'Выйгрышей',
          value: 10
        },
        {
          icon: 'assignment_late',
          title: 'Возвратов',
          value: 10
        },
        {
          title: 'Проигрышей',
          value: 10
        }
      ]
    }
  }
}
</script>
<style scoped>
.container.grid-list-xl .layout .flex {
  padding: 3px;
}
.datacaper {
  padding: 0;
  border: 2px solid;
  border-color: goldenrod;
  -webkit-border-radius: 8px 8px 8px 8px;
  border-radius: 8px 8px 8px 8px;

  /*display: flex;
  flex-direction: row;
   background-color: azure;*/
}
</style>
