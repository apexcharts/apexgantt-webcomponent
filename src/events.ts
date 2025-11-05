import type {
  TaskUpdateErrorEventDetail,
  TaskUpdateEventDetail,
  TaskUpdateSuccessEventDetail,
  TaskValidationErrorEventDetail,
} from 'apexgantt';
import type { ApexGanttChart } from './gantt-chart.js';

type TypedEvent<T extends EventTarget, D = unknown> = CustomEvent<D> & { target: T };

export type GanttTaskUpdateEvent = TypedEvent<ApexGanttChart, TaskUpdateEventDetail>;
export type GanttTaskUpdateSuccessEvent = TypedEvent<ApexGanttChart, TaskUpdateSuccessEventDetail>;
export type GanttTaskValidationErrorEvent = TypedEvent<
  ApexGanttChart,
  TaskValidationErrorEventDetail
>;
export type GanttTaskUpdateErrorEvent = TypedEvent<ApexGanttChart, TaskUpdateErrorEventDetail>;

declare global {
  interface GlobalEventHandlersEventMap {
    taskUpdate: GanttTaskUpdateEvent;
    taskUpdateSuccess: GanttTaskUpdateSuccessEvent;
    taskValidationError: GanttTaskValidationErrorEvent;
    taskUpdateError: GanttTaskUpdateErrorEvent;
  }
}
