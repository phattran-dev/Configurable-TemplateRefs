import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { CardBodyDirective } from './directives/card-body.directive';
import { CardFooterDirective } from './directives/card-footer.directive';
import { CardHeaderDirective } from './directives/card-header.directive';

@Component({
  selector: 'app-information-card-component',
  templateUrl: './information-card-component.component.html',
  styleUrls: ['./information-card-component.component.scss']
})
export class InformationCardComponent implements OnInit {

  @ContentChild(CardHeaderDirective, { static: true, read: TemplateRef }) cardHeaderTpl: TemplateRef<any>;
  @ContentChild(CardBodyDirective, { static: true, read: TemplateRef }) cardBodyTpl: TemplateRef<any>;
  @ContentChild(CardFooterDirective, { static: true, read: TemplateRef }) cardFooterTpl: TemplateRef<any>;

  get cardHeaderTplContext(): object {
    return { $implicit: this.title };
  }

  get cardBodyTplContext(): object {
    return { $implicit: this.content };
  }

  get cardFooterTplContext(): object {
    return { $implicit: this.author };
  }

  @Input() title = '';
  @Input() content = '';
  @Input() author = '';

  constructor() { }

  ngOnInit(): void {
  }

}
