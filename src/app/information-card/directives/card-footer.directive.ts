import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[appCardFooter]'
})
export class CardFooterDirective {
    constructor(public tpl: TemplateRef<any>) { }
}
