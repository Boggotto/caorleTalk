import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {
  data: Date = new Date();
  focus;
  focus1;
  VideosYoutubeList: VideosYoutube[] = [
    {
      link: 'https://www.youtube.com/embed/GGgtTu5XRNo?si=pvie4NiRwpm5WQ4q',
      titolo: 'Vivere con Sostenibilità con Irene Zambusi - Vita, esperienze e Plastic Free',
      descrizione: '',
      altro: '',
      coming: false
    },
    {
      link: 'https://www.youtube.com/embed/HHNg9Y1er0U?si=euPxIO4EweJlQiqx',
      titolo: 'La Forza della Dedizione con Angelo Ferrillo - Radici, Esperienze e Allenamento',
      descrizione: '',
      altro: '',
      coming: false
    },
    {
      link: 'https://www.youtube.com/embed/nN-xGpSVZUY?si=U7ZniWJo4fCGJfFx',
      titolo: 'Credere nei Sogni con Giulia Uliari - Mettersi in gioco per realizzarsi',
      descrizione: '',
      altro: '',
      coming: false
    },
    {
      link: 'https://www.youtube.com/embed/30Z3JeWE0Os?si=hBg5I9Zn5MDCSJqK',
      titolo: 'La Forza per Rialzarsi con Erika Brugnerotto - La sua esperienza con i disturbi alimentari',
      descrizione: '',
      altro: '',
      coming: false
    },
    {
      link: 'https://www.youtube.com/embed/2oQ5EwGz7UY?si=q3eIgmdRDjDjpRzu',
      titolo: "Il Desiderio di Aiutare con Camilla Stranges - L'aiutare gli altri come missione di vita",
      descrizione: '',
      altro: '',
      coming: false
    },
    {
      link: 'https://www.youtube.com/embed/Nf1Weuy7jow?si=4_kU95MmIpHYkoKi',
      titolo: "Arte, Bellezza e Vita con Renato Bergantin - La sua visione artistica inscindibile dall'emozione",
      descrizione: '',
      altro: '',
      coming: false
    },
    {
      link: 'https://www.youtube.com/embed/116qfSaMRKA?si=gbedktC3TaAqHJNM',
      titolo: 'Coltivare il Futuro con Michele Conte - Passione, Tecnologia e Agronomia',
      descrizione: '',
      altro: '',
      coming: false
    },
    {
      link: 'https://www.youtube.com/embed/uF1FbHjNXxc?si=njoilBNETl7HO1Yu',
      titolo: 'La Persona prima della Dipendenza con Gionatah Di Maio - Funzione e importanza degli A.C.A.T. Pt 1',
      descrizione: '',
      altro: '',
      coming: false
    },
    {
      link: 'https://www.youtube.com/embed/_ce4o-IFSdM?si=fwN-yv4N3HpuLZOF',
      titolo: 'La Persona prima della Dipendenza con Gionatah Di Maio - Funzione e importanza degli A.C.A.T. Pt 2',
      descrizione: '',
      altro: '',
      coming: false
    },
    {
      link: 'https://www.youtube.com/embed/pzTUWSnDJMA?si=mPxZjFy7IEr7yMCT',
      titolo: 'Sognare e agire con Desylovefood - Storia di una donna inarrestabile (e di polpette)',
      descrizione: '',
      altro: '',
      coming: false
    },
    {
      link: 'https://www.youtube.com/embed/EDlxpZ1o1II?si=EOH-eCl5YRL6QVLP',
      titolo: 'La Pesca e la Scrittura con Emanuele - Il legame indissolubile con il mare e la scrittura',
      descrizione: '',
      altro: '',
      coming: false
    }
  ];

  constructor() { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

}

export interface VideosYoutube {
  link: string;
  titolo: string;
  descrizione: string;
  altro: string;
  coming: boolean;
}

