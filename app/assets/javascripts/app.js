$(function() {
  var appData = (function() {
    return {
      // this function accepts two args: url & callback
      getData: function(url, callback) {
        // set result of the getJSON call to var
        var data = $.getJSON(url).done(callback);
        return data;
      }
    };
  }());

  // call function w/ callback fn
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

  // initialize droppable
  $('.droppable').droppable({
    // on drop event, run function...
    drop: function(event, ui) {
      // set up some vars
      // fieldName stores the data-name attribute from the dropped element
      // fieldType stores the data-type attribute from the dropped element
      // fieldHtml for later use...
      var fieldName = $(ui.draggable).attr('data-name'),
          fieldType = $(ui.draggable).attr('data-type'),
          fieldHtml;

      // remove the dragged element (list item)
      $(ui.draggable).remove();

      if (fieldType === 'text') {
        // if type is text, set proper html
        fieldHtml = '<input type="text" id="' + fieldName + '">';
      } else if (fieldType === 'email') {
        // if type is email, set proper html
        fieldHtml =
          '<input type="email" id="' + fieldName + '">';
      } else if (fieldType === 'select') {
        // if type is select, set proper html
        fieldHtml =
          '<select name="' + fieldName + '" id="' + fieldName + '">' +
            '<option value="Illinois">Illinois</option>' +
            '<option value="Indiana">Indiana</option>' +
            '<option value="Ohio">Ohio</option>' +
          '</select>';
      } else if (fieldType === 'textarea') {
        // if type is textarea, set proper html
        fieldHtml =
          '<textarea name="' + fieldName + '" id="' + fieldName + '" cols="30" rows="4"></textarea>';
      }

      // append the fieldset with appropriate label/input/select/textarea
      $('.js-form-builder').append(
        '<fieldset>' +
          '<label for="' + fieldName + '">' + fieldName + '</label>' +
          fieldHtml +
          '<button class="js-move-btn">Move</button>' +
          '<button>Delete</button>' +
        '</fieldset>'
      );

      // prevent buttons from submitting the form on the page
      $('button').click(function(e) {
        e.preventDefault();
      });
    },
    // droppable config option
    tolerance: 'fit'
  });
});
