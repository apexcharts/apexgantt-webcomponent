import { type GanttUserOptions, type TaskInput, ViewMode } from 'apexgantt';

export const basicConfig: GanttUserOptions = {
  enableTaskDrag: false,
  enableTaskResize: false,
  series: [
    {
      id: 'a',
      startTime: '10-11-2024',
      endTime: '11-01-2024',
      name: 'task 1',
      progress: 65,
    },
    {
      id: '5',
      startTime: '10-11-2024',
      endTime: '10-26-2024',
      name: 'subtask 1.1',
      parentId: 'a',
      progress: 65,
    },
    {
      id: '9',
      startTime: '10-11-2024',
      endTime: '10-16-2024',
      name: 'subtask 1.1.1',
      parentId: '5',
      progress: 65,
    },
    {
      id: '10',
      startTime: '10-17-2024',
      endTime: '10-26-2024',
      name: 'subtask 1.1.2',
      parentId: '5',
      dependency: '9',
      progress: 65,
    },
    {
      id: '13',
      startTime: '10-17-2024',
      endTime: '10-23-2024',
      name: 'subtask 1.1.2.1',
      parentId: '10',
      progress: 65,
    },
    {
      id: '14',
      startTime: '10-24-2024',
      endTime: '10-26-2024',
      name: 'subtask 1.1.2.2',
      parentId: '10',
      progress: 65,
    },
    {
      id: '14.1',
      startTime: '10-27-2024',
      name: 'Task 2 Milestone',
      parentId: '10',
      dependency: '14',
      type: 'milestone',
    },
    {
      id: '6',
      startTime: '10-28-2024',
      endTime: '11-01-2024',
      name: 'subtask 1.2',
      parentId: 'a',
      progress: 65,
    },
    {
      id: 'b',
      startTime: '11-02-2024',
      endTime: '11-15-2024',
      name: 'task 2',
      progress: 25,
    },
    {
      id: '7',
      startTime: '11-02-2024',
      endTime: '11-11-2024',
      name: 'subtask 2.1',
      parentId: 'b',
      dependency: '13',
      progress: 65,
    },
    {
      id: '11',
      startTime: '11-02-2024',
      endTime: '11-06-2024',
      name: 'subtask 2.1.1',
      parentId: '7',
      progress: 65,
    },
    {
      id: '12',
      startTime: '11-07-2024',
      endTime: '11-11-2024',
      name: 'subtask 2.1.2',
      parentId: '7',
      dependency: '11',
      progress: 65,
    },
    {
      id: '12.1',
      startTime: '11-12-2024',
      name: 'Task 2 Milestone',
      parentId: '7',
      dependency: '12',
      type: 'milestone',
    },
    {
      id: '8',
      startTime: '11-13-2024',
      endTime: '11-15-2024',
      name: 'subtask 2.2',
      parentId: 'b',
      dependency: '12.1',
      progress: 65,
    },
    {
      id: 'c',
      startTime: '11-16-2024',
      endTime: '11-25-2024',
      name: 'task 3',
      progress: 75,
    },
    {
      id: 'd',
      startTime: '11-26-2024',
      endTime: '12-01-2024',
      name: 'task 4',
      progress: 50,
    },
    {
      id: 'e',
      startTime: '12-02-2024',
      name: 'Project Milestone',
      dependency: 'd',
      type: 'milestone',
    },
  ],
};

