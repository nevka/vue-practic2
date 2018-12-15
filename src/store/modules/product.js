export default {
  state: {
    products: [
      {
        id: '1',
        title: 'Lenovo Legion Y520',
        vendor: 'Lenovo',
        color: 'черный',
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
  },
  mutations: {},
  actions: {},
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
    }
  }
}
