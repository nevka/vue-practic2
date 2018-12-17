<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Создать новый продукт</h1>
        <v-form ref="form" v-model="valid" lazy-validation class="mb-3">
          <v-text-field name="title" label="Название" type="text" v-model="title" required :rules="[v => !!v || 'Обязательное поле для заполнения']"></v-text-field>
          <v-text-field name="vendor" label="Производитель" type="text" v-model="vendor"></v-text-field>
          <v-text-field name="color" label="Цвет" type="text" v-model="color"></v-text-field>
          <v-text-field name="material" label="Материал" type="text" v-model="material"></v-text-field>
          <v-text-field name="price" label="Цена" type="text" v-model="price" required :rules="[v => !!v || 'Обязательное поле для заполнения']"></v-text-field>
          <!--<v-text-field name="description" multi-line label="Описание" type="text" v-model="description"></v-text-field>-->
          <v-textarea name="description" multi-line label="Описание" type="text" v-model="description"></v-textarea>
        </v-form>
        <v-layout row class="mb-3">
          <v-flex xs12>
            <v-btn class="warning" @click="upload">
              Загрузить
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
            <input type="file" style="display: none;" accept="image/*" ref="fileInput" @change="onFileChange">
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <img :src="imageSrc" height="200px" v-if="imageSrc">
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-switch color="primary" v-model="promo" label="Добавить в промо"></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn class="success" :loading="loading" :disabled="!valid || !image || loading" @click="createProduct">Создать продукт</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        vendor: '',
        color: '',
        material: '',
        price: 0,
        description: '',
        promo: false,
        valid: false,
        image: null,
        imageSrc: ''
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      createProduct () {
        if (this.$refs.form.validate() && this.image) {
          const product = {
            title: this.title,
            vendor: this.vendor,
            color: this.color,
            material: this.material,
            price: this.price,
            description: this.description,
            promo: this.promo,
            image: this.image
          }
          this.$store.dispatch('createProduct', product)
            .then(() => {
              this.$router.push('/list')
            })
            .catch(() => {})
        }
      },
      upload () {
        this.$refs.fileInput.click()
      },
      onFileChange (event) {
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.onload = e => {
          this.imageSrc = reader.result
        }
        reader.readAsDataURL(file)
        this.image = file
      }
    }
  }
</script>

<style scoped>

</style>
