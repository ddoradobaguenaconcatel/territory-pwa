import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'territory-pwa';
  
  urls = {
    mapa: 'https://territorios.elprincipal.info/mapa/vs023',
    llegar: 'https://www.google.com/maps/dir//41.22045384736087,1.527276635169983',
    catastro: 'https://www1.sedecatastro.gob.es/Cartografia/mapa.aspx?del=43&mun=165&refcat=6645618CF7664D&Xcentro=376492.871745542&Ycentro=4564263.50926439&from=OVCBusqueda&final=&pest=coordenadas&latitud=41.22033601096433&longitud=1.5265561091311075&gradoslat=&minlat=&seglat=&gradoslon=&minlon=&seglon=&x=&y=&huso=0&tipoCoordenadas=2&ZV=NO&ZR=NO'
  };

  activeUrl = ''

  abrir (url: string) {
    this.activeUrl = url;
  }
}
