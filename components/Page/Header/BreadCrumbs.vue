<template>
  <v-layout align-center justify-center>
    <v-breadcrumbs :items="items" color="white" class="white--text">
      <template v-slot:divider>
        <v-icon>forward</v-icon>
      </template>
    </v-breadcrumbs>
  </v-layout>
</template>
<script>
export default {
  props: ['items'],
  data: () => ({})
}
</script>
<style>
a {
  color: white;
}
</style>

