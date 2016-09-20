import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import { NodeComponent, NodeComponentIndex } from './node.component';

@Component({
  selector: 'graph',
  template: `
    <div>
      <div #nodeAnchor></div>
      <canvas></canvas>
    </div>
  `
})
export class GraphComponent implements AfterViewInit {
  private levels: number = 3;
  @ViewChild('nodeAnchor', {read: ViewContainerRef}) nodeAnchor: ViewContainerRef;

  constructor(private factoryResolver: ComponentFactoryResolver) {
  }

  ngAfterViewInit() {
    let componentFactory = this.factoryResolver.resolveComponentFactory(NodeComponent);
    let nodeComponentRef = this.nodeAnchor.createComponent(componentFactory);
    nodeComponentRef.instance.index = { row: 0, col: 0 };
  }
}
