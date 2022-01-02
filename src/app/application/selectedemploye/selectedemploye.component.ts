import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employe } from 'src/app/entities/employe';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-selectedemploye',
  templateUrl: './selectedemploye.component.html',
  styleUrls: ['./selectedemploye.component.css']
})
export class SelectedemployeComponent implements OnInit {
 employe:Employe;
  constructor(private activatedRoute:ActivatedRoute , private empS:EmployeService) { }

  ngOnInit(): void {
    let i= this.activatedRoute.snapshot.params['id'];
    this.empS.getEmployeById(i).subscribe (data => this.employe = data)
}
txt:boolean=false;
 afficher(){
  this.txt=!this.txt;
 
 }

}
