$(document).ready((function(){const e=$("#countries").DataTable({language:{decimal:"",emptyTable:"No hay datos disponibles en la tabla",info:"Mostrando registros del _START_ al _END_ de _TOTAL_",infoEmpty:"Mostrando 0 a 0 de 0 registros",infoFiltered:"(Filtrado de _MAX_ registros totales)",infoPostFix:"",thousands:",",lengthMenu:"Actualmente se muestran _MENU_ registros",loadingRecords:"Cargando...",processing:"Procesando...",search:"",zeroRecords:"No se encontraron registros que coincidan con los términos de búsqueda",searchPlaceholder:"Ingrese los téminos de búsqueda",paginate:{first:"",last:"",next:"<i class='fas fa-forward datatable__icon'></i>",previous:"<i class='fas fa-backward datatable__icon'></i>"},aria:{sortAscending:": activar para ordenar la columna de forma ascendente",sortDescending:": activar para ordenar la columna de forma descendente"}},columnDefs:[{targets:4,visible:!1,sortable:!1},{targets:1,visible:!1}],processing:!0,deferRender:!0,ajax:{url:"https://restcountries.eu/rest/v2/all",type:"GET",dataSrc:""},columns:[{data:"name"},{data:"capital"},{data:"region"},{data:"population"},{data:"flag",render:function(e,a,n,i){return'<img src="'+e+'" class="datatable__image" />'}}]});$("div.dataTables_filter input").attr("type","text"),window.innerWidth>=480&&e.column(4).visible(!0),window.innerWidth>=768&&e.column(1).visible(!0),$(window).resize((function(){window.innerWidth>=480?e.column(4).visible(!0):e.column(4).visible(!1),window.innerWidth>=768?e.column(1).visible(!0):e.column(1).visible(!1)}))}));
//# sourceMappingURL=app.js.map