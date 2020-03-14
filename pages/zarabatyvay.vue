<template>
  <v-container>
    <v-layout column justify-center align-center>
      <bread-crumbs :items="items"></bread-crumbs>
      <v-card>
        <v-card-title>
          <v-spacer></v-spacer>
          <h1 class="display-1">Как заработать на сайте?</h1>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text>
          <h2 class="text-xs-center">Для перевода в платные прогнозы требуется:</h2>
          <p>1. Быть зарегистрированным на сайте не менее месяца.</p>
          <p>
            2.
            Участник (каппер) должен на протяжении последнего месяца и в дальнейшем каждую
            неделю публиковать не менее 5 (пяти) прогнозов, в месяц не менее 20 (двадцати
            прогнозов). В случае нарушения этого пункта участник (каппер) автоматически
            переводится в бесплатные прогнозы.
          </p>
          <p>3. Банк увеличен за все время или за последнюю неделю на 20%.</p>
          <h3 class="text-xs-center">Всего 10 (десять) ступеней.</h3>
          <window-index />
          <p>
            1. Участник (каппер) вверх через ступени прыгать не может и идёт последовательно от 1-
            й до 10-й, то есть 1, 2, 3 и так далее до 10-й.
          </p>
          <p>
            2. Если участник (каппер) за неделю уходит в минус, то автоматически опускается на
            ступень ниже (градация минусы смотрите ниже), перепрыгнув даже через несколько
            ступеней в зависимости на какой % был минус. Например: был на 5-й ступени, за
            неделю ушел в минус от -11% до -20% , то сразу опустился с 5-й ступени на 3-ю ступень.
          
          </p>

          <v-alert
            :value="true"
            type="error"
          >Внимание! Будьте внимательны к своим прогнозам, изменить Вашу ставку нельзя.</v-alert>

          <p>
            3. Ступени участника (каппера) обновляются один раз в начале каждой новой недели (в
            понедельник, в 00 часов 01 минуту по Гринвичу).
          </p>
          <p>
            4. Расчет по всем проданным подпискам производится на следующий месяц до 15-го
            числа. В своем личном кабинете обязательно укажите номер кошелька для перевода
            денежных средств. Все переводы осуществляются системой Яндекс Деньги.
          </p>
          <p>5. Участник (каппер) получает 50% от проданного прогноза.</p>

          <v-card>
            <v-toolbar dark>
              <v-toolbar-side-icon></v-toolbar-side-icon>

              <v-toolbar-title>Градация минусы</v-toolbar-title>

              <v-spacer></v-spacer>
            </v-toolbar>

            <v-list>
              <template v-for="(item, index) in itemss">
                <v-list-tile :key="item.title">
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-divider v-if="index + 1 < itemss.length" :key="index"></v-divider>
              </template>
            </v-list>
          </v-card>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>
<script>
import BreadCrumbs from '~/components/Page/Header/BreadCrumbs'
import WindowIndex from '~/components/WindowIndex'
export default {
  name: 'prog-noz',
  components: { BreadCrumbs, WindowIndex },
  data () {
    return {
      itemss: [
        {
          title: 'От -1% до -10%  на 1 ступень ниже'
        },

        {
          title: 'От -11% до -20%  на 2 ступени ниже'
        },
        {
          title: 'От -21% до -30%  на 3 ступени ниже'
        },
        {
          title: 'От -31% до -40% на 4 ступени ниже'
        },
        {
          title: 'От -41% до -50% на 5 ступеней ниже'
        },
        {
          title: 'От -51% до -60% на 6 ступеней ниже'
        },
        {
          title: 'От -61% до -70% на 7 ступеней ниже'
        },
        {
          title: 'От -71% до -80% на 8 ступеней ниже'
        },
        {
          title: 'От -81% и более на 9 ступеней ниже'
        }
      ],
      items: [
        {
          text: 'Главная',
          disabled: false,
          href: '/'
        },
        {
          text: 'правила сайта',
          disabled: true,
          href: ''
        }
      ]
    }
  }
}
</script>
<style scoped>
.v-card {
  border-color: white;
  border-style: solid;
}
</style>

