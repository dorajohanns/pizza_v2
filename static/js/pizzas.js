
$(document).ready(function(){
    $('#search-btn').on('click',function(e){
        e.preventDefault();
        var searchText = $('#search-box').val();
        $.ajax({
            url: '/pizzas?search_filter='+ searchText,
            type: 'GET',
            success:function(resp){
                var newHtml = resp.data.map(d => {
                    return `<div class="well pizza">
                                <a href="/pizzas/${d.id}">
                                    <img class="pizza-img" src="${d.image}"/>
                                    <h4>$(d.name)</h4>
                                    <p>${d.toppings}</p>
                                </a>
                            </div`
                });
                $('.pizzas').html(newHtml.join(''));
                $('#search-box').val('');
            },
            error:function(xhr,status,error){
                console.log(error);
            }
        })
    });
});

