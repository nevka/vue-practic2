<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Форма регистрации</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field prepend-icon="person" name="email" label="E-mail" type="email" v-model="email" :rules="emailRules"></v-text-field>
              <v-text-field prepend-icon="lock" name="password" label="Пароль" type="password" v-model="password" :counter="6" :rules="passwordRules"></v-text-field>
              <v-text-field prepend-icon="repeat" name="confirm" label="Подтверждение пароля" type="password" v-model="confirm" :counter="6" :rules="confirmRules"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="onSubmit" :loading="loading" :disabled="!valid || loading">Зарегестрироваться</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        confirm: '',
        valid: false,
        emailRules: [
          v => !!v || 'E-mail обязательное поле для заполнения',
          v => /.+@.+/.test(v) || 'E-mail не валидный'
        ],
        passwordRules: [
          v => !!v || 'Пароль обязательное поле для заполнения',
          v => (v && v.length >= 6) || 'Пароль должен былть больше или равен 6 символам'
        ],
        confirmRules: [
          v => !!v || 'Пароль обязательное поле для заполнения',
          v => v === this.password || 'Пароль не совпадает'
        ]
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      onSubmit () {
        if (this.$refs.form.validate()) {
          const user = {
            email: this.email,
            password: this.password
          }
          this.$store.dispatch('registerUser', user)
            .then(() => {
              this.$router.push('/')
            })
            .catch(() => {})
        }
      }
    }
  }
</script>

<style scoped>

</style>
