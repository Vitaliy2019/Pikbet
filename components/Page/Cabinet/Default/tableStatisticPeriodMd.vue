<template>
  <v-data-table
    :loading="loading"
    hide-actions
    :headers="headers"
    :items="desserts"
    class="elevation-1"
  >
    <template v-slot:headers="props">
      <th v-for="(head, index) in headers" :key="index" class="text-xs-center">
        <span v-if="head.value=='Vyigreshey'" class="green--text">{{head.text}}</span>
        <span v-else-if="head.value=='Vozvratov'" class="orange--text">{{head.text}}</span>
        <span v-else-if="head.value=='Proigreshey'" class="red--text">{{head.text}}</span>
        <span v-else>{{head.text}}</span>
      </th>
    </template>
    <template v-slot:items="props">
      <td class="text-xs-center">{{ props.item.Count_stavok }}</td>
      <td class="text-xs-center green--text">{{ props.item.Vyigreshey }}</td>
      <td class="text-xs-center orange--text">{{ props.item.Vozvratov }}</td>
      <td class="text-xs-center red--text">{{ props.item.Proigreshey }}</td>
      <td class="text-xs-center">{{ props.item.Prohod }}%</td>
      <td class="text-xs-center">{{ props.item.Sr_koeff }}</td>
      <td class="text-xs-center">{{ props.item.Roi }}%</td>
      <td class="text-xs-center">{{ props.item.Dodhod }}%</td>
    </template>
  </v-data-table>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      headers: [
        {
          text: 'Кол-во прогнозов',
          /* align: 'center', */
          sortable: false,
          value: 'Count_stavok'
        },
        { text: 'Выигрышей', value: 'Vyigreshey' },
        { text: 'Возвратов', value: 'Vozvratov' },
        { text: 'Проигрышей', value: 'Proigreshey' },
        { text: 'Проход', value: 'Prohod' },
        { text: 'Ср. коэфф', value: 'Sr_koeff' },
        { text: 'ROI', value: 'Roi' },
        { text: 'Доход', value: 'Dodhod' }
      ],
      desserts: [
        {
          Count_stavok: 0,
          Vyigreshey: 159,
          Vozvratov: 6.0,
          Proigreshey: 24,
          Prohod: 4.0,
          Sr_koeff: 1,
          Roi: 10,
          Dodhod: 56
        }
      ]
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
      const obj = {
        Count_stavok: user.Count_stavok,
        Vyigreshey: user.Vyigreshey,
        Vozvratov: user.Vozvratov,
        Proigreshey: user.Proigreshey,
        Prohod: user.Prohod,
        Sr_koeff: user.Sr_koeff,
        Roi: user.Roi,
        Dodhod: user.Dodhod
      }

      this.desserts.push(obj)
      this.$store.dispatch('selPeriod/setPeriod', user.Score)
      this.loading = false
    }
  }
}
</script>