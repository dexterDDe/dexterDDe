import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../../services/noticia.service';
import { LoginResponse } from '../../interfaces/LoginResponse';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = { email: '', password: '' };
  datos_usuario: LoginResponse | null = null;

  constructor(
    private serviceArancel: NoticiaService,
    private router: Router,
    public alertController: AlertController,
    public loadingController: LoadingController
  ) { }

  ngOnInit() { }

  async Alerta(msg: string) {
    const alert = await this.alertController.create({
      header: 'Atención',
      message: msg,
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  validar() {
    this.loadingController.create({
      message: 'Aguarde por favor...',
    }).then((res) => {
      res.present();
      this.serviceArancel.login(this.user.email, this.user.password).subscribe(
        data => {
          res.dismiss();
          this.datos_usuario = data;
          console.log(this.datos_usuario.data.nombre);

          localStorage.setItem('username', this.datos_usuario.data.nombre);
          localStorage.setItem('token', this.datos_usuario.data.token);

          this.router.navigateByUrl('/noticia');
        },
        error => {
          res.dismiss();
          this.Alerta(error.error.message);
        }
      );
    });
  }
}
