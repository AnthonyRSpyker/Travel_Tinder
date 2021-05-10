// continent selection.

$('#switch-toggle-all [data-toggle-all]' ).click(function () {
    $( '#switch-toggle-all input[type="checkbox"]').prop('checked', this.checked)
  })
  
// Gender selection

$('[data-mobile-app-toggle] .button').click(function () {
    $(this).siblings().removeClass('is-active');
    $(this).addClass('is-active');
  });
  
  