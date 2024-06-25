import './style.css';
import { Counter } from './counter.ts';

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `<div class="card">
//       <button id="counter" type="button"></button>
//     </div>
// `;

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

const $app = document.querySelector<HTMLDivElement>('#app')!;

new Counter($app);
