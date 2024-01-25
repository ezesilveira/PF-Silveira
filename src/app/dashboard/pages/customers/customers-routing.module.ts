import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from '../../../../../../../erp/src/app/dashboard/pages/customers/customers.component';
import { BusinessComponent } from './business/business.component';
import { ResidentialComponent } from './residential/residential.component';
import { ServicesComponent } from './services/services.component';
import { QualityComponent } from './quality/quality.component';

const routes: Routes = [{
                        path: '',
                        component: CustomersComponent
                        },
                        {
                        path: 'business',
                        component: BusinessComponent
                        },
                        {
                        path: 'residential',
                        component: ResidentialComponent
                        },
                        {
                        path: 'services',
                        component: ServicesComponent
                        },
                        {
                        path: 'quality',
                        component: QualityComponent
                        },
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
