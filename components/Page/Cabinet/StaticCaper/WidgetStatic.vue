<template>
  
   
    <v-flex sm6 xs12 md3 lg3>
      <v-card dark style="margin-bottom: 24px; margin-top: 48px;">
        <v-card class="v-offset" style="top: -24px; margin-bottom: -24px; width:90px;">
          <v-card dark class="pa-4 yellow darken-4 elevation-10" style="opacity:50%">
            <v-icon dark aria-hidden="true" style="font-size: 40px;">{{ icon }}</v-icon>
          </v-card>
        </v-card>
        <v-card-text>
          <div class="text-xs-right">
            <p class="category grey--text font-weight-light">{{ title }}</p>
            <h3 class="title display-1 font-weight-light">
              {{ zn }}{{ sum }}
              <small/>
            </h3>
          </div>
        </v-card-text>
        <v-divider light class="mx-3"/>
        <v-card-actions>
          <v-icon light aria-hidden="true" class="mr-2" style="font-size: 20px;">calendar_today</v-icon>
          <span class="caption font-weight-light">За последние 24 часа</span>
        </v-card-actions>
      </v-card>
    </v-flex>

</template>
<script>
export default {
  name: 'widget-static',
  props: {
    sum: {
      type: Number,
      default: 0
    },
    title: {
      default: 'Прибыль'
    },
    icon: {
      default: 'store'
    },
    zn: {
      default: ''
    }
  },
  data () {
    return {

    }
  }
}
</script>

