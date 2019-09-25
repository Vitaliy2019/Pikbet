<template>
  <v-layout flex-child wrap>
    <v-flex xs12 d-flex>
      <v-sheet class="d-flex" color="black lighten-3" height="50">
        <sheet-footer>
          <BtnNoCompPrognoz></BtnNoCompPrognoz>
        </sheet-footer>
      </v-sheet>
    </v-flex>
  </v-layout>
</template>
<script>
import BtnNoCompPrognoz from '~/components/Page/Cabinet/Default/btnNoCompPrognoz'

export default {
  components: {
    BtnNoCompPrognoz,
    SheetFooter: {
      functional: true,

      render (h, { children }) {
        return h(
          'v-sheet',
          {
            staticClass: 'mt-auto pl-3 align-center justify-left d-flex',
            props: {
              color: 'rgba(0, 0, 0, .36)',
              dark: true,
              height: 50
            }
          },
          children
        )
      }
    }
  }
}
</script>
<style scoped>
</style>