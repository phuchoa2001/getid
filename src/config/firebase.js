import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs,
  addDoc, deleteDoc, updateDoc, doc
} from 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()

// collection ref
const colRef = collection(db, 'accounts');

export const GetDB = async () => {
  let result = [];

  try {
    const snapshot = await getDocs(colRef);
    snapshot.docs.forEach(doc => {
      result.push({ ...doc.data(), id: doc.id });
    });
  } catch (err) {
    console.error(err.message);
  }

  return result;
};

export const AddDB = async (account) => {
  const { iduser, link } = account;
  await addDoc(colRef, {
    iduser,
    link
  }).then();
  return true;
}