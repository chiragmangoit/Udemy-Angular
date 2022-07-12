import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecepieService } from 'src/app/services/recepie.service';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-edit',
  templateUrl: './recepie-edit.component.html',
  styleUrls: ['./recepie-edit.component.css'],
})
export class RecepieEditComponent implements OnInit {
  id: number;
  editMode = false;
  recepieForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recepieService: RecepieService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.inintForm();
    });
    
  }

  onAddIngredients() {
    (<FormArray>this.recepieForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  onDeleteIngredient(index:number) {
    (<FormArray>this.recepieForm.get('ingredients')).removeAt(index);
  }

  private inintForm() {
    let recepieName: string = '';
    let recepieImgPath: string = '';
    let recepieDesc: string = '';
    let recepieIngredients = [];

    if (this.editMode) {
      const recepie = this.recepieService.getRecepie(this.id);
      recepieName = recepie.name;
      recepieImgPath = recepie.imgPath;
      recepieDesc = recepie.description;
      if (recepie['ingredients']) {
        for (let ing of recepie.ingredients) {
          recepieIngredients.push(
            new FormGroup({
              name: new FormControl(ing.name, Validators.required),
              amount: new FormControl(ing.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }

    this.recepieForm = new FormGroup({
      name: new FormControl(recepieName, Validators.required),
      imgPath: new FormControl(recepieImgPath, Validators.required),
      description: new FormControl(recepieDesc, Validators.required),
      ingredients: new FormArray(recepieIngredients),
    });
  }

  get controls() {
    // a getter!
    return (<FormArray>this.recepieForm.get('ingredients')).controls;
  }
  onSubmit() {
    // const newRecepie = new Recepie(
    //   this.recepieForm.value['name'],
    //   this.recepieForm.value['description'],
    //   this.recepieForm.value['imgPath'],
    //   this.recepieForm.value['ingredients'],
    // )
    if(this.editMode) {
      this.recepieService.updateRecepie(this.id, this.recepieForm.value  );
    } else {
      this.recepieService.addRecepie(this.recepieForm.value)
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo:this.route})
  }
}
 