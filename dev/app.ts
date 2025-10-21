/** biome-ignore-all lint/suspicious/noExplicitAny: Fix any casts once the types are fixed in the gantt package. */

import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ApexGanttChart } from '../src/gantt-chart.js';
import { annotationsConfig, basicConfig, withInteractions } from './config.js';

ApexGanttChart.register();

@customElement('gantt-sample-light-dom')
export class AppLight extends LitElement {
  protected override createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  protected override render() {
    return html`
      <h1>Light DOM</h1>
      <p class="title">Basic</p>
      <apex-gantt-chart .options=${basicConfig as any}></apex-gantt-chart>

      <p class="title">Gantt with annotations</p>
      <apex-gantt-chart .options=${annotationsConfig as any}></apex-gantt-chart>

      <p class="title">Gantt with interactions</p>
      <apex-gantt-chart .options=${withInteractions as any}></apex-gantt-chart>
    `;
  }
}

@customElement('gantt-sample-shadow-dom')
export class AppShadow extends LitElement {
  static override styles = css`
    apex-gantt-chart {
      margin: 0 1rem;
    }

    .title {
      font-size: 2rem;
    }
  `;

  protected override render() {
    return html`
      <h1>Shadow DOM</h1>
      <p class="title">Basic</p>
      <apex-gantt-chart .options=${basicConfig as any}></apex-gantt-chart>

      <p class="title">Gantt with annotations</p>
      <apex-gantt-chart .options=${annotationsConfig as any}></apex-gantt-chart>

      <p class="title">Gantt with interactions</p>
      <apex-gantt-chart .options=${withInteractions as any}></apex-gantt-chart>
    `;
  }
}
