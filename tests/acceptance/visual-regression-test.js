import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import percySnapshot from '@percy/ember';

module('Acceptance | visual regression', function (hooks) {
  setupApplicationTest(hooks);

  test('book is fully rendered', async function (assert) {
    await visit('/');
    assert.ok(true);
    await percySnapshot('Book');
  });
});
