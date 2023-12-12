import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya11-заключ-договора', 'Unit | Model | i-i-s-kursovaya11-заключ-договора', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kursovaya11-дир-отд-по-раб-с-кл',
    'model:i-i-s-kursovaya11-заключ-договора',
    'model:i-i-s-kursovaya11-клиент',
    'model:i-i-s-kursovaya11-оказ-консульт',
    'model:i-i-s-kursovaya11-расторж-договора',
    'model:i-i-s-kursovaya11-расчет-ост-врем',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
