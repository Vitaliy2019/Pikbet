<template>
  <div>
    <v-toolbar color="#303030" flat>
      <v-toolbar-title>
        <span>За все время</span>
      </v-toolbar-title>
      <v-icon class="pl-2" @click="dialogDate=true">fa fa-calendar</v-icon>
      <v-spacer />
      <v-toolbar-title>
        <span>
          Баланс:
          <span class="title green--text">10 000</span>
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <span>
          В игре:
          <span class="title green--text">10 000</span>
        </span>
      </v-toolbar-title>
    </v-toolbar>
    <v-dialog v-model="dialogDate" hide-overlay persistent width="500">
      <v-card dark>
        <v-card-text>
          Выберите период загрузки (не более 3 дней)
          <el-form :model="rulesForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="value1">
              <el-date-picker
                v-model="rulesForm.value1"
                type="daterange"
                range-separator="до"
                start-placeholder="Начальная дата"
                end-placeholder="Конечная дата"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
              {{rulesForm.Fvalue1}}
            </el-form-item>
            <el-form-item>
              <v-btn outline @click="dialogDate=false" color="white">Загрузить данные</v-btn>
              <v-btn outline @click="dialogDate=false" color="yellow">За все время</v-btn>
            </el-form-item>
          </el-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formatDate: {
        format: 'dd.MM.yyyy',
        time: new Date(), // Время или строка(eg:'2017-12-12'),
        type: 'fmt',
        autoUpdate: false
      },
      dialogDate: false,
      value1: null,
      rulesForm: {
        value1: ''
      },
      rules: {
        value1: [
          {
            type: 'array',
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
    }
  }
}
</script>
<style scoped>
</style>