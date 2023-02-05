<script setup>
//import { RouterView } from "vue-router";
//import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "./stores/user";

const { theme } = storeToRefs(useUserStore());
const { toggleTheme } = useUserStore();
</script>

<template>
  <v-app :theme="theme" class="home-page">
    <v-toolbar>
      <v-btn href="/" class="home-page__title"> 
        <v-app-bar-title>หน้าแรก</v-app-bar-title> 
      </v-btn>
      <v-spacer></v-spacer>
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
    </v-toolbar>
    <v-content class="home-page__content"><v-container fluid>
  <v-row>
    <v-col cols="4">
      <v-card>
        <v-card-title>ประกาศข่าว</v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          egestas consectetur nisi, ut tincidunt est faucibus at.
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card>
        <v-card-title>รายชื่อวิชาในแผนการเรียน</v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          egestas consectetur nisi, ut tincidunt est faucibus at.
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card>
        <v-card-title>การเพิ่มถอนรายวิชา</v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          egestas consectetur nisi, ut tincidunt est faucibus at.
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>

      <!-- <RouterView /> -->
    </v-content>
    <v-footer></v-footer>
  </v-app>
</template>

<style>
.home-page {
  height: 100%;
}

.home-page__title {
  font-size: 24px;
  font-weight: bold;
}

.home-page__content {
  padding: 24px;
}
</style>