export const annotationsConfig: GanttUserOptions = {
  series: [
    {
      id: 'a',
      startTime: '10-11-2024',
      endTime: '11-01-2024',
      name: 'task 1',
      progress: 65,
    },
    {
      id: '5',
      startTime: '10-11-2024',
      endTime: '10-26-2024',
      name: 'subtask 1.1',
      parentId: 'a',
      progress: 65,
    },
    {
      id: '9',
      startTime: '10-11-2024',
      endTime: '10-16-2024',
      name: 'subtask 1.1.1',
      parentId: '5',
      progress: 65,
    },
    {
      id: '10',
      startTime: '10-17-2024',
      endTime: '10-26-2024',
      name: 'subtask 1.1.2',
      parentId: '5',
      dependency: '9',
      progress: 65,
    },
    {
      id: '13',
      startTime: '10-17-2024',
      endTime: '10-23-2024',
      name: 'subtask 1.1.2.1',
      parentId: '10',
      progress: 65,
    },
    {
      id: '14',
      startTime: '10-24-2024',
      endTime: '10-26-2024',
      name: 'subtask 1.1.2.2',
      parentId: '10',
      progress: 65,
    },
    {
      id: '14.1',
      startTime: '10-27-2024',
      name: 'Task 2 Milestone',
      parentId: '10',
      dependency: '14',
      type: 'milestone',
    },
    {
      id: '6',
      startTime: '10-28-2024',
      endTime: '11-01-2024',
      name: 'subtask 1.2',
      parentId: 'a',
      progress: 65,
    },
    {
      id: 'b',
      startTime: '11-02-2024',
      endTime: '11-15-2024',
      name: 'task 2',
      progress: 25,
    },
    {
      id: '7',
      startTime: '11-02-2024',
      endTime: '11-11-2024',
      name: 'subtask 2.1',
      parentId: 'b',
      dependency: '13',
      progress: 65,
    },
    {
      id: '11',
      startTime: '11-02-2024',
      endTime: '11-06-2024',
      name: 'subtask 2.1.1',
      parentId: '7',
      progress: 65,
    },
    {
      id: '12',
      startTime: '11-07-2024',
      endTime: '11-11-2024',
      name: 'subtask 2.1.2',
      parentId: '7',
      dependency: '11',
      progress: 65,
    },
    {
      id: '12.1',
      startTime: '11-12-2024',
      name: 'Task 2 Milestone',
      parentId: '7',
      dependency: '12',
      type: 'milestone',
    },
    {
      id: '8',
      startTime: '11-13-2024',
      endTime: '11-15-2024',
      name: 'subtask 2.2',
      parentId: 'b',
      dependency: '12.1',
      progress: 65,
    },
    {
      id: 'c',
      startTime: '11-16-2024',
      endTime: '11-25-2024',
      name: 'task 3',
      progress: 75,
    },
    {
      id: 'd',
      startTime: '11-26-2024',
      endTime: '12-01-2024',
      name: 'task 4',
      progress: 50,
    },
    {
      id: 'e',
      startTime: '12-02-2024',
      name: 'Project Milestone',
      dependency: 'd',
      type: 'milestone',
    },
  ],
  annotations: [
    {
      x1: '11-02-2024',
      // x2: "END_DATE", // optional. If present, draw a rect from x1 to x2. If null, only draw line on x1,
      label: {
        text: 'Annotation line',
      },
    },
    {
      x1: '10-25-2024',
      x2: '10-30-2024',
      bgColor: 'rgba(249, 209, 252, 0.25)',
      // x2: "END_DATE", // optional. If present, draw a rect from x1 to x2. If null, only draw line on x1,
      label: {
        text: 'Annotation rect',
      },
    },
  ],
  viewMode: ViewMode.Week,
};

export const withInteractions: GanttUserOptions = {
  enableTooltip: false,
  enableTaskDrag: true,
  enableTaskEdit: true,
  enableTaskResize: true,
  series: [
    {
      id: 'a',
      startTime: '10-11-2024',
      endTime: '11-01-2024',
      name: 'task 1',
      progress: 65,
    },
    {
      id: '5',
      startTime: '10-11-2024',
      endTime: '10-26-2024',
      name: 'subtask 1.1',
      parentId: 'a',
      progress: 65,
      rowBackgroundColor: '#d7f1fd',
      barBackgroundColor: '#e368f8',
    },
    {
      id: '9',
      startTime: '10-11-2024',
      endTime: '10-16-2024',
      name: 'subtask 1.1.1',
      parentId: '5',
      progress: 65,
    },
    {
      id: '10',
      startTime: '10-17-2024',
      endTime: '10-26-2024',
      name: 'subtask 1.1.2',
      parentId: '5',
      dependency: '9',
      progress: 65,
    },
    {
      id: '13',
      startTime: '10-17-2024',
      endTime: '10-23-2024',
      name: 'subtask 1.1.2.1',
      parentId: '10',
      progress: 65,
    },
    {
      id: '14',
      startTime: '10-24-2024',
      endTime: '10-26-2024',
      name: 'subtask 1.1.2.2',
      parentId: '10',
      progress: 65,
    },
    {
      id: '14.1',
      startTime: '10-27-2024',
      name: 'Task 2 Milestone',
      parentId: '10',
      dependency: '14',
      type: 'milestone',
    },
    {
      id: '6',
      startTime: '10-28-2024',
      endTime: '11-01-2024',
      name: 'subtask 1.2',
      parentId: 'a',
      progress: 65,
    },
    {
      id: 'b',
      startTime: '11-02-2024',
      endTime: '11-15-2024',
      name: 'task 2',
      progress: 25,
    },
    {
      id: '7',
      startTime: '11-02-2024',
      endTime: '11-11-2024',
      name: 'subtask 2.1',
      parentId: 'b',
      dependency: '13',
      progress: 65,
    },
    {
      id: '11',
      startTime: '11-02-2024',
      endTime: '11-06-2024',
      name: 'subtask 2.1.1',
      parentId: '7',
      progress: 65,
    },
    {
      id: '12',
      startTime: '11-07-2024',
      endTime: '11-11-2024',
      name: 'subtask 2.1.2',
      parentId: '7',
      dependency: '11',
      progress: 65,
    },
    {
      id: '12.1',
      startTime: '11-12-2024',
      name: 'Task 2 Milestone',
      parentId: '7',
      dependency: '12',
      type: 'milestone',
    },
    {
      id: '8',
      startTime: '11-13-2024',
      endTime: '11-15-2024',
      name: 'subtask 2.2',
      parentId: 'b',
      dependency: '12.1',
      progress: 65,
    },
    {
      id: 'c',
      startTime: '11-16-2024',
      endTime: '11-25-2024',
      name: 'task 3',
      progress: 75,
    },
    {
      id: 'd',
      startTime: '11-26-2024',
      endTime: '12-01-2024',
      name: 'task 4',
      progress: 50,
    },
    {
      id: 'e',
      startTime: '12-02-2024',
      name: 'Project Milestone',
      dependency: 'd',
      type: 'milestone',
    },
  ],
};

