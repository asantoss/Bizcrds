// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCHgU_yBLztxPROiA7WkICHoSIaLQRGc8A',
  authDomain: 'bizcrds-f009b.firebaseapp.com',
  projectId: 'bizcrds-f009b',
  storageBucket: 'bizcrds-f009b.appspot.com',
  messagingSenderId: '371292061499',
  appId: '1:371292061499:web:db6797de00f1c32356811e',
  measurementId: 'G-SQL1JRNK3Q'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
