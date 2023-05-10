$(document).ready(function(){
    var sortOrder = 'asc';
    var sortByPriceOrder = 'asc';

    $('#offers-search-btn').on('click', function(e) {
        e.preventDefault();
        var searchText = $('#offers-search-box').val();
        $.ajax({
            url: '/offers?search_filter=' + searchText,
            type: 'GET',
            success: function(resp) {
                var data = resp.data;
                // Filter by name
                if (searchText) {
                    data = data.filter(function(item) {
                        return item.name.toLowerCase().includes(searchText.toLowerCase());
                    });
                }
                // Sort by name
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
                // Sort by price
                if (sortByPriceOrder === 'asc') {
                    data.sort(function(a, b) {
                        return a.price - b.price;
                    });
                } else {
                    data.sort(function(a, b) {
                        return b.price - a.price;
                    });
                }
              //  <img className="menu-img" src="../../static/images/${d.image}"/>
                var newHtml = data.map(function(d) {
                    return `<div class="menu-div">
                                <a href="/offers/${d.id}">
                              
                                    <h3 class="pizza-name">${d.name}</h3>
                                    <p class="pizza-top">${d.desc}</p>
                                    <span class="price">${d.price}</span>
                                </a>
                            </div>`;
                });
                $('.offers').html(newHtml.join(''));
                $('#offers-search-box').val('');
            },
            error: function(xhr, status, error) {
                console.error(error);
            }
        });
    });

    $('#offers-reset-btn').on('click', function(e) {
        e.preventDefault();
        location.reload();
    });

    $('#offers-sort-btn').on('click', function(e) {
        e.preventDefault();
        if (sortOrder === 'asc') {
            sortOrder = 'desc';
            $('#offers-sort-btn').text('Ordered by Z-A');
        } else {
            sortOrder = 'asc';
            $('#offers-sort-btn').text('Ordered by A-Z');
        }
        $('#offers-search-btn').click();
    });

    $('#offers-sort-by-price-btn').on('click', function(e) {
        e.preventDefault();
        if (sortByPriceOrder === 'asc') {
            sortByPriceOrder = 'desc';
            $('#offers-sort-by-price-btn').text('Price: high to low');
        } else {
            sortByPriceOrder = 'asc';
            $('#offers-sort-by-price-btn').text('Price: low to high');
        }
        $('#offers-search-btn').click();
    });
});
