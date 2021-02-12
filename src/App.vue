<template>
  <v-app>
    <v-text-field
        label="Package name"
        @keyup="search"
        v-model.trim="name"
    ></v-text-field>
    <br>
    <contents :items="packages" :page="page" :popup-opened.sync="popupOpened" :popup-id.sync="popupId"></contents>
    <br>
    <div class="text-center">
      <v-pagination
          v-model="page"
          :length="pageLenght"
          circle
      ></v-pagination>
    </div>
    <popup :popup-opened.sync="popupOpened" :popup-info="popupInfo"></popup>
    <page-footer/>
  </v-app>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import Contents from "./components/contents";
import Popup from "./components/popup";
import PageFooter from "@/components/PageFooter";

export default {
  name: 'App',
  components: {
    PageFooter,
    Popup,
    Contents
  },
  data: () => ({
    name: '',
    page: 1,
    popupId: null,
    popupOpened: false
  }),
  methods: {
    ...mapActions([
      'SEARCH_PACKAGES'
    ]),
    search() {
      this.SEARCH_PACKAGES(this.name)
    },
    popup($event) {
      this.popupItem = $event
    }
  },
  mounted() {
  },
  computed: {
    ...mapState({
      packages: state => state.packages,
    }),
    pageLenght() {
      return this.packages.length / 10
    },
    popupInfo() {
      return this.packages[this.popupId]
    }
  },
};
</script>
