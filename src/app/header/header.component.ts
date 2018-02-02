import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{
    @Output() onFeatureClick = new EventEmitter<string>();
    
    onFeatureClicked(feature: string) {
        this.onFeatureClick.emit(feature);
    }
}