export const customColors: GanttUserOptions = {
  width: '100%',
  height: 700,
  viewMode: ViewMode.Week,
  fontFamily: 'Inter, sans-serif',
  fontSize: '13px',
  fontWeight: '500',
  canvasStyle: 'border: none; border-radius: 12px;',
  rowBackgroundColors: ['#F7FAFC', '#EDF2F7'],
  barBorderRadius: '8px',
  barMargin: 4,
  arrowColor: '#4299E1',
  tooltipBGColor: '#2D3748',
  tooltipBorderColor: '#4A5568',
  enableTaskDrag: false,
  enableTaskResize: false,
  series: [
    {
      id: 'planning',
      startTime: '01-08-2025',
      endTime: '01-17-2025',
      name: '📋 Project Planning Phase',
      progress: 100,
      barBackgroundColor: '#48BB78',
      barTextColor: '#FFFFFF',
    },
    {
      id: 'requirements',
      startTime: '01-08-2025',
      endTime: '01-12-2025',
      name: '📝 Requirements Gathering',
      parentId: 'planning',
      progress: 100,
      barBackgroundColor: '#68D391',
      barTextColor: '#1A202C',
    },
    {
      id: 'architecture',
      startTime: '01-13-2025',
      endTime: '01-17-2025',
      name: '🏗️ System Architecture',
      parentId: 'planning',
      dependency: 'requirements',
      progress: 100,
      barBackgroundColor: '#68D391',
      barTextColor: '#1A202C',
    },
    {
      id: 'frontend',
      startTime: '01-20-2025',
      endTime: '02-14-2025',
      name: '💻 Frontend Development',
      progress: 75,
      barBackgroundColor: '#4299E1',
      barTextColor: '#FFFFFF',
    },
    {
      id: 'ui-components',
      startTime: '01-20-2025',
      endTime: '01-31-2025',
      name: '🎨 UI Components',
      parentId: 'frontend',
      progress: 90,
      barBackgroundColor: '#63B3ED',
      barTextColor: '#1A202C',
    },
    {
      id: 'responsive-design',
      startTime: '02-01-2025',
      endTime: '02-07-2025',
      name: '📱 Responsive Design',
      parentId: 'frontend',
      dependency: 'ui-components',
      progress: 60,
      barBackgroundColor: '#63B3ED',
      barTextColor: '#1A202C',
    },
    {
      id: 'integration',
      startTime: '02-08-2025',
      endTime: '02-14-2025',
      name: '🔌 API Integration',
      parentId: 'frontend',
      dependency: 'responsive-design',
      progress: 40,
      barBackgroundColor: '#63B3ED',
      barTextColor: '#1A202C',
    },
    {
      id: 'backend',
      startTime: '01-20-2025',
      endTime: '02-21-2025',
      name: '⚙️ Backend Development',
      progress: 65,
      barBackgroundColor: '#9F7AEA',
      barTextColor: '#FFFFFF',
    },
    {
      id: 'database',
      startTime: '01-20-2025',
      endTime: '01-27-2025',
      name: '🗄️ Database Setup',
      parentId: 'backend',
      progress: 100,
      barBackgroundColor: '#B794F6',
      barTextColor: '#1A202C',
    },
    {
      id: 'api-dev',
      startTime: '01-28-2025',
      endTime: '02-14-2025',
      name: '🚀 API Development',
      parentId: 'backend',
      dependency: 'database',
      progress: 70,
      barBackgroundColor: '#B794F6',
      barTextColor: '#1A202C',
    },
    {
      id: 'auth-security',
      startTime: '02-15-2025',
      endTime: '02-21-2025',
      name: '🔐 Authentication & Security',
      parentId: 'backend',
      dependency: 'api-dev',
      progress: 30,
      barBackgroundColor: '#B794F6',
      barTextColor: '#1A202C',
    },
    {
      id: 'testing',
      startTime: '02-22-2025',
      endTime: '03-07-2025',
      name: '🧪 Testing Phase',
      progress: 25,
      barBackgroundColor: '#F56565',
      barTextColor: '#FFFFFF',
    },
    {
      id: 'unit-tests',
      startTime: '02-22-2025',
      endTime: '02-28-2025',
      name: '🔬 Unit Testing',
      parentId: 'testing',
      progress: 45,
      barBackgroundColor: '#FC8181',
      barTextColor: '#1A202C',
    },
    {
      id: 'integration-tests',
      startTime: '03-01-2025',
      endTime: '03-07-2025',
      name: '🔗 Integration Testing',
      parentId: 'testing',
      dependency: 'unit-tests',
      progress: 10,
      barBackgroundColor: '#FC8181',
      barTextColor: '#1A202C',
    },
    {
      id: 'deployment',
      startTime: '03-08-2025',
      endTime: '03-14-2025',
      name: '🚀 Deployment & Launch',
      progress: 0,
      barBackgroundColor: '#ED8936',
      barTextColor: '#FFFFFF',
    },
  ],
  tooltipTemplate(task, _) {
    const progressBar = `
            <div style="width: 100%; background: #E2E8F0; border-radius: 4px; height: 6px; margin: 8px 0;">
              <div style="width: ${task.progress}%; background: ${
                task.barBackgroundColor || '#4299E1'
              }; height: 100%; border-radius: 4px;"></div>
            </div>
          `;

    return `
            <div style='background: #2D3748; color: white; padding: 12px 16px; border-radius: 8px; font-family: Inter, sans-serif; max-width: 250px; box-shadow: 0 10px 25px rgba(0,0,0,0.2);'>
              <div style='font-weight: 600; font-size: 14px; margin-bottom: 8px;'>${task.name}</div>
              <div style='font-size: 12px; color: #A0AEC0; margin-bottom: 4px;'>Progress: ${
                task.progress
              }%</div>
              ${progressBar}
              <div style='font-size: 11px; color: #CBD5E0;'>
                ${task.startTime} - ${task.endTime || 'Ongoing'}
              </div>
            </div>
          `;
  },
};

