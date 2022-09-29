import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  CategoryData:any;
  EditData:any;
  constructor(private service:CategoryService) {
    this.GetAllCategorylist();
    
   }

  ngOnInit(): void {
   
  }

  displayStyle = "none";
  displayStyle_del = "none";
  
  openPopup() {
     
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  openPopup_Del() {
    this.displayStyle_del = "block";
  }
  closePopup_Del() {
    this.displayStyle_del = "none";
  }
   
  GetAllCategorylist(){
    this.service.GetAllCategorylist().subscribe(result =>{
    this.CategoryData=result;
    
     
    })
  }

  EditRecord(CategID:any){
    
    this.service.Get_categorybyCategID(CategID).subscribe(result =>{
    this.EditData=result;
    console.log( this.EditData);
     
    this.openPopup();
    })
  }

  categoryform = new FormGroup({
    CategID :new FormControl(),
    CategName : new FormControl(),
    Status : new FormControl()
  });

}
