$(document).ready(function(){
    var sortOrder = 'asc'; // initialize sort order to ascending

    $('#search-btn').on('click',function(e){
        e.preventDefault();
        var searchText = $('#search-box').val();
        $.ajax({
            url: '/menu?search_filter='+ searchText,
            type: 'GET',
            success:function(resp){
                var data = resp.data;
                // sort data by name
                data.sort(function(a, b) {
                    var nameA = a.name.toUpperCase();
                    var nameB = b.name.toUpperCase();
                    if (sortOrder === 'asc') {
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                    } else {
                        if (nameA < nameB) {
                            return 1;
                        }
                        if (nameA > nameB) {
                            return -1;
                        }
                    }
                    // names must be equal
                    return 0;
                });
                var newHtml = data.map(d => {
                    return `<div class="well menu">
                                <a href="/menu/${d.id}">
                                    <img class="menu-img" src="../../static/images/${d.image}"/>
                                    <h4 class="pizza-name">${d.name}</h4>
                                    <p class="pizza-top">${d.toppings}</p>
                                    <span class="price">${d.price}</span>
                                </a>
                            </div>`
                });
                $('.menu').html(newHtml.join(''));
                $('#search-box').val('');
            },
            error:function(xhr,status,error){
                console.error(error);
            }
        })
    });

    $('#reset-btn').on('click', function(e) {
        e.preventDefault();
        location.reload();
    });

    // add event listener for sort button
    $('#sort-btn').on('click', function(e) {
        e.preventDefault();
        if (sortOrder === 'asc') {
            sortOrder = 'desc';
            $('#sort-btn').text('Ordered by Z-A');
        } else {
            sortOrder = 'asc';
            $('#sort-btn').text('Ordered by A-Z');
        }
        $('#search-btn').click();
    });
        $('#sort-by-price-btn').on('click', function(e) {
        e.preventDefault();
        if (sortByPriceOrder === 'asc') {
            sortByPriceOrder = 'desc';
            $('#sort-by-price-btn').text('Price: high to low');
        } else {
            sortByPriceOrder = 'asc';
            $('#sort-by-price-btn').text('Price: low to high');
        }
        $('#search-btn').click();
    });


});