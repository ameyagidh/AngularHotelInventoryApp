import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  config: any;
  constructor(private http: HttpClient) { }

  init(){
      return this.http.get("/assets/config.ts").pipe(map((config)=>{this.config = config}))
  }

}
