import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecepieService } from 'src/app/services/recepie.service';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-details',
  templateUrl: './recepie-details.component.html',
  styleUrls: ['./recepie-details.component.css'],
})
export class RecepieDetailsComponent implements OnInit {
  recepieValue: Recepie;
  id: number;
  constructor(
    private recepieService: RecepieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recepieValue = this.recepieService.getRecepie(this.id);
    });
  }

  onAddToShopingList() {
    this.recepieService.addIngredientsToShopingList(
      this.recepieValue.ingredients
    );
  }

  onDeleteRecepie() {
    this.recepieService.deleteRecepie(this.id);
    this.router.navigate(['../'], {relativeTo:this.route});
  }
}
