import { Component, Input } from '@angular/core';

export interface NodeComponentIndex {
  row: number;
  col: number;
}

@Component({
    selector: 'node',
    template: '<div>Component</div>'
})
export class NodeComponent {
  index: NodeComponentIndex;
}
