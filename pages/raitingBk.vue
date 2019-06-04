<template>
  <v-container align-center justify-center>
    <bread-crumbs :items="items"></bread-crumbs>
    <v-layout row>
      <v-flex xs12 sm12>
        <v-card width="100%">
          <v-toolbar dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>

            <v-toolbar-title>Рейтинг букмекерских контор</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>search</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>check_circle</v-icon>
            </v-btn>
          </v-toolbar>

          <v-list two-line>
            <template v-for="(item, index) in itemsBK">
              <v-list-tile :key="item.title" avatar ripple @click="toggle(index)">
                <v-list-tile-content>
                  <v-list-tile-title class="yellow--text">{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-list-tile-action-text>
                    <span
                      class="yellow--text text--lighten-2 caption mr-2"
                    >рейтинг ({{ item.rating }})</span>
                  </v-list-tile-action-text>
                  <v-rating
                    v-model="rating"
                    background-color="white"
                    color="yellow accent-4"
                    dense
                    half-increments
                    hover
                    readonly
                    size="18"
                  ></v-rating>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import BreadCrumbs from '~/components/Page/Header/BreadCrumbs'
export default {
  name: 'prog-noz',
  components: { BreadCrumbs },
  data () {
    return {
      items: [
        {
          text: 'Главная',
          disabled: false,
          href: '/'
        },
        {
          text: 'рейтинг БК',
          disabled: true,
          href: ''
        }
      ],
      selected: [2],
      itemsBK: [
        {
          rating: 10,
          headline: 'Букмекерская контора',
          title: 'BetCity',
          subtitle:
            'Текущий рейтинг букмекерской конторы, который вы можете изменить'
        },
        {
          rating: 10,
          headline: 'Букмекерская контора',
          title: '888.ru',
          subtitle:
            'Текущий рейтинг букмекерской конторы, который вы можете изменить'
        },
        {
          rating: 10,
          headline: 'Букмекерская контора',
          title: 'Лига Ставок',
          subtitle:
            'Текущий рейтинг букмекерской конторы, который вы можете изменить'
        },
        {
          rating: 10,
          headline: 'Букмекерская контора',
          title: 'Winline',
          subtitle:
            'Текущий рейтинг букмекерской конторы, который вы можете изменить'
        },
        {
          rating: 10,
          headline: 'Букмекерская контора',
          title: '1хСтавка',
          subtitle:
            'Текущий рейтинг букмекерской конторы, который вы можете изменить'
        }
      ]
    }
  },
  methods: {
    toggle (index) {
      const i = this.selected.indexOf(index)

      if (i > -1) {
        this.selected.splice(i, 1)
      } else {
        this.selected.push(index)
      }
    }
  }
}
</script>

