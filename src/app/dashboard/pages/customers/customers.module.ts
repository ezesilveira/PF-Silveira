import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { BusinessComponent } from './business/business.component';
import { BusinessTableComponent } from './business/business-table/business-table.component';
import { BusinessDialogComponent } from './business/business-dialog/business-dialog.component';
import { ResidentialComponent } from './residential/residential.component';
import { ResidentialDialogComponent } from './residential/residential-dialog/residential-dialog.component';
import { ResidentialTableComponent } from './residential/residential-table/residential-table.component';
import { ServicesComponent } from './services/services.component';
import { ServicesDialogComponent } from './services/services-dialog/services-dialog.component';
import { ServicesTableComponent } from './services/services-table/services-table.component';
import { QualityComponent } from './quality/quality.component';
import { QualityTableComponent } from './quality/quality-table/quality-table.component';
import { QualityDialogComponent } from './quality/quality-dialog/quality-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    BusinessComponent,
    BusinessTableComponent,
    BusinessDialogComponent,
    ResidentialComponent,
    ResidentialDialogComponent,
    ResidentialTableComponent,
    ServicesComponent,
    ServicesDialogComponent,
    ServicesTableComponent,
    QualityComponent,
    QualityTableComponent,
    QualityDialogComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
    MatTooltipModule
  ]
})
export class CustomersModule { }
