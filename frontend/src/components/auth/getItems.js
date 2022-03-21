import { collection, getDocs } from 'firebase/firestore';

export const getItems = async (db) => {
    const itemsCol = collection(db, 'items');
    const itemsSnapshot = await getDocs(itemsCol);
    const itemsList = itemsSnapshot.docs.map(doc => doc.data());
    console.log(itemsList);
    return itemsList;
}
