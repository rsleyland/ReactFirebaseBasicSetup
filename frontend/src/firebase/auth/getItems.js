import { collection, getDocs } from 'firebase/firestore/lite';

export const getItems = async (db) => {
    const itemsCol = collection(db, 'items');
    const itemsSnapshot = await getDocs(itemsCol);
    const itemsList = itemsSnapshot.docs.map(doc => doc.data());
    console.log(itemsList);
    return itemsList;
}
