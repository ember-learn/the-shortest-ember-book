import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | page-development-roadmap', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{page-development-roadmap}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#page-development-roadmap}}
        template block text
      {{/page-development-roadmap}}
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
