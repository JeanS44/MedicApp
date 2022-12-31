import { Component, OnInit } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.page.html',
    styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

    formularioRegistro: FormGroup;

    constructor(private Firestore: Firestore, private autenticacionService: AutenticacionService) {
        this.formularioRegistro = new FormGroup({
            name: new FormControl(),
            email: new FormControl(),
            password: new FormControl(),
        })
    }

    ngOnInit() {
    }


    async onSubmit() {
        console.log(this.formularioRegistro.value)
        const response = await this.autenticacionService.addUser(this.formularioRegistro.value);
        console.log(response);
    }

    showPassword(input: any): any {
        input.type = input.type === 'password' ? 'text' : 'password';
    }

}
