import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { LocationComponent } from './pages/location/location.component';
import { CardCreditComponent } from './components/card-credit/card-credit.component';
import { CardBillingSummaryComponent } from './components/card-billing-summary/card-billing-summary.component';
import { CardLocaitonComponent } from './components/card-locaiton/card-locaiton.component';
import { ModulUsageComponent } from './components/modul-usage/modul-usage.component';
import { CardAdminsComponent } from './components/card-admins/card-admins.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    OverviewComponent,
    LocationComponent,
    CardCreditComponent,
    CardBillingSummaryComponent,
    CardLocaitonComponent,
    ModulUsageComponent,
    CardAdminsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
