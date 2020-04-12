const configEnm = {
  urlApi: process.env.NODE_ENV === 'production' ? 'https://api.pikbet.ru/' : 'https://localhost:5001/'
}

export default configEnm
