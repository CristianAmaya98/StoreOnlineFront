import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { FakeStoreService } from '../../services/fake-store.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  animation: boolean = true;

  public get product(): any {
    return this.fakeStoreService.product;
  }


  constructor(private activatedRoute: ActivatedRoute, private fakeStoreService: FakeStoreService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsUrl => {
      this.fakeStoreService.getDetalleProduct(paramsUrl['id']);
      setTimeout(() => {
        this.animation = false;
      }, 1000);
    })
  }

}
