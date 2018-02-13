import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LocalFormAwareDataService } from './local/localformawaredata.service';
import { ReactiveFormsDemoComponent } from './demo/reactiveforms/reactiveformsdemo.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule, MatButtonModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormAssistant } from '../lib/reactiveformsassistant';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsDemoComponent

  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
        {
          path: "demo",
          component: ReactiveFormsDemoComponent
        }]
    ) ],
  providers: [LocalFormAwareDataService, ReactiveFormAssistant],
  bootstrap: [AppComponent]
})
export class AppModule { }
