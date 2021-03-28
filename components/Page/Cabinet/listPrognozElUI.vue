<template>
  <v-layout row wrap>
    <v-flex xs12>
      <div class="wrapper__table">
        <el-table
          ref="multipleTable"
          v-loading="prGetList"
          :data="desserts"
          style="width: 100%"
        >
          <template v-for="(fruit, index) in LangFormThead">
            <el-table-column
              v-if="fruit.chkbD"
              :key="'data-' + index"
              sortable
              :label="fruit.lngName"
              :property="fruit.nameField"
              :class="{ 'name-width': fruit.nameField === 'matchName' }"
            >
              <template slot-scope="scope">
                <vueDateFormat
                  v-if="fruit.nameField === 'Odd_date'"
                  :format="formatDate.format"
                  :time="scope.row[fruit.nameField]"
                  :type="formatDate.type"
                  :auto-update="formatDate.autoUpdate"
                />
                <span
                  v-else-if="fruit.nameField === 'matchName'"
                  style="margin-left: 10px;"
                  >{{ scope.row[fruit.nameField] }}
                  <br />
                  <a href="#" style="color: yellow;">прогнозы</a>
                </span>
                <span v-else style="margin-left: 10px;"
                  >{{ scope.row[fruit.nameField] }}
                  <new-prognoz
                    :odds="scope.row"
                    :nameOdds="fruit.nameField"
                  ></new-prognoz
                ></span>
              </template>
            </el-table-column>
          </template>
        </el-table>

        <div class="pagination-container">
          <el-pagination
            background
            :current-page="listQuery.Page"
            :page-sizes="[5, 10, 20, 30, 50, 100, 200]"
            :page-size="listQuery.Limit"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalDesserts"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import NewPrognoz from './newPrognoz'

