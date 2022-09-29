import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpParams} from '@angular/common/http';
import {observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  apiurl_CategNo ='https://wmapi.webmds.in/api/Category/CategNo';
  apiurl_category ='https://wmapi.webmds.in/api/Category?PageCount=1&RowcountperPage=10&IsPagging=1';
  apiurl_EditCategory= 'https://wmapi.webmds.in/api/Category';
  apiurl_SaveCategory= 'https://wmapi.webmds.in/api/Category';
  
  constructor(private http:HttpClient) {
  
   }
   GetCategNo(){
    return this.http.get(this.apiurl_CategNo, {responseType: 'text'});
  }
  GetAllCategorylist(){
  return  this.http.get(this.apiurl_category);
  }
 
  Get_categorybyCategID(CategID:any)
  {
    return  this.http.get(this.apiurl_EditCategory+'/'+CategID);
  }
 
   SaveCategory(inputdata:any)
   {
   return this.http.post<any>(this.apiurl_SaveCategory,inputdata);
   }

}
