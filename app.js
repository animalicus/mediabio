$(document).ready(function(){
    
    var data={
        index:{
            daundikotil:{namajaringan:'Daun Dikotil'},
            batangdikotil:{namajaringan:'Batang Dikotil'},
            akardikotil:{namajaringan:'Akar Dikotil'},
            daunmonokotil:{namajaringan:'Daun Monokotil'},
            batangmonokotil:{namajaringan:'Batang Monokotil'},
            akarmonokotil:{namajaringan:'Akar Monokotil'},
        },
        akardikotil:{
            endodermis:{namajaringan:'Endodermis',deskripsi:'Endodermis adalah sel-sel pipih yang mengelilingi jaringan pembuluh angkut yang bersifat kedap air. Endodermis berfungsi mengatur secara selektif air dan mineral yang diserap oleh tumbuhan.'},
            epidermis:{namajaringan:'Epidermis',deskripsi:'Epidermis adalah lapisan terluar pada tumbuhan yang tersusun atas sel-sel pipih yang rapat. Epidermis berfungsi melindungi tumbuhan dari kerusakan fisik maupun biologis (patogen).'},
            floem:{namajaringan:'Floem',deskripsi:'Floem pada akar tumbuhan monokotil umumnya berada disekitar xilem. Floem merupakan jaringan pembuluh angkut yang berfungsi mengakut zat-zat makanan dari daun  ke  organ lainnya.'},
            korteks:{namajaringan:'Korteks',deskripsi:'Korteks adalah jaringan dasar pada akar yang terletak diantara epidermis dan endodermis. Korteks berperan dalam mengangkut air dan mineral dari tanah ke jaringan pembuluh secara difusi. Pada beberapa jenis tanaman tertentu korteks dapat menyimpan karbohidrat dalam jumlah besar sebagai cadangan makanan.'},
            xilem:{namajaringan:'Xilem',deskripsi:'Xilem pada akar tumbuhan dikotil terletak di bagian tengah. xilem tersusun atas sel-sel yang mengalami penebalan. xilem adalah jaringan pembuluh angkut yang berfungsi menyerap air dan mineral dari tanah ke organ lainnya.'},
            letak:'100px,25px',
        },
        akarmonokotil:{
            empulur:{namajaringan:'Empulur',deskripsi:'Empulur adalah jaringan dasar pada akar tumbuhan monokotil yang umumnya berada terletak di bagian tengah. Pada beberapa jenis tanaman tertentu empulur dapat menyimpan karbohidrat dalam jumlah besar sebagai cadangan makanan.'},
            endodermis:{namajaringan:'Endodermis',deskripsi:'Endodermis adalah sel-sel pipih yang mengelilingi jaringan pembuluh angkut yang bersifat kedap air. Endodermis berfungsi mengatur secara selektif air dan mineral yang diserap oleh tumbuhan.'},
            epidermis:{namajaringan:'Epidermis',deskripsi:'Epidermis adalah lapisan terluar pada tumbuhan yang tersusun atas sel-sel pipih yang rapat. Epidermis berfungsi melindungi tumbuhan dari kerusakan fisik maupun biologis (patogen).'},
            floem:{namajaringan:'Floem',deskripsi:'Floem pada akar tumbuhan monokotil umumnya berada disekitar Xilem. Floem merupakan jaringan pembuluh angkut yang berfungsi mengakut zat-zat makanan dari daun  ke  organ lainnya.'},
            korteks:{namajaringan:'Korteks',deskripsi:'Korteks adalah jaringan dasar pada akar yang terletak diantara epidermis dan endodermis. Korteks berperan dalam mengangkut air dan mineral dari tanah ke jaringan pembuluh secara difusi. Pada beberapa jenis tanaman tertentu korteks dapat menyimpan karbohidrat dalam jumlah besar sebagai cadangan makanan.'},
            xilem:{namajaringan:'Xilem',deskripsi:'Xilem pada akar tumbuhan monokotil umumnya tersusun membentuk lingkaran. Xilem tersusun atas sel-sel yang mengalami penebalan. Xilem adalah jaringan pembuluh angkut yang berfungsi menyerap air dan mineral dari tanah ke organ lainnya.'},
             letak:'100px,25px',
        },
        batangdikotil:{
            empulur:{namajaringan:'Empulur',deskripsi:'Empulur adalah jaringan dasar pada batang tumbuhan dikotil yang umumnya berada terletak di bagian tengah. Pada beberapa jenis tanaman tertentu empulur dapat menyimpan karbohidrat dalam jumlah besar sebagai cadangan makanan.'},
            epidermis:{namajaringan:'Epidermis',deskripsi:'Epidermis adalah lapisan terluar pada tumbuhan yang tersusun atas sel-sel pipih yang rapat. Epidermis berfungsi melindungi tumbuhan dari kerusakan fisik maupun biologis (patogen).'},
            floem:{namajaringan:'Floem',deskripsi:'Floem pada batang tumbuhan dikotil umumnya tersusun membentuk lingkaran dan tumbuh mengarah ke korteks. Floem merupakan jaringan pembuluh angkut yang berfungsi mengakut zat-zat makanan dari daun  ke  organ lainnya.'},
            pembuluh:{namajaringan:'Jaringa Pembuluh Angkut',deskripsi:'Jaringa Pembuluh Angkut'},
            kambium:{namajaringan:'Kambium',deskripsi:'Kambium adalah jaringan meristem pada batang tumbuhan dikotil yang umumnya tersusun membentuk lingkaran. Kambium berperan dalam pembentukan floem dan Xilem serta pertumbuhan sekunder tumbuhan.'},
            korteks:{namajaringan:'Korteks',deskripsi:'Korteks adalah jaringan dasar pada batang tumbuhan dikotil yang terletak diantara epidermis dan kambium. Pada beberapa jenis tanaman tertentu korteks dapat menyimpan karbohidrat dalam jumlah besar sebagai cadangan makanan.'},
            perisikel:{namajaringan:'Perisikel',deskripsi:'Perisikel'},
            xilem:{namajaringan:'Xilem',deskripsi:'Xilem pada batang tumbuhan dikotil umumnya tersusun membentuk lingkaran dan tumbuh mengarah ke empulur. Xilem tersusun atas sel-sel yang mengalami penebalan. Xilem adalah jaringan pembuluh angkut yang berfungsi menyerap air dan mineral dari akar ke organ lainnya. Selain itu Xilem juga berfungsi sebagai penguat struktur batang.'},
            letak:'150px,-50px',
        },
        batangmonokotil:{
            epidermis:{namajaringan:'Epidermis',deskripsi:'Epidermis adalah lapisan terluar pada tumbuhan yang tersusun atas sel-sel pipih yang rapat. Epidermis berfungsi melindungi tumbuhan dari kerusakan fisik maupun biologis (patogen).'},
            floem:{namajaringan:'Floem',deskripsi:'Floem pada batang tumbuhan monokotil umumnya tersusun tersebar. Floem merupakan jaringan pembuluh angkut yang berfungsi mengakut zat-zat makanan dari daun  ke  organ lainnya.'},
            jaringandasar:{namajaringan:'Jaringan Dasar',deskripsi:'Jaringan dasar merupakan kumpulan sel-sel parenkim yang belum mengalami diferensiasi. Pada beberapa jenis tanaman tertentu korteks dapat menyimpan karbohidrat dalam jumlah besar sebagai cadangan makanan.'},
            perisikel:{namajaringan:'Perisikel',deskripsi:'Perisikel'},
            xilem:{namajaringan:'Xilem',deskripsi:'Xilem pada batang tumbuhan monokotil umumnya tersusun tersebar. Xilem tersusun atas sel-sel yang mengalami penebalan. Xilem adalah jaringan pembuluh angkut yang berfungsi menyerap air dan mineral dari akar ke organ lainnya. Selain itu Xilem juga berfungsi sebagai penguat struktur batang.'},
            letak:'100px,25px',
        },
        daundikotil:{
            epidermisatas:{namajaringan:'Epidermis Atas',deskripsi:'Epidermis atas adalah lapisan terluar pada tumbuhan yang tersusun atas sel-sel pipih yang rapat. Umumnya dilapisi oleh lapisan lilin yang disebut kutikula. Epidermis atas berfungsi melindungi tumbuhan dari kerusakan dan dehidrasi. '},
            epidermisbawah:{namajaringan:'Epidermis Bawah',deskripsi:'Epidermis bawah adalah lapisan terluar pada tumbuhan yang tersusun atas sel-sel pipih yang rapat. Dapat ditemukan sel terdiferensiasi yang disebut stomata. Epidermis bawah berfungsi melindungi tumbuhan dari kerusakan, mengatur pertukaran gas, dan transpirasi air.'},
            palisade:{namajaringan:'Jaringan Palisade',deskripsi:'Jaringan palisade adalah mesofil yang memiliki banyak plastid dan tersusun membentuk kolom. Jaringan palisade berperan dalam proses fotosintesis khusunya dalam penyerapan energi dari sinar matahari.'},
            pembuluh:{namajaringan:'Jaringan Pembuluh Angkut',deskripsi:'Jaringa Pembuluh Angkut'},
            penjaga:{namajaringan:'Sel Penjaga', deskripsi:'Sel Penjaga'},
            spons:{namajaringan:'Jaringan Spons',deskripsi:'Jaringan spons adalah mesofil yang memiliki sedikit plastid dan tersusun membentuk rongga. Jaringan spons berperan dalam proses fotosintesis khusunya dalam proses pertukaran gas.'},
        },
        daunmonokotil:{
            epidermisatas:{namajaringan:'Epidermis Atas',deskripsi:'Epidermis atas adalah lapisan terluar pada tumbuhan yang tersusun atas sel-sel pipih yang rapat. Umumnya dilapisi oleh lapisan lilin yang disebut kutikula. Epidermis atas berfungsi melindungi tumbuhan dari kerusakan dan dehidrasi. '},
            epidermisbawah:{namajaringan:'Epidermis Bawah',deskripsi:'Epidermis bawah adalah lapisan terluar pada tumbuhan yang tersusun atas sel-sel pipih yang rapat. Dapat ditemukan sel terdiferensiasi yang disebut stomata. Epidermis bawah berfungsi melindungi tumbuhan dari kerusakan, mengatur pertukaran gas, dan transpirasi air.'},
            pembuluh:{namajaringan:'Jaringan Pembuluh Angkut',deskripsi:'Jaringa Pembuluh Angkut'},
            mesofil:{namajaringan:'Mesofil',deskripsi:'Mesofil adalah jaringan yang tersusun atas sel-sel yang banyak mengandung kloroplast. Mesofil berperann dalam menghasilkan zat makanan melalui fotosintesis.Tersusun atas floem dan Xilem. Floem berfungsi mengangkut zat makanan yang dihasilkan dihasilkan daun ke organ lainnya. Sedangkan Xilem berfungsi mengangkut air dan mineral yang dari akar ke daun.'},
        },
    };
    var href = document.location.href;
    var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);
    var output = lastPathSegment.substr(0, lastPathSegment.lastIndexOf('.')) || lastPathSegment;
    var point = data[output].letak;
    $("#image svg").css("background-image", "url(png/"+output+".png");
    $("#image svg").mouseover(function(){
       
        $(this).css('transform', 'scale(2)translate('+point+')');
    });
    $("#image svg").mouseleave(function(){
        $(this).css('transform', '');
    });
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
        $('#label').css('opacity', '1').text(data[output][ids].namajaringan);
       
    });
    $('g').click(function(){  
       
        var ids=$(this).attr('id');
        $('g').css("opacity", "0");
        $(this).css("opacity", "1");
        $(this).css("fill", "orange");
        $("#judul").text(data[output][ids].namajaringan);
        $("#deskripsi").text(data[output][ids].deskripsi);
       
    });  
});