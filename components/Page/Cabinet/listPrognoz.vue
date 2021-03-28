<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-data-table
        :headers="headers"
        :items="desserts"
        hide-actions
        :pagination.sync="pagination"
        :loading="prGetList"
        class="elevation-1"
      >
        <template v-slot:headers="props">
          <tr>
            <template v-for="header in props.headers">
              <th
                v-if="header.text === 'Матч'"
                :key="header.text"
                :class="[
                  'column sortable',
                  pagination.descending ? 'desc' : 'asc',
                  header.value === pagination.sortBy ? 'active' : '',
                ]"
                @click="changeSort(header.value)"
              >
                <v-icon small>arrow_upward</v-icon>
                Предстоящий {{ header.text }}
              </th>
              <th
                v-else
                :key="header.text"
                :class="[
                  'column sortable',
                  pagination.descending ? 'desc' : 'asc',
                  header.value === pagination.sortBy ? 'active' : '',
                ]"
                @click="changeSort(header.value)"
              >
                <v-icon small>arrow_upward</v-icon>
                {{ header.text }}
              </th>
            </template>
          </tr>
        </template>
        <template v-slot:items="props">
          <td>
            <span>{{ props.item.matchName }}</span>
            <br />
            <a href="#" style="color: yellow;">прогнозы</a>
          </td>
          <td class="text-xs-center">
            <vueDateFormat
              :format="formatDate.format"
              :time="props.item.Odd_date"
              :type="formatDate.type"
              :auto-update="formatDate.autoUpdate"
            />
          </td>
          <td class="text-xs-center">
            <new-prognoz :odds="props.item" nameOdds="Odd_1"></new-prognoz>
          </td>
          <td class="text-xs-center">
            <new-prognoz :odds="props.item" nameOdds="Odd_x"></new-prognoz>
          </td>
          <td class="text-xs-center">
            <new-prognoz :odds="props.item" nameOdds="Odd_2"></new-prognoz>
          </td>
          <td class="text-xs-center">
            <new-prognoz :odds="props.item" nameOdds="Odd_1x"></new-prognoz>
          </td>
          <td class="text-xs-center">
            <new-prognoz :odds="props.item" nameOdds="Odd_12"></new-prognoz>
          </td>
          <td class="text-xs-center">
            <new-prognoz :odds="props.item" nameOdds="Odd_x2"></new-prognoz>
          </td>
          <td class="text-xs-center">
            <span style="color:green">0.5</span> /
            <span v-if="props.item.Ah_0_5_1">
              <new-prognoz
                :odds="props.item"
                nameOdds="Ah_0_5_1"
              ></new-prognoz> </span
            ><span v-else>0</span>
          </td>
          <td class="text-xs-center">
            <span style="color:red">-0.5</span> /
            <span v-if="props.item.Ah_p0_5_1">
              <new-prognoz
                :odds="props.item"
                nameOdds="Ah_p0_5_1"
              ></new-prognoz> </span
            ><span v-else>0</span>
          </td>
          <td class="text-xs-center">
            <span style="color:red">0.5</span> /
            <span v-if="props.item.O_0_5">
              <new-prognoz
                :odds="props.item"
                nameOdds="O_0_5"
              ></new-prognoz> </span
            ><span v-else>0</span>
          </td>
          <td class="text-xs-center">
            <span style="color:red">0.5</span> /
            <span v-if="props.item.U_0_5">
              <new-prognoz
                :odds="props.item"
                nameOdds="U_0_5"
              ></new-prognoz> </span
            ><span v-else>0</span>
          </td>
        </template>
      </v-data-table>
      <div class="text-xs-center pt-2">
        <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import NewPrognoz from "./newPrognoz";
