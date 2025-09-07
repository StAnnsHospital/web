<template>
  <div class="page-wrapper">
    <!-- Preloader handled globally -->
    
    <AppHeader />
    
    <!--Page Title-->
    <section class="page-title" style="background-image: url(/images/background/8.jpg);">
      <div class="auto-container">
        <div class="title-outer">
          <h1>Blog Post Audio</h1>
          <ul class="page-breadcrumb">
            <li><router-link to="/">Home</router-link></li>
            <li>Blog Post Audio</li>
          </ul> 
        </div>
      </div>
    </section>
    <!--End Page Title-->

    <!-- Sidebar Page Container -->
    <div class="sidebar-page-container">
      <div class="auto-container">
        <div class="row clearfix">
          <!--Content Side-->
          <div class="content-side col-lg-8 col-md-12 col-sm-12">
            <div class="blog-post">
              <!-- News Block -->
              <div class="news-block" v-if="post">
                <div class="inner-box">
                  <div class="image">
                    <div class="media-player">
                      <p><iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/333867934&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe></p>
                    </div>
                  </div>
                  <div class="lower-content">
                    <ul class="post-info">
                      <li><span class="far fa-user"></span> {{ post.author }}</li>
                      <li><span class="far fa-comments"></span> Comments</li>
                      <li><span class="far fa-calendar"></span> {{ post.date }}</li>
                    </ul>
                    <h3>{{ post.title }}</h3>
                    <div v-html="post.content"></div>
                  </div>
                </div>
              </div>

              <!-- Post Share Options -->
              <div class="post-share-options clearfix">
                <ul class="tags pull-left">
                  <li v-for="tag in post?.tags" :key="tag"><a href="#">{{ tag }}</a></li>
                </ul>
                <ul class="social-icon pull-right">
                  <li><a href="#"><span class="fab fa-facebook"></span></a></li>
                  <li><a href="#"><span class="fab fa-twitter"></span></a></li>
                  <li><a href="#"><span class="fab fa-whatsapp"></span></a></li>
                  <li><a href="#"><span class="fab fa-linkedin-in"></span></a></li>
                  <li><a href="#"><span class="fab fa-dribbble"></span></a></li>
                </ul>
              </div>
            </div>

            <!-- Author Box -->
            <div class="author-box">
              <div class="inner-box clearfix">
                <div class="thumb"><img src="/images/resource/author-thumb.jpg" alt=""></div>
                <span class="title">Author</span>
                <h4 class="name">{{ post?.author || 'Admin' }}</h4>
                <div class="text">Dynamically innovate resource and leveling customer service for state of the art customer service circumstances occur.</div>
                <ul class="social-icon-one">
                  <li><a href="#"><span class="fab fa-facebook"></span></a></li>
                  <li><a href="#"><span class="fab fa-twitter"></span></a></li>
                  <li><a href="#"><span class="fab fa-whatsapp"></span></a></li>
                  <li><a href="#"><span class="fab fa-linkedin-in"></span></a></li>
                  <li><a href="#"><span class="fab fa-dribbble"></span></a></li>
                </ul>
              </div>
            </div>

            <!-- Related News -->
            <div class="related-news">
              <div class="group-title"><h3>Related News</h3></div>
              <div class="row">
                <!-- News Block -->
                <div class="news-block col-lg-6 col-md-6 col-sm-12 wow fadeInUp" v-for="relatedPost in relatedPosts" :key="relatedPost.id">
                  <div class="inner-box">
                    <div class="image-box">
                      <figure class="image">
                        <router-link :to="`/blog/${relatedPost.id}`">
                          <img :src="relatedPost.image" :alt="relatedPost.title">
                        </router-link>
                      </figure>
                      <a href="#" class="date">{{ relatedPost.date }}</a>
                    </div>
                    <div class="lower-content">
                      <h4><router-link :to="`/blog/${relatedPost.id}`">{{ relatedPost.title }}</router-link></h4>
                      <div class="text">{{ relatedPost.excerpt }}</div>
                      <div class="post-info">
                        <div class="post-author">By {{ relatedPost.author }}</div>
                        <ul class="post-option">
                          <li><a href="#">{{ relatedPost.likes }} <i class="far fa-heart"></i></a></li>
                          <li><a href="#">{{ relatedPost.comments }} <i class="far fa-comments"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Comments Section -->
            <div class="comments-area">
              <div class="group-title">
                <h3>Comments (3)</h3>
              </div>
              <div class="comment-box">
                <div class="comment">
                  <div class="author-thumb"><img src="/images/resource/avatar-1.jpg" alt=""></div> 
                  <div class="comment-info">
                    <div class="name">Steven Rich</div>
                    <div class="date">JAN 01, 2020</div>
                  </div> 
                  <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet tempor tempor. Pellentesque facilisis, ligula ut porta lobortis, enim.</div>
                  <a href="#" class="reply-btn">Reply</a>
                </div>
              </div>

              <div class="comment-box reply-comment">
                <div class="comment">
                  <div class="author-thumb"><img src="/images/resource/avatar-2.jpg" alt=""></div> 
                  <div class="comment-info">
                    <div class="name">Donal Smith</div>
                    <div class="date">1 hours ago</div>
                  </div>      
                  <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet tempor tempor. Pellentesque facilisis, ligula ut porta lobortis, enim.</div>
                  <a href="#" class="reply-btn">Reply</a>
                </div>
              </div>

              <div class="comment-box">
                <div class="comment">
                  <div class="author-thumb"><img src="/images/resource/avatar-3.jpg" alt=""></div> 
                  <div class="comment-info">
                    <div class="name">Rona Stove</div>
                    <div class="date">2 hours ago</div>
                  </div>      
                  <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet tempor tempor. Pellentesque facilisis, ligula ut porta lobortis, enim magna convallis est.</div>
                  <a href="#" class="reply-btn">Reply</a>
                </div>
              </div>
            </div>

            <!--Comment Form-->
            <div class="comment-form">
              <div class="group-title">
                <h3>Leave a Comment</h3>
              </div>
              <form @submit.prevent="submitComment"> 
                <div class="row clearfix">
                  <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                    <input type="text" v-model="commentForm.name" placeholder="Name" required>
                  </div>
                  
                  <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                    <input type="email" v-model="commentForm.email" placeholder="Email" required>
                  </div>

                  <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                    <textarea v-model="commentForm.message" placeholder="Your Comments"></textarea>
                  </div>
                  
                  <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                    <button class="theme-btn btn-style-one" type="submit"><span class="btn-title">Post Comment</span></button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <!--Sidebar Side-->
          <div class="sidebar-side col-lg-4 col-md-12 col-sm-12">
            <aside class="sidebar">
              <!--search box-->
              <div class="sidebar-widget search-box">
                <form method="post" action="blog.html">
                  <div class="form-group">
                    <input type="search" name="search-field" value="" placeholder="Search....." required>
                    <button type="submit"><span class="icon fa fa-search"></span></button>
                  </div>
                </form>
              </div>

              <!-- Categories -->
              <div class="sidebar-widget category-list">
                <div class="sidebar-title"><h3>Categories</h3></div>
                <ul class="cat-list">
                  <li><a href="#">Procedures <span>(06)</span></a></li>
                  <li><a href="#">Transplantation <span>(02)</span></a></li>
                  <li class="active"><a href="#">Management <span>(05)</span></a></li>
                  <li><a href="#">Healthcare Tips <span>(25)</span></a></li>
                  <li><a href="#">Uncategorized <span>(04)</span></a></li>
                </ul>
              </div>

              <!-- Latest News -->
              <div class="sidebar-widget latest-news">
                <div class="sidebar-title"><h3>Popular Posts</h3></div>
                <div class="widget-content">
                  <article class="post" v-for="recentPost in recentPosts" :key="recentPost.id">
                    <div class="post-thumb">
                      <router-link :to="`/blog/${recentPost.id}`">
                        <img :src="recentPost.image" :alt="recentPost.title">
                      </router-link>
                    </div>
                    <h5><router-link :to="`/blog/${recentPost.id}`">{{ recentPost.title }}</router-link></h5>
                    <div class="post-info">{{ recentPost.date }}</div>
                  </article>
                </div>
              </div>

              <!-- Newslatters-->
              <div class="sidebar-widget newslatters">
                <div class="sidebar-title"><h3><span class="icon flaticon-rss-symbol"></span>Newsletter</h3></div>
                <div class="text">Enter your email address below to subscribe to our newsletter</div>
                <form @submit.prevent="subscribeNewsletter">
                  <div class="form-group">
                    <input type="email" v-model="email" placeholder="Your email address..." required>
                    <button type="submit" class="theme-btn"><span class="btn-title">Subscribe</span></button>
                  </div>
                </form>
              </div>

              <!-- Instagram Widget -->
              <div class="sidebar-widget instagram-widget">
                <div class="sidebar-title"> <h3>Instagram</h3> </div>
                <div class="widget-content">
                  <div class="clearfix">
                    <figure class="post-thumb"><img src="/images/resource/instagram-1.jpg" alt=""><a href="#" class="overlay-box"><span class="icon fa fa-link"></span></a></figure>
                    <figure class="post-thumb"><img src="/images/resource/instagram-2.jpg" alt=""><a href="#" class="overlay-box"><span class="icon fa fa-link"></span></a></figure>
                    <figure class="post-thumb"><img src="/images/resource/instagram-3.jpg" alt=""><a href="#" class="overlay-box"><span class="icon fa fa-link"></span></a></figure>
                    <figure class="post-thumb"><img src="/images/resource/instagram-4.jpg" alt=""><a href="#" class="overlay-box"><span class="icon fa fa-link"></span></a></figure>
                    <figure class="post-thumb"><img src="/images/resource/instagram-5.jpg" alt=""><a href="#" class="overlay-box"><span class="icon fa fa-link"></span></a></figure>
                    <figure class="post-thumb"><img src="/images/resource/instagram-6.jpg" alt=""><a href="#" class="overlay-box"><span class="icon fa fa-link"></span></a></figure>
                  </div>
                </div>
              </div>

              <!-- Tags -->
              <div class="sidebar-widget tags">
                <div class="sidebar-title"><h3>Tag Cloud</h3></div>
                <ul class="popular-tags clearfix">
                  <li><a href="#">Ideas</a></li>
                  <li><a href="#">Doctor</a></li>
                  <li><a href="#">Health</a></li>
                  <li><a href="#">Department</a></li>
                  <li><a href="#">Nurse</a></li>
                  <li><a href="#">Growth</a></li>
                  <li><a href="#">Expert</a></li>
                  <li><a href="#">Tips</a></li>
                  <li><a href="#">Service</a></li>
                  <li><a href="#">Medical</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
    <!-- End Sidebar Container -->

    <!-- Clients Section -->
    <section class="clients-section">
      <div class="auto-container">
        <div class="swiper client-swiper">
          <div class="swiper-wrapper">
            <!-- Client Block -->
            <div class="client-block swiper-slide">
              <div class="inner-box">
                <figure class="image"><a href="#"><img src="/images/clients/1.png" alt="Image"></a></figure>
              </div>
            </div>
            <!-- Client Block -->
            <div class="client-block swiper-slide">
              <div class="inner-box">
                <figure class="image"><a href="#"><img src="/images/clients/2.png" alt="Image"></a></figure>
              </div>
            </div>
            <!-- Client Block -->
            <div class="client-block swiper-slide">
              <div class="inner-box">
                <figure class="image"><a href="#"><img src="/images/clients/3.png" alt="Image"></a></figure>
              </div>
            </div>
            <!-- Client Block -->
            <div class="client-block swiper-slide">
              <div class="inner-box">
                <figure class="image"><a href="#"><img src="/images/clients/4.png" alt="Image"></a></figure>
              </div>
            </div>
            <!-- Client Block -->
            <div class="client-block swiper-slide">
              <div class="inner-box">
                <figure class="image"><a href="#"><img src="/images/clients/5.png" alt="Image"></a></figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Clients Section -->

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import newsData from '@/data/news.json'

