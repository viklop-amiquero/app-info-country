import {
    Component,
    ElementRef,
    EventEmitter,
    Output,
    ViewChild,
} from '@angular/core'

@Component({
    selector: 'shared-search-box',
    templateUrl: './search-box.component.html',
    styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
    // public placeholder: string = ''

    @ViewChild('tagTxtInput')
    public txtInput!: ElementRef<HTMLInputElement>

    @Output()
    public onValue = new EventEmitter<string>()

    onEventEmit() {
        this.onValue.emit(this.txtInput.nativeElement.value)
        this.txtInput.nativeElement.value = ''
    }
}
