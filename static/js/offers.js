$(document).ready(function (){
    $('#offers-search-btn').on('click',function (e){
        e.preventDefault();
        var searchText = $('#offers-search-box').val();
        $.ajax({
            url:'/offers?search_filter=' + searchText,
            type: 'GET',
            success:function (resp){
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
                    // names must be equal
                    return 0;
                });
                var newHtml = data.map(d => {
                    return `<div class="well offer-div">
                                <a href="/offers/${d.id}">
                                    <img class="offer-img" src="../../static/images/${d.image}"/>
                                    <h4 class="offer-name">${d.name}</h4>
                                    <p class="offer-description">${d.description}</p>
                                    <span class="offer-price">${d.price}</span>
                                </a>
                            </div>`
                });
                $('.offers').html(newHtml.join(''));
                $('#offers-search-box').val('');
            },
            error:function(xhr,status,error){
                console.error(error);
            }
        })
    });
    $('#offers-reset-btn').on('click', function(e) {
        e.preventDefault();
        location.reload();
    });

    // add event listener for sort button
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

