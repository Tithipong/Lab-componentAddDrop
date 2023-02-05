<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card v-for="article in articles" :key="article.id" class="mb-3">
          <v-card-title>{{ article.title }}</v-card-title>
          <v-card-text>{{ article.content }}</v-card-text>
          <v-card-actions>
            <v-btn text @click="goToArticle(article.id)">View Article</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      articles: [],
    };
  },

  created() {
    this.getArticles();
  },
  methods: {
    async getArticles() {
      const { data } = await axios.get("/api/articles");
      this.articles = data;
    },
    goToArticle(articleId) {
      this.$router.push({ name: "Article", params: { id: articleId } });
    },
  },
};
</script>

<style>
.v-card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.v-card-text {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
</style>
