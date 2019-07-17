import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-child',
    template: `
        <div style="display: inline-block; width: 140px; background: plum; color: white; margin:10px; padding: 20px;">
            Child component
            <div>{{car.id}}</div>
            <div>{{car.make}}</div>
        </div>
    `
})
export class AppChildComponent {
    @Input() car;
}