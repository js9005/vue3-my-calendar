<template>
  <!-- <hello-world /> -->
  <v-container>
    <h2>homeview</h2>

    <!-- 달력 -->
    <a-calendar
      v-model:value="value"
      @select="onSelect"
      @panelChange="onPanelChange"
    >
      <!-- <template #headerRender="{ value }"> 헤더 : {{ value }} </template> -->
      <template #dateCellRender="{ current }">
        <ul class="events">
          <li v-for="item in getListData(current)" :key="item.content">
            <!-- <a-badge :status="item.type" :text="item.content" /> -->
            <a-tag color="#108ee9">🇬🇧</a-tag>
            <icon :style="{ color: 'hotpink' }">
              <template #component>
                <svg
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z"
                  />
                </svg>
              </template>
            </icon>
            {{ item.content }}
          </li>
        </ul>
      </template>
      <!-- <template #monthCellRender="{ current }">
        <div v-if="getMonthData(current)" class="notes-month">
          <section>{{ getMonthData(current) }}</section>
          <span>Backlog number</span>
        </div>
      </template> -->
    </a-calendar>

    <!-- 모달 -->
    <div class="text-center">
      <!-- <v-btn color="primary" @click="dialog = true"> Open Dialog </v-btn> -->
      <v-dialog v-model="dialog" width="auto">
        <v-card>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false"
              >Close Dialog</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Dayjs } from "dayjs";

import Icon from "@ant-design/icons-vue";

// Components
// import HelloWorld from "../components/HelloWorld.vue";

export default defineComponent({
  name: "HomeView",
  components: { Icon },
  setup() {
    /** 
    const value = ref<Dayjs>();
    const onPanelChange = (value: Dayjs, mode: string) => {
      console.log(value, mode);
    };

    return {
      value,
      onPanelChange,
    };
    */

    /**
     * 달력
     */
    const value = ref<Dayjs>();

    const getListData = (value: Dayjs) => {
      let listData;
      switch (value.date()) {
        case 8:
          listData = [
            { type: "warning", content: "1,674.25" },
            { type: "success", content: "1,322.00" },
            { type: "success", content: "979.22" },
          ];
          break;
        case 10:
          listData = [
            { type: "warning", content: "This is warning event." },
            { type: "success", content: "This is usual event." },
            { type: "error", content: "This is error event." },
          ];
          break;
        case 15:
          listData = [
            { type: "warning", content: "This is warning event" },
            {
              type: "success",
              content: "This is very long usual event。。....",
            },
            { type: "error", content: "This is error event 1." },
            { type: "error", content: "This is error event 2." },
            { type: "error", content: "This is error event 3." },
            { type: "error", content: "This is error event 4." },
          ];
          break;
        default:
      }
      return listData || [];
    };

    const getMonthData = (value: Dayjs) => {
      if (value.month() === 8) {
        return 1394;
      }
    };

    const onSelect = (value: Dayjs) => {
      console.log(value, "onSelect");
      showModal();
    };
    const onPanelChange = (value: Dayjs) => {
      console.log(value, "onPanelChange");
    };

    /**
     * 모달
     */
    const dialog = ref<boolean>(false);
    const showModal = () => {
      dialog.value = true;
    };

    return {
      /**
       * 달력
       */
      value,
      getListData,
      getMonthData,

      onSelect,
      onPanelChange,

      /**
       * 모달
       */
      dialog,
      showModal,
    };
  },
});
</script>
