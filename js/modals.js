function errormod(text){
if(('.fade.error')){
	  $(document.body).append('<div class="modal fade error" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog modal-sm"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">Error</h4></div><div class="modal-body"></div></div></div></div>');
}
$('.fade.error .modal-body').html(text);
$('.fade.error').modal('show');
}