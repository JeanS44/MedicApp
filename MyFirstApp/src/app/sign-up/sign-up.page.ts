import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  formulario: FormGroup;

  constructor(private Firestore: Firestore, private autenticacionService: AutenticacionService) {
    this.formulario = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  ngOnInit() {
  }

  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.autenticacionService.addUser(this.formulario.value);
    console.log(response);
  }

}
