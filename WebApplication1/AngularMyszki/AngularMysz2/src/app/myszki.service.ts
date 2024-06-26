import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyszkiResponseDTO } from './models/myszki';
import { MyszkiRequestDTO } from './models/request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyszkiService {

  constructor(private httpClient: HttpClient) { }

  public get(){
    return this.httpClient.get<MyszkiResponseDTO[]>('https://localhost:7279/api/Myszki')
  }

  public post(body: MyszkiRequestDTO):Observable<void>{
    return this.httpClient.post<void>('https://localhost:7279/api/Myszki',body);
  }
  
  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>('https://localhost:7279/api/Myszki/?id='+id);
  }

}
