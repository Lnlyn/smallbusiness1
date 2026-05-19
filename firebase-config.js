const firebaseConfig = {
  apiKey: "AIzaSyASSkewUArimVyzMAgCXUpCovyyBAEpl20",
  authDomain: "website11-58e6a.firebaseapp.com",
  projectId: "website11-58e6a",
  storageBucket: "website11-58e6a.appspot.com", // ← tama na ito
  messagingSenderId: "112777045970",
  appId: "1:112777045970:web:2a4afff749a188930c8a0b",
  measurementId: "G-N6GC0GCE8V"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();