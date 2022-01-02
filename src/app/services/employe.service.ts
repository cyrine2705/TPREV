import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe } from '../entities/employe';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3000/employes';
@Injectable({
  providedIn: 'root'
})
export class EmployeService {



  constructor(private http:HttpClient) { }
  getEmploye():Observable<Employe[]>{
    return this.http.get<Employe[]>(URL);
    }
    getEmployeById(id :number):Observable<Employe>{
      return this.http.get<Employe>(URL+"/"+ id);
    }
    deleteEmploye(id:number){
      return this.http.delete(URL+"/"+ id);
      }
      addEmploye(e:Employe):Observable<Employe>{
        return this.http.post<Employe>(URL, e);
        }
        updateEmploye(id:number, e:Employe):Observable<Employe>{
          return this.http.put<Employe>(URL+"/"+ id, e);
          }
          
        
      
}

