import { Component, OnInit } from '@angular/core'
import { Country } from '../../interfaces/countries.interface'
import { CountriesService } from '../../services/countries.service'

@Component({
    selector: 'app-by-country-page',
    templateUrl: './by-country-page.component.html',
    styleUrl: './by-country-page.component.css',
})
export class ByCountryPageComponent implements OnInit {
    public countries: Country[] = []
    public initialValue: string = ''
    public spinner: boolean = false

    constructor(private _countriesService: CountriesService) {}

    ngOnInit(): void {
        this.countries = this._countriesService.cacheStore.byCountries.countries
        this.initialValue = this._countriesService.cacheStore.byCountries.term
    }

    searchByCountry(value: string) {
        this.spinner = true
        this._countriesService.searchCountry(value).subscribe((resp) => {
            this.spinner = false
            this.countries = resp
            console.log(this.countries)
        })
    }
}
