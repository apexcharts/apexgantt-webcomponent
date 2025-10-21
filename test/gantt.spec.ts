import { html, render } from 'lit';
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { ApexGanttChart } from '../src/gantt-chart.js';

describe('ApexGanttChart', () => {
  let element: ApexGanttChart;
  let container: HTMLElement;

  beforeAll(() => {
    ApexGanttChart.register();
  });

  beforeEach(async () => {
    vi.clearAllMocks();

    container = document.createElement('div');
    document.body.append(container);

    render(html`<apex-gantt-chart></apex-gantt-chart>`, container);
    element = container.querySelector(ApexGanttChart.tagName) as ApexGanttChart;
    await element.updateComplete;
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('is initialized', async () => {
    expect(element).not.toBeNull();
  });
});
