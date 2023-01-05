import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.page.html',
    styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

    formularioEntrar: FormGroup;

    constructor(private Firestore: Firestore,
        private autenticacionService: AutenticacionService,
        public toastController: ToastController,
        private router: Router) {
        this.formularioEntrar = new FormGroup({
            email: new FormControl(),
            password: new FormControl(),
        })
    }

    async ngOnInit() {
    }

    async logIn() {
        console.log("Credenciales--->", this.formularioEntrar.value.email, this.formularioEntrar.value.password);
        const res = await this.autenticacionService.logIn(this.formularioEntrar.value.email, this.formularioEntrar.value.password)
            .catch(
                error => { console.log(error, 'error') }
            );
        if (res) {
            const toast = this.toastController.create({
                message: 'Usuario correcto, redireccionando...',
                position: 'bottom',
                duration: 2000
            });
            (await toast).present()
            this.router.navigate(['/splash-screen'])
            console.log('exito->', res);
        } else {
            const toast = this.toastController.create({
                message: 'Usuario incorrecto, porfavor intente nuevamente.',
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