export const milestones: GanttUserOptions = {
  width: '100%',
  height: 750,
  viewMode: ViewMode.Week,
  fontFamily: 'Roboto, sans-serif',
  fontSize: '14px',
  fontWeight: '500',
  fontColor: '#E2E8F0',
  headerBackground: '#0F172A',
  canvasStyle: 'border: none;',
  barBorderRadius: '6px',
  barMargin: 3,
  arrowColor: '#06B6D4',
  tooltipBGColor: '#0F172A',
  tooltipBorderColor: '#475569',
  rowBackgroundColors: ['#1E293B', '#334155'],
  enableTaskDrag: false,
  enableTaskResize: false,
  series: [
    {
      id: 'research',
      startTime: '01-06-2025',
      endTime: '01-24-2025',
      name: '🔍 Market Research & Analysis',
      progress: 100,
      barBackgroundColor: '#0EA5E9',
      barTextColor: '#FFFFFF',
    },
    {
      id: 'competitor-analysis',
      startTime: '01-06-2025',
      endTime: '01-15-2025',
      name: 'Competitor Analysis',
      parentId: 'research',
      progress: 100,
      barBackgroundColor: '#38BDF8',
      barTextColor: '#0F172A',
    },
    {
      id: 'market-research-milestone',
      startTime: '01-16-2025',
      name: '📊 Market Research Complete',
      type: 'milestone',
      dependency: 'competitor-analysis',
    },
    {
      id: 'user-surveys',
      startTime: '01-17-2025',
      endTime: '01-24-2025',
      name: 'User Surveys & Feedback',
      parentId: 'research',
      dependency: 'market-research-milestone',
      progress: 85,
      barBackgroundColor: '#38BDF8',
      barTextColor: '#0F172A',
    },
    {
      id: 'research-complete-milestone',
      startTime: '01-25-2025',
      name: '✅ Research Phase Complete',
      type: 'milestone',
      dependency: 'user-surveys',
    },
    {
      id: 'strategy',
      startTime: '01-27-2025',
      endTime: '02-14-2025',
      name: '📈 Strategy Development',
      progress: 60,
      barBackgroundColor: '#8B5CF6',
      barTextColor: '#FFFFFF',
    },
    {
      id: 'positioning',
      startTime: '01-27-2025',
      endTime: '02-05-2025',
      name: 'Product Positioning',
      parentId: 'strategy',
      dependency: 'research-complete-milestone',
      progress: 80,
      barBackgroundColor: '#A78BFA',
      barTextColor: '#1E1B4B',
    },
    {
      id: 'pricing-strategy',
      startTime: '02-06-2025',
      endTime: '02-10-2025',
      name: 'Pricing Strategy',
      parentId: 'strategy',
      dependency: 'positioning',
      progress: 70,
      barBackgroundColor: '#A78BFA',
      barTextColor: '#1E1B4B',
    },
    {
      id: 'go-to-market',
      startTime: '02-11-2025',
      endTime: '02-14-2025',
      name: 'Go-to-Market Plan',
      parentId: 'strategy',
      dependency: 'pricing-strategy',
      progress: 30,
      barBackgroundColor: '#A78BFA',
      barTextColor: '#1E1B4B',
    },
    {
      id: 'strategy-milestone',
      startTime: '02-15-2025',
      name: '🎯 Strategy Finalized',
      type: 'milestone',
      dependency: 'go-to-market',
    },
    {
      id: 'content-creation',
      startTime: '02-17-2025',
      endTime: '03-14-2025',
      name: '✨ Content Creation',
      progress: 45,
      barBackgroundColor: '#10B981',
      barTextColor: '#FFFFFF',
    },
    {
      id: 'brand-assets',
      startTime: '02-17-2025',
      endTime: '02-28-2025',
      name: 'Brand Assets & Guidelines',
      parentId: 'content-creation',
      dependency: 'strategy-milestone',
      progress: 75,
      barBackgroundColor: '#34D399',
      barTextColor: '#064E3B',
    },
    {
      id: 'website-content',
      startTime: '03-01-2025',
      endTime: '03-07-2025',
      name: 'Website Content',
      parentId: 'content-creation',
      dependency: 'brand-assets',
      progress: 50,
      barBackgroundColor: '#34D399',
      barTextColor: '#064E3B',
    },
    {
      id: 'marketing-materials',
      startTime: '03-08-2025',
      endTime: '03-14-2025',
      name: 'Marketing Materials',
      parentId: 'content-creation',
      dependency: 'website-content',
      progress: 20,
      barBackgroundColor: '#34D399',
      barTextColor: '#064E3B',
    },
    {
      id: 'content-milestone',
      startTime: '03-15-2025',
      name: '🎨 Content Ready',
      type: 'milestone',
      dependency: 'marketing-materials',
    },
    {
      id: 'digital-campaign',
      startTime: '03-17-2025',
      endTime: '04-11-2025',
      name: '📱 Digital Campaign Launch',
      progress: 25,
      barBackgroundColor: '#F59E0B',
      barTextColor: '#FFFFFF',
    },
    {
      id: 'social-media',
      startTime: '03-17-2025',
      endTime: '03-28-2025',
      name: 'Social Media Campaign',
      parentId: 'digital-campaign',
      dependency: 'content-milestone',
      progress: 40,
      barBackgroundColor: '#FBBF24',
      barTextColor: '#92400E',
    },
    {
      id: 'email-campaign',
      startTime: '03-24-2025',
      endTime: '04-04-2025',
      name: 'Email Marketing Campaign',
      parentId: 'digital-campaign',
      progress: 30,
      barBackgroundColor: '#FBBF24',
      barTextColor: '#92400E',
    },
    {
      id: 'paid-advertising',
      startTime: '04-01-2025',
      endTime: '04-11-2025',
      name: 'Paid Advertising',
      parentId: 'digital-campaign',
      dependency: 'social-media',
      progress: 10,
      barBackgroundColor: '#FBBF24',
      barTextColor: '#92400E',
    },
    {
      id: 'soft-launch-milestone',
      startTime: '04-12-2025',
      name: '🚀 Soft Launch',
      type: 'milestone',
      dependency: 'paid-advertising',
    },
    {
      id: 'pr-outreach',
      startTime: '04-14-2025',
      endTime: '04-25-2025',
      name: '📰 PR & Media Outreach',
      progress: 15,
      dependency: 'soft-launch-milestone',
      barBackgroundColor: '#EF4444',
      barTextColor: '#FFFFFF',
    },
    {
      id: 'influencer-partnerships',
      startTime: '04-21-2025',
      endTime: '05-02-2025',
      name: '👥 Influencer Partnerships',
      progress: 5,
      dependency: 'pr-outreach',
      barBackgroundColor: '#F87171',
      barTextColor: '#7F1D1D',
    },
    {
      id: 'full-launch-milestone',
      startTime: '05-03-2025',
      name: '🎉 Full Product Launch',
      type: 'milestone',
      dependency: 'influencer-partnerships',
    },
    {
      id: 'post-launch',
      startTime: '05-05-2025',
      endTime: '05-16-2025',
      name: '📊 Post-Launch Analysis',
      progress: 0,
      dependency: 'full-launch-milestone',
      barBackgroundColor: '#6366F1',
      barTextColor: '#FFFFFF',
    },
    {
      id: 'campaign-complete-milestone',
      startTime: '05-17-2025',
      name: '🏁 Campaign Complete',
      type: 'milestone',
      dependency: 'post-launch',
    },
  ],
  annotations: [
    {
      x1: '04-12-2025',
      label: {
        text: 'Soft Launch Day',
        fontColor: '#111', // optional
      },
    },
  ],
  tooltipTemplate(task: TaskInput, _: unknown) {
    if (task.type === 'milestone') {
      return `
              <div style='background: #0F172A; color: #F1F5F9; padding: 12px 16px; border-radius: 8px; font-family: Roboto, sans-serif; border: 2px solid #06B6D4; box-shadow: 0 10px 25px rgba(0,0,0,0.3);'>
                <div style='font-weight: 700; font-size: 14px; margin-bottom: 8px; color: #06B6D4;'>🎯 MILESTONE</div>
                <div style='font-weight: 600; font-size: 13px; margin-bottom: 6px;'>${task.name}</div>
                <div style='font-size: 12px; color: #94A3B8;'>Due: ${task.startTime}</div>
              </div>
            `;
    }

    const progressBar = `
            <div style="width: 100%; background: #475569; border-radius: 4px; height: 6px; margin: 8px 0;">
              <div style="width: ${task.progress}%; background: ${
                task.barBackgroundColor || '#06B6D4'
              }; height: 100%; border-radius: 4px;"></div>
            </div>
          `;

    return `
            <div style='background: #0F172A; color: #F1F5F9; padding: 12px 16px; border-radius: 8px; font-family: Roboto, sans-serif; max-width: 280px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); border: 1px solid #334155;'>
              <div style='font-weight: 700; font-size: 14px; margin-bottom: 8px;'>${task.name}</div>
              <div style='font-size: 12px; color: #94A3B8; margin-bottom: 4px;'>Progress: ${
                task.progress
              }%</div>
              ${progressBar}
              <div style='font-size: 11px; color: #64748B;'>
                ${task.startTime} - ${task.endTime || 'Ongoing'}
              </div>
            </div>
          `;
  },
  cellBorderColor: '#111',
};

