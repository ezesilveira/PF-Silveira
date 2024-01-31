import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { QualityControlEntry } from './quality/models';
import { CustomersServiceEntry } from './services/models';
import { BusinessCustomer } from './business/models';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  
  constructor(private httpClient: HttpClient) { }

  private users : QualityControlEntry[] = [];
  private customers : CustomersServiceEntry[] = [];

  getQualityControlEntrys(): Observable<QualityControlEntry[]> {
    return this.httpClient.get<QualityControlEntry[]>(`${environment.baseUrl}/control_calidad`);
  }

  getCustomersServiceEntry(): Observable<CustomersServiceEntry[]> {
    return this.httpClient.get<CustomersServiceEntry[]>(`${environment.baseUrl}/servicios`);
  }

  getCustomersBusinessEntry(): Observable<BusinessCustomer[]> {
    return this.httpClient.get<BusinessCustomer[]>(`${environment.baseUrl}/clientes`);
  }
  
  createQualityControlEntry(payload: QualityControlEntry): Observable<QualityControlEntry[]> {
    console.log(payload);
    return this.httpClient
    .post<QualityControlEntry>(`${environment.baseUrl}/control_calidad`, payload)
    .pipe(concatMap(() => this.getQualityControlEntrys())
      )
  }

  updateQualityControlEntry(QualityControlEntryId: number, payload: QualityControlEntry): Observable<QualityControlEntry[]> {
    return this.httpClient
    .put<QualityControlEntry>(`${environment.baseUrl}/control_calidad/${QualityControlEntryId}`, payload)
      .pipe(concatMap(() => this.getQualityControlEntrys())
      )
  }

  deleteUser(QualityControlEntryId: number): Observable<QualityControlEntry[]> {
    return this.httpClient
    .delete<QualityControlEntry>(`${environment.baseUrl}/control_calidad/${QualityControlEntryId}`)
      .pipe(concatMap(() => this.getQualityControlEntrys())
      )
  }
}
