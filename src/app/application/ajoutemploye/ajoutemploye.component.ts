import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Departement } from 'src/app/entities/departement';
import { DepartementService } from 'src/app/services/departement.service';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-ajoutemploye',
  templateUrl: './ajoutemploye.component.html',
  styleUrls: ['./ajoutemploye.component.css']
})
export class AjoutemployeComponent implements OnInit {

  EmpForm:FormGroup;

  Dep:Departement[]=[];
 
  constructor(private empService:EmployeService ,private fb:FormBuilder, private DepService:DepartementService,private router :Router) { }

  ngOnInit(): void {
    this.DepService.getDep().subscribe (data => this.Dep = data);
    this.EmpForm=this.fb.group({
      nom:["hhjd", [Validators.required, Validators.pattern('^[a-zA-Z]+(( |,)[a-zA-Z]+)+$')]],
      photo:["hjdk",[Validators.required ] ],
      dateNaissance:[17/3/2021],
      adresse:this.fb.group({
        rue:["jjf"],
        ville:["ville"],
        codePostal:[785],
      }),
      poste:[""],
      diplomes:this.fb.array([])
    })
   
    }
  
  onAjouter(){
    this.empService.addEmploye(this.EmpForm.value)
    .subscribe(data => console.log(data));
    this.router.navigate(['/lesemployes'])
    }
  

    public get diplomes(){
      return this.EmpForm.get('diplomes') as FormArray;
      }
    onAjouterDip(){
      this.diplomes.push(this.fb.control(''));
} 
isRequiredNom():boolean{
  return !this.EmpForm.controls['nom'].errors?.required || this.EmpForm.controls['nom'].pristine;
  } 
  isRequiredP():boolean{
    return !this.EmpForm.controls['photo'].errors?.required || this.EmpForm.controls['photo'].pristine;
    } 
  isValidPatternNom():boolean{
    return this.EmpForm.controls['nom'].errors?.pattern && this.EmpForm.controls['nom'].dirty;
    }

}
