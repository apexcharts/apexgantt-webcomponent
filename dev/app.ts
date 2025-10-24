import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ApexGanttChart } from '../src/gantt-chart.js';
import {
  annotationsConfig,
  basicConfig,
  customColors,
  milestones,
  resourceManagement,
  withInteractions,
} from './config.js';

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
      <apex-gantt-chart .options=${basicConfig}></apex-gantt-chart>

      <p class="title">Gantt with annotations</p>
      <apex-gantt-chart .options=${annotationsConfig}></apex-gantt-chart>

      <p class="title">Gantt with interactions</p>
      <apex-gantt-chart .options=${withInteractions}></apex-gantt-chart>

      <p class="title">Gantt with custom colors</p>
      <apex-gantt-chart .options=${customColors}></apex-gantt-chart>

      <p class="title">Milestones</p>
      <apex-gantt-chart .options=${milestones}></apex-gantt-chart>

      <p class="title">Resource management</p>
      <apex-gantt-chart .options=${resourceManagement}></apex-gantt-chart>
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
      <apex-gantt-chart .options=${basicConfig}></apex-gantt-chart>

      <p class="title">Gantt with annotations</p>
      <apex-gantt-chart .options=${annotationsConfig}></apex-gantt-chart>

      <p class="title">Gantt with interactions</p>
      <apex-gantt-chart .options=${withInteractions}></apex-gantt-chart>

      <p class="title">Gantt with custom colors</p>
      <apex-gantt-chart .options=${customColors}></apex-gantt-chart>

      <p class="title">Milestones</p>
      <apex-gantt-chart .options=${milestones}></apex-gantt-chart>

      <p class="title">Resource management</p>
      <apex-gantt-chart .options=${resourceManagement}></apex-gantt-chart>
    `;
  }
}
