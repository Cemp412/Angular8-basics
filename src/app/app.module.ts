import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { SectionComponent } from './section/section.component';
import { AsideComponent } from './aside/aside.component';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';
import { UserModule } from './user/user.module';
import { AttributebindingComponent } from './attributebinding/attributebinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwoWaybindingComponent } from './two-waybinding/two-waybinding.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { NgstylengclassComponent } from './ngstylengclass/ngstylengclass.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    NavComponent,
    SectionComponent,
    AsideComponent,
    ArticleComponent,
    FooterComponent,
    AttributebindingComponent,
    EventbindingComponent,
    TwoWaybindingComponent,
    TemplateReferenceVariableComponent,
    NgstylengclassComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    UserModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
