<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="500" persistent>
      <template v-slot:activator="{ on }">
        <a v-on="on">
          {{ odds[nameOdds] }}
        </a>
      </template>
{{odds}}
      <v-card>
        <v-card-title class="title" primary-title>
          Добавление прогноза
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
        <h1>{{odds.matchName}}</h1>
        <h2>Дата события: 
          <vueDateFormat format="dd.MM.yyyy hh:mm:ss" :time="odds.Odd_date"  type="fmt" :autoUpdate="false">         
          </vueDateFormat>
        </h2>
        <br>
        <el-select v-model="value" placeholder="Select">
          <el-option
            v-for="item in itemsOdds"
            :key="item.value"
            :label="item.name"
            :value="item.value">
          </el-option>
        </el-select>
        <v-select
          v-model="selValue"
          :items="itemsOdds"
          item-text="name"
          item-value="value"
          label="Ставка"
          return-object
          outline
        ></v-select>
          {{ odds[nameOdds] }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="yellow" flat @click="dialog = false">
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
  props: ['odds', 'nameOdds'],
  data () {
    return {
      dialog: false,
      itemsOdds: [],
      selValue: null
    }
  },
  created () {
    const arrNameCommands = this.odds.matchName.split('-')
    console.log('arrNameCommands =====', arrNameCommands)
    this.itemsOdds.push({ name: '3 исхода: П1', value: this.odds.Odd_1 })
    this.itemsOdds.push({ name: '3 исхода: X', value: this.odds.Odd_x })
    this.itemsOdds.push({ name: '3 исхода: П2', value: this.odds.Odd_2 })

    this.itemsOdds.push({ name: 'Двойной шанс: 1X', value: this.odds.Odd_1x })
    this.itemsOdds.push({ name: 'Двойной шанс: 12', value: this.odds.Odd_12 })
    this.itemsOdds.push({ name: 'Двойной шанс: X2', value: this.odds.Odd_x2 })

    // Фора минус
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} -4.5.1`, value: this.odds.Ah_4_5_1 ? this.odds.Ah_4_5_1 : 0 })
    this.itemsOdds.push({ name: `Фора1: ${arrNameCommands[1]} -4.5.1`, value: this.odds.Ah_4_5_1 ? this.odds.Ah_4_5_1 + 1 : 1 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} -4.5.2`, value: this.odds.Ah_4_5_2 ? this.odds.Ah_4_5_2 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} -4.5.2`, value: this.odds.Ah_4_5_2 ? this.odds.Ah_4_5_2 + 1 : 1 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} -4.2`, value: this.odds.Ah_4_2 ? this.odds.Ah_4_2 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} -4.2`, value: this.odds.Ah_4_2 ? this.odds.Ah_4_2 + 1 : 1 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} -3.5.1`, value: this.odds.Ah_3_5_1 ? this.odds.Ah_3_5_1 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} -3.5.1`, value: this.odds.Ah_3_5_1 ? this.odds.Ah_3_5_1 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} -3.5.2`, value: this.odds.Ah_3_5_2 ? this.odds.Ah_3_5_2 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} -3.5.2`, value: this.odds.Ah_3_5_2 ? this.odds.Ah_3_5_2 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} -3.1`, value: this.odds.Ah_3_1 ? this.odds.Ah_3_1 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} -3.1`, value: this.odds.Ah_3_1 ? this.odds.Ah_3_1 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} -3.2`, value: this.odds.Ah_3_2 ? this.odds.Ah_3_2 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} -3.2`, value: this.odds.Ah_3_2 ? this.odds.Ah_3_2 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} -2.5.1`, value: this.odds.Ah_2_5_1 ? this.odds.Ah_2_5_1 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} -2.5.1`, value: this.odds.Ah_2_5_1 ? this.odds.Ah_2_5_1 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} -2.5.2`, value: this.odds.Ah_2_5_2 ? this.odds.Ah_2_5_2 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} -2.5.2`, value: this.odds.Ah_2_5_2 ? this.odds.Ah_2_5_2 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} -2.1`, value: this.odds.Ah_2_1 ? this.odds.Ah_2_1 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} -2.1`, value: this.odds.Ah_2_1 ? this.odds.Ah_2_1 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} -2.2`, value: this.odds.Ah_2_2 ? this.odds.Ah_2_2 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} -2.2`, value: this.odds.Ah_2_2 ? this.odds.Ah_2_2 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} -1.5.1`, value: this.odds.Ah_1_5_1 ? this.odds.Ah_1_5_1 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} -1.5.1`, value: this.odds.Ah_1_5_1 ? this.odds.Ah_1_5_1 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} -1.5.2`, value: this.odds.Ah_1_5_2 ? this.odds.Ah_1_5_2 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} -1.5.2`, value: this.odds.Ah_1_5_2 ? this.odds.Ah_1_5_2 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} -1.1`, value: this.odds.Ah_1_1 ? this.odds.Ah_1_1 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} -1.1`, value: this.odds.Ah_1_1 ? this.odds.Ah_1_1 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} -1.2`, value: this.odds.Ah_1_2 ? this.odds.Ah_1_2 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} -1.2`, value: this.odds.Ah_1_2 ? this.odds.Ah_1_2 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} -0.5.1`, value: this.odds.Ah_0_5_1 ? this.odds.Ah_0_5_1 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} -0.5.1`, value: this.odds.Ah_0_5_1 ? this.odds.Ah_0_5_1 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} -0.5.2`, value: this.odds.Ah_0_5_2 ? this.odds.Ah_0_5_2 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} -0.5.2`, value: this.odds.Ah_0_5_2 ? this.odds.Ah_0_5_2 : 0 })
    // Фора Плюс
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +4.5.1`, value: this.odds.Ah_p4_5_1 ? this.odds.Ah_p4_5_1 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +4.5.1`, value: this.odds.Ah_p4_5_1 ? this.odds.Ah_p4_5_1 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +4.5.2`, value: this.odds.Ah_p4_5_2 ? this.odds.Ah_p4_5_2 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +4.5.2`, value: this.odds.Ah_p4_5_2 ? this.odds.Ah_p4_5_2 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +4.1`, value: this.odds.Ah_p4_1 ? this.odds.Ah_p4_1 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +4.1`, value: this.odds.Ah_p4_1 ? this.odds.Ah_p4_1 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +4.2`, value: this.odds.Ah_p4_2 ? this.odds.Ah_p4_2 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +4.2`, value: this.odds.Ah_p4_2 ? this.odds.Ah_p4_2 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +3.5.1`, value: this.odds.Ah_p3_5_1 ? this.odds.Ah_p3_5_1 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +3.5.1`, value: this.odds.Ah_p3_5_1 ? this.odds.Ah_p3_5_1 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +3.5.2`, value: this.odds.Ah_p3_5_2 ? this.odds.Ah_p3_5_2 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +3.5.2`, value: this.odds.Ah_p3_5_2 ? this.odds.Ah_p3_5_2 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +3.5.2`, value: this.odds.Ah_p3_5_2 ? this.odds.Ah_p3_5_2 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +3.5.2`, value: this.odds.Ah_p3_5_2 ? this.odds.Ah_p3_5_2 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +3.1`, value: this.odds.Ah_p3_1 ? this.odds.Ah_p3_1 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +3.1`, value: this.odds.Ah_p3_1 ? this.odds.Ah_p3_1 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +3.2`, value: this.odds.Ah_p3_2 ? this.odds.Ah_p3_2 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +3.2`, value: this.odds.Ah_p3_2 ? this.odds.Ah_p3_2 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +2.5.1`, value: this.odds.Ah_p2_5_1 ? this.odds.Ah_p2_5_1 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +2.5.1`, value: this.odds.Ah_p2_5_1 ? this.odds.Ah_p2_5_1 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +2.5.2`, value: this.odds.Ah_p2_5_2 ? this.odds.Ah_p2_5_2 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +2.5.2`, value: this.odds.Ah_p2_5_2 ? this.odds.Ah_p2_5_2 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +2.1`, value: this.odds.Ah_p2_1 ? this.odds.Ah_p2_1 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +2.1`, value: this.odds.Ah_p2_1 ? this.odds.Ah_p2_1 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +2.2`, value: this.odds.Ah_p2_2 ? this.odds.Ah_p2_2 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +2.2`, value: this.odds.Ah_p2_2 ? this.odds.Ah_p2_2 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +1.5.1`, value: this.odds.Ah_p1_5_1 ? this.odds.Ah_p1_5_1 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +1.5.1`, value: this.odds.Ah_p1_5_1 ? this.odds.Ah_p1_5_1 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +1.5.2`, value: this.odds.Ah_p1_5_2 ? this.odds.Ah_p1_5_2 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +1.5.2`, value: this.odds.Ah_p1_5_2 ? this.odds.Ah_p1_5_2 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +1.1`, value: this.odds.Ah_p1_1 ? this.odds.Ah_p1_1 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +1.1`, value: this.odds.Ah_p1_1 ? this.odds.Ah_p1_1 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +1.2`, value: this.odds.Ah_p1_2 ? this.odds.Ah_p1_2 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +1.2`, value: this.odds.Ah_p1_2 ? this.odds.Ah_p1_2 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +0.5.1`, value: this.odds.Ah_p0_5_1 ? this.odds.Ah_p0_5_1 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +0.5.1`, value: this.odds.Ah_p0_5_1 ? this.odds.Ah_p0_5_1 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +0.5.2`, value: this.odds.Ah_p0_5_2 ? this.odds.Ah_p0_5_2 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +0.5.2`, value: this.odds.Ah_p0_5_2 ? this.odds.Ah_p0_5_2 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +0.1`, value: this.odds.Ah0_1 ? this.odds.Ah0_1 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +0.1`, value: this.odds.Ah0_1 ? this.odds.Ah0_1 : 0 })

    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]} +0.2`, value: this.odds.Ah0_2 ? this.odds.Ah0_2 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]} +0.2`, value: this.odds.Ah0_2 ? this.odds.Ah0_2 : 0 })

    // Тотал меньше
    this.itemsOdds.push({ name: `Тотал меньше: 0.5`, value: this.odds.O_0_5 ? this.odds.O_0_5 : 0 })
    this.itemsOdds.push({ name: `Тотал меньше: 0.5`, value: this.odds.O_0_5 ? this.odds.O_0_5 : 0 })

    this.itemsOdds.push({ name: `Тотал меньше: 1`, value: this.odds.O_1 ? this.odds.O_1 : 0 })
    this.itemsOdds.push({ name: `Тотал меньше: 1`, value: this.odds.O_1 ? this.odds.O_1 : 0 })

    this.itemsOdds.push({ name: `Тотал меньше: 1.5`, value: this.odds.O_1_5 ? this.odds.O_1_5 : 0 })
    this.itemsOdds.push({ name: `Тотал меньше: 1.5`, value: this.odds.O_1_5 ? this.odds.O_1_5 : 0 })

    this.itemsOdds.push({ name: `Тотал меньше: 2`, value: this.odds.O_2 ? this.odds.O_2 : 0 })
    this.itemsOdds.push({ name: `Тотал меньше: 2`, value: this.odds.O_2 ? this.odds.O_2 : 0 })

    this.itemsOdds.push({ name: `Тотал меньше: 2.5`, value: this.odds.O_2_5 ? this.odds.O_2_5 : 0 })
    this.itemsOdds.push({ name: `Тотал меньше: 2.5`, value: this.odds.O_2_5 ? this.odds.O_2_5 : 0 })

    this.itemsOdds.push({ name: `Тотал меньше: 3`, value: this.odds.O_3 ? this.odds.O_3 : 0 })
    this.itemsOdds.push({ name: `Тотал меньше: 3`, value: this.odds.O_3 ? this.odds.O_3 : 0 })

    this.itemsOdds.push({ name: `Тотал меньше: 3.5`, value: this.odds.O_3_5 ? this.odds.O_3_5 : 0 })
    this.itemsOdds.push({ name: `Тотал меньше: 3.5`, value: this.odds.O_3_5 ? this.odds.O_3_5 : 0 })

    this.itemsOdds.push({ name: `Тотал меньше: 4`, value: this.odds.O_4 ? this.odds.O_4 : 0 })
    this.itemsOdds.push({ name: `Тотал меньше: 4`, value: this.odds.O_4 ? this.odds.O_4 : 0 })

    this.itemsOdds.push({ name: `Тотал меньше: 4.5`, value: this.odds.O_4_5 ? this.odds.O_4_5 : 0 })
    this.itemsOdds.push({ name: `Тотал меньше: 4.5`, value: this.odds.O_4_5 ? this.odds.O_4_5 : 0 })

    this.itemsOdds.push({ name: `Тотал меньше: 5`, value: this.odds.O_5 ? this.odds.O_5 : 0 })
    this.itemsOdds.push({ name: `Тотал меньше: 5`, value: this.odds.O_5 ? this.odds.O_5 : 0 })

    this.itemsOdds.push({ name: `Тотал меньше: 5.5`, value: this.odds.O_5_5 ? this.odds.O_5_5 : 0 })
    this.itemsOdds.push({ name: `Тотал меньше: 5.5`, value: this.odds.O_5_5 ? this.odds.O_5_5 : 0 })

    // Тотал больше
    this.itemsOdds.push({ name: `Тотал больше: 0.5`, value: this.odds.U_0_5 ? this.odds.U_0_5 : 0 })
    this.itemsOdds.push({ name: `Тотал больше: 0.5`, value: this.odds.U_0_5 ? this.odds.U_0_5 : 0 })

    this.itemsOdds.push({ name: `Тотал больше: 1`, value: this.odds.U_1 ? this.odds.U_1 : 0 })
    this.itemsOdds.push({ name: `Тотал больше: 1`, value: this.odds.U_1 ? this.odds.U_1 : 0 })

    this.itemsOdds.push({ name: `Тотал больше: 1.5`, value: this.odds.U_1_5 ? this.odds.U_1_5 : 0 })
    this.itemsOdds.push({ name: `Тотал больше: 1.5`, value: this.odds.U_1_5 ? this.odds.U_1_5 : 0 })

    this.itemsOdds.push({ name: `Тотал больше: 2`, value: this.odds.U_2 ? this.odds.U_2 : 0 })
    this.itemsOdds.push({ name: `Тотал больше: 2`, value: this.odds.U_2 ? this.odds.U_2 : 0 })

    this.itemsOdds.push({ name: `Тотал больше: 2.5`, value: this.odds.U_2_5 ? this.odds.U_2_5 : 0 })
    this.itemsOdds.push({ name: `Тотал больше: 2.5`, value: this.odds.U_2_5 ? this.odds.U_2_5 : 0 })

    this.itemsOdds.push({ name: `Тотал больше: 3`, value: this.odds.U_3 ? this.odds.U_3 : 0 })
    this.itemsOdds.push({ name: `Тотал больше: 3`, value: this.odds.U_3 ? this.odds.U_3 : 0 })

    this.itemsOdds.push({ name: `Тотал больше: 3.5`, value: this.odds.U_3_5 ? this.odds.U_3_5 : 0 })
    this.itemsOdds.push({ name: `Тотал больше: 3.5`, value: this.odds.U_3_5 ? this.odds.U_3_5 : 0 })

    this.itemsOdds.push({ name: `Тотал больше: 4`, value: this.odds.U_4 ? this.odds.U_4 : 0 })
    this.itemsOdds.push({ name: `Тотал больше: 4`, value: this.odds.U_4 ? this.odds.U_4 : 0 })

    this.itemsOdds.push({ name: `Тотал больше: 4.5`, value: this.odds.U_4_5 ? this.odds.U_4_5 : 0 })
    this.itemsOdds.push({ name: `Тотал больше: 4.5`, value: this.odds.U_4_5 ? this.odds.U_4_5 : 0 })

    this.itemsOdds.push({ name: `Тотал больше: 5`, value: this.odds.U_5 ? this.odds.U_5 : 0 })
    this.itemsOdds.push({ name: `Тотал больше: 5`, value: this.odds.U_5 ? this.odds.U_5 : 0 })

    this.itemsOdds.push({ name: `Тотал больше: 5.5`, value: this.odds.U_5_5 ? this.odds.U_5_5 : 0 })
    this.itemsOdds.push({ name: `Тотал больше: 5.5`, value: this.odds.U_5_5 ? this.odds.U_5_5 : 0 })

    console.log('itemsOdds =====', this.itemsOdds)
  }
}
</script>
<style></style>
