const IS_FIREBASE = process.env.FIREBASE
const DEBUG = process.env.NODE_ENV !== 'production'

const PORT = process.env.PORT || 4000

export const BASE_URL = (DEBUG) ? `http://localhost:${PORT}` :
  (IS_FIREBASE) ? 'https://game-aot-2.firebaseapp.com' :
  'https://jeanycyang.github.io/aot2-guide'
