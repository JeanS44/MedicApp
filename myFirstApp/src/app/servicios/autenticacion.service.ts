import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { Observable } from 'rxjs';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})

export class AutenticacionService {

	constructor(private firestore: Firestore,
		private authFireAuth: AngularFireAuth,
		private router: Router) { }

	addUser(User: User) {
		/* const UserRef = collection(this.firestore, 'usuarios');
		return addDoc(UserRef, User); */
		return this.authFireAuth.createUserWithEmailAndPassword(User.userEmail, User.firstPassword);
	}

	getUsers(): Observable<User[]> {
		const UserRef = collection(this.firestore, 'Users');
		return collectionData(UserRef, { idField: 'id' }) as Observable<User[]>;
	}

	deleteUser(User: User) {
		const UserDocRef = doc(this.firestore, `Users/${User.uid}`);
		return deleteDoc(UserDocRef);
	}

	logIn(email: string, password: string) {
		return this.authFireAuth.signInWithEmailAndPassword(email, password);
	}

	async logOut() {
		this.authFireAuth.signOut().then(() => {
			// Sign-out successful.
			console.log('Signed Out');
			this.router.navigate(['/welcome'])
		}, (error) => {
			console.log(error);
		});
	}

}
