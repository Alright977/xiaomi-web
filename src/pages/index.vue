<template>
  <div class="index">
    <div class="container">
      <!-- 轮播 -->
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, i) in item" :key="i">
                    <a :href="sub ? '/#/product/' + sub.id : ''"><img :src="sub.img ? sub.img : '/imgs/item-box-1.png'" />{{ sub.name ? sub.name : '小米9' }}</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOptions">
          <swiper-slide v-for="item in slideList" :key="item.id">
            <a :href="'/#/product' + item.id"><img :src="item.img"/></a>
          </swiper-slide>
          <!-- 分页器 -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- 左右箭头 -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <!-- 广告位 -->
      <div class="ads-box">
        <a :href="'/#/product/' + item.id" v-for="item in adsList" :key="item.id">
          <img :src="item.img" />
        </a>
      </div>
      <!-- banner图 -->
      <div class="banner">
        <a href="/#/product/30">
          <img src="/imgs/banner-1.png" />
        </a>
      </div>
    </div>
    <!-- 手机商品 -->
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35"><img src="/imgs/mix-alpha.jpg" alt=""/></a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr, i) in phoneList" :key="i">
              <div class="item" v-for="(item, j) in arr" :key="j">
                <span :class="{ 'new-pro': j % 2 == 0 }">新品</span>
                <div class="item-img">
                  <img :src="item.mainImage" alt="item.name" />
                </div>
                <div class="item-info">
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.subtitle }}</p>
                  <p class="price">{{ item.price | currency }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>
<script>
import ServiceBar from '../components/ServiceBar.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'index',
  data() {
    return {
      swiperOptions: {
        // 自动播放
        autoplay: true,
        // 循坏播放
        loop: true,
        // 切换动画
        effect: 'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6,
        },
        // 分页器
        pagination: {
          el: '.swiper-pagination',
          // 点击切换，默认false
          clickable: true,
        },
        // 左右箭头切换
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList: [
        {
          id: '42',
          img: 'imgs/slider/slide-1.jpg',
        },
        {
          id: '43',
          img: 'imgs/slider/slide-2.jpg',
        },
        {
          id: '44',
          img: 'imgs/slider/slide-3.jpg',
        },
        {
          id: '45',
          img: 'imgs/slider/slide-4.jpg',
        },
        {
          id: '46',
          img: 'imgs/slider/slide-5.jpg',
        },
      ],
      menuList: [
        [
          {
            id: '30',
            img: '/imgs/item-box-1.png',
            name: '小米cc9',
          },
          {
            id: '31',
            img: '/imgs/item-box-2.png',
            name: '小米8青春版',
          },
          {
            id: '32',
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro',
          },
          {
            id: '33',
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区',
          },
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      adsList: [
        {
          id: '33',
          img: '/imgs/ads/ads-1.png',
        },
        {
          id: '48',
          img: '/imgs/ads/ads-2.jpg',
        },
        {
          id: '45',
          img: '/imgs/ads/ads-3.png',
        },
        {
          id: '47',
          img: '/imgs/ads/ads-4.jpg',
        },
      ],
      phoneList: [],
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$axios
        .get('/products', {
          params: {
            categoryId: 100012,
            pageSize: 14,
          },
        })
        .then((res) => {
          res.list = res.list.slice(6, 14)
          this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)]
        })
    },
  },
  //  过滤
  filters: {
    currency(val) {
      if (!val) return '0.00'
      return val.toFixed(2) + '元'
    },
  },
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide,
  },
}
</script>
<style scoped lang="scss">
@import '~@/assets/scss/mixin.scss';
@import '~@/assets/scss/config.scss';
.index {
  .swiper-box {
    .swiper-container {
      height: 451px;
      img {
        width: 100%;
      }
      .swiper-button-prev {
        left: 274px;
      }
    }
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      padding: 26px 0;
      background-color: #55585a7a;
      box-sizing: border-box;
      z-index: 9;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            position: relative;
            display: block;
            font-size: 16px;
            color: #ffffff;
            padding-left: 30px;
            &::after {
              position: absolute;
              top: 17.5px;
              right: 30px;
              content: '';
              @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
            }
          }
          &:hover {
            background-color: #ff6600;
            .children {
              display: block;
            }
          }
          .children {
            position: absolute;
            width: 962px;
            height: 451px;
            display: none;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              background-color: $colorG;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
                img {
                  width: 42px;
                  height: 35px;
                  vertical-align: middle;
                  margin-right: 15px;
                }
              }

              a {
                color: $colorB;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
    }
  }
  .banner {
    margin-bottom: 50px;
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              line-height: 24px;
              font-size: 14px;
              color: $colorG;
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
          }
          .item-img {
            img {
              width: 100%;
              height: 195px;
            }
          }
          .item-info {
            h3 {
              font-size: $fontJ;
              color: $colorB;
              line-height: 14px;
              font-weight: bold;
            }
            p {
              color: $colorD;
              line-height: 13px;
              margin: 6px auto 13px;
            }
            .price {
              color: #f20a0a;
              font-size: $fontJ;
              font-weight: bold;
              cursor: pointer;
              &::after {
                content: '';
                margin-left: 5px;
                vertical-align: middle;
                @include bgImg(22px, 22px, '/imgs/icon-cart-hover.png');
              }
            }
          }
        }
      }
    }
  }
}
</style>
