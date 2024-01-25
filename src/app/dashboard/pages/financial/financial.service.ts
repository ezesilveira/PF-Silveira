import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap } from 'rxjs';
import { Invoice } from './invoices/models';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FinancialService {

  constructor(private httpClient: HttpClient) { }

  private users : Invoice[] = [];

    getInvoices(): Observable<Invoice[]> {
      return this.httpClient.get<Invoice[]>(`${environment.baseUrl}/facturas`);
    }
    
    createInvoice(payload: Invoice): Observable<Invoice[]> {
      console.log(payload);
      return this.httpClient
      .post<Invoice>(`${environment.baseUrl}/facturas`, payload)
      .pipe(concatMap(() => this.getInvoices())
        )
    }

    updateInvoice(invoiceId: number, payload: Invoice): Observable<Invoice[]> {
      return this.httpClient
      .put<Invoice>(`${environment.baseUrl}/facturas/${invoiceId}`, payload)
        .pipe(concatMap(() => this.getInvoices())
        )
    }

    deleteInvoice(invoiceId: number): Observable<Invoice[]> {
      return this.httpClient
      .delete<Invoice>(`${environment.baseUrl}/facturas/${invoiceId}`)
        .pipe(concatMap(() => this.getInvoices())
        )
    }
}