const route = useRoute()
const news = ref(newsData)
const email = ref('')

const commentForm = ref({
  name: '',
  email: '',
  message: ''
})

const post = ref({
  id: 1,
  title: 'What is The Success rate of a root canel?',
  content: `
    <p>Nullam mauris vitae tortor sodales efficitur. Quisque orci ante. Proin amet turpis l Nullam mauris vitae tortor sodales efficitur. There have been a lot of cases in which people were not provided with accurate reports that eventually affected their medical treatment. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <blockquote>It's a beautiful day in this neighborhood a beautiful day for a neighbor. Would you be mine could you be mine Its a neighborly day in this beautywood a neighborly day for a beauty.</blockquote>
    <p>There anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious <a href="#">here is link.</a></p>
    <div class="two-column row">
      <div class="image-column col-lg-6 col-md-6 col-sm-12">
        <figure class="image wow fadeIn"><img src="/images/resource/blog-1.jpg" alt=""></figure>
      </div>
      <div class="content-column col-lg-6 col-md-6 col-sm-12">
        <p>know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur which toil and pain can undertakes laborious physical exercise.</p>
      </div>
    </div>
    <p>Over the river and through the woods was more dangerous back when cars had crummy bias-ply tires, rear-wheel drive. Kevin tail capicola bresaola, prosciutto swine cupim tri-tip boudin shoulder frankfurter. This process repeats many times per second until the vehicle stops or you lift your foot off the brake pedal ordinary brakes. Kevin tail capicola bresaola, prosciutto swine cupim tri-tip boudin shoulder frank furter</p>
  `,
  image: '/images/resource/blog-single.jpg',
  date: '25 Jan 19',
  author: 'Admin',
  category: 'Health',
  tags: ['Cars', 'Engines', 'Auto', 'Break']
})

