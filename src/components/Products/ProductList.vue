<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Мои продукты</h1>
        <v-card class="elevation-10 mb-2" v-for="(product, i) in products" :key="i">
          <v-layout>
            <v-flex xs4>
              <v-card-media :src="product.imageSrc" height="250px">

              </v-card-media>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="text--primary">{{product.title}}</h2>
                <p>{{product.description}}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="info" :to="'/product/' + product.id">Открыть</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        products: [
          {
            id: '2',
            title: 'Asus FX503VD',
            vendor: 'Asus',
            color: 'белый',
            material: 'пластик',
            description: 'ntel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/256Gb SSD/DVD нет/NVIDIA GeForce GTX 1050/Wi-Fi/Bluetooth/Windows 10 Home',
            price: 960,
            promo: true,
            imageSrc: 'https://image.ibb.co/cpScgo/ASUS_FX503_VD.jpg'
          },
          {
            id: '3',
            title: 'HP Omen 17',
            vendor: 'HP',
            color: 'золотой',
            material: 'метал',
            description: 'Intel Core i7 7700HQ 2800 MHz/17.3"/1920x1080/12Gb/1128Gb HDD+SSD/DVD-RW/NVIDIA GeForce GTX 1060/Wi-Fi/Bluetooth/Windows 10 Home',
            price: 1600,
            promo: true,
            imageSrc: 'https://image.ibb.co/g6czu8/HP_Omen_17.jpg'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
