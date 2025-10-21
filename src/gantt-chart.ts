import { ApexGantt, type GanttUserOptions, type Task } from 'apexgantt';
import { LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { registerComponent } from './register.js';

export class ApexGanttChart extends LitElement {
  static readonly tagName = 'apex-gantt-chart';

  static register(): void {
    registerComponent(ApexGanttChart);
  }

  private _options?: GanttUserOptions;
  private _model?: ApexGantt;

  @property({ attribute: false })
  set options(value: GanttUserOptions) {
    this._options = value;
    this._updateOrCreateModel();
  }

  get options(): GanttUserOptions | undefined {
    return this._options;
  }

  private _updateOrCreateModel(): void {
    if (this._options) {
      if (this._model) {
        this._model.update(this._options);
      } else {
        this._model = new ApexGantt(this, this._options);
      }
    }
  }

  protected override createRenderRoot(): this {
    return this;
  }

  protected override updated(): void {
    this._model?.render();
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this._updateOrCreateModel();
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._model?.destroy();
  }

  zoomIn(): void {
    this._model?.zoomIn();
  }

  zoomOut(): void {
    this._model?.zoomOut();
  }

  updateTask(taskId: string, updatedTask: Partial<Task>): void {
    this._model?.updateTask(taskId, updatedTask);
  }

  protected override render(): symbol {
    return nothing;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'apex-gantt-chart': ApexGanttChart;
  }
}
