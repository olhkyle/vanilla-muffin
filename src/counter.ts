// export function setupCounter(element: HTMLButtonElement) {
// 	let counter = 0;
// 	const setCounter = (count: number) => {
// 		counter = count;
// 		element.innerHTML = `count is ${counter}`;
// 	};
// 	element.addEventListener('click', () => setCounter(counter + 1));
// 	setCounter(0);
// }

export class Counter {
	private count: number = 0;
	$container: HTMLDivElement;

	constructor($container: HTMLDivElement) {
		this.count = 0;
		this.$container = $container;

		this.render();
		this.bindEventHandler();
	}

	setState(newState: number) {
		this.count += newState;
		console.log('state is changed');

		this.render();
	}

	render() {
		this.$container.innerHTML = `
      <button id="counter">${this.count}</button>
    `;
	}

	bindEventHandler() {
		this.$container.addEventListener('click', (e: Event) => {
			// 1
			// const $target = e.target as HTMLButtonElement;

			// 2
			// if (!(<HTMLElement>e.target)?.matches('#counter')) return;

			if (e.target instanceof HTMLElement) {
				if (!e.target?.matches('#counter')) return;

				this.setState(1);
			}
		});
	}
}
