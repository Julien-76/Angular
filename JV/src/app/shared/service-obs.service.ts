import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceObsService {

  status : boolean = false;
  statusSubject = new Subject<boolean>()

  constructor() { }

  emitStatus() {
    this.statusSubject.next(this.status)
  }

  clickBtnHomeConnect() {
    return new Promise(
      (success, denied) => {
        if(!this.status) {
          this.status= true;
          this.emitStatus()
          success(true)
        } else {
          denied()
        }
      }
    )
  }

  clickBtnHomeDisconnect() {
    return new Promise(
      (success, denied) => {
        if(this.status) {
          this.status = false;
          this.emitStatus()
          success(true)
        } else {
          denied()
        }
      }
    )
  }
}
