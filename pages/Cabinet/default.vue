<template>
  <v-container>
    <v-layout column justify-center align-center>
      <bread-crumbs :items="items"></bread-crumbs>
    </v-layout>

    <v-layout class="datacaper">
      <v-expansion-panel v-model="panel" expand>
        <v-expansion-panel-content>
          <template v-if="panel[0]" v-slot:header>
            <v-icon>fa-bar-chart</v-icon>
            <div>Статистика каппера</div>
          </template>
          <template v-else v-slot:header>
            <v-icon>fa-bar-chart</v-icon>
            <static-md class="hidden-sm-and-down"></static-md>
            <div class="hidden-md-and-up">Статистика каппера</div>
          </template>
          <v-card>
            <v-card-text class>
              <sel-period class="hidden-sm-and-down"></sel-period>
              <sel-period-sm class="hidden-md-and-up"></sel-period-sm>
              <TableStatisticPeriodMd class="hidden-sm-and-down"></TableStatisticPeriodMd>
              <TableStatisticPeriodSm class="hidden-md-and-up"></TableStatisticPeriodSm>
            </v-card-text>
          </v-card>
          <ButtonCompletePrognoz></ButtonCompletePrognoz>
          <ButtonNoCompletePrognoz></ButtonNoCompletePrognoz>
        </v-expansion-panel-content>
      </v-expansion-panel>
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
import TableStatisticPeriodMd from '~/components/Page/Cabinet/Default/tableStatisticPeriodMd'
import TableStatisticPeriodSm from '~/components/Page/Cabinet/Default/tableStatisticPeriodSm'
import ButtonCompletePrognoz from '~/components/Page/Cabinet/Default/buttonCompletePrognoz'
import ButtonNoCompletePrognoz from '~/components/Page/Cabinet/Default/buttonNoCompletePrognoz'

export default {
  middleware: ['auth'],
  name: 'cabinet-main',
  components: {
    BreadCrumbs,
    WidgetStatic,
    MenuCabinet,
    StaticMd,
    SelPeriod,
    SelPeriodSm,
    TableStatisticPeriodMd,
    TableStatisticPeriodSm,
    ButtonCompletePrognoz,
    ButtonNoCompletePrognoz
  },
  data () {
    return {
      panel: [true],

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
