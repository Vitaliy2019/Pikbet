<template>
  <div class="d-flex align-center">
    <div class="text-xs-left">
      <v-menu open-on-hover top offset-y>
        <template v-slot:activator="{ on }">
          <v-btn dark v-on="on" @click="clickBtn">{{texrBtn}}</v-btn>
        </template>

        <v-list>
          <v-list-tile v-for="(item, index) in items" :key="index" @click="clickList">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </div>
    <div class="text-xs-rigth">
      <v-rating
        small
        readonly
        v-model="rating"
        :length="length"
        color="red lighten-3"
        background-color="grey lighten-1"
      ></v-rating>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      texrBtn: 'Последние 10 нерасчитанных прогнозов',
      length: 10,
      rating: 2,
      items: [
        { title: 'Последние 10 нерасчитанных прогнозов' },
        { title: 'Последние 20 нерасчитанных прогнозов' },
        { title: 'Последние 30 нерасчитанных прогнозов' }
      ]
    }
  },
  methods: {
    clickBtn (e) {
      console.log(e.target)
    },
    clickList (e) {
      console.log(e)
      this.texrBtn = e.target.innerText
    }
  }
}
</script>