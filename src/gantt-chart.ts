import type { GanttUserOptions, TaskInput } from 'apexgantt';
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { ApexModelController } from './controller.js';
import { registerComponent } from './register.js';

/**
 * Web component for rendering Gantt charts using ApexGantt library.
 *
 * @element apex-gantt-chart
 *
 * @example
 * - Basic usage:
 *
 * ```html
 * <apex-gantt-chart></apex-gantt-chart>
 * ```
 *
 * - Setting options and tasks:
 * ```ts
 * const ganttChart = document.querySelector('apex-gantt-chart');
 * ganttChart.options = {
 *   // Gantt chart configuration and tasks
 * };
 * ```
 */
export class ApexGanttChart extends LitElement {
  static readonly tagName = 'apex-gantt-chart';

  /** Registers the custom element with the browser. */
  static register(): void {
    registerComponent(ApexGanttChart);
  }

  private readonly _container = createRef<HTMLDivElement>();
  private readonly _model = new ApexModelController(this, this._container);

  /**
   * Gantt chart options and task data.
   *
   * See {@link GanttUserOptions} for available configuration options as well
   * as the [full documentation](https://apexcharts.com/apexgantt/docs/options/).
   */
  @property({ attribute: false })
  set options(value: GanttUserOptions) {
    this._model.options = value;
  }

  get options(): GanttUserOptions | undefined {
    return this._model.options;
  }

  /**
   * Updates the specific task with provided task data.
   */
  updateTask(taskId: string, updatedTask: Partial<TaskInput>): void {
    this._model.updateTask(taskId, updatedTask);
  }

  /**
   * Updates the entire Gantt chart with new configuration and task data.
   */
  updateOptions(options: GanttUserOptions): void {
    this._model.options = options;
  }

  /**
   * Zooms in the gantt based on current view mode.
   * View mode direction for zoom in year -> quarter -> month -> week -> day
   */
  zoomIn(): void {
    this._model.zoomIn();
  }

  /**
   * Zooms out the gantt based on current view mode.
   * View mode direction for zoom in day -> week -> month -> quarter -> year
   */
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
