import { Component } from '@angular/core'
import { Country } from '../../interfaces/countries.interface'
import { CountriesService } from '../../services/countries.service'

@Component({
    selector: 'app-by-country-page',
    templateUrl: './by-country-page.component.html',
    styleUrl: './by-country-page.component.css',
})
export class ByCountryPageComponent {
    public countries: Country[] = []

    constructor(private _countriesService: CountriesService) {}

    searchByCountry(value: string) {
        this._countriesService.searchCountry(value).subscribe((resp) => {
            this.countries = resp
            console.log(this.countries)
        })
    }
}
