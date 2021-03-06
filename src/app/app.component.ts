import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'territory-pwa';

  activeUrl = ''

  abrir (url: string) {
    if (url == 'llegar') window.open("https://www.google.com/maps/dir//41.2204538,1.5272766/@41.2203565,1.4573277,12z");
    else this.activeUrl = url;
  }
}
