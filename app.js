$(document).ready(function(){
    var data={
        endodermis:{namajaringan:'Endodermis',deskripsi:'Endodermis adalah sel-sel pipih yang mengelilingi jaringan pembuluh angkut yang bersifat kedap air. Endodermis berfungsi mengatur secara selektif air dan mineral yang diserap oleh tumbuhan.'},
        epidermis:{namajaringan:'Epidermis',deskripsi:'Epidermis adalah lapisan terluar pada tumbuhan yang tersusun atas sel-sel pipih yang rapat. Epidermis berfungsi melindungi tumbuhan dari kerusakan fisik maupun biologis (patogen).'},
        floem:{namajaringan:'Floem',deskripsi:'Floem pada akar tumbuhan monokotil umumnya berada disekitar xilem. Floem merupakan jaringan pembuluh angkut yang berfungsi mengakut zat-zat makanan dari daun  ke  organ lainnya.'},
        korteks:{namajaringan:'Korteks',deskripsi:'Korteks adalah jaringan dasar pada akar yang terletak diantara epidermis dan endodermis. Korteks berperan dalam mengangkut air dan mineral dari tanah ke jaringan pembuluh secara difusi. Pada beberapa jenis tanaman tertentu korteks dapat menyimpan karbohidrat dalam jumlah besar sebagai cadangan makanan.'},
        xilem:{namajaringan:'Xilem',deskripsi:'Xilem pada akar tumbuhan dikotil terletak di bagian tengah. xilem tersusun atas sel-sel yang mengalami penebalan. xilem adalah jaringan pembuluh angkut yang berfungsi menyerap air dan mineral dari tanah ke organ lainnya.'}
    };
    
    
    $(document).mousemove(function(e){
        $('#label').css({
            left:e.pageX-20,
            top:e.pageY-70,
        })
    });
    $('g').mouseleave(function(){
        var ids=$(this).attr('id');
        $('#label').css('opacity', '0');
        
      
    });
    $('g').mouseover(function(){
        var ids=$(this).attr('id');
        $('#label').css('opacity', '1').text(data[ids].namajaringan);
       
    });
    $('g').click(function(){         
        var ids=$(this).attr('id');
        $('g').css("opacity", "0");
        $(this).css("opacity", "1");
        $(this).css("fill", "white");
        $("#judul").text(data[ids].namajaringan);
        $("#deskripsi").text(data[ids].deskripsi); 
    });  
});