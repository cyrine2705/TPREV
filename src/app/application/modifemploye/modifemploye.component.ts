import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employe } from 'src/app/entities/employe';
import { DepartementService } from 'src/app/services/departement.service';
import { EmployeService } from 'src/app/services/employe.service';
import { Departement } from 'src/app/entities/departement';
@Component({
  selector: 'app-modifemploye',
  templateUrl: './modifemploye.component.html',
  styleUrls: ['./modifemploye.component.css']
})
export class ModifemployeComponent implements OnInit {
  EmpForm: FormGroup;
  employe:Employe;
  employes:Employe[]=[];;
  Dep:Departement[]=[];
  constructor(private fb:FormBuilder, private activatedRoute:ActivatedRoute,private serviceEm:EmployeService,
    private DepService:DepartementService) { }
  
    onModifier(id:number){
    this.serviceEm.updateEmploye(id, this. EmpForm.value).subscribe(data => {
      let pos = this.employes.findIndex(e=> e.id == data.id)
      this.employes[pos]= this.EmpForm.value  
      this.employes.push(data)  
    }           
    )
  }
  

  ngOnInit(): void {
    this.DepService.getDep().subscribe (data => this.Dep = data);
    this.EmpForm=this.fb.group({
      nom:["hhjd"],
      photo:["hjdk"],
      dateNaissance:[17/3/2021],
      adresse:this.fb.group({
        rue:["jjf"],
        ville:["ville"],
        codePostal:[785],
      }),
      poste:[""],
      diplomes:this.fb.array([])
    })
    
  

    let i= this.activatedRoute.snapshot.params['id'];
    this.serviceEm.getEmployeById(i).subscribe (data => this.employe = data);
   
  }

}
