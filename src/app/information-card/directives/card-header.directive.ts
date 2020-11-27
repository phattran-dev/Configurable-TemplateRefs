import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[appCardHeader]'
})
export class CardHeaderDirective {
    constructor(public tpl: TemplateRef<any>) { }
}
