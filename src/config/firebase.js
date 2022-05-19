import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs,
    addDoc, deleteDoc, updateDoc, doc
} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAQxPRFhMphNSASxlZ7yHlQ7iBKxLbYj3s",
    authDomain: "newproduct-500ea.firebaseapp.com",
    projectId: "newproduct-500ea",
    storageBucket: "newproduct-500ea.appspot.com",
    messagingSenderId: "795155744535",
    appId: "1:795155744535:web:1056a2d076df1d789f5952",
    measurementId: "G-LLH90J5QY6"
};

// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()
// collection ref
const colRefTime = collection(db, 'times');
const colRef = collection(db, 'accounts');
export const GetDB = async () => {
    const d = new Date();
    let day = d.getDate();
    let result = [];
    let time = 0;
    await getDocs(colRefTime)
        .then(snapshot => {
            time = []
            snapshot.docs.forEach(doc => {
                time = doc.data().time
            })
        })
        .catch(err => {
            console.log(err.message)
        })
    if (day !== time) {
        let docRef = doc(db, 'times', "dmHclfXIJbnJtEXNA0cC")
        updateDoc(docRef, {
            time: day
        }).then();
    }
    await getDocs(colRef)
        .then(snapshot => {
            result = []
            console.log(day === time);
            if (day === time) {
                snapshot.docs.forEach(doc => {
                    result.push({ ...doc.data(), id: doc.id })
                })
            } else {
                snapshot.forEach((doc) => {
                    deleteDoc(doc.ref).then();
                });
            }
        })
        .catch(err => {
            console.log(err.message)
        })
    return result;
}
export const AddDB = async (account) => {
    const { iduser, link } = account;
    await addDoc(colRef, {
        iduser,
        link
    }).then();
    return true;
}