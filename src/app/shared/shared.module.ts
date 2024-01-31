import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FullnamePipe } from './pipes/fullname.pipe';
import { MatTableModule } from '@angular/material/table';
import { FormErrorsPipe } from './pipes/form-errors.pipe';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { TruncatePipe } from './pipes/truncate.pipe';
import { DeleteDialogConfirmComponent } from './common/delete-dialog-confirm/delete-dialog-confirm.component';
import { LogoutDialogConfirmComponent } from './common/logout-dialog-confirm/logout-dialog-confirm.component';
import { MatPaginatorModule } from '@angular/material/paginator';
/* import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; */

@NgModule({
  declarations: [
    FullnamePipe,
    FormErrorsPipe,
    TruncatePipe,
    DeleteDialogConfirmComponent,
    LogoutDialogConfirmComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FullnamePipe,
    MatTableModule,
    FormErrorsPipe,
    MatProgressBarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatMenuModule,
    TruncatePipe,
    MatPaginatorModule,
/*     BrowserAnimationsModule  */
  ]
})
export class SharedModule { }
