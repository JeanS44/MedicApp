import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Component({
    selector: 'app-perfil-admin',
    templateUrl: './perfil-admin.page.html',
    styleUrls: ['./perfil-admin.page.scss'],
})
export class PerfilAdminPage implements OnInit {

    constructor(private autenticacionService: AutenticacionService) { }

    ngOnInit() {
    }

    logOut() {
        return this.autenticacionService.logOut();
    }

    showAlert() {
        console.log("XDDDDd");
    }
}
