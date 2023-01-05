import { Injectable } from '@angular/core';
import { addDoc, Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  crearDoc(data:any){
    const userRef = collection(this.firestore, 'usuarios');
    return addDoc(userRef, data);
  }
}
