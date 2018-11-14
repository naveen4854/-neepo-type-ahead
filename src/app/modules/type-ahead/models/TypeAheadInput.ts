export default class TypeAheadInput {
    classes: string;
    data: Array<Object>;
    id: string;
    placeholder: string;
    customEvent: string;
    showResultOnFocus: boolean;
    minLengthToShowResult: number;
    showFloatingLable: boolean;
    searchColumn: string;
    displayColumn: string;
    value: any;
    autoSelect: boolean = false;
    maxResult: number;
    showResultAlways: boolean = false;
    tabValue: number;
}