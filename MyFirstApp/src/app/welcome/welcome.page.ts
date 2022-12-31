import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.page.html',
    styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}
