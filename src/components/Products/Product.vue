<template>
  <v-container>
    <section class="product mt-3 elevation-10">
      <v-layout row wrap>
        <v-flex xs12 lg6>
          <img src="https://image.ibb.co/cpScgo/ASUS_FX503_VD.jpg" class="product_img">
        </v-flex>
        <v-flex xs12 lg6>
          <div class="product_info">
            <h5 class="product_title display-1 mb-3 mt-3">Lorem ipsum.</h5>
            <p class="product_category title">
              <span class="product_title">Производитель: </span>lorem
            </p>
            <p class="product_price title">
              <span class="product_title">Цена: </span>200
            </p>
            <p class="product_color title">
              <span class="product_title">Цвет: </span>
              <span class="product_color__bg" :title="'purple'" :style="{backgroundColor: 'purple'}"></span>
            </p>
            <p class="title">
              <span class="product_title">Материал: </span>Lorem
            </p>
            <div class="title mb-5">
              <p class="product_title mb-2">Описание: </p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, reprehenderit?
            </div>
            <v-btn color="primary" class="headline">Редактировать</v-btn>
            <v-btn color="primary" class="headline">Купить</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </section>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .product{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border: 1px solid #1c77ad;
    padding: 30px;
    margin-bottom: 100px;
  }
  .product_img{
    height: 100%;
    width: 550px;
  }
  .product_info{
    margin-left: 50px;
  }
  .product_title{
    font-size: 1.6rem;
    font-weight: bold;
    color: #1875d3;
    margin-bottom: 0;
  }
  .product_price{
    color:red;
  }
  .product_color__bg{
    display: inline-block;
    width: 50px;
    height: 20px;
    border: 1px solid #2b2b2b;
    border-radius: 10px;
  }
</style>
