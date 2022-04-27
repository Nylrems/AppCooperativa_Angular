/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  title = 'Videos';
  videos = [
    { title: 'COOPDGII celebra 23 años de logros', url: 'https://www.youtube.com/embed/Khrf2vaZfoA' },
    { title: 'XVII Asamblea General de Delegados 2021', url: 'https://www.youtube.com/embed/9tSl408KmkQ' },
    { title: 'Evento Central 20 Aniversario COOPDGII', url: 'https://www.youtube.com/embed/R2OyawdBdHU' },
    { title: '20 Aniversario de tú coopdgii', url: 'https://www.youtube.com/embed/4HiPj2zbDT0' },
    { title: 'Historia de nuestra cooperativa', url: 'https://www.youtube.com/embed/kbtOr_u8orI' },
    { title: 'Lanzamiento sitio web', url: 'https://www.youtube.com/embed/2FLzsv8OIjw' },

  ];

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  domSanitizerIframe(e: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(e);
  }

}
