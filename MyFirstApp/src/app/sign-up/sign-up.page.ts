import { Component, OnInit } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { FirestoreService } from '../servicios/firestore.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.page.html',
    styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

    formularioRegistro: FormGroup;

    constructor(private Firestore: Firestore,
        private autenticacionService: AutenticacionService,
        private firestore: FirestoreService,
        public toastController: ToastController,
        private router: Router) {
        this.formularioRegistro = new FormGroup({
            uid: new FormControl(),
            rut: new FormControl(),
            firstName: new FormControl(),
            secondName: new FormControl(),
            firstApellido: new FormControl(),
            secondApellido: new FormControl(),
            userEmail: new FormControl(),
            firstPassword: new FormControl(),
            secondPassword: new FormControl()
        })
    }

    ngOnInit() {
    }

    async registerUserOnFirestore() {
        const response = await this.autenticacionService.addUser(this.formularioRegistro.value)
            .catch(error => {
                console.log('error');
            });
        console.log(response);
        if (response) {
            console.log('Usuario creado');
            const id = response.user?.uid;
            const toast = this.toastController.create({
                message: 'Felicitaciones usuario creado correctamente!',
                position: 'bottom',
                duration: 2000
            });
            (await toast).present()
            setTimeout(() => {
                this.router.navigate(['/log-in'])
            }, 2500);
            this.formularioRegistro.value.uid = id;
            await this.firestore.crearDoc(this.formularioRegistro.value).catch(error => {
                console.log('error');
            });
        } else {
            const toast = this.toastController.create({
                message: 'Error al crear el usuario, porfavor revise sus datos nuevamente.',
                position: 'bottom',
                duration: 2000
            });
            (await toast).present()
        }
    }

    showPassword(input: any): any {
        input.type = input.type === 'password' ? 'text' : 'password';
    }

}
