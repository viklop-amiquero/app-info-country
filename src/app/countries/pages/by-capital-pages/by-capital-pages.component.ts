import { Component } from '@angular/core'
import { CountriesService } from '../../services/countries.service'
import { Country } from '../../interfaces/countries.interface'

@Component({
    selector: 'app-by-capital-pages',
    templateUrl: './by-capital-pages.component.html',
    styleUrl: './by-capital-pages.component.css',
})
export class ByCapitalPagesComponent {
    public countries: Country[] = []
    constructor(private countryService: CountriesService) {}

    searchByCapital(data: string) {
        this.countryService.searchCapital(data).subscribe((resp) => {
            this.countries = resp
        })
    }
}
