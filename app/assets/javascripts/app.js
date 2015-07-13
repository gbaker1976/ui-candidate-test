function populateList() {
  // get json
  $.getJSON( '/data/fields.json', function(data) {
    // setup empty array to hold json data
    var fields = [];
    // loop through json
    for (var i = 0; i < data.length; i++) {
      // add data to 'fields' array with appropriate html
      // using the name of the field as the data-name attribute
      // and the type as the data-type attribute
      fields.push('<li class="available-form-fields__list-item draggable" data-name="' + data[i].name + '" data-type="' + data[i].type + '">' + data[i].name + '</li>');
    }
    // append fields to list
    $('.js-field-list').append(fields);
    // initialize drag
    $('.draggable').draggable({
      revert: 'invalid',
      scroll: false
    });
  });
}
populateList();