/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
    
        /* button  #menu */
    $(document).on("click", "#menu", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
       uib_sb.toggle_sidebar($("#menuSlide"));  
         return false;
    });
    
        /* button  Korporat */
    $(document).on("click", ".uib_w_15", function(evt)
    {
         /*global activate_subpage */
          uib_sb.toggle_sidebar($("#menuSlide"));  
         activate_subpage("#korporat"); 
         return false;
    });
    
        /* button  Penguna */
    $(document).on("click", ".uib_w_16", function(evt)
    { uib_sb.toggle_sidebar($("#menuSlide"));  
         /*global activate_subpage */
         activate_subpage("#penguna"); 
         return false;
    });
    
        /* button  Kerjaya */
    $(document).on("click", ".uib_w_18", function(evt)
    { uib_sb.toggle_sidebar($("#menuSlide"));  
         /*global activate_subpage */
         activate_subpage("#kerjaya"); 
         return false;
    });
    
        /* button  Tender / S.Harga */
    $(document).on("click", ".uib_w_17", function(evt)
    { uib_sb.toggle_sidebar($("#menuSlide"));  
         /*global activate_subpage */
         activate_subpage("#tender"); 
         return false;
    });
    
        /* button  Info Am */
    $(document).on("click", ".uib_w_19", function(evt)
    { uib_sb.toggle_sidebar($("#menuSlide"));  
         /*global activate_subpage */
         activate_subpage("#infoam"); 
         return false;
    });
    
        /* button  Exit */
    $(document).on("click", ".uib_w_20", function(evt)
    { uib_sb.toggle_sidebar($("#menuSlide"));  
        /* your code goes here */ 
         return false;
    });
    
        /* button  #login */
    $(document).on("click", "#login", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* button  #daftar */
    $(document).on("click", "#daftar", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#register"); 
         return false;
    });
    
        /* button  #bantu */
    $(document).on("click", "#bantu", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#bantu").modal("toggle");  
         return false;
    });
    
        /* button  #register */
    $(document).on("click", "#register", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* listitem  #bil */
    $(document).on("click", "#bil", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#infobil"); 
         return false;
    });
    
        /* listitem  #aduan */
    
    
        /* listitem  #bayar */
    $(document).on("click", "#bayar", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#pembayaran"); 
         return false;
    });
    
        /* listitem  #cawagan */
    
    
        /* listitem  #cari */
    $(document).on("click", "#cari", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#cariantukang"); 
         return false;
    });
    
        /* listitem  #aduan */
    $(document).on("click", "#aduan", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#aduanpenguna"); 
         return false;
    });
    
        /* listitem  #cawagan */
    $(document).on("click", "#cawagan", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#cawagansada"); 
         return false;
    });
    
        /* button  #plihbank */
    $(document).on("click", "#plihbank", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#bank"); 
         return false;
    });
    
        /* button  #bil */
    $(document).on("click", "#bil", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#pembayaran"); 
         return false;
    });
    
        /* button  #cari */
    $(document).on("click", "#cari", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#senaraiTukang"); 
         return false;
    });
    
        /* button  aduan */
    $(document).on("click", ".uib_w_71", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* button  #btnKor */
    $(document).on("click", "#btnKor", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#korporat"); 
         return false;
    });
    
        /* button  #btnPeng */
    $(document).on("click", "#btnPeng", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#penguna"); 
         return false;
    });
    
        /* button  #btnKer */
    $(document).on("click", "#btnKer", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#kerjaya"); 
         return false;
    });
    
        /* button  #btnTen */
    $(document).on("click", "#btnTen", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#tender"); 
         return false;
    });
    
        /* graphic button  #btnInfo */
    $(document).on("click", "#btnInfo", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#infoam"); 
         return false;
    });
    
        /* button  #bayarBil */
    $(document).on("click", "#bayarBil", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#pembayaran"); 
         return false;
    });
    
        /* button  #btncaritkgpaip */
    $(document).on("click", "#btncaritkgpaip", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#cariantukang"); 
         return false;
    });
    
        /* button  #lksPeta */
    $(document).on("click", "#lksPeta", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#lokasipeta"); 
         return false;
    });
    
        /* listitem  Wilayah Utara 1 */
    $(document).on("click", ".uib_w_78", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#snaraicawagan"); 
         return false;
    });
    
        /* listitem  Wilayah Utara 2 */
    $(document).on("click", ".uib_w_79", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#snaraicawagan"); 
         return false;
    });
    
        /* listitem  Wilayah Tengah */
    $(document).on("click", ".uib_w_80", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#snaraicawagan"); 
         return false;
    });
    
        /* listitem  Wilayah Timur */
    $(document).on("click", ".uib_w_81", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#snaraicawagan"); 
         return false;
    });
    
        /* listitem  Wilayah Selatan */
    $(document).on("click", ".uib_w_82", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#snaraicawagan"); 
         return false;
    });
    
        /* listitem  Wilayah Langkawi */
    $(document).on("click", ".uib_w_83", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#snaraicawagan"); 
         return false;
    });
    
        /* listitem  Bank Islam */
    
    
        /* listitem  CIMB Bank */
    $(document).on("click", ".uib_w_103", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* listitem  Bank Islam */
    $(document).on("click", ".uib_w_102", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* listitem  MayBank */
    $(document).on("click", ".uib_w_104", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* button  Info Am */
    $(document).on("click", ".uib_w_134", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#infoam"); 
         return false;
    });
    
    
        /* button  Lokasi di Peta */
    $(document).on("click", ".uib_w_149", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#lokasipeta"); 
         return false;
    });
    
        /* button  Lokasi di Peta */
    $(document).on("click", ".uib_w_150", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#lokasipeta"); 
         return false;
    });
    
        /* button  Lokasi di Peta */
    $(document).on("click", ".uib_w_151", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#lokasipeta"); 
         return false;
    });
    
        /* button  Lokasi di Peta */
    $(document).on("click", ".uib_w_152", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#lokasipeta"); 
         return false;
    });
    
        /* button  #home */
    $(document).on("click", "#home", function(evt)
    { uib_sb.toggle_sidebar($("#menuSlide"));  
         /*global activate_subpage */
         activate_subpage("#page_38_94"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
