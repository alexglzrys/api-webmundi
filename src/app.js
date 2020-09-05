$(document).ready(function() {

    $("#countries").DataTable({
        "language": {
            "decimal":        "",
            "emptyTable":     "No hay datos disponibles en la tabla",
            "info":           "Mostrando _START_ a _END_ de _TOTAL_ registros",
            "infoEmpty":      "Mostrando 0 a 0 de 0 registros",
            "infoFiltered":   "(Filtrado de _MAX_ registros totales)",
            "infoPostFix":    "",
            "thousands":      ",",
            "lengthMenu":     "Mostrar _MENU_ registros",
            "loadingRecords": "Cargando...",
            "processing":     "Procesando...",
            "search":         "Buscar:",
            "zeroRecords":    "No se encontraron registros que coincidan con los términos de búsqueda",
            "paginate": {
                "first":      "Primero",
                "last":       "Ultimo",
                "next":       "Siguiente",
                "previous":   "Anterior"
            },
            "aria": {
                "sortAscending":  ": activar para ordenar la columna de forma ascendente",
                "sortDescending": ": activar para ordenar la columna de forma descendente"
            }
        },
        "processing": true,
        "deferRender": true,
        "ajax": {
            "url": "https://restcountries.eu/rest/v2/all",
            "type": "GET",
            "dataSrc": "",
        },
        "columns": [
            { "data": "name" },
            { "data": "region" },
            { "data": "population" },
            {
                "data": "flag",
                "render": function(data, type, row, meta) {
                    return '<img src="'+data+'" />'
                }
            }
        ]
    })

})

