import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/services/auth-guard.service';
import { PageChartsComponent } from './components/pages/charts/charts.component';
import { PageDashboardComponent } from './components/pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/pages/not-found/not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PageWidgetsComponent } from './components/pages/widgets/widgets.component';
import { PageTablesComponent } from './components/pages/tables/tables.component';
import { PageGridComponent } from './components/pages/grid/grid.component';
import { PageButtonsComponent } from './components/pages/buttons/buttons.component';
import { PageTypographyComponent } from './components/pages/typography/typography.component';
import { PageIconsComponent } from './components/pages/icons/icons.component';
import { PageNavsComponent } from './components/pages/navs/navs.component';
import { PageBadgesComponent } from './components/pages/badges/badges.component';
import { PageProgressComponent } from './components/pages/progress/progress.component';
import { PageFormsComponent } from './components/pages/forms/forms.component';

const coreRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      component: PageDashboardComponent
    }]
  },
  {
    path: 'charts',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      component: PageChartsComponent
    }]
  },
  {
    path: 'widgets',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      component: PageWidgetsComponent
    }]
  },
  {
    path: 'tables',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      component: PageTablesComponent
    }]
  },
  {
    path: 'grid',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      component: PageGridComponent
    }]
  },
  {
    path: 'buttons',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      component: PageButtonsComponent
    }]
  },
  {
    path: 'typography',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      component: PageTypographyComponent
    }]
  },
  {
    path: 'icons',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      component: PageIconsComponent
    }]
  },
  {
    path: 'navs',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      component: PageNavsComponent
    }]
  },
  {
    path: 'badges',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      component: PageBadgesComponent
    }]
  },
  {
    path: 'progress',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      component: PageProgressComponent
    }]
  },
  {
    path: 'forms',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      component: PageFormsComponent
    }]
  },
  {
    path: '404',
    component: PageNotFoundComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(coreRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule {
}
