# ApexGantt Web Component

[![npm version](https://img.shields.io/npm/v/apexgantt-webcomponent.svg)](https://www.npmjs.com/package/apexgantt-webcomponent)

A modern, lightweight web component wrapper for [ApexGantt](https://apexcharts.com/apexgantt/), built with [Lit](https://lit.dev/). Create interactive Gantt charts with minimal setup and maximum flexibility.

## Features

- 🎯 **Framework Agnostic** - Works with React, Vue, Angular, or vanilla JavaScript
- 🚀 **Lightweight** - Built on Lit for optimal performance
- 🎨 **Fully Customizable** - Extensive configuration options
- 📱 **Responsive** - Adapts to different screen sizes
- 🔄 **Dynamic Updates** - Update tasks and options on the fly
- 📊 **Zoom Controls** - Built-in zoom in/out functionality
- 🎯 **TypeScript Support** - Full type definitions included

## Installation

```bash
npm install apexgantt-webcomponent
```

## Quick Start

### 1. Register the Component

```javascript
import { ApexGanttChart } from 'apexgantt-webcomponent';

// Register the custom element
ApexGanttChart.register();
```

### 2. Add to Your HTML

```html
<apex-gantt-chart id="gantt"></apex-gantt-chart>
```

### 3. Configure Your Gantt Chart

```javascript
const ganttChart = document.querySelector('#gantt');

ganttChart.options = {
  tasks: [
    {
      id: '1',
      name: 'Project Planning',
      start: '2025-01-01',
      end: '2025-01-15',
      progress: 100
    },
    {
      id: '2',
      name: 'Development',
      start: '2025-01-16',
      end: '2025-03-31',
      progress: 45,
      dependencies: '1'
    },
    {
      id: '3',
      name: 'Testing',
      start: '2025-04-01',
      end: '2025-04-30',
      progress: 0,
      dependencies: '2'
    }
  ],
  viewMode: 'Week'
};
```

## Usage with Frameworks

### React

```jsx
import { useEffect, useRef } from 'react';
import { ApexGanttChart } from 'apexgantt-webcomponent';

// Register once in your app
ApexGanttChart.register();

function GanttComponent() {
  const ganttRef = useRef(null);

  useEffect(() => {
    if (ganttRef.current) {
      ganttRef.current.options = {
        tasks: [
          // Your tasks here
        ],
        viewMode: 'Month'
      };
    }
  }, []);

  return <apex-gantt-chart ref={ganttRef} />;
}
```

### Vue 3

```ts
<template>
  <apex-gantt-chart ref="ganttRef"></apex-gantt-chart>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ApexGanttChart } from 'apexgantt-webcomponent';

// Register once in your app
ApexGanttChart.register();

const ganttRef = ref(null);

onMounted(() => {
  ganttRef.value.options = {
    tasks: [
      // Your tasks here
    ],
    viewMode: 'Day'
  };
});
</script>
```

### Angular

```typescript
import { Component, OnInit, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApexGanttChart } from 'apexgantt-webcomponent';

// Register once in your app (e.g., in main.ts)
ApexGanttChart.register();

@Component({
  selector: 'app-gantt',
  template: '<apex-gantt-chart #gantt></apex-gantt-chart>',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GanttComponent implements OnInit {
  @ViewChild('gantt') gantt!: ElementRef;

  ngOnInit() {
    this.gantt.nativeElement.options = {
      tasks: [
        // Your tasks here
      ]
    };
  }
}
```

## API Reference

### Properties

#### `options`

Type: `GanttUserOptions`

The main configuration object for the Gantt chart. Includes tasks, view mode, and other settings.

```javascript
ganttChart.options = {
  tasks: [...],
  viewMode: 'Week',
  // Additional configuration options
};
```

### Methods

#### `updateTask(taskId, updatedTask)`

Updates a specific task with new data.

```javascript
ganttChart.updateTask('task-1', {
  progress: 75,
  end: '2025-02-15'
});
```

#### `updateOptions(options)`

Updates the entire Gantt chart configuration.

```javascript
ganttChart.updateOptions({
  tasks: [...],
  viewMode: 'Month'
});
```

#### `zoomIn()`

Zooms in the Gantt chart (Year → Quarter → Month → Week → Day).

```javascript
ganttChart.zoomIn();
```

#### `zoomOut()`

Zooms out the Gantt chart (Day → Week → Month → Quarter → Year).

```javascript
ganttChart.zoomOut();
```

### Events

The component emits the following custom events:

- `gantt-task-update` - Fired when a task is being updated
- `gantt-task-update-success` - Fired when a task update succeeds
- `gantt-task-update-error` - Fired when a task update fails
- `gantt-task-validation-error` - Fired when task validation fails

```javascript
ganttChart.addEventListener('gantt-task-update-success', (event) => {
  console.log('Task updated:', event.detail);
});
```

## Configuration Options

For a complete list of configuration options, please refer to the [ApexGantt documentation](https://apexcharts.com/apexgantt/docs/options/).

## Development

### Prerequisites

- Node.js (v20 or higher recommended)
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/apexcharts/apexgantt-webcomponent.git

# Install dependencies
npm install

# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build
```

### Scripts

- `npm start` - Start development server with live reload
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Lint code
- `npm run fix` - Fix linting issues

## Browser Support

This component works in all modern browsers that support:
- Custom Elements (Web Components)
- ES Modules
- ES2020 features

For older browsers, you may need polyfills.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

ISC

## Links

- [Documentation](https://apexcharts.com/apexgantt/docs/)
- [GitHub Repository](https://github.com/apexcharts/apexgantt-webcomponent)
- [Issue Tracker](https://github.com/apexcharts/apexgantt-webcomponent/issues)
- [ApexCharts](https://apexcharts.com/)

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/apexcharts/apexgantt-webcomponent/issues) on GitHub.
