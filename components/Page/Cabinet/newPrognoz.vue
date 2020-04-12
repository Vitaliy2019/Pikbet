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
        <h2>Дата события:{{odds.Odd_date}}</h2>
        <br>
          
          <v-select
          v-model="selValue"
          :items="itemsOdds"
          item-text="name"
          item-value="value"
          label="Ставка"
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
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[0]}`, value: this.odds.Ah_0_5_1 ? this.odds.Ah_0_5_1 : 0 })
    this.itemsOdds.push({ name: `Фора: ${arrNameCommands[1]}`, value: this.odds.Ap_0_5_1 ? this.odds.Ap_0_5_1 : 0 })
    console.log('itemsOdds =====', this.itemsOdds)
  }
}
</script>
<style></style>
