<template>
  <div class="head-stat">
    <div>
      <span>Кол-во прогнозов</span>512
    </div>
    <div>
      <span>Проход</span>65.7%
    </div>
    <div>
      <span>Ср.коэф.</span>1.87
    </div>
    <div>
      <span>ROI</span>53.14%
    </div>
    <div>
      <span>Макс. просадка</span>35%
    </div>
    <div class="total">
      <div class="orange_txt" style="margin-bottom: 10px;">
        <span>Прирост&nbsp;</span>
        <span class="text_big">+1341%</span>
      </div>
      <div class="green_txt">
        <span>Доход&nbsp;</span>
        <span class="text_big coin v-2">134 063</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.head-stat {
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  width: calc(100% - 90px);
  text-align: center;
}
</style>