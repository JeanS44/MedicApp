import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { Observable } from 'rxjs';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';

@Injectable({
	providedIn: 'root'
})

export class AutenticacionService {

	constructor(private firestore: Firestore) { }

	addUser(User: User) {
		const UserRef = collection(this.firestore, 'usuarios');
		return addDoc(UserRef, User);
	}

	getUsers(): Observable<User[]> {
		const UserRef = collection(this.firestore, 'Users');
		return collectionData(UserRef, { idField: 'id' }) as Observable<User[]>;
	}

	deleteUser(User: User) {
		const UserDocRef = doc(this.firestore, `Users/${User.id}`);
		return deleteDoc(UserDocRef);
	}

}
