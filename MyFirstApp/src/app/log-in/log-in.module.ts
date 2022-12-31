import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogInPageRoutingModule } from './log-in-routing.module';

import { LogInPage } from './log-in.page';

import { environment } from '../../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        LogInPageRoutingModule, provideFirebaseApp(
            () => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore(),
        ),
    ],
    declarations: [LogInPage],
    providers: [
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
    ],
})
export class LogInPageModule { }
