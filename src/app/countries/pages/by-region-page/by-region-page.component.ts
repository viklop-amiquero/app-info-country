import { Component } from '@angular/core'
import { Country } from '../../interfaces/countries.interface'
import { CountriesService } from '../../services/countries.service'

@Component({
    selector: 'app-by-region-page',
    templateUrl: './by-region-page.component.html',
    styleUrl: './by-region-page.component.css',
})
export class ByRegionPageComponent {
    public countries: Country[] = []

    constructor(private _countriesService: CountriesService) {}

    searchByRegion(data: string) {
        this._countriesService.searchRegion(data).subscribe((resp) => {
            this.countries = resp
            console.log(this.countries)
        })
    }
}
