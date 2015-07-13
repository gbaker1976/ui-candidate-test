var appData = (function() {
  return {
    getData: function(url, callback) {
      var data = $.getJSON(url).done(callback);
      return data;
    }
  };
}());
appData.getData('/data/fields.json', function(jsonData) {
  // setup empty array to hold json data
  var fields = [];
  // loop through json data
  for (var i = 0; i < jsonData.length; i++) {
    // add data to 'fields' array with appropriate html
    // using the name of the field as the data-name attribute
    // and the type as the data-type attribute
    fields.push('<li class="available-form-fields__list-item draggable" data-name="' + jsonData[i].name + '" data-type="' + jsonData[i].type + '">' + jsonData[i].name + '</li>');
  }
  // append fields to list
  $('.js-field-list').append(fields);
  // initialize drag
  $('.draggable').draggable({
    revert: 'invalid',
    scroll: false
  });
});
