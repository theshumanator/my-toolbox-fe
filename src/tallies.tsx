type frequency = 'DAILY'|'WEEKLY'|'MONTHLY'|'ANNUALLY';

export interface TallyItem {
    id: number;
    name: string;
    description: string;
    frequency: frequency;
    successRate: number;
    invertedCalculation?: boolean;
}

// TODO fix this
// interface TallyItems: TallyItem[];

// export const tallies: TallyItem[] = [
//     {
//         name: 'Goal review',
//         description: 'Number of times reviewed goal per month',
//         frequency: 'MONTHLY',
//         successRate: 1.0
//     },
//     {
//         name: 'Eating distraction',
//         description: 'Number of times ate with distractions per week',
//         frequency: 'WEEKLY',
//         successRate: 0.2,
//         invertedCalculation: true
//     },
//     {
//         name: 'Weekly fast',
//         description: 'Number of weeks fasted twice',
//         frequency: 'WEEKLY',
//         successRate: 0.8
//     },
//     {
//         name: 'Ate junk/snack',
//         description: 'Number of times ate junk more than once a week',
//         frequency: 'WEEKLY',
//         successRate: 0.2,
//         invertedCalculation: true
//     },
//     {
//         name: '6 days of exercise',
//         description: 'Number of times exercised 6 days a week',
//         frequency: 'WEEKLY',
//         successRate: 0.8
//     },
//     {
//         name: 'Daily reflection',
//         description: 'Number of times reflected',
//         frequency: 'ANNUALLY',
//         successRate: 0.8
//     },
//     {
//         name: 'Total -ve thought occurrences',
//         description: 'Number of times attacked by negative thoughts',
//         frequency: 'ANNUALLY',
//         successRate: 0.2,
//         invertedCalculation: true
//     },
//     // {
//     //     name: 'Did not conquer -ve thought occurrences',
//     //     description: 'Number of times reviewed goal per month',
//     //     frequency: 'MONTHLY',
//     //     successRate: 1.0
//     // },
//     // {
//     //     name: 'Prayer concentration',
//     //     description: 'Number of times distracted during prayers',
//     //     frequency: 'ANNUALLY',
//     //     successRate: 0.4,
//     //     invertedCalculation: true
//     // },

// ]