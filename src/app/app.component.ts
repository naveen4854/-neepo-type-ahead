import { Component, OnInit } from '@angular/core';
import TypeAheadInput from './modules/type-ahead/models/TypeAheadInput';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  inputObj: TypeAheadInput

  ngOnInit(): void {
    this.inputObj = {
      classes: "",
      autoSelect: false,
      value: '',
      tabValue: 1,
      displayColumn: '',
      data: [{name:'nav'},{name:'aa'},{name:'ff'}],
      id: 'a',
      maxResult: 5,
      minLengthToShowResult: 1,
      placeholder: 'haha',
      searchColumn: 'name',
      showFloatingLable: false,
      customEvent: '',
      showResultAlways: false,
      showResultOnFocus: true
    }
  }
  title = 'type-ahead';


}
