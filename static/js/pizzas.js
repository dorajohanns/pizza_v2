$(document).ready(function(){
    var sortOrder = 'asc';
    var sortByPriceOrder = 'asc';

    function updateMenu(sortBy) {
        var searchText = $('#search-box').val();
        $.ajax({
            url: '/menu?search_filter='+ searchText,
            type: 'GET',
            success:function(resp){
                var data = resp.data;

                if (sortBy === 'name') {
                    if (sortOrder === 'asc') {
                        data.sort(function(a, b) {
                            var nameA = a.name.toUpperCase();
                            var nameB = b.name.toUpperCase();
                            if (nameA < nameB) {
                                return -1;
                            }
                            if (nameA > nameB) {
                                return 1;
                            }
                            return 0;
                        });
                    } else {
                        data.sort(function(a, b) {
                            var nameA = a.name.toUpperCase();
                            var nameB = b.name.toUpperCase();
                            if (nameA < nameB) {
                                return 1;
                            }
                            if (nameA > nameB) {
                                return -1;
                            }
                            return 0;
                        });
                    }
                } else if (sortBy === 'price') {
                    if (sortByPriceOrder === 'asc') {
                        data.sort(function(a, b) {
                            return a.price - b.price;
                        });
                    } else {
                        data.sort(function(a, b) {
                            return b.price - a.price;
                        });
                    }
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
    }

    $('#search-btn').on('click',function(e){
        e.preventDefault();
        updateMenu(sortOrder === 'asc' ? 'name' : '-name');
    });

    $('#reset-btn').on('click', function(e) {
        e.preventDefault();
        location.reload();
    });

    $('#sort-btn').on('click', function(e) {
        e.preventDefault();
        sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        $('#sort-btn').text(sortOrder === 'asc' ? 'Ordered by A-Z' : 'Ordered by Z-A');
        updateMenu('name');
    });

    $('#sort-by-price-btn').on('click', function(e) {
        e.preventDefault();
        sortByPriceOrder = sortByPriceOrder === 'asc' ? 'desc' : 'asc';
        $('#sort-by-price-btn').text(sortByPriceOrder === 'asc' ? 'Price: low to high' : 'Price: high to low');
        updateMenu('price');
    });
});

