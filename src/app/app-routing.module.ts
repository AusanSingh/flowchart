import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialAnimationComponent } from './material-animation/material-animation.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { AppComponentFactoryResolverComponent } from './component-factory-resolver/app-component-factory-resolver/app-component-factory-resolver.component';
import { VfBotWireframeComponent } from './vf-bot-wireframe/vf-bot-wireframe.component';

const routes: Routes = [
    {
        path:'vf-bot-wireframe',
        component: VfBotWireframeComponent
    },    
    {
        path:'component-factory-resolver',
        component: AppComponentFactoryResolverComponent
    },    
    {
        path:'angular-material',
        component: MaterialAnimationComponent
    },    
    {
        path:'pie-chart',
        component: PieChartComponent
    },    
    {
        path:'bar-chart',
        component: BarChartComponent
    },    
    {
        path:'line-chart',
        component: LineChartComponent
    },    
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes,{ enableTracing: false })
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{

}