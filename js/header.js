$(function(){
    var header = '<div class="header"><div class="menu"><div class="menu-icon menu-item"><a href="#" class="nav-btn"><i class="fa fa-bars"></i></a></div><div class="logo menu-item"><a href ="/index.html"><img src="./images/logo.jpg" width="67" height="90" /></a></div><p>JOBS</p><br clear="all" /></div><ul class="nav"><li><a class="dropdown" href="#">Jobs</a><ul id="jobs"><li><a href="/jobs/all.html">All</a></li><li><a href="/jobs/current.html">Current</a></li><li><a href="/jobs/pending.html">Pending</a></li></ul></li><li><a class="dropdown" href="#">Tools</a><ul id="tools"><li><a href="/tools/all.html">All</a></li><li><a href="/tools/in.html">In</a></li><li><a href="/tools/out.html">Out</a></li></ul></li><li><a href="../map/index.html">Map</a></li></ul></div>';
    $('body').prepend(header);
    var title = $('body').attr('class');
    var title =title.replace('-', ' ');
    $('.logo').next().text(title);
    $('.dropdown').next('ul').hide();
    $('.nav').hide();
    $('.nav-btn').click(function () {
        $('.nav').slideToggle('fast');
    });
    $('.dropdown').click(function() {
        var nextClas = $(this).next('ul');
        if($(nextClas).hasClass('active')){
            $(this).next('ul').slideUp('fast').removeClass('active');
        }
        else{
            $('.active').slideUp('fast').removeClass('active');
            $(this).next('ul').slideDown('fast').addClass('active');
        }        
    });
});