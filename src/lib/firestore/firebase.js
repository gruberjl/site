import * as Firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCvoK-tq3_F4wq7MF83ERkowlDZgHClLv4",
  authDomain: "gitbit-ff8ef.firebaseapp.com",
  databaseURL: "https://gitbit-ff8ef.firebaseio.com",
  projectId: "gitbit-ff8ef",
  storageBucket: "gitbit-ff8ef.appspot.com",
  messagingSenderId: "36158204910",
  appId: "1:36158204910:web:307ceb6a9bd5da00"
}

export const firebase = Firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()

if (typeof window !== 'undefined')
  db.enablePersistence({synchronizeTabs:true})
