import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { CountriesService } from '../../services/countries.service'
import { switchMap } from 'rxjs'
import { Country } from '../../interfaces/countries.interface'

@Component({
    selector: 'app-country-page',
    templateUrl: './country-page.component.html',
    styleUrl: './country-page.component.css',
})
export class CountryPageComponent implements OnInit {
    constructor(
        private _activateRoute: ActivatedRoute,
        private _router: Router,
        private _countriesServie: CountriesService
    ) {}

    public country?: Country

    ngOnInit(): void {
        this._activateRoute.params
            .pipe(switchMap(({ id }) => this._countriesServie.searchById(id)))

            .subscribe((resp) => {
                if (!resp) return this._router.navigateByUrl('')
                this.country = resp
                return
            })
    }
}
