<template>
  <v-card>
    <v-list>
      <v-list-tile v-for="item in items" :key="item.title" avatar @click>
        <template v-if="item.text=='Выигрышей'">
          <v-list-tile-content>
            <v-list-tile-title>
              <span class="green--text">{{item.text}}</span>
            </v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-list-tile-action-text>
              <span class="green--text">{{ item.value }}</span>
            </v-list-tile-action-text>
          </v-list-tile-action>
        </template>
        <template v-else>
          <v-list-tile-content>
            <v-list-tile-title>
              <span>{{item.text}}</span>
            </v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-list-tile-action-text>{{ item.value }}</v-list-tile-action-text>
          </v-list-tile-action>
        </template>
      </v-list-tile>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      items: []
    }
  },
  computed: {
    period () {
      return this.$store.getters['selPeriod/getPeriod']
    }
  },
  mounted () {
    this.desserts = []
    this.getList()
  },
  methods: {
    async getList () {
      this.loading = true

      // В будущем слелать запрос с учето периода или за все время
      const { user } = await this.$axios.$get('/api/Client/getuser')
      this.items = [
        {
          text: 'Кол-во прогнозов',
          value: user.Count_stavok
        },
        { text: 'Выигрышей', value: user.Vyigreshey },
        { text: 'Возвратов', value: user.Vozvratov },
        { text: 'Проигрышей', value: user.Proigreshey },
        { text: 'Проход', value: user.Prohod },
        { text: 'Ср. коэфф', value: user.Sr_koeff },
        { text: 'ROI', value: user.Roi },
        { text: 'Доход', value: user.Dodhod }
      ]
      this.$store.dispatch('selPeriod/setPeriod', user.Score)
    }
  }
}
</script>