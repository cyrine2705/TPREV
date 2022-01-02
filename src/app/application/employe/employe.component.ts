import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employe } from 'src/app/entities/employe';
import { EmployeService } from 'src/app/services/employe.service';



@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  @Input("emp")emp:Employe;
  @Output()changer=new EventEmitter<number>();
  constructor(private EmployeService:EmployeService) { }

  ngOnInit(): void {
   
    }
    onSupprimer(id:number){
      this.EmployeService.deleteEmploye(id)
      .subscribe(()=>this.changer.emit(this.emp.id));
      }
      

}