export default {
  name: 'list-prognozs',
  components: { NewPrognoz },
  data () {
    return {
      prGetList: false,
      totalDesserts: 0,
      desserts: [],
      listQuery: {
        Page: 1,
        Limit: 20,
        Tile: '', // страна
        ValueC: '', // соревнование
        ValueM: 0 // период
      },
      formatDate: {
        format: 'dd.MM.yyyy hh:mm',
        time: new Date(), // Время или строка(eg:'2017-12-12'),
        type: 'fmt',
        autoUpdate: false
      },
      formThead: [
        { nameField: 'id', lngName: 'Id', chkbD: false },
        { nameField: 'matchName', lngName: 'Матч', chkbD: true },
        { nameField: 'Odd_bookmakers', lngName: 'Букмекер', chkbD: false },
        { nameField: 'Odd_date', lngName: 'Дата', chkbD: true },
        { nameField: 'Odd_1', lngName: 'Odd 1', chkbD: false },
        {
          nameField: 'Odd_x',
          lngName: 'Odd x',
          chkbD: true
        },
        { nameField: 'Odd_2', lngName: 'Odd 2', chkbD: true },
        { nameField: 'Odd_1x', lngName: 'Odd 1x', chkbD: true },
        { nameField: 'Odd_12', lngName: 'Odd 12', chkbD: true },
        {
          nameField: 'Odd_x2',
          lngName: 'Odd x2',
          chkbD: true
        },
        {
          nameField: 'Ah_4_5_1',
          lngName: 'Ah-4.5_1',
          chkbD: false
        },
        {
          nameField: 'Ah_4_5_2',
          lngName: 'Ah-4.5_2',
          chkbD: false
        },
        {
          nameField: 'Ah_4_1',
          lngName: 'Ah-4_1',
          chkbD: false
        },
        {
          nameField: 'Ah_4_2',
          lngName: 'Ah-4_2',
          chkbD: false
        },
        {
          nameField: 'Ah_3_5_1',
          lngName: 'Ah-3.5_1',
          chkbD: false
        },
        {
          nameField: 'Ah_3_5_2',
          lngName: 'Ah-3.5_2',
          chkbD: false
        },
        {
          nameField: 'Ah_3_1',
          lngName: 'Ah-3.1',
          chkbD: false
        },
        {
          nameField: 'Ah_3_2',
          lngName: 'Ah-3.2',
          chkbD: false
        },
        {
          nameField: 'Ah_2_5_1',
          lngName: 'Ah_2.5_1',
          chkbD: false
        },
        {
          nameField: 'Ah_2_5_2',
          lngName: 'Ah-2.5_2',
          chkbD: false
        },
        {
          nameField: 'Ah_2_1',
          lngName: 'Ah-2_1',
          chkbD: false
        },
        {
          nameField: 'Ah_2_2',
          lngName: 'Ah-2_2',
          chkbD: false
        },
        {
          nameField: 'Ah_1_5_1',
          lngName: 'Ah-1.5_1',
          chkbD: false
        },
        { nameField: 'Ah_1_5_2', lngName: 'Ah-1.5_2', chkbD: false },
        { nameField: 'Ah_1_1', lngName: 'Ah-1_1', chkbD: false },
        { nameField: 'Ah_1_2', lngName: 'Ah-1_2', chkbD: false },
        { nameField: 'Ah_0_5_1', lngName: 'Ah-0.5_1', chkbD: false },
        { nameField: 'Ah_0_5_2', lngName: 'Ah-0.5_2', chkbD: false },

        { nameField: 'Ah_p4_5_1', lngName: 'Ah+4.5_1', chkbD: false },
        { nameField: 'Ah_p4_5_2', lngName: 'Ah+4.5_2', chkbD: false },
        { nameField: 'Ah_p4_1', lngName: 'Ah+4_1', chkbD: false },
        { nameField: 'Ah_p4_2', lngName: 'Ah+4_2', chkbD: false },
        { nameField: 'Ah_p3_5_1', lngName: 'Ah+3.5_1', chkbD: false },
        { nameField: 'Ah_p3_5_2', lngName: 'Ah+3.5_2', chkbD: false },

        { nameField: 'Ah_p3_1', lngName: 'Ah+3_1', chkbD: false },
        { nameField: 'Ah_p3_2', lngName: 'Ah+3_2', chkbD: false },

        { nameField: 'Ah_p2_5_1', lngName: 'Ah+2.5_1', chkbD: false },
        { nameField: 'Ah_p2_5_2', lngName: 'Ah+2.5_2', chkbD: false },
        { nameField: 'Ah_p2_1', lngName: 'Ah+2_1', chkbD: false },
        { nameField: 'Ah_p2_2', lngName: 'Ah+2_2', chkbD: false },
        { nameField: 'Ah_p1_5_1', lngName: 'Ah+1.5_1', chkbD: false },
        { nameField: 'Ah_p1_5_2', lngName: 'Ah+1.5_2', chkbD: false },
        { nameField: 'Ah_p1_1', lngName: 'Ah+1_1', chkbD: false },
        { nameField: 'Ah_p1_2', lngName: 'Ah+1_2', chkbD: false },
        { nameField: 'Ah_p0_5_1', lngName: 'Ah+0.5_1', chkbD: false },
        { nameField: 'Ah_p0_5_2', lngName: 'Ah+0.5_2', chkbD: false },
        { nameField: 'Ah0_1', lngName: 'Ah0_1', chkbD: false },
        { nameField: 'Ah0_2', lngName: 'Ah0_2', chkbD: false },
        { nameField: 'O_0_5', lngName: 'O+0.5', chkbD: false },
        { nameField: 'U_0_5', lngName: 'U+0.5', chkbD: false },
        { nameField: 'O_1', lngName: 'O+1', chkbD: false },
        { nameField: 'U_1', lngName: 'U+1', chkbD: false },
        { nameField: 'O_1_5', lngName: 'O+1.5', chkbD: false },
        { nameField: 'U_1_5', lngName: 'U+1.5', chkbD: false },
        { nameField: 'O_2', lngName: 'O+2', chkbD: false },
        { nameField: 'U_2', lngName: 'U+2', chkbD: false },
        { nameField: 'O_2_5', lngName: 'O+2.5', chkbD: false },
        { nameField: 'U_2_5', lngName: 'U+2.5', chkbD: false },
        { nameField: 'O_3', lngName: 'O+3', chkbD: false },
        { nameField: 'U_3', lngName: 'U+3', chkbD: false },
        { nameField: 'O_3_5', lngName: 'O+3.5', chkbD: false },
        { nameField: 'U_3_5', lngName: 'U+3.5', chkbD: false },
        { nameField: 'O_4', lngName: 'O+4', chkbD: false },
        { nameField: 'U_4', lngName: 'U+4', chkbD: false },
        { nameField: 'O_4_5', lngName: 'O+4.5', chkbD: false },
        { nameField: 'U_4_5', lngName: 'U+4.5', chkbD: false },
        { nameField: 'O_5', lngName: 'O+5', chkbD: false },
        { nameField: 'U_5', lngName: 'U+5', chkbD: false },
        { nameField: 'O_5_5', lngName: 'O+5.5', chkbD: false },
        { nameField: 'U_5_5', lngName: 'U+5.5', chkbD: false },
        { nameField: 'Bts_yes', lngName: 'bts_yes', chkbD: false },
        { nameField: 'Bts_no', lngName: 'bts_no', chkbD: false }
      ]
    }
  },
  computed: {
    LangFormThead: function () {
      return this.$store.state.formThead
    },
    selectedCompetitions: {
      get () {
        return this.$store.getters['addPrognoz/getSelectedCompetitions']
      },
      set (newValue) {
        this.$store.dispatch('addPrognoz/setSelectedCompetitions', newValue)
      }
    },
    selectedCountry: {
      get () {
        return this.$store.getters['addPrognoz/getSelectedCountry']
      },
      async set (newValue) {
        await this.$store.dispatch('addPrognoz/setSelectedCountry', newValue)
        await this.$store.dispatch('addPrognoz/getValueCompetitions')
      }
    }
  },
  mounted () {
    this.$store.commit('SET_FORMTHEAD', this.formThead)
    this.getList()
  },
  methods: {
    async getList () {
      this.prGetList = true

      this.listQuery.Tile = this.selectedCountry
      this.listQuery.ValueC = this.selectedCompetitions
      this.listQuery.ValueM = this.slectedPeriod

      const { jsonOdds, total } = await this.$axios.$get('/api/MordaOdds', {
        params: this.listQuery
      })
      // debugger; // eslint-disable-line
      let deserOdds = jsonOdds.map((v) => {
        let parseData = JSON.parse(v.Data)
        parseData.matchName = v.MatchName
        parseData.id = v.Id
        return parseData
      })
      this.prGetList = false
      console.log('deserOdds', deserOdds)

      this.desserts = deserOdds
      this.totalDesserts = total
    },
    handleSizeChange (val) {
      this.listQuery.Limit = val
      this.getList()
    },
    handleCurrentChange (val) {
      this.listQuery.Page = val
      this.getList()
    },
    handleSetupFields () {
      this.$store.commit('SET_DIALOGVISIBLE', true)
    } /*,
    handleSelectionChange (val) {
      this.multipleSelection = val
    } */
  }
}
</script>
<style lang="scss">
.wrapper__table {
  .name-width {
    width: 200px;
  }

  .el-table,
  .el-table__expanded-cell {
    background-color: #303030;
    color: #fff;
  }
  .el-table th,
  .el-table tr {
    background-color: #303030;
    color: #fff;
  }

  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }

  .el-table--enable-row-hover
    .el-table__body
    tr.el-table__row--striped:hover
    > td {
    background-color: #000;
    color: #fff;
  }
  .el-table--enable-row-hover
    .el-table__body
    tr.el-table__row--striped:hover
    > td {
    background-color: #000;
    color: #fff;
  }

  .el-table__body tr.current-row > td {
    background-color: #000;
    color: #fff;
  }

  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #000;
    color: #fff;
  }
}

.el-select-dropdown__item.selected {
  color: #000;
  font-weight: 700;
}

.el-select .el-input.is-focus .el-input__inner {
  border-color: #000;
}

.el-select .el-input__inner:focus {
  border-color: #000;
}
</style>
