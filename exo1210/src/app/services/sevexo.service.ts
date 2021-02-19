import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from, Observable, Subscription } from 'rxjs';
import {Obj} from '../models/Obj.model'

@Injectable({
  providedIn: 'root'
})
export class SevexoService {

  private readonly BASE_URL: string = "https://jsonplaceholder.typicode.com";

  constructor(private client: HttpClient) { }


  getObj( subscriber: (value: Obj[]) => void ) : Subscription {
    return this.client.get(this.BASE_URL + '/posts')
      .subscribe(
        subscriber,
        (err) => console.log(err),
        () => console.log("completed")
      );
  }

  





}


