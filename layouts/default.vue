<template>
  <v-app dark>
    <tool-bar-header-md class="hidden-sm-and-down" />
    <tool-bar-header-sm class="hidden-md-and-up"></tool-bar-header-sm>
    <v-content style="padding:0px;">
      <carousel-hader class="hidden-sm-and-down" style="padding-top:48px" />
      <carousel-hader-sm class="hidden-md-and-up" />
      <nuxt />
    </v-content>
    <foo-ter />
  </v-app>
</template>

<script>
import CarouselHader from '~/components/Page/Header/CarouselHader'
import CarouselHaderSm from '~/components/Page/Header/CarouselHaderSm'
import ToolBarHeaderMd from '~/components/Page/Header/ToolBarHeaderMd'
import ToolBarHeaderSm from '~/components/Page/Header/ToolBarHeaderSm'
import FooTer from '~/components/Page/Footer'
export default {
  components: {
    ToolBarHeaderMd,
    ToolBarHeaderSm,
    FooTer,
    CarouselHader,
    CarouselHaderSm
  },
  data () {
    return {
      fixed: false
    }
  }
}
</script>
