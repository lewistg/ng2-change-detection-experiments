import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NodeComponent } from './node.component';
import { GraphComponent } from './graph.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, NodeComponent, GraphComponent ],
  entryComponents: [NodeComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
