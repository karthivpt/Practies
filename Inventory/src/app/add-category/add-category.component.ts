import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  CategID :any;
  Saveresp='';
  messageclass='';
  message='';

  constructor(private service:CategoryService)
   {
    this.FetchCategNo(); 
  }

  ngOnInit(): void {
  }
  categoryform=new FormGroup({
  CategID: new FormControl(this.FetchCategNo()),
  CategName : new FormControl('',Validators.required),
  Status : new FormControl()
 });

 SaveCategory(){
  if(this.categoryform.valid)
  {
    if(this.categoryform.value.CategID==null)
    {
      this.categoryform.value.CategID=this.CategID;
    }
    //  console.log(this.categoryform.value);
     this.service.SaveCategory(this.categoryform.value).subscribe((result: string) =>{
this.Saveresp=result; console.log(this.Saveresp);
     });
  }
  else{

  }

 }


  FetchCategNo(){
    this.service.GetCategNo().subscribe(result =>{
    this.CategID=result;
     
    
    })
  }

  get CategName(){
    return this.categoryform.get("CategName");
  }
  get Status(){
    return this.categoryform.get("Status");
  }
}
