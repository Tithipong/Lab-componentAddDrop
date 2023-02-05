<script setup>
import { RouterView } from "vue-router";
//import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "./stores/user";

const { theme } = storeToRefs(useUserStore());
const { toggleTheme } = useUserStore();
</script>

<template>
  <v-app :theme="theme">
    <v-app-bar>
      <v-btn href="/"> <v-app-bar-title>My app</v-app-bar-title> </v-btn
      ><v-spacer></v-spacer>
      <v-btn href="/news">ประกาศข่าว</v-btn>
      <v-btn href="/listofsubjects">รายชื่อวิชาในแผนการเรียน</v-btn>
      <v-btn href="/addwithdrawcourses">การเพิ่มถอนรายวิชา</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="toggleTheme"
      ></v-btn>
      <v-btn icon>
        <v-avatar color="info">
          <v-icon icon="mdi-account-circle"></v-icon>
        </v-avatar>
      </v-btn>
    </v-app-bar>
    <RouterView />
  </v-app>
</template>