export default {
  name: "list-prognozs",
  components: { NewPrognoz },
  data() {
    return {
      odds: null,
      dialogNewPrognoz: false,
      prGetList: false,
      loading: true,
      pagination: {},
      totalDesserts: 0,
      desserts: [],
      listQuery: {
        Page: 1,
        Limit: 20,
        Tile: this.selectedCountry, // '', // страна
        ValueC: this.selectedCompetitions, // '', // соревнование
        ValueM: 0, // период
      },
      formatDate: {
        format: "dd.MM.yyyy hh:mm",
        time: new Date(), // Время или строка(eg:'2017-12-12'),
        type: "fmt",
        autoUpdate: false,
      },
      headers: [
        {
          text: "Матч",
          align: "left",
          sortable: false,
          value: "matchName",
        },
        { text: "Начало игры", value: "Odd_date" },
        { text: "П1", value: "Odd_1" },
        { text: "X", value: "Odd_x" },
        { text: "П2", value: "Odd_2" },
        { text: "1X", value: "Odd_1x" },
        { text: "12", value: "Odd_12" },
        { text: "X1", value: "Odd_x2" },
        { text: "Ф1 / КФ", value: "Odd_1" },
        { text: "Ф2 / КФ", value: "Odd_1" },
        { text: "ТМ / КФ", value: "Odd_1" },
        { text: "ТБ / КФ", value: "Odd_1" },
      ],
      formThead: [
        { nameField: "id", lngName: "Id", chkbD: false },
        { nameField: "matchName", lngName: "Матч", chkbD: true },
        { nameField: "Odd_bookmakers", lngName: "Букмекер", chkbD: false },
        { nameField: "Odd_date", lngName: "Дата", chkbD: true },
        { nameField: "Odd_1", lngName: "Odd 1", chkbD: false },
        {
          nameField: "Odd_x",
          lngName: "Odd x",
          chkbD: true,
        },
        { nameField: "Odd_2", lngName: "Odd 2", chkbD: true },
        { nameField: "Odd_1x", lngName: "Odd 1x", chkbD: true },
        { nameField: "Odd_12", lngName: "Odd 12", chkbD: true },
        {
          nameField: "Odd_x2",
          lngName: "Odd x2",
          chkbD: true,
        },
        {
          nameField: "Ah_4_5_1",
          lngName: "Ah-4.5_1",
          chkbD: false,
        },
        {
          nameField: "Ah_4_5_2",
          lngName: "Ah-4.5_2",
          chkbD: false,
        },
        {
          nameField: "Ah_4_1",
          lngName: "Ah-4_1",
          chkbD: false,
        },
        {
          nameField: "Ah_4_2",
          lngName: "Ah-4_2",
          chkbD: false,
        },
        {
          nameField: "Ah_3_5_1",
          lngName: "Ah-3.5_1",
          chkbD: false,
        },
        {
          nameField: "Ah_3_5_2",
          lngName: "Ah-3.5_2",
          chkbD: false,
        },
        {
          nameField: "Ah_3_1",
          lngName: "Ah-3.1",
          chkbD: false,
        },
        {
          nameField: "Ah_3_2",
          lngName: "Ah-3.2",
          chkbD: false,
        },
        {
          nameField: "Ah_2_5_1",
          lngName: "Ah_2.5_1",
          chkbD: false,
        },
        {
          nameField: "Ah_2_5_2",
          lngName: "Ah-2.5_2",
          chkbD: false,
        },
        {
          nameField: "Ah_2_1",
          lngName: "Ah-2_1",
          chkbD: false,
        },
        {
          nameField: "Ah_2_2",
          lngName: "Ah-2_2",
          chkbD: false,
        },
        {
          nameField: "Ah_1_5_1",
          lngName: "Ah-1.5_1",
          chkbD: false,
        },
        { nameField: "Ah_1_5_2", lngName: "Ah-1.5_2", chkbD: false },
        { nameField: "Ah_1_1", lngName: "Ah-1_1", chkbD: false },
        { nameField: "Ah_1_2", lngName: "Ah-1_2", chkbD: false },
        { nameField: "Ah_0_5_1", lngName: "Ah-0.5_1", chkbD: false },
        { nameField: "Ah_0_5_2", lngName: "Ah-0.5_2", chkbD: false },

        { nameField: "Ah_p4_5_1", lngName: "Ah+4.5_1", chkbD: false },
        { nameField: "Ah_p4_5_2", lngName: "Ah+4.5_2", chkbD: false },
        { nameField: "Ah_p4_1", lngName: "Ah+4_1", chkbD: false },
        { nameField: "Ah_p4_2", lngName: "Ah+4_2", chkbD: false },
        { nameField: "Ah_p3_5_1", lngName: "Ah+3.5_1", chkbD: false },
        { nameField: "Ah_p3_5_2", lngName: "Ah+3.5_2", chkbD: false },

        { nameField: "Ah_p3_1", lngName: "Ah+3_1", chkbD: false },
        { nameField: "Ah_p3_2", lngName: "Ah+3_2", chkbD: false },

        { nameField: "Ah_p2_5_1", lngName: "Ah+2.5_1", chkbD: false },
        { nameField: "Ah_p2_5_2", lngName: "Ah+2.5_2", chkbD: false },
        { nameField: "Ah_p2_1", lngName: "Ah+2_1", chkbD: false },
        { nameField: "Ah_p2_2", lngName: "Ah+2_2", chkbD: false },
        { nameField: "Ah_p1_5_1", lngName: "Ah+1.5_1", chkbD: false },
        { nameField: "Ah_p1_5_2", lngName: "Ah+1.5_2", chkbD: false },
        { nameField: "Ah_p1_1", lngName: "Ah+1_1", chkbD: false },
        { nameField: "Ah_p1_2", lngName: "Ah+1_2", chkbD: false },
        { nameField: "Ah_p0_5_1", lngName: "Ah+0.5_1", chkbD: false },
        { nameField: "Ah_p0_5_2", lngName: "Ah+0.5_2", chkbD: false },
        { nameField: "Ah0_1", lngName: "Ah0_1", chkbD: false },
        { nameField: "Ah0_2", lngName: "Ah0_2", chkbD: false },
        { nameField: "O_0_5", lngName: "O+0.5", chkbD: false },
        { nameField: "U_0_5", lngName: "U+0.5", chkbD: false },
        { nameField: "O_1", lngName: "O+1", chkbD: false },
        { nameField: "U_1", lngName: "U+1", chkbD: false },
        { nameField: "O_1_5", lngName: "O+1.5", chkbD: false },
        { nameField: "U_1_5", lngName: "U+1.5", chkbD: false },
        { nameField: "O_2", lngName: "O+2", chkbD: false },
        { nameField: "U_2", lngName: "U+2", chkbD: false },
        { nameField: "O_2_5", lngName: "O+2.5", chkbD: false },
        { nameField: "U_2_5", lngName: "U+2.5", chkbD: false },
        { nameField: "O_3", lngName: "O+3", chkbD: false },
        { nameField: "U_3", lngName: "U+3", chkbD: false },
        { nameField: "O_3_5", lngName: "O+3.5", chkbD: false },
        { nameField: "U_3_5", lngName: "U+3.5", chkbD: false },
        { nameField: "O_4", lngName: "O+4", chkbD: false },
        { nameField: "U_4", lngName: "U+4", chkbD: false },
        { nameField: "O_4_5", lngName: "O+4.5", chkbD: false },
        { nameField: "U_4_5", lngName: "U+4.5", chkbD: false },
        { nameField: "O_5", lngName: "O+5", chkbD: false },
        { nameField: "U_5", lngName: "U+5", chkbD: false },
        { nameField: "O_5_5", lngName: "O+5.5", chkbD: false },
        { nameField: "U_5_5", lngName: "U+5.5", chkbD: false },
        { nameField: "Bts_yes", lngName: "bts_yes", chkbD: false },
        { nameField: "Bts_no", lngName: "bts_no", chkbD: false },
      ],
    };
  },
  computed: {
    LangFormThead: function() {
      return this.$store.state.formThead;
    },
    selectedCompetitions: {
      get() {
        return this.$store.getters["addPrognoz/getSelectedCompetitions"];
      },
      set(newValue) {
        this.$store.dispatch("addPrognoz/setSelectedCompetitions", newValue);
        this.getList();
      },
    },
    selectedCountry: {
      get() {
        return this.$store.getters["addPrognoz/getSelectedCountry"];
      },
      async set(newValue) {
        await this.$store.dispatch("addPrognoz/setSelectedCountry", newValue);
        await this.$store.dispatch("addPrognoz/getValueCompetitions");
        this.getList();
      },
    },
    slectedPeriod: {
      get() {
        return this.$store.getters["addPrognoz/getSelectedPeriod"];
      },
      set(newValue) {
        this.$store.dispatch("addPrognoz/setSelectedPeriod", newValue);
      },
    },
  },
  watch: {
    selectedCountry() {
      this.getList();
    },
    selectedCompetitions() {
      this.getList();
    },
    slectedPeriod() {
      this.getList();
    },
  },
  mounted() {
    this.$store.commit("SET_FORMTHEAD", this.formThead);
    this.selectedCompetitions = null;
    this.selectedCountry = null;
    this.getList();
  },

  methods: {
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    },
    openNewPrognoz(item, typeKoeff = "Odd_1") {
      // debugger; // eslint-disable-line
      this.dialogNewPrognoz = true;
    },
    async getList() {
      this.prGetList = true;
      // debugger; //eslint-disable-line
      this.listQuery.Tile = this.selectedCountry;
      this.listQuery.ValueC = this.selectedCompetitions;
      this.listQuery.ValueM = this.slectedPeriod;
      const { jsonOdds, total } = await this.$axios.$get("/api/MordaOdds", {
        params: this.listQuery,
      });

      let deserOdds = jsonOdds.map((v) => {
        let parseData = JSON.parse(v.Data);
        parseData.matchName = v.MatchName;
        parseData.id = v.Id;
        return parseData;
      });
      this.prGetList = false;
      console.log("deserOdds", deserOdds);

      this.desserts = deserOdds;
      this.totalDesserts = total;
    },
    handleSizeChange(val) {
      this.listQuery.Limit = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.Page = val;
      this.getList();
    },
    handleSetupFields() {
      this.$store.commit("SET_DIALOGVISIBLE", true);
    },
  },
};
</script>
