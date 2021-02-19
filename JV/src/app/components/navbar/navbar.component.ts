import { Component, OnInit } from '@angular/core';
import { ServiceObsService } from 'src/app/shared/service-obs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
  
})
export class NavbarComponent implements OnInit {
  status : boolean
  statusSubscriber : Subscription
  
  constructor(private serviceObsService : ServiceObsService) { }

  ngOnInit(): void {
    this.statusSubscriber = this.serviceObsService.statusSubject.subscribe(
      (statusService) => { this.status = statusService}
    )
  }

}
