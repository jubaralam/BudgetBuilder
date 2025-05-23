import { db } from './config'; // your Firebase config file
import { collection, addDoc } from 'firebase/firestore';

/**
 * Adds a new item to the "items" collection in Firestore
 * @param {Object} item - Object should contain { name: string, cost: number, ... }
 */
export const addNewItem = async (item) => {
  try {
    const docRef = await addDoc(collection(db, 'items'), item);
    console.log("Item added with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding item:", error);
  }
};
