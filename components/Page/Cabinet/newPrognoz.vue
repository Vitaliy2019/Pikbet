<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="550" persistent>
      <template v-slot:activator="{ on }">
        <a v-on="on">
          {{ odds[nameOdds] }}
        </a>
      </template>

      <v-card>
        <v-card-title class="title" primary-title>
          Добавление прогноза
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <h1>{{ odds.matchName }}</h1>
          <h2>
            Дата события:
            <vueDateFormat
              format="dd.MM.yyyy hh:mm:ss"
              :time="odds.Odd_date"
              :autoUpdate="false"
            >
            </vueDateFormat>
          </h2>
          <br />
          <div class="flex-container">
            <div class="item">
              <v-select
                v-model="selValue"
                :items="itemsOdds"
                item-text="name"
                item-value="type"
                label="Ставка"
                return-object
                outline
                color="#fff"
              ></v-select>
            </div>
            <div class="item">
              <span class="title" style="padding-top: 20px;">КФ</span>
              <v-text-field
                color="#fff"
                readonly
                v-model="selValue.value"
                style="padding-left:10px; width:50px;"
              ></v-text-field>
            </div>
          </div>

          <div>Процент ставки от игрового банка</div>
          <div class="otstup">
            Текущий банк - <img src="/dollar.png" width="10px" /> 10 000
          </div>
          <div class="flex-container">
            <div class="item">
              <v-select
                style="width:343px"
                v-model="valProcent"
                :items="procent"
                label="Процент ставки не может превышать 5% от игрового банка."
                return-object
                outline
                color="#fff"
                @change="chnProcent"
              ></v-select>
            </div>
            <div class="item">
              <span class="title" style="padding-top: 20px;">КФ</span>
              <v-text-field
                color="#fff"
                readonly
                v-model="summaPoPrtocent"
                style="padding-left:10px; width:50px;"
              ></v-text-field>
            </div>
          </div>
          <p>
            Прогнозистам, имеющим более 500 прогнозов и ROI не менее 7%,
            разрешено ставить до 10% от банка.
          </p>
          <div>
            <v-textarea
              outlined
              color="#fff"
              name="input-7-4"
              label="Комментарий к прогнозу*"
              v-model="comment"
            ></v-textarea>
          </div>
          <p>
            * Комментарий пишется по желанию и не является обязательным пунктом.
            В сутки нельзя делать более 25 прогнозов
          </p>

          <div class="flex-container">
            <div class="item">
              <v-text-field
                color="#fff"
                label="Стоимость прогноза (₽)"
                v-model="cost"
              ></v-text-field>
            </div>
          </div>
          <p>
            Стоимость прогноза по умолчанию - 150₽ Вы можете установить свою
            стоимость от 75.4₽ до 7542.7₽
          </p>
          <div>
            <v-checkbox
              v-model="checkbox"
              label="Опубликовать прогноз бесплатно"
            ></v-checkbox>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="yellow" flat @click="addPrognoz">
            Добавить прогноз
          </v-btn>
          <v-btn color="white" flat @click="dialog = false">
            Отмена
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: 'new-prognoz',
  props: {
    valueOdds: {
      type: Object,
      default: function () {
        return {
          odds: null,
          nameOdds: null
        }
      }
    },
    visiblePrognoz: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      nameOdds: '',
      odds: null,
      checkbox: false,
      cost: 150,
      dialog: false,
      itemsOdds: [],
      selValue: {
        name: '',
        value: 0,
        type: 0
      },
      procent: [
        '1%',
        '1.1%',
        '1.2%',
        '1.3%',
        '1.4%',
        '1.5%',
        '1.6%',
        '1.7%',
        '1.8%',
        '1.9%',
        '2%',
        '2.1%',
        '2.2%',
        '2.3%',
        '2.4%',
        '2.5%',
        '2.6%',
        '2.7%',
        '2.8%',
        '2.9%',
        '3%',
        '3.1%',
        '3.2%',
        '3.3%',
        '3.4%',
        '3.5%',
        '3.6%',
        '3.7%',
        '3.8%',
        '3.9%',
        '4%',
        '4.1%',
        '4.2%',
        '4.3%',
        '4.5%',
        '4.6%',
        '4.7%',
        '4.8%',
        '4.9%',
        '5%'
      ],
      valProcent: '2.5%',
      summaPoPrtocent: 250,
      comment: '',
      nameCommands: '',
      idOdds: null
    }
  },
  created () {
    debugger
    console.log('this.odds ---------> ', this.odds)
    this.odds = this.valueOdds.odds
    this.nameOdds = this.valueOdds.nameOdds
    // ----------------------------------------

    this.idOdds = this.odds.id
    this.NameCommands = this.odds.matchName
    const arrNameCommands = this.odds.matchName.split('-')
    console.log('arrNameCommands =====', arrNameCommands)
    this.itemsOdds.push({
      name: '3 исхода: П1',
      value: this.odds.Odd_1,
      type: '1'
    })
    this.itemsOdds.push({
      name: '3 исхода: X',
      value: this.odds.Odd_x,
      type: '2'
    })
    this.itemsOdds.push({
      name: '3 исхода: П2',
      value: this.odds.Odd_2,
      type: '3'
    })

    this.itemsOdds.push({
      name: 'Двойной шанс: 1X',
      value: this.odds.Odd_1x,
      type: '4'
    })
    this.itemsOdds.push({
      name: 'Двойной шанс: 12',
      value: this.odds.Odd_12,
      type: '5'
    })
    this.itemsOdds.push({
      name: 'Двойной шанс: X2',
      value: this.odds.Odd_x2,
      type: '6'
    })

    // Фора минус
    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[0]} -4.5.1`,
      value: this.odds.Ah_4_5_1 ? this.odds.Ah_4_5_1 : 0,
      type: '7'
    })
    // this.itemsOdds.push({ name: `Фора1: ${arrNameCommands[1]} -4.5.1`, value: this.odds.Ah_4_5_1 ? this.odds.Ah_4_5_1 - 451 : -451, type: '8' })

    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} -4.5.2`, value: this.odds.Ah_4_5_2 ? this.odds.Ah_4_5_2 : 0, type: '9' })
    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[1]} -4.5.2`,
      value: this.odds.Ah_4_5_2 ? this.odds.Ah_4_5_2 - 452 : -452,
      type: '8'
    })

    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[0]} -4.1`,
      value: this.odds.Ah_4_1 ? this.odds.Ah_4_1 : 0,
      type: '9'
    })
    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[1]} -4.2`,
      value: this.odds.Ah_4_2 ? this.odds.Ah_4_2 - 42 : -42,
      type: '10'
    })

    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[0]} -3.5.1`,
      value: this.odds.Ah_3_5_1 ? this.odds.Ah_3_5_1 : 0,
      type: '11'
    })
    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} -3.5.1`, value: this.odds.Ah_3_5_1 ? this.odds.Ah_3_5_1 - 351 : -351, type: '14' })

    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} -3.5.2`, value: this.odds.Ah_3_5_2 ? this.odds.Ah_3_5_2 : 0, type: '15' })
    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[1]} -3.5.2`,
      value: this.odds.Ah_3_5_2 ? this.odds.Ah_3_5_2 - 352 : -352,
      type: '12'
    })

    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[0]} -3.1`,
      value: this.odds.Ah_3_1 ? this.odds.Ah_3_1 : 0,
      type: '13'
    })
    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} -3.1`, value: this.odds.Ah_3_1 ? this.odds.Ah_3_1 - 31 : -31, type: '18' })

    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} -3.2`, value: this.odds.Ah_3_2 ? this.odds.Ah_3_2 : 0, type: '19' })
    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[1]} -3.2`,
      value: this.odds.Ah_3_2 ? this.odds.Ah_3_2 : 0,
      type: '14'
    })

    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[0]} -2.5.1`,
      value: this.odds.Ah_2_5_1 ? this.odds.Ah_2_5_1 : 0,
      type: '15'
    })
    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} -2.5.1`, value: this.odds.Ah_2_5_1 ? this.odds.Ah_2_5_1 - 32 : -32, type: '22' })

    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} -2.5.2`, value: this.odds.Ah_2_5_2 ? this.odds.Ah_2_5_2 : 0, type: '23' })
    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[1]} -2.5.2`,
      value: this.odds.Ah_2_5_2 ? this.odds.Ah_2_5_2 - 252 : -252,
      type: '16'
    })

    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[0]} -2.1`,
      value: this.odds.Ah_2_1 ? this.odds.Ah_2_1 : 0,
      type: '17'
    })
    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} -2.1`, value: this.odds.Ah_2_1 ? this.odds.Ah_2_1 - 21 : -21, type: '26' })

    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} -2.2`, value: this.odds.Ah_2_2 ? this.odds.Ah_2_2 : 0, type: '27' })
    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[1]} -2.2`,
      value: this.odds.Ah_2_2 ? this.odds.Ah_2_2 - 22 : -22,
      type: '18'
    })

    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[0]} -1.5.1`,
      value: this.odds.Ah_1_5_1 ? this.odds.Ah_1_5_1 : 0,
      type: '19'
    })
    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} -1.5.1`, value: this.odds.Ah_1_5_1 ? this.odds.Ah_1_5_1 - 151 : -151, type: '30' })

    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} -1.5.2`, value: this.odds.Ah_1_5_2 ? this.odds.Ah_1_5_2 : 0, type: '31' })
    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[1]} -1.5.2`,
      value: this.odds.Ah_1_5_2 ? this.odds.Ah_1_5_2 - 152 : -152,
      type: '20'
    })

    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[0]} -1.1`,
      value: this.odds.Ah_1_1 ? this.odds.Ah_1_1 : 0,
      type: '21'
    })
    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} -1.1`, value: this.odds.Ah_1_1 ? this.odds.Ah_1_1 - 11 : -11, type: '34' })

    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} -1.2`, value: this.odds.Ah_1_2 ? this.odds.Ah_1_2 : 0, type: '35' })
    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[1]} -1.2`,
      value: this.odds.Ah_1_2 ? this.odds.Ah_1_2 - 12 : -12,
      type: '22'
    })

    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[0]} -0.5.1`,
      value: this.odds.Ah_0_5_1 ? this.odds.Ah_0_5_1 : 0,
      type: '23'
    })
    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} -0.5.1`, value: this.odds.Ah_0_5_1 ? this.odds.Ah_0_5_1 - 51 : -51, type: '38' })

    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} -0.5.2`, value: this.odds.Ah_0_5_2 ? this.odds.Ah_0_5_2 : 0, type: '39' })
    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[1]} -0.5.2`,
      value: this.odds.Ah_0_5_2 ? this.odds.Ah_0_5_2 - 52 : -52,
      type: '24'
    })
    // Фора Плюс
    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[0]} +4.5.1`,
      value: this.odds.Ah_p4_5_1 ? this.odds.Ah_p4_5_1 : 0,
      type: '25'
    })
    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +4.5.1`, value: this.odds.Ah_p4_5_1 ? this.odds.Ah_p4_5_1 + 451 : 0, type: '42' })

    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +4.5.2`, value: this.odds.Ah_p4_5_2 ? this.odds.Ah_p4_5_2 : 0, type: '43' })
    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[1]} +4.5.2`,
      value: this.odds.Ah_p4_5_2 ? this.odds.Ah_p4_5_2 + 452 : 452,
      type: '26'
    })

    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[0]} +4.1`,
      value: this.odds.Ah_p4_1 ? this.odds.Ah_p4_1 : 0,
      type: '27'
    })
    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +4.1`, value: this.odds.Ah_p4_1 ? this.odds.Ah_p4_1 + 41 : 41, type: '46' })

    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +4.2`, value: this.odds.Ah_p4_2 ? this.odds.Ah_p4_2 : 0, type: '47' })
    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[1]} +4.2`,
      value: this.odds.Ah_p4_2 ? this.odds.Ah_p4_2 + 42 : 42,
      type: '28'
    })

    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[0]} +3.5.1`,
      value: this.odds.Ah_p3_5_1 ? this.odds.Ah_p3_5_1 : 0,
      type: '29'
    })
    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +3.5.1`, value: this.odds.Ah_p3_5_1 ? this.odds.Ah_p3_5_1 + 351 : 351, type: '50' })

    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +3.5.2`, value: this.odds.Ah_p3_5_2 ? this.odds.Ah_p3_5_2 : 0, type: '51' })
    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[1]} +3.5.2`,
      value: this.odds.Ah_p3_5_2 ? this.odds.Ah_p3_5_2 + 352 : 352,
      type: '30'
    })

    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[0]} +3.1`,
      value: this.odds.Ah_p3_1 ? this.odds.Ah_p3_1 : 0,
      type: '31'
    })
    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +3.1`, value: this.odds.Ah_p3_1 ? this.odds.Ah_p3_1 + 31 : 31, type: '54' })

    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +3.2`, value: this.odds.Ah_p3_2 ? this.odds.Ah_p3_2 : 0, type: '55' })
    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[1]} +3.2`,
      value: this.odds.Ah_p3_2 ? this.odds.Ah_p3_2 + 32 : 32,
      type: '32'
    })

    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[0]} +2.5.1`,
      value: this.odds.Ah_p2_5_1 ? this.odds.Ah_p2_5_1 : 0,
      type: '33'
    })
    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +2.5.1`, value: this.odds.Ah_p2_5_1 ? this.odds.Ah_p2_5_1 + 251 : 251, type: '58' })

    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +2.5.2`, value: this.odds.Ah_p2_5_2 ? this.odds.Ah_p2_5_2 : 0, type: '59' })
    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[1]} +2.5.2`,
      value: this.odds.Ah_p2_5_2 ? this.odds.Ah_p2_5_2 + 252 : 252,
      type: '34'
    })

    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[0]} +2.1`,
      value: this.odds.Ah_p2_1 ? this.odds.Ah_p2_1 : 0,
      type: '35'
    })
    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +2.1`, value: this.odds.Ah_p2_1 ? this.odds.Ah_p2_1 + 21 : 21, type: '62' })

    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +2.2`, value: this.odds.Ah_p2_2 ? this.odds.Ah_p2_2 : 0, type: '63' })
    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[1]} +2.2`,
      value: this.odds.Ah_p2_2 ? this.odds.Ah_p2_2 + 22 : 22,
      type: '36'
    })

    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[0]} +1.5.1`,
      value: this.odds.Ah_p1_5_1 ? this.odds.Ah_p1_5_1 : 0,
      type: '37'
    })
    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +1.5.1`, value: this.odds.Ah_p1_5_1 ? this.odds.Ah_p1_5_1 + 151 : 151, type: '66' })

    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +1.5.2`, value: this.odds.Ah_p1_5_2 ? this.odds.Ah_p1_5_2 : 0, type: '67' })
    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[1]} +1.5.2`,
      value: this.odds.Ah_p1_5_2 ? this.odds.Ah_p1_5_2 + 152 : 152,
      type: '38'
    })

    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[0]} +1.1`,
      value: this.odds.Ah_p1_1 ? this.odds.Ah_p1_1 : 0,
      type: '39'
    })
    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +1.1`, value: this.odds.Ah_p1_1 ? this.odds.Ah_p1_1 + 11 : 11, type: '70' })

    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +1.2`, value: this.odds.Ah_p1_2 ? this.odds.Ah_p1_2 : 0, type: '71' })
    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[1]} +1.2`,
      value: this.odds.Ah_p1_2 ? this.odds.Ah_p1_2 + 12 : 12,
      type: '40'
    })

    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[0]} +0.5.1`,
      value: this.odds.Ah_p0_5_1 ? this.odds.Ah_p0_5_1 : 0,
      type: '41'
    })
    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +0.5.1`, value: this.odds.Ah_p0_5_1 ? this.odds.Ah_p0_5_1 + 51 : 51, type: '74' })

    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +0.5.2`, value: this.odds.Ah_p0_5_2 ? this.odds.Ah_p0_5_2 : 0, type: '75' })
    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[1]} +0.5.2`,
      value: this.odds.Ah_p0_5_2 ? this.odds.Ah_p0_5_2 + 52 : 52,
      type: '42'
    })

    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[0]} +0.1`,
      value: this.odds.Ah0_1 ? this.odds.Ah0_1 : 0,
      type: '43'
    })
    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +0.1`, value: this.odds.Ah0_1 ? this.odds.Ah0_1 - 1 : -1, type: '78' })

    // this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +0.2`, value: this.odds.Ah0_2 ? this.odds.Ah0_2 : 0, type: '79' })
    this.itemsOdds.push({
      name: `Фора: ${arrNameCommands[1]} +0.2`,
      value: this.odds.Ah0_2 ? this.odds.Ah0_2 - 2 : -2,
      type: '44'
    })

    // Тотал меньше
    this.itemsOdds.push({
      name: `Тотал меньше: 0.5`,
      value: this.odds.O_0_5 ? this.odds.O_0_5 : 0,
      type: '45'
    })
    this.itemsOdds.push({
      name: `Тотал меньше: 0.5`,
      value: this.odds.O_0_5 ? this.odds.O_0_5 : 0,
      type: '46'
    })

    this.itemsOdds.push({
      name: `Тотал меньше: 1`,
      value: this.odds.O_1 ? this.odds.O_1 : 0,
      type: '47'
    })
    this.itemsOdds.push({
      name: `Тотал меньше: 1`,
      value: this.odds.O_1 ? this.odds.O_1 : 0,
      type: '48'
    })

    this.itemsOdds.push({
      name: `Тотал меньше: 1.5`,
      value: this.odds.O_1_5 ? this.odds.O_1_5 : 0,
      type: '49'
    })
    this.itemsOdds.push({
      name: `Тотал меньше: 1.5`,
      value: this.odds.O_1_5 ? this.odds.O_1_5 : 0,
      type: '50'
    })

    this.itemsOdds.push({
      name: `Тотал меньше: 2`,
      value: this.odds.O_2 ? this.odds.O_2 : 0,
      type: '51'
    })
    this.itemsOdds.push({
      name: `Тотал меньше: 2`,
      value: this.odds.O_2 ? this.odds.O_2 : 0,
      type: '52'
    })

    this.itemsOdds.push({
      name: `Тотал меньше: 2.5`,
      value: this.odds.O_2_5 ? this.odds.O_2_5 : 0,
      type: '53'
    })
    this.itemsOdds.push({
      name: `Тотал меньше: 2.5`,
      value: this.odds.O_2_5 ? this.odds.O_2_5 : 0,
      type: '54'
    })

    this.itemsOdds.push({
      name: `Тотал меньше: 3`,
      value: this.odds.O_3 ? this.odds.O_3 : 0,
      type: '55'
    })
    this.itemsOdds.push({
      name: `Тотал меньше: 3`,
      value: this.odds.O_3 ? this.odds.O_3 : 0,
      type: '56'
    })

    this.itemsOdds.push({
      name: `Тотал меньше: 3.5`,
      value: this.odds.O_3_5 ? this.odds.O_3_5 : 0,
      type: '57'
    })
    this.itemsOdds.push({
      name: `Тотал меньше: 3.5`,
      value: this.odds.O_3_5 ? this.odds.O_3_5 : 0,
      type: '58'
    })

    this.itemsOdds.push({
      name: `Тотал меньше: 4`,
      value: this.odds.O_4 ? this.odds.O_4 : 0,
      type: '59'
    })
    this.itemsOdds.push({
      name: `Тотал меньше: 4`,
      value: this.odds.O_4 ? this.odds.O_4 : 0,
      type: '60'
    })

    this.itemsOdds.push({
      name: `Тотал меньше: 4.5`,
      value: this.odds.O_4_5 ? this.odds.O_4_5 : 0,
      type: '61'
    })
    this.itemsOdds.push({
      name: `Тотал меньше: 4.5`,
      value: this.odds.O_4_5 ? this.odds.O_4_5 : 0,
      type: '62'
    })

    this.itemsOdds.push({
      name: `Тотал меньше: 5`,
      value: this.odds.O_5 ? this.odds.O_5 : 0,
      type: '63'
    })
    this.itemsOdds.push({
      name: `Тотал меньше: 5`,
      value: this.odds.O_5 ? this.odds.O_5 : 0,
      type: '64'
    })

    this.itemsOdds.push({
      name: `Тотал меньше: 5.5`,
      value: this.odds.O_5_5 ? this.odds.O_5_5 : 0,
      type: '64'
    })
    this.itemsOdds.push({
      name: `Тотал меньше: 5.5`,
      value: this.odds.O_5_5 ? this.odds.O_5_5 : 0,
      type: '66'
    })

    // Тотал больше
    this.itemsOdds.push({
      name: `Тотал больше: 0.5`,
      value: this.odds.U_0_5 ? this.odds.U_0_5 : 0,
      type: '67'
    })
    this.itemsOdds.push({
      name: `Тотал больше: 0.5`,
      value: this.odds.U_0_5 ? this.odds.U_0_5 : 0,
      type: '68'
    })

    this.itemsOdds.push({
      name: `Тотал больше: 1`,
      value: this.odds.U_1 ? this.odds.U_1 : 0,
      type: '69'
    })
    this.itemsOdds.push({
      name: `Тотал больше: 1`,
      value: this.odds.U_1 ? this.odds.U_1 : 0,
      type: '70'
    })

    this.itemsOdds.push({
      name: `Тотал больше: 1.5`,
      value: this.odds.U_1_5 ? this.odds.U_1_5 : 0,
      type: '71'
    })
    this.itemsOdds.push({
      name: `Тотал больше: 1.5`,
      value: this.odds.U_1_5 ? this.odds.U_1_5 : 0,
      type: '72'
    })

    this.itemsOdds.push({
      name: `Тотал больше: 2`,
      value: this.odds.U_2 ? this.odds.U_2 : 0,
      type: '73'
    })
    this.itemsOdds.push({
      name: `Тотал больше: 2`,
      value: this.odds.U_2 ? this.odds.U_2 : 0,
      type: '74'
    })

    this.itemsOdds.push({
      name: `Тотал больше: 2.5`,
      value: this.odds.U_2_5 ? this.odds.U_2_5 : 0,
      type: '75'
    })
    this.itemsOdds.push({
      name: `Тотал больше: 2.5`,
      value: this.odds.U_2_5 ? this.odds.U_2_5 : 0,
      type: '76'
    })

    this.itemsOdds.push({
      name: `Тотал больше: 3`,
      value: this.odds.U_3 ? this.odds.U_3 : 0,
      type: '77'
    })
    this.itemsOdds.push({
      name: `Тотал больше: 3`,
      value: this.odds.U_3 ? this.odds.U_3 : 0,
      type: '78'
    })

    this.itemsOdds.push({
      name: `Тотал больше: 3.5`,
      value: this.odds.U_3_5 ? this.odds.U_3_5 : 0,
      type: '79'
    })
    this.itemsOdds.push({
      name: `Тотал больше: 3.5`,
      value: this.odds.U_3_5 ? this.odds.U_3_5 : 0,
      type: '80'
    })

    this.itemsOdds.push({
      name: `Тотал больше: 4`,
      value: this.odds.U_4 ? this.odds.U_4 : 0,
      type: '81'
    })
    this.itemsOdds.push({
      name: `Тотал больше: 4`,
      value: this.odds.U_4 ? this.odds.U_4 : 0,
      type: '82'
    })

    this.itemsOdds.push({
      name: `Тотал больше: 4.5`,
      value: this.odds.U_4_5 ? this.odds.U_4_5 : 0,
      type: '83'
    })
    this.itemsOdds.push({
      name: `Тотал больше: 4.5`,
      value: this.odds.U_4_5 ? this.odds.U_4_5 : 0,
      type: '84'
    })

    this.itemsOdds.push({
      name: `Тотал больше: 5`,
      value: this.odds.U_5 ? this.odds.U_5 : 0,
      type: '85'
    })
    this.itemsOdds.push({
      name: `Тотал больше: 5`,
      value: this.odds.U_5 ? this.odds.U_5 : 0,
      type: '86'
    })

    this.itemsOdds.push({
      name: `Тотал больше: 5.5`,
      value: this.odds.U_5_5 ? this.odds.U_5_5 : 0,
      type: '87'
    })
    this.itemsOdds.push({
      name: `Тотал больше: 5.5`,
      value: this.odds.U_5_5 ? this.odds.U_5_5 : 0,
      type: '88'
    })

    console.log('itemsOdds =====', this.itemsOdds)
  },
  mounted () {
    this.dialog = this.visiblePrognoz

    switch (this.nameOdds) {
      case 'Odd_1': // if (x === 'value1')
        this.selValue = this.itemsOdds[0]
        break
      case 'Odd_x': // if (x === 'value2')
        this.selValue = this.itemsOdds[1]
        break
      case 'Odd_2':
        this.selValue = this.itemsOdds[2]
        break
      case 'Odd_1x':
        this.selValue = this.itemsOdds[3]
        break
      case 'Odd_12':
        this.selValue = this.itemsOdds[4]
        break
      case 'Odd_x2':
        this.selValue = this.itemsOdds[5]
        break
      case 'Ah_0_5_1':
        this.selValue = this.itemsOdds[37]
        break
      case 'Ah_p0_5_1':
        this.selValue = this.itemsOdds[73]
        break
      case 'O_0_5':
        this.selValue = this.itemsOdds[47]
        break
      case 'U_0_5':
        this.selValue = this.itemsOdds[67]
        break
      default:
        this.selValue = this.itemsOdds[0]
        break
    }
  },
  methods: {
    chnProcent () {
      const proc = parseFloat(
        this.valProcent.substring(0, this.valProcent.indexOf('%'))
      )
      this.summaPoPrtocent = (10000 * proc) / 100
    },
    async addPrognoz () {
      this.dialog = false
      const prognozDto = {
        IdOdds: this.idOdds,
        CheckBox: this.checkBox,
        Cost: this.cost,
        SelValueName: this.selValue.name,
        SelValueValue: this.selValue.value,
        SelValueType: this.selValue.type,
        NameCommands: this.nameCommands
      }
      const res = await this.$axios.$post('/api/PrognozKapers', prognozDto)
      console.log(res)
    }
  }
}
</script>
<style scoped>
.flex-container {
  display: flex;
  justify-content: space-between;
}
.resultContainer {
  width: 100%;
}

.item {
  display: flex;
  margin-left: 10px;
}
.item:nth-last-child(1) {
  margin-right: 20px;
}
.otstup {
  padding-bottom: 10px;
}
</style>
