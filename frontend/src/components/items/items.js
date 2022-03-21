import { getDocs, addDoc, collection } from "firebase/firestore"; 
import { db } from '../../App';


export const addItem = async (user_id) => {
    await addDoc(collection(db, "items"), {
        title: "Fresh item",
        user: user_id
      });
};

export const getItemsByUserId = async (user_id) => {
    const itemsCol = collection(db, 'items');
    const itemsSnapshot = await getDocs(itemsCol);
    const itemsList = itemsSnapshot.docs.map(doc => doc.data());
    const filtered = itemsList.filter(doc => doc.user === user_id);
    console.log("filtered: ", filtered);
    return filtered;
}