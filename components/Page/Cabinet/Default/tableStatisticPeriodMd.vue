<template>
  <el-table :data="list" type="primary">
    <el-table-column label="Количество прогнозов"></el-table-column>
    <el-table-column header-cell-class-name="success" label="Выигрышей">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
  </el-table>

  
</template>
<script>
export default {
  data () {
    return {
      list: null
    }
  }
}
</script>
<style scoped>
.success {
  color: green;
}
.danger {
  color: darkorange;
}
.warning {
  color: red;
}
</style>