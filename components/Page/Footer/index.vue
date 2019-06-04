<template>
  <v-footer height="auto">
    <v-container mt-4 mb-3>
      <v-layout row wrap>
        <v-flex xs12>
          <h5 class="mb3">
            <v-layout align-center justify-center column>
              <v-flex xs12 class="text-xs-center">
                <span
                  class="subheading"
                >pikbet.ru не проводит игр на деньги. Вся информация носит ознакомительный характер</span>
              </v-flex>
              <v-flex xs12 class="text-xs-center">
                <span class="subheading">Информация на сайте предназначена для лиц старше 18 лет</span>
              </v-flex>
            </v-layout>
          </h5>
        </v-flex>
        <v-flex xs12>
          <v-layout mb-3 align-center justify-center>
            <a href="#" title="В контакте" target="_blank" rel="noopener" class="social mx-3">
              <v-icon aria-hidden>fa fa-vk</v-icon>
            </a>

            <a href="#" title="Google+" target="_blank" rel="noopener" class="social mx-3">
              <v-icon aria-hidden>fa fa-google-plus</v-icon>
            </a>
            <a href="#" title="Twitter" target="_blank" rel="noopener" class="social mx-3">
              <v-icon aria-hidden>fa fa-facebook-f</v-icon>
            </a>
          </v-layout>
        </v-flex>
        <v-flex xs12>
          <v-layout align-center justify-center column text-xs-center>
            <v-flex xs12>© 2019 Разработано и произведено в России. Все права защищены.</v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  props: ['fixe'],
  name: 'foot-ter',
  data () {
    return {}
  }
}
</script>
