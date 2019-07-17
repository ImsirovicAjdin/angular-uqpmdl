import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div>
      Parent Component
    </div>
  `
})
export class AppComponent  {
  vehicles = [
    { 
      id: 1,
      make: 'Toyota'
    },
    {
      id: 2,
      make: 'Subaru'
    }
  ]
}
