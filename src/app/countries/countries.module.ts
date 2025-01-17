import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component'
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component'
import { ByCapitalPagesComponent } from './pages/by-capital-pages/by-capital-pages.component'
import { CountryPageComponent } from './pages/country-page/country-page.component'
import { CountriesRoutingModule } from './countries-routing.module'
import { SharedModule } from '../shared/shared.module'

@NgModule({
    declarations: [
        ByCountryPageComponent,
        ByRegionPageComponent,
        ByCapitalPagesComponent,
        CountryPageComponent,
    ],
    imports: [CommonModule, CountriesRoutingModule, SharedModule],
})
export class CountriesModule {}
