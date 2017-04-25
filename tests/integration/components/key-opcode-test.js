import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('key-opcode', 'Integration | Component | key-opcode', {
  integration: true
});

test('item has key', function(assert) {
  this.set('items', [{ key: 'A' }]);

  this.render(hbs`
    {{#each items key='key' as |item|}}
      {{item.key}}
    {{/each}}`);

  assert.deepEqual(this.$().text().trim(), 'A');
});


test('item has no key', function(assert) {
  this.set('items', [{ nokey: 'A' }]);

  this.render(hbs`
    {{#each items key='key' as |item|}}
      {{item.nokey}}
    {{/each}}`);

  assert.deepEqual(this.$().text().trim(), 'A');
});
