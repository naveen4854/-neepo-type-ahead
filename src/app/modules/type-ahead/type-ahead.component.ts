import { Component, OnInit, EventEmitter, Input, Output, AfterViewInit, OnChanges } from '@angular/core';
import TypeAheadInput from './models/TypeAheadInput';

@Component({
  selector: 'type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.css']
})
export class TypeAheadComponent implements AfterViewInit, OnChanges {

  @Input() input: TypeAheadInput;
  @Output() typeAheadOnChange = new EventEmitter();
  @Output() typeAheadOnSelect = new EventEmitter();
  @Output() typeAheadOnBlur = new EventEmitter();
  text: string;
  results: any[];
  showResults: boolean = false;
  selectedResult: any;
  inFocusZone: boolean = false;
  search(value) {
    this.results = [];
    this.input.data.forEach(result => {
      if (result[this.input.searchColumn].indexOf(value) > -1)
        this.results.push(result)
    });
  }
  // check(event) {
  //     this.input.newData.forEach(element => {
  //         if (element[this.input.searchColumn] == event.query)
  //             this.typeAheadOnChange.emit(element);
  //     });
  // }
  ngAfterViewInit() {
  }
  onInputFocusIn(event) {
    this.showResults = true;
  }
  onInputFocusOut(event) {
    if (!this.inFocusZone)
      this.showResults = false;
    this.typeAheadOnBlur.emit(event);
  }
  onResultFocus(event) {
    // event.preventDefault();
    // event.stopPropagation();
  }
  onResultBlurFocus(event) {
    this.typeAheadOnBlur.emit(event);
    // event.preventDefault();
    // event.stopPropagation();
  }

  mouseEnter(event) {
    this.inFocusZone = true;
  }

  mouseLeave(event) {
    this.inFocusZone = false;
  }

  onInputChange(event) {
    this.search(event.target.value)
  }

  onValueSelected(event, value) {
    this.selectedResult = value;
    this.text = value[this.input.searchColumn]
    this.showResults = false;
    this.typeAheadOnSelect.emit(value);
  }

  ngOnChanges(changes) {
    this.text = this.input.value || '';
    this.results = [];
    if (this.input.data)
      this.input.data.forEach(result => {
        this.results.push(result)
      });
  }


}
