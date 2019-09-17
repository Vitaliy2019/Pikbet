<template>
  <v-container>
    <v-layout column justify-center align-center>
      <bread-crumbs :items="items"></bread-crumbs>
    </v-layout>
    <v-layout wrap align-center>
      <v-flex xs12 sm6 d-flex>
        <v-select color="yellow" :items="itemsS" label="Выбрать за"></v-select>
      </v-flex>
    </v-layout>

    <v-layout class="datacaper">
      <v-expansion-panel v-model="panel" expand>
        <v-expansion-panel-content>
          <template v-if="panel[0]" v-slot:header>
            <v-icon>fa-bar-chart</v-icon>
            <div>Статистика капера</div>
          </template>
          <template v-else v-slot:header>
            <v-icon>fa-bar-chart</v-icon>
            <static-md class="hidden-sm-and-down"></static-md>
            <div class="hidden-md-and-up">Статистика капера</div>
          </template>
          <v-card>
            <v-card-text class>
              <sel-period class="hidden-sm-and-down"></sel-period>
              <sel-period-sm class="hidden-md-and-up"></sel-period-sm>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-layout>

    <v-layout justify-center align-center wrap>
      <v-flex xs12 class="datacaper">
        <v-toolbar color="#303030" flat>
          <img src="/graphic-light.png" />
          <v-spacer></v-spacer>
          <img src="/calculator.svg" />
          <v-toolbar-title>
            <span class="yellow--text text--darken-2">Статистика капера</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
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
    </v-layout>
  </v-container>
</template>
<script>
import WidgetStatic from '~/components/Page/Cabinet/StaticCaper/WidgetStatic'
import MenuCabinet from '~/components/Page/Cabinet/menu'
import BreadCrumbs from '~/components/Page/Header/BreadCrumbs'
import StaticMd from '~/components/Page/Cabinet/Default/staticMd'
import SelPeriod from '~/components/Page/Cabinet/Default/selPeriodMd'
import SelPeriodSm from '~/components/Page/Cabinet/Default/selPeriodSm'
export default {
  middleware: ['auth'],
  name: 'cabinet-main',
  components: {
    BreadCrumbs,
    WidgetStatic,
    MenuCabinet,
    StaticMd,
    SelPeriod,
    SelPeriodSm
  },
  data () {
    return {
      panel: [true],
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
.v-expansion-panel__header .v-icon {
  align-items: center;
  display: inline-flex;
  font-feature-settings: "liga";
  font-size: 24px;
  justify-content: left;
  line-height: 1;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  vertical-align: text-bottom;
}

.container.grid-list-xl .layout .flex {
  padding: 3px;
}
.datacaper {
  padding: 10px;
  border: 2px solid;
  border-color: white;
  -webkit-border-radius: 8px 8px 8px 8px;
  border-radius: 8px 8px 8px 8px;
}
</style>
