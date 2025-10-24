import type { GanttUserOptions, TaskInput } from 'apexgantt';
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { ApexModelController } from './controller.js';
import { registerComponent } from './register.js';

export class ApexGanttChart extends LitElement {
  static readonly tagName = 'apex-gantt-chart';

  static register(): void {
    registerComponent(ApexGanttChart);
  }

  private readonly _container = createRef<HTMLDivElement>();
  private readonly _model = new ApexModelController(this, this._container);

  @property({ attribute: false })
  set options(value: GanttUserOptions) {
    this._model.options = value;
  }

  get options(): GanttUserOptions | undefined {
    return this._model.options;
  }

  updateTask(taskId: string, updatedTask: Partial<TaskInput>): void {
    this._model.updateTask(taskId, updatedTask);
  }

  updateOptions(options: GanttUserOptions): void {
    this._model.options = options;
  }

  zoomIn(): void {
    this._model.zoomIn();
  }

  zoomOut(): void {
    this._model.zoomOut();
  }

  protected override render() {
    return html`<div ${ref(this._container)}></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'apex-gantt-chart': ApexGanttChart;
  }
}
