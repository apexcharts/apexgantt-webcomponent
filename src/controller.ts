import { ApexGantt, type GanttUserOptions, type TaskInput } from 'apexgantt';
import type { ReactiveController, ReactiveControllerHost } from 'lit';
import type { Ref } from 'lit/directives/ref.js';

export class ApexModelController implements ReactiveController {
  private readonly _host: ReactiveControllerHost;
  private readonly _containerRef: Ref<HTMLDivElement>;

  private _options?: GanttUserOptions;
  private _model?: ApexGantt | null;

  private get _container(): HTMLDivElement | undefined {
    return this._containerRef.value;
  }

  public set options(options: GanttUserOptions) {
    this._options = options;
    this._model?.update(options);
    this._host.requestUpdate();
  }

  public get options(): GanttUserOptions | undefined {
    return this._options;
  }

  constructor(host: ReactiveControllerHost, container: Ref<HTMLDivElement>) {
    this._host = host;
    this._containerRef = container;
    host.addController(this);
  }

  hostDisconnected(): void {
    this._model?.destroy();
    this._model = null;
  }

  hostUpdate(): void {
    if (this._model) {
      this._model.render();
    }
  }

  hostUpdated(): void {
    if (!this._model && this._container && this._options) {
      this._model = new ApexGantt(this._container, this._options);
      this._model.render();
    }
  }

  updateTask(taskId: string, updatedTask: Partial<TaskInput>): void {
    this._model?.updateTask(taskId, updatedTask);
  }

  zoomIn(): void {
    this._model?.zoomIn();
  }

  zoomOut(): void {
    this._model?.zoomOut();
  }
}
