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
<<<<<<< HEAD


=======
>>>>>>> d8a81cf2a58636466262d1ba5fb527a1ef3e195e

$(function deleteItem () {
  $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
  let target = $(this).closest('li');
  target.remove();
  

  });
});

$(function itemChecked () {
$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
});

<<<<<<< HEAD


=======
>>>>>>> d8a81cf2a58636466262d1ba5fb527a1ef3e195e
