import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-comp',
  templateUrl: './switch-comp.component.html',
  styleUrls: ['./switch-comp.component.css'],
})
export class SwitchCompComponent {
  selectedCountry!: string;
  countries: any[] = [
    { code: 'ind', country: 'india' },
    { code: 'usa', country: 'america' },
    { code: 'uk', country: 'london' },
  ];
  choice(code) {
    this.selectedCountry = code;
  }
}
