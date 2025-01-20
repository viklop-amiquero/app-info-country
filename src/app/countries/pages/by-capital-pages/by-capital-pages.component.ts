import { Component, OnInit } from '@angular/core'
import { CountriesService } from '../../services/countries.service'
import { Country } from '../../interfaces/countries.interface'

@Component({
    selector: 'app-by-capital-pages',
    templateUrl: './by-capital-pages.component.html',
    styleUrl: './by-capital-pages.component.css',
})
export class ByCapitalPagesComponent implements OnInit {
    public countries: Country[] = []
    public initialValue: string = ''
    public spinner: boolean = false

    constructor(private countryService: CountriesService) {}

    ngOnInit(): void {
        this.countries = this.countryService.cacheStore.byCapital.countries
        this.initialValue = this.countryService.cacheStore.byCapital.term
    }

    searchByCapital(data: string) {
        this.spinner = true
        this.countryService.searchCapital(data).subscribe((resp) => {
            this.countries = resp
            this.spinner = false
        })
    }
}
