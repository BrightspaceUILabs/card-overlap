import '../card-overlay.js';
import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import { runConstructor } from '@brightspace-ui/core/tools/constructor-test-helper.js';

describe('CardOverlay', () => {

	describe('accessibility', () => {
		it('should pass all aXe tests', async() => {
			const el = await fixture(html`<d2l-labs-card-overlay></d2l-labs-card-overlay>`);
			await expect(el).to.be.accessible();
		});
	});

	describe('constructor', () => {
		it('should construct', () => {
			runConstructor('d2l-labs-card-overlay');
		});
	});

	describe('render', () => {
		it('should render overlay in front of parent div with the size of parent div', async() => {
			const parentNode = document.createElement('div');
			parentNode.setAttribute('style', 'height: 100px; width: 100px; position: relative;');
			const el = await fixture(html`<d2l-labs-card-overlay skeleton></d2l-labs-card-overlay>`, { parentNode });

			expect(el.clientHeight).to.equal(100);
			expect(el.clientWidth).to.equal(100);

			el.removeAttribute('skeleton');
			await elementUpdated(el);
			expect(el.skeleton).to.equal(false);
		});
	});

});