export const resourceManagement: GanttUserOptions = {
  width: '100%',
  height: 800,
  viewMode: ViewMode.Week,
  fontFamily: 'Poppins, sans-serif',
  fontSize: '13px',
  fontWeight: '500',
  fontColor: '#2D3748',
  headerBackground: '#F8F9FA',
  canvasStyle: 'border: none;',
  rowBackgroundColors: ['#FFFFFF', '#F8F9FA'],
  barBorderRadius: '10px',
  barMargin: 5,
  arrowColor: '#667EEA',
  tooltipBGColor: '#2D3748',
  tooltipBorderColor: '#4A5568',
  enableTaskDrag: true,
  enableTaskResize: true,
  series: [
    // E-commerce Platform Project
    {
      id: 'ecommerce-project',
      startTime: '01-06-2025',
      endTime: '03-28-2025',
      name: '🛒 E-commerce Platform (Team: 12 members)',
      progress: 35,
      barBackgroundColor: '#667EEA',
      barTextColor: '#FFFFFF',
    },
    {
      id: 'ecom-frontend',
      startTime: '01-06-2025',
      endTime: '02-21-2025',
      name: '💻 Frontend Development (Sarah, Mike, John)',
      parentId: 'ecommerce-project',
      progress: 60,
      barBackgroundColor: '#FF6B6B',
      barTextColor: '#FFFFFF',
    },
    {
      id: 'ecom-backend',
      startTime: '01-13-2025',
      endTime: '03-07-2025',
      name: '⚙️ Backend API (David, Lisa, Alex)',
      parentId: 'ecommerce-project',
      progress: 45,
      barBackgroundColor: '#4ECDC4',
      barTextColor: '#2D3748',
    },
    {
      id: 'ecom-design',
      startTime: '01-06-2025',
      endTime: '01-31-2025',
      name: '🎨 UI/UX Design (Emma, Tom)',
      parentId: 'ecommerce-project',
      progress: 85,
      barBackgroundColor: '#FFEAA7',
      barTextColor: '#2D3748',
    },
    {
      id: 'ecom-testing',
      startTime: '02-15-2025',
      endTime: '03-21-2025',
      name: '🧪 QA Testing (Maria, James)',
      parentId: 'ecommerce-project',
      dependency: 'ecom-frontend',
      progress: 20,
      barBackgroundColor: '#96CEB4',
      barTextColor: '#2D3748',
    },
    {
      id: 'ecom-devops',
      startTime: '03-08-2025',
      endTime: '03-28-2025',
      name: '🚀 DevOps & Deployment (Kevin)',
      parentId: 'ecommerce-project',
      dependency: 'ecom-backend',
      progress: 10,
      barBackgroundColor: '#45B7D1',
      barTextColor: '#FFFFFF',
    },

    // Mobile App Project
    {
      id: 'mobile-app-project',
      startTime: '02-03-2025',
      endTime: '04-11-2025',
      name: '📱 Mobile App Development (Team: 8 members)',
      progress: 25,
      barBackgroundColor: '#A78BFA',
      barTextColor: '#FFFFFF',
    },
    {
      id: 'mobile-frontend',
      startTime: '02-03-2025',
      endTime: '03-21-2025',
      name: '📲 Mobile Frontend (React Native - Anna, Chris)',
      parentId: 'mobile-app-project',
      progress: 40,
      barBackgroundColor: '#FF6B6B',
      barTextColor: '#FFFFFF',
    },
    {
      id: 'mobile-backend',
      startTime: '02-10-2025',
      endTime: '03-14-2025',
      name: '🔗 Mobile API Integration (Paul, Nina)',
      parentId: 'mobile-app-project',
      progress: 35,
      barBackgroundColor: '#4ECDC4',
      barTextColor: '#2D3748',
    },
    {
      id: 'mobile-design',
      startTime: '02-03-2025',
      endTime: '02-28-2025',
      name: '📐 Mobile UI Design (Sophie, Mark)',
      parentId: 'mobile-app-project',
      progress: 70,
      barBackgroundColor: '#FFEAA7',
      barTextColor: '#2D3748',
    },
    {
      id: 'mobile-testing',
      startTime: '03-15-2025',
      endTime: '04-04-2025',
      name: '📋 Mobile Testing (Rachel, Steve)',
      parentId: 'mobile-app-project',
      dependency: 'mobile-backend',
      progress: 15,
      barBackgroundColor: '#96CEB4',
      barTextColor: '#2D3748',
    },

    // Analytics Dashboard Project
    {
      id: 'analytics-project',
      startTime: '01-20-2025',
      endTime: '03-07-2025',
      name: '📊 Analytics Dashboard (Team: 6 members)',
      progress: 55,
      barBackgroundColor: '#F093FB',
      barTextColor: '#FFFFFF',
    },
    {
      id: 'analytics-frontend',
      startTime: '01-20-2025',
      endTime: '02-28-2025',
      name: '📈 Dashboard Frontend (React - Ben, Kate)',
      parentId: 'analytics-project',
      progress: 75,
      barBackgroundColor: '#FF6B6B',
      barTextColor: '#FFFFFF',
    },
    {
      id: 'analytics-backend',
      startTime: '01-27-2025',
      endTime: '02-21-2025',
      name: '🗄️ Data Processing Backend (Oliver, Grace)',
      parentId: 'analytics-project',
      progress: 80,
      barBackgroundColor: '#4ECDC4',
      barTextColor: '#2D3748',
    },
    {
      id: 'analytics-product',
      startTime: '01-20-2025',
      endTime: '02-14-2025',
      name: '📋 Product Requirements (Jennifer, Ryan)',
      parentId: 'analytics-project',
      progress: 90,
      barBackgroundColor: '#DDA0DD',
      barTextColor: '#2D3748',
    },

    // Infrastructure Upgrade
    {
      id: 'infrastructure-project',
      startTime: '02-17-2025',
      endTime: '04-25-2025',
      name: '🏗️ Infrastructure Modernization (Team: 4 members)',
      progress: 30,
      barBackgroundColor: '#74B9FF',
      barTextColor: '#FFFFFF',
    },
    {
      id: 'infra-planning',
      startTime: '02-17-2025',
      endTime: '03-07-2025',
      name: '📝 Infrastructure Planning (Lucas, Amy)',
      parentId: 'infrastructure-project',
      progress: 60,
      barBackgroundColor: '#DDA0DD',
      barTextColor: '#2D3748',
    },
    {
      id: 'infra-migration',
      startTime: '03-08-2025',
      endTime: '04-11-2025',
      name: '🔄 Cloud Migration (DevOps - Kevin, Michael)',
      parentId: 'infrastructure-project',
      dependency: 'infra-planning',
      progress: 25,
      barBackgroundColor: '#45B7D1',
      barTextColor: '#FFFFFF',
    },
    {
      id: 'infra-testing',
      startTime: '04-12-2025',
      endTime: '04-25-2025',
      name: '✅ Infrastructure Testing (Combined QA)',
      parentId: 'infrastructure-project',
      dependency: 'infra-migration',
      progress: 0,
      barBackgroundColor: '#96CEB4',
      barTextColor: '#2D3748',
    },

    // Maintenance & Bug Fixes (Ongoing)
    {
      id: 'maintenance',
      startTime: '01-06-2025',
      endTime: '04-25-2025',
      name: '🔧 Maintenance & Bug Fixes (Rotating Team)',
      progress: 40,
      barBackgroundColor: '#FD79A8',
      barTextColor: '#FFFFFF',
    },
  ],
  annotations: [
    {
      x1: '02-14-2025',
      x2: '02-21-2025',
      bgColor: 'rgba(255, 107, 107, 0.1)',
      label: {
        text: 'Sprint Review Week',
      },
    },
    {
      x1: '03-28-2025',
      x2: '04-04-2025',
      bgColor: 'rgba(102, 126, 234, 0.1)',
      label: {
        text: 'Major Release Window',
      },
    },
  ],
  tooltipTemplate(task, _) {
    const getTeamInfo = (taskName: string) => {
      if (taskName.includes('Frontend') || taskName.includes('UI')) return '👥 Frontend Team';
      if (taskName.includes('Backend') || taskName.includes('API')) return '👥 Backend Team';
      if (taskName.includes('DevOps') || taskName.includes('Deployment')) return '👥 DevOps Team';
      if (taskName.includes('QA') || taskName.includes('Testing')) return '👥 QA Team';
      if (taskName.includes('Design') || taskName.includes('UI/UX')) return '👥 Design Team';
      if (taskName.includes('Product') || taskName.includes('Requirements'))
        return '👥 Product Team';
      return '👥 Mixed Team';
    };

    const teamInfo = getTeamInfo(task.name);
    const progressBar = `
            <div style="width: 100%; background: #4A5568; border-radius: 4px; height: 8px; margin: 10px 0;">
              <div style="width: ${task.progress}%; background: ${
                task.barBackgroundColor || '#667EEA'
              }; height: 100%; border-radius: 4px;"></div>
            </div>
          `;

    return `
            <div style='background: #2D3748; color: #F7FAFC; padding: 16px 20px; border-radius: 4px; font-family: Poppins, sans-serif; max-width: 320px; box-shadow: 0 20px 40px rgba(0,0,0,0.3); border: 2px solid ${
              task.barBackgroundColor || '#667EEA'
            };'>
              <div style='font-weight: 700; font-size: 15px; margin-bottom: 8px; color: #F7FAFC;'>${
                task.name
              }</div>
              <div style='font-size: 13px; color: #A0AEC0; margin-bottom: 6px;'>${teamInfo}</div>
              <div style='font-size: 12px; color: #CBD5E0; margin-bottom: 4px;'>Progress: ${
                task.progress
              }%</div>
              ${progressBar}
              <div style='font-size: 11px; color: #A0AEC0; margin-top: 8px;'>
                📅 ${task.startTime} - ${task.endTime || 'Ongoing'}
              </div>
            </div>
          `;
  },
};
