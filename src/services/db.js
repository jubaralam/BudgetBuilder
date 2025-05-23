import { db } from './config';
import { collection, addDoc } from 'firebase/firestore';

const addNewItem = async (item) => {
  await addDoc(collection(db, 'items'), item);
};
