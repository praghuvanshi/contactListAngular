import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Contact } from './contact';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: Http) { }

  getContacts() {
    return this.http.get('https://localhost:3000/api/contacts')
      .map(res => res.json());
  }


  addContact(newContact) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://127.0.0.1:3000/api/contact', newContact, { headers:headers })
      .map(res => res.json());
  }

  deleteContact(id) {
   
    return this.http.delete('https://127.0.0.1:3000/api/contact/'+id)
      .map(res => res.json());
    }
  }

