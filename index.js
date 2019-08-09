$(function shoppingList () {
  $('#js-shopping-list-form').submit( event => {
  event.preventDefault();
  let item = $(this).find('input[name="shopping-list-entry"]').val();
  let itemPlace = 
    $(`<li>
        <span class="shopping-item"> ${item} </span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
    </li>`);
    $('.shopping-list').append(itemPlace); 
    $("#shopping-list-entry").val("");

  });
});

$(function deleteItem () {
  $('.shopping-item-delete').on('click', function () {
  let target = $(this).parent()
  target.parent().remove()

  });
});


$(function itemChecked () {
  $('.shopping-item-toggle').on('click', function () {
  let target = $(this).closest('div').siblings('span')
  target.toggleClass('shopping-item__checked');

  });
});

