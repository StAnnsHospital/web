<template>
  <div class="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
    <div class="inner-box">
      <div class="image-box">
        <figure class="image">
          <router-link :to="`/blog/${article.id}`">
            <img :src="article.image" :alt="article.title">
          </router-link>
        </figure>
        <a href="#" class="date">{{ article.date }}</a>
      </div>
      <div class="lower-content">
        <h4>
          <router-link :to="`/blog/${article.id}`" v-html="article.title"></router-link>
        </h4>
        <div class="text">{{ article.excerpt }}</div>
        <div class="post-info">
          <div class="post-author">By {{ article.author }}</div>
          <ul class="post-option">
            <li><a href="#">{{ article.likes }} <i class="far fa-heart"></i></a></li>
            <li><a href="#">{{ article.comments }} <i class="far fa-comments"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface NewsArticle {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  author: string
  likes: number
  comments: number
  category: string
}

defineProps<{
  article: NewsArticle
}>()
</script>
