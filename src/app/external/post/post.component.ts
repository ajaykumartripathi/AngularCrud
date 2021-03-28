import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private httpy:HttpClient,private fb:FormBuilder) { }
  formData=new FormData()
  dbdata:any
  image:any
  user_id:any
  caption:any
  post!:FormGroup;
  ngOnInit(): void {
    this.initForm()
  }
  initForm(){
    this.post=this.fb.group({
       user_id:[''],
      caption:[''],
      image:['']
    })
  }
  onSubmit(){
    this.httpy.get('http://localhost:9000/joinData').subscribe((data:any)=> {
      console.log(data);
  this.dbdata=data.data
   } )
  }
  onDelete(index:any){
    this.httpy.delete('http://localhost:9000/postDelete/'+index).subscribe((data:any) =>{
      console.log(data);   
      alert('deleted')
  })
  }
  onEditCaption(data:any){
this.caption=data.caption
  }
  onCopy(index:any){
    this.httpy.put('http://localhost:9000/postUpdate/'+index,{caption:this.caption}).subscribe((data:any) =>{
      console.log(data);   
      alert('Updated')
  })
  }
  onPost(){
    console.log(this.post.controls.caption.value)
    console.log(this.post.controls.user_id.value)
    console.log(this.post.controls.image.value)
    console.log(this.post.get('image'))
this.formData.append('user_id',this.post.controls.user_id.value)
this.formData.append('caption',this.post.controls.caption.value)
this.httpy.post('http://localhost:9000/postData',this.formData).subscribe((data:any)=> {
  console.log(data);
this.dbdata=data.data
} )
  }
  onFileUpload(File:Event){
    this.post.patchValue({image:File})
    this.post.get('image')?.updateValueAndValidity()
  this.formData.append('image',this.post.get('image')?.value)
  }
  
}
