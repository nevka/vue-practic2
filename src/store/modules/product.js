import * as fb from 'firebase'

class Product {
  constructor (title, vendor, color, material, price, description, ownerId, imageSrc = '', promo = false, id = null) {
    this.title = title
    this.vendor = vendor
    this.color = color
    this.material = material
    this.price = price
    this.description = description
    this.ownerId = ownerId
    this.imageSrc = imageSrc
    this.promo = promo
    this.id = id
  }
}

export default {
  state: {
    products: [
      {
        id: '1',
        title: 'Lenovo Legion Y520',
        vendor: 'Lenovo',
        color: 'green',
        material: 'метал',
        description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/1000Gb HDD/DVD нет/NVIDIA GeForce GTX 1050, 4096 МБ/Wi-Fi/Bluetooth/Win 10 Home',
        price: 760,
        promo: false,
        imageSrc: 'https://image.ibb.co/fZzq1o/Lenovo_Legion_Y520.jpg'
      },
      {
        id: '2',
        title: 'Asus FX503VD',
        vendor: 'Asus',
        color: 'white',
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
        color: 'gold',
        material: 'метал',
        description: 'Intel Core i7 7700HQ 2800 MHz/17.3"/1920x1080/12Gb/1128Gb HDD+SSD/DVD-RW/NVIDIA GeForce GTX 1060/Wi-Fi/Bluetooth/Windows 10 Home',
        price: 1600,
        promo: true,
        imageSrc: 'https://image.ibb.co/g6czu8/HP_Omen_17.jpg'
      }
    ]
  },
  mutations: {
    createProduct (state, payload) {
      state.products.push(payload)
    }
  },
  actions: {
    async createProduct ({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)
      // const image = payload.image
      try {
        const newProduct = new Product(
          payload.title,
          payload.vendor,
          payload.color,
          payload.material,
          payload.price,
          payload.description,
          getters.user.id,
          '',
          payload.promo)

        const product = await fb.database().ref('products').push(newProduct)
        // const imageExt = image.name.slice(image.name.lastIndexOf('.'))
        // const fileData = await fb.storage().ref(`products/${product.key}.${imageExt}`).put(image)
        // const imageSrc = await fb.storage().ref().child(fileData.ref.fullPath).getDownloadURL()
        // await fb.database().ref('products').child(product.key).update({ imageSrc })
        commit('setLoading', false)
        commit('createProduct', {
          ...newProduct,
          id: product.key
          // imageSrc
        })
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    }
  },
  getters: {
    products (state) {
      return state.products
    },
    promoProducts (state) {
      return state.products.filter(product => {
        return product.promo
      })
    },
    myProducts (state) {
      return state.products
    },
    productById (state) {
      return productId => {
        return state.products.find(product => product.id === productId)
      }
    }
  }
}
