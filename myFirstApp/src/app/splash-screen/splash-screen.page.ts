import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-splash-screen',
    templateUrl: './splash-screen.page.html',
    styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

    constructor(private angularFireAuth: AngularFireAuth,
        private platform: Platform) {
        setTimeout(() => {
            this.platform.ready().then(() => {
                this.angularFireAuth.onAuthStateChanged(function (user) {
                    if (user) {
                        location.replace("/perfil-admin");
                        /* console.log("Esta log"); */
                    } else {
                        location.replace("/welcome");
                        /* console.log("No esta log"); */
                    }
                });
            });
        }, 2500);
    }

    ngOnInit() {
    }
}
