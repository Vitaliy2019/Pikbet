<template>
  <v-layout column wrap justify-center align-center>
    <v-flex xs12>
      <span>{{titlePeriod}}</span>
      <v-icon class="pl-2" @click="dialogDate=true">fa fa-calendar</v-icon>
    </v-flex>
    <v-flex xs12 class="pt-2">
      <span>
        Баланс:
        <span class="title green--text">10 000</span>
      </span>
    </v-flex>
    <v-flex xs12 class="pt-2">
      <span>
        В игре:
        <span class="title green--text">10 000</span>
      </span>
    </v-flex>
    <v-dialog v-model="dialogDate" hide-overlay persistent width="500">
      <v-card dark>
        <v-card-text>
          Выберите период загрузки
          <el-form :model="rulesForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="value1">
              <el-date-picker v-model="rulesForm.value1" value-format="dd.MM.yyyy"></el-date-picker>
            </el-form-item>
            <el-form-item prop="value2">
              <el-date-picker v-model="rulesForm.value2" value-format="dd.MM.yyyy"></el-date-picker>
            </el-form-item>
            <el-form-item>
              <v-btn outline @click="loadData('ruleForm')" color="white">Загрузить данные</v-btn>
              <v-btn outline @click="close" color="yellow">За все время</v-btn>
            </el-form-item>
          </el-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  data () {
    return {
      titlePeriod: 'За все время',
      dialogDate: false,
      value1: null,

      rulesForm: {
        value1: '',
        value2: ''
      },
      rules: {
        value1: [
          {
            // type: 'array',
            required: true,
            message: 'Пожалуйста заполните диапазон дат',
            trigger: 'change'
          }
        ],
        value2: [
          {
            // type: 'array',
            required: true,
            message: 'Пожалуйста заполните диапазон дат',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    loadData (formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          this.dialogDate = false
          this.dialog = true

          this.titlePeriod = `${this.rulesForm.value1} -${this.rulesForm.value2} `
          /* this.rulesForm.value1.forEach(element => {
            this.titlePeriod += `${element} - `
          }) */
          /* const { rc } = await this.$axios.$get('/api/Api/loadDataApiEvents', {
            params: this.rulesForm.value1
          })
          if (rc === 'ok') {
            this.getList()
            this.dialog = false

            this.$notify({
              title: 'Выполнено!',
              type: 'success',
              message: 'Данные загружены'
            })
          } else {
            this.dialog = false
            this.$notify({
              title: 'Ошибка!',
              type: 'error',
              message: rc
            })
          } */
        }
      })
    },
    close () {
      this.titlePeriod = 'За все время'
      this.dialogDate = false
    }
  }
}
</script>
<style scoped>
</style>