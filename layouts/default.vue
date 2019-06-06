<template>
  <v-app dark>
    <tool-bar-header-md class="hidden-sm-and-down"/>
    <tool-bar-header-sm class="hidden-md-and-up"></tool-bar-header-sm>
    <v-content>
      <carousel-hader/>
      <nuxt/>
    </v-content>
    <foo-ter/>
  </v-app>
</template>

<script>
import CarouselHader from '~/components/Page/Header/CarouselHader'
import ToolBarHeaderMd from '~/components/Page/Header/ToolBarHeaderMd'
import ToolBarHeaderSm from '~/components/Page/Header/ToolBarHeaderSm'
import FooTer from '~/components/Page/Footer'
export default {
  components: { ToolBarHeaderMd, ToolBarHeaderSm, FooTer, CarouselHader },
  data () {
    return {
      fixed: false
    }
  }
}
</script>
