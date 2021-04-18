import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpclient:HttpClient) { }
  postData(api:any,data:any){
 return this.httpclient.post(environment.baseUrl+api,data)
  }
  getData(api:any){
 return this.httpclient.get(environment.baseUrl+api)
  }
  putData(api:any,index:any,data:any){
    return this.httpclient.put(environment.baseUrl+api+index,data)
  }
}
