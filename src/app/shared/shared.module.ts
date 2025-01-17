import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { AboutPageComponent } from './pages/about-page/about-page.component'
import { ContactPageComponent } from './pages/contact-page/contact-page.component'
import { RouterModule } from '@angular/router'
import { SearchBoxComponent } from './components/search-box/search-box.component'

@NgModule({
    declarations: [
        SidebarComponent,
        HomePageComponent,
        AboutPageComponent,
        ContactPageComponent,
        SearchBoxComponent,
    ],
    imports: [CommonModule, RouterModule],
    exports: [SidebarComponent, SearchBoxComponent],
})
export class SharedModule {}
