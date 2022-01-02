import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/entities/employe';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-listemployes',
  templateUrl: './listemployes.component.html',
  styleUrls: ['./listemployes.component.css']
})
export class ListemployesComponent implements OnInit {

  lesEmployes:Employe[]=[];
  constructor(private employeService:EmployeService) { }

  ngOnInit(): void {
    this.employeService.getEmploye()
    .subscribe (data => this.lesEmployes = data)
    }
    Oncherche(ch:string){
      console.log(ch);
      this.lesEmployes=  this.lesEmployes.filter(elm => elm.nom.includes(ch))
     
    }
    supp(id:number){
      this.lesEmployes=this.lesEmployes.filter(e=>e.id!=id);
    }
    
      

   

}
