<template>
  <v-layout row wrap>
    <v-flex xs12>
      <el-table
        ref="multipleTable"
        v-loading="prGetList"
        :data="desserts"
        style="width: 100%"
        border
        highlight-current-row
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <template v-for="(fruit, index) in LangFormThead">
          <el-table-column
            v-if="fruit.chkbD"
            :key="'data-'+index"
            sortable
            :label="fruit.lngName"
            :property="fruit.nameField"
          >
            <template slot-scope="scope">
              <vueDateFormat
                v-if="fruit.nameField==='Odd_date'"
                :format="formatDate.format"
                :time="scope.row[fruit.nameField]"
                :type="formatDate.type"
                :auto-update="formatDate.autoUpdate"
              />
              <span
                v-else-if="fruit.nameField==='MatchName'"
                style="margin-left: 10px"
              >{{ scope.row[fruit.nameField] }}</span>
              <span v-else style="margin-left: 10px">{{ scope.row[fruit.nameField] }}</span>
            </template>
          </el-table-column>
        </template>

        <el-table-column label="Действие">
          <template slot-scope="scope">
            <el-tooltip effect="dark" content="Просмотреть коэффициент">
              <v-btn outline icon dark medium color="primary" @click="editItem(scope.row)">
                <v-icon small>search</v-icon>
              </v-btn>
            </el-tooltip>
            <el-tooltip effect="dark" content="Удалить коэффициент">
              <v-btn outline icon dark medium color="pink" @click="deleteItem(scope.row)">
                <v-icon small>delete</v-icon>
              </v-btn>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-container">
        <el-pagination
          background
          :current-page="listQuery.Page"
          :page-sizes="[5,10,20,30,50,100,200]"
          :page-size="listQuery.Limit"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalDesserts"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'list-prognozs',
  data () {
    return {
      totalDesserts: 0,
      desserts: [],
      listQuery: {
        Page: 1,
        Limit: 20,
        Tile: '', // страна
        ValueC: '', // соревнование
        ValueM: 0 // период
      },
      formThead: [
        { nameField: 'id', lngName: 'Id', chkbD: true },
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
          chkbD: true
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
        this.store.dispatch('addPrognoz/setSelectedCompetitions', newValue)
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
    this.getList()
  },
  methods: {
    async getList () {
      this.prGetList = true
      const { jsonOdds, total } = await this.$axios.$get('/api/Odds', {
        params: this.listQuery
      })

      let deserOdds = jsonOdds.map(v => {
        let parseData = JSON.parse(v.Data)
        parseData.matchName = v.MatchName
        parseData.id = v.Id
        return parseData
      })

      console.log('deserOdds', deserOdds)

      this.desserts = deserOdds
      this.totalDesserts = total
      this.prGetList = false
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
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>
<style>
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
</style>