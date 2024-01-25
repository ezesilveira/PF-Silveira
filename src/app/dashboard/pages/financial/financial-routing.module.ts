import { NgModule } from "@angular/core";
import { InvoicesComponent } from "./invoices/invoices.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
            path: 'invoices',
            component: InvoicesComponent
            }
        ])
    ],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class FinancialRoutingModule { }