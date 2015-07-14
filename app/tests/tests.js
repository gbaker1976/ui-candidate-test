QUnit.module('Data');

  QUnit.test('Looking for function: appData.getData()', 1, function(assert) {
    assert.deepEqual(typeof appData.getData, 'function', 'Looking for appData.getData() function');
  });

  QUnit.test('Testing Data', 2, function(assert) {
    var jsonData = [{"name": "City","type": "text"},{"name": "Email Address","type": "email"},{"name": "First Name","type": "text"},{"name": "Last Name","type": "text"},{"name": "State","type": "select"},{"name": "Street Address","type": "textarea"},{"name": "Zip Code","type": "text"}]

    var done = assert.async();

    appData.getData('/data/fields.json', function(data) {
      assert.ok(data, '"data" was returned from the server');
      assert.deepEqual(data, jsonData, 'LOOKING FOR: ' + JSON.stringify(jsonData) + ', THE RESULT WAS: ' + JSON.stringify(data));
      done();
    });
  });

QUnit.module('Create New Field');

  QUnit.test('Looking for function: newField.create()', 1, function(assert) {
    assert.deepEqual(typeof newField.create, 'function', 'Looking for newField.create() function');
  });