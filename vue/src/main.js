import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDQOhAqHtOOjWetSbzfvdlpXB_RMtfb_NU",
  authDomain: "firstinspiresiowa2018.firebaseapp.com",
//  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
//  storageBucket: "<BUCKET>.appspot.com",
};
firebase.initializeApp(config);

new Vue({
  render: h => h(App)
}).$mount('#app')
