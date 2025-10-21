/** biome-ignore-all lint/suspicious/noExplicitAny: Fix any casts once the types are fixed in the gantt package. */

import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ApexGanttChart } from '../src/gantt-chart.js';
import { annotationsConfig, basicConfig, withInteractions } from './config.js';

@customElement('gantt-sample')
export class App extends LitElement {
  constructor() {
    super();
    ApexGanttChart.register();
  }

  protected override createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  protected override render() {
    return html`
      <p class="title">Basic</p>
      <apex-gantt-chart .options=${basicConfig as any}></apex-gantt-chart>

      <p class="title">Gantt with annotations</p>
      <apex-gantt-chart .options=${annotationsConfig as any}></apex-gantt-chart>

      <p class="title">Gantt with interactions</p>
      <apex-gantt-chart .options=${withInteractions as any}></apex-gantt-chart>
    `;
  }
}
