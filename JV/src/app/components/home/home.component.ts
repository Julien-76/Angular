import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { ServiceObsService } from 'src/app/shared/service-obs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  status : boolean = false;
  statusSubsriber : Subscription;
  constructor(private ServiceObsService : ServiceObsService) { }

  ngOnInit(): void {
    this.statusSubsriber = this.ServiceObsService.statusSubject.subscribe(
      (statusService) => {this.status = statusService}
    )
  }

  affiche() {
    this.ServiceObsService.clickBtnHomeConnect()
  }

  cache() {
    this.ServiceObsService.clickBtnHomeDisconnect()
  }
}
