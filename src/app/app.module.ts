import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAnimationComponent } from './material-animation/material-animation.component';
import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { HeaderComponent } from './shared-folder/header/header.component';
import { AppComponentFactoryResolverComponent } from './component-factory-resolver/app-component-factory-resolver/app-component-factory-resolver.component';
import { CompFactResDirective } from './component-factory-resolver/comp-fact-res.directive';
import { CompFactResFirstComponent } from './component-factory-resolver/comp-fact-res-first/comp-fact-res-first.component';
import { CompFactResSecondComponent } from './component-factory-resolver/comp-fact-res-second/comp-fact-res-second.component';
import { CompFactResThirdComponent } from './component-factory-resolver/comp-fact-res-third/comp-fact-res-third.component';
import { FormsModule } from '@angular/forms';
import { VfBotWireframeComponent } from './vf-bot-wireframe/vf-bot-wireframe.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialAnimationComponent,
    PieChartComponent,
    BarChartComponent,
    LineChartComponent,
    HeaderComponent,
    AppComponentFactoryResolverComponent,
    CompFactResDirective,
    CompFactResFirstComponent,
    CompFactResSecondComponent,
    CompFactResThirdComponent,
    VfBotWireframeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    FormsModule
  ],
  entryComponents: [
    AppComponentFactoryResolverComponent,
    CompFactResFirstComponent,
    CompFactResSecondComponent,
    CompFactResThirdComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
