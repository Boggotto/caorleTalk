import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent implements OnInit {
  data : Date = new Date();
  focus;
  focus1;

  form: FormGroup = this.fb.group({
    from_name: '',
    from_email: '',
    message:''
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  async send(){
    emailjs.init('xK1jsXm72plxg8Hqz');
    let response = await emailjs.send("service_dtj4m43","template_9sj627j",{
      from_name: this.form.value.from_name,
      from_email: this.form.value.from_email,
      message: this.form.value.message,
      });
      
      alert('Messaggio inviato');
      this.form.reset();
  }

}