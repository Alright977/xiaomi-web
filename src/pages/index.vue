<template>
  <div class="index">
    <div class="container">
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
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
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
    }
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
      height: 460px;
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
            height: 460px;
            display: none;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            ul {
              display: flex;
              justify-content: space-between;
              height: 76.4px;
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
}
</style>
