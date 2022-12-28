import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import People from '../interfaces/person.interface'

@Injectable({
    providedIn: 'root'
})

export class PeopleService {


    constructor(private firestore: Firestore) { }

}
