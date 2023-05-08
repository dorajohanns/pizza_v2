
$(document).ready(function(){
    $('#search-btn').on('click',function(e){
        e.preventDefault();
        var searchText = $('#search-box').val();
        $.ajax({
            url: '/menu?search_filter='+ searchText,
            type: 'GET',
            success:function(resp){
                var newHtml = resp.data.map(d => {
                    return `<div class="well menu">
                                <a href="/menu/${d.id}">
                                    <img class="menu-img" src="../../static/images/${d.image}"/>
                                    <h4>$(d.name)</h4>
                                    <p>${d.description}</p>
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
});

