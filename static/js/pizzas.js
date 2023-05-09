$(document).ready(function(){
    var sortOrder = 'asc';
    var sortByPriceOrder = 'asc';
    $('#search-btn').on('click',function(e){
        e.preventDefault();
        var searchText = $('#search-box').val();
        $.ajax({
            url: '/menu?search_filter='+ searchText,
            type: 'GET',
            success:function(resp){
                var data = resp.data;
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
                    return 0;
                });
                 if (sortByPriceOrder === 'asc') {
                    data.sort(function(a, b) {
                        return a.price - b.price;
                    });
                     } else {
                    data.sort(function(a, b) {
                        return b.price - a.price;
                    });
                }
                var newHtml = data.map(d => {
                    return `<div class="menu-div">
                                <a href="/menu/${d.id}">
                                    <img class="menu-img" src="../../static/images/${d.image}"/>
                                    <h3 class="pizza-name">${d.name}</h3>
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

