function shoppingList () {
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

  });
}
$(shoppingList);

$(function shoppingList ()



