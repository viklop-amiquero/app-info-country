import { Component, OnInit } from '@angular/core'
import { Country } from '../../interfaces/countries.interface'
import { CountriesService } from '../../services/countries.service'
import { Region } from '../../interfaces/region.type'

@Component({
    selector: 'app-by-region-page',
    templateUrl: './by-region-page.component.html',
    styleUrl: './by-region-page.component.css',
})
export class ByRegionPageComponent implements OnInit {
    public countries: Country[] = []
    public spinner: boolean = false
    public regionSelected?: Region
    public regions: Region[] = [
        'america',
        'asia',
        'africa',
        'oceania',
        'europe',
    ]

    constructor(private _countriesService: CountriesService) {}
    ngOnInit(): void {
        this.countries = this._countriesService.cacheStore.byRegion.countries
        this.regionSelected = this._countriesService.cacheStore.byRegion.term
    }

    searchByRegion(data: Region) {
        this.regionSelected = data
        this.spinner = true
        this._countriesService.searchRegion(data).subscribe((resp) => {
            this.spinner = false
            this.countries = resp
        })
    }
}
