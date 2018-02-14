import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutNavComponent } from './components/layout/nav/nav.component';
import { LayoutFooterComponent } from './components/layout/footer/footer.component';
import { LayoutSidebarLeftComponent } from './components/layout/sidebar-left/sidebar-left.component';
import { LayoutSidebarRightComponent } from './components/layout/sidebar-right/sidebar-right.component';
import { LayoutToolbarComponent } from './components/layout/toolbar/toolbar.component';
import { DataService } from './services/data.service';
import { PageButtonsComponent } from './components/pages/buttons/buttons.component';
import { PageTypographyComponent } from './components/pages/typography/typography.component';
import { PageIconsComponent } from './components/pages/icons/icons.component';
import { PageNavsComponent } from './components/pages/navs/navs.component';
import { PageBadgesComponent } from './components/pages/badges/badges.component';
import { PageProgressComponent } from './components/pages/progress/progress.component';
import { PageFormsComponent } from './components/pages/forms/forms.component';
import { PageChartsComponent } from './components/pages/charts/charts.component';
import { PageDashboardComponent } from './components/pages/dashboard/dashboard.component';
import { PageWidgetsComponent } from './components/pages/widgets/widgets.component';
import { PageTablesComponent } from './components/pages/tables/tables.component';
import { PageGridComponent } from './components/pages/grid/grid.component';
import { PageNotFoundComponent } from './components/pages/not-found/not-found.component';


@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    ChartsModule,
    NgbModule
  ],
  declarations: [
    LayoutComponent,
    LayoutNavComponent,
    LayoutFooterComponent,
    LayoutSidebarLeftComponent,
    LayoutSidebarRightComponent,
    LayoutToolbarComponent,
    PageDashboardComponent,
    PageChartsComponent,
    PageWidgetsComponent,
    PageTablesComponent,
    PageGridComponent,
    PageButtonsComponent,
    PageTypographyComponent,
    PageIconsComponent,
    PageNavsComponent,
    PageBadgesComponent,
    PageProgressComponent,
    PageFormsComponent,
    PageNotFoundComponent
  ],
  providers: [
    DataService
  ],
})
export class MainModule {
}
