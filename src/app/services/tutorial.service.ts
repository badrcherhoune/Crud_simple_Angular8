import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../tools/apiUrl';
const baseUrl = 'http://localhost:3000/tutorials';

@Injectable({
  providedIn: 'root'
})


export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  getAll2(){
    return this.http.get(apiUrl.getAllTutorial());
  }

  get(id:any) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data:any) {
    return this.http.post(baseUrl, data);
  }

  update(id:any, data:any) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id:any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(title:any) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}
