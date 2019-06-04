<template>
  <v-app dark>
    <tool-bar-header-md class="hidden-sm-and-down"/>
    <tool-bar-header-sm class="hidden-md-and-up"></tool-bar-header-sm>
    <v-content>
      <nuxt/>
    </v-content>
    <foo-ter/>
    <!--<v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>-->
  </v-app>
</template>

<script>
import ToolBarHeaderMd from '~/components/Page/Header/ToolBarHeaderMd'
import ToolBarHeaderSm from '~/components/Page/Header/ToolBarHeaderSm'
import FooTer from '~/components/Page/Footer'
export default {
  components: { ToolBarHeaderMd, ToolBarHeaderSm, FooTer },
  data () {
    return {
      fixed: false
    }
  }
}
</script>
