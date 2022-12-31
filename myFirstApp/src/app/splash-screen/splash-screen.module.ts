import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplashScreenPageRoutingModule } from './splash-screen-routing.module';

import { SplashScreenPage } from './splash-screen.page';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SplashScreenPageRoutingModule
    ],
    declarations: [SplashScreenPage],
    providers: [StatusBar]
})
export class SplashScreenPageModule {

}