const recentPosts = computed(() => {
  return newsData.slice(0, 3)
})

const relatedPosts = computed(() => {
  return newsData.slice(0, 2)
})

const subscribeNewsletter = () => {
  if (email.value) {
    alert('Thank you for subscribing to our newsletter!')
    email.value = ''
  }
}

const submitComment = () => {
  if (commentForm.value.name && commentForm.value.email && commentForm.value.message) {
    alert('Thank you for your comment!')
    commentForm.value = {
      name: '',
      email: '',
      message: ''
    }
  }
}

onMounted(() => {
  const postId = route.params.id
  if (postId) {
    const foundPost = newsData.find(p => p.id === parseInt(postId as string))
    if (foundPost) {
      post.value = {
        ...foundPost,
        content: foundPost.content || post.value.content,
        author: foundPost.author || 'Admin',
        category: foundPost.category || 'Health',
        tags: foundPost.tags || ['Health', 'Medical']
      }
    }
  }

  // Initialize client swiper
  if (typeof window !== 'undefined' && (window as any).Swiper) {
    const Swiper = (window as any).Swiper
    
    new Swiper('.client-swiper', {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: 5,
      spaceBetween: 40,
      grabCursor: true,
      mousewheel: {
        forceToAxis: true,
      },
      breakpoints: {
        0: { slidesPerView: 2 },
        480: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 }
      }
    })
  }
})
</script>
