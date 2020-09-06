$(document).ready(function() {

    // Vinculación, inicialización y configiración del componente DataTables
    const dataTable = $("#countries").DataTable({
        "language": {
            "decimal":        "",
            "emptyTable":     "No hay datos disponibles en la tabla",
            "info":           "Mostrando registros del _START_ al _END_ de _TOTAL_",
            "infoEmpty":      "Mostrando 0 a 0 de 0 registros",
            "infoFiltered":   "(Filtrado de _MAX_ registros totales)",
            "infoPostFix":    "",
            "thousands":      ",",
            "lengthMenu":     "Actualmente se muestran _MENU_ registros",
            "loadingRecords": "Cargando...",
            "processing":     "Procesando...",
            "search":         "",
            "zeroRecords":    "No se encontraron registros que coincidan con los términos de búsqueda",
            "searchPlaceholder": "Ingrese los téminos de búsqueda",
            "paginate": {
                "first":      "",
                "last":       "",
                "next":       "<i class='fas fa-forward datatable__icon'></i>",
                "previous":   "<i class='fas fa-backward datatable__icon'></i>"
            },
            "aria": {
                "sortAscending":  ": activar para ordenar la columna de forma ascendente",
                "sortDescending": ": activar para ordenar la columna de forma descendente"
            }
        },
        // Definición de columnas ocultas de forma prederminada
        "columnDefs": [
            {
                "targets": 4,
                "visible": false,
                "sortable": false
            },
            {
                "targets": 1,
                "visible": false,
            },
        ],
        "processing": true,
        // Configuración para obtener consultas más rapidas y mejor rendimiento.
        "deferRender": true,
        "ajax": {
            "url": "https://restcountries.eu/rest/v2/all",
            "type": "GET",
            "dataSrc": "",
        },
        // Especificar que campos de mi respuesta JSON se vincularán a mi tabla
        "columns": [
            { "data": "name" },
            { "data": "capital" },
            { "data": "region"},
            { "data": "population" },
            {
                // El resultado de esta columna es una imagen cuya fuente es el valor obtenido de mi respuesta JSON en el campo flag
                "data": "flag",
                "render": function(data, type, row, meta) {
                    return '<img src="'+data+'" class="datatable__image" />'
                }
            }
        ]
    })

    // Cambiar el tipo de campo predeterminado para la busqueda en DataTables (type="text")
    $('div.dataTables_filter input').attr( 'type', 'text' );

    // Si el ancho de la pantalla del dispositivo es de 480px o superior, 
    // muestro en pantalla el campo oculto referente a las banderas
    if (window.innerWidth >= 480) {
        dataTable.column(4).visible(true);
    }

    // Si el ancho de la pantalla del dispositivo es de 768px o superio,r 
    // muestro en pantalla el campo oculto referente a las capitales
    if (window.innerWidth >= 768) {
        dataTable.column(1).visible(true);
    }


    // Si el usuario redimensiona la pantalla del dispositivo / navegador,
    // verifico nuevamente si debo o no mostrar los campos ocultos por defecto en la tabla
    $(window).resize(function() {
        if (window.innerWidth >= 480) {
            dataTable.column(4).visible(true);
        } else {
            dataTable.column(4).visible(false);
        }

        if (window.innerWidth >= 768) {
            dataTable.column(1).visible(true);
        } else {
            dataTable.column(1).visible(false);
        }
    })

})

