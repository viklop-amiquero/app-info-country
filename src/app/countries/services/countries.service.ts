import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Country } from '../interfaces/countries.interface'
import { catchError, Observable, of, map, tap } from 'rxjs'
import { CacheStore } from '../interfaces/cache-sotre.interface'
import { Region } from '../interfaces/region.type'

@Injectable({
    providedIn: 'root',
})
export class CountriesService {
    private _apiUrl = 'https://restcountries.com/v3.1'

    public cacheStore: CacheStore = {
        byCapital: {
            term: '',
            countries: [],
        },
        byCountries: {
            term: '',
            countries: [],
        },
        byRegion: {
            countries: [],
        },
    }

    constructor(private _http: HttpClient) {
        this.loadLocalStorage()
    }

    private getCountryRequest(url: string): Observable<Country[]> {
        return this._http.get<Country[]>(url).pipe(catchError(() => of([])))
    }

    public saveLocalStorage(): void {
        localStorage.setItem('cacheStorage', JSON.stringify(this.cacheStore))
    }

    public loadLocalStorage(): void {
        if (!localStorage.getItem('cacheStorage')) return
        this.cacheStore = JSON.parse(localStorage.getItem('cacheStorage')!)
    }

    searchCapital(term: string): Observable<Country[]> {
        const url = `${this._apiUrl}/capital/${term}`
        return this.getCountryRequest(url).pipe(
            tap(
                (countries) => (this.cacheStore.byCapital = { term, countries })
            ),
            tap(() => this.saveLocalStorage())
        )
    }

    searchCountry(term: string): Observable<Country[]> {
        const url = `${this._apiUrl}/name/${term}`
        return this.getCountryRequest(url).pipe(
            tap(
                (countries) =>
                    (this.cacheStore.byCountries = { term, countries })
            ),
            tap(() => this.saveLocalStorage())
        )
    }

    searchRegion(term: Region): Observable<Country[]> {
        const url = `${this._apiUrl}/region/${term}`
        return this.getCountryRequest(url).pipe(
            tap(
                (countries) => (this.cacheStore.byRegion = { countries, term })
            ),
            tap(() => this.saveLocalStorage())
        )
    }

    searchById(id: string): Observable<Country | null> {
        const url = `${this._apiUrl}/alpha/${id}`

        return this._http.get<Country[]>(url).pipe(
            map((countries) => (countries.length > 0 ? countries[0] : null)),
            catchError(() => of(null))
        )
    }
}
