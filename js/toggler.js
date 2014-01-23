function init_toggler(){
     $('.toggler_hide').hide();
     
     
}

function SwitchClick(){
    console.log('started:Click_after');
    //Add our button to the html code
    $('.toggler_static').after('<button class="switch_button">click</div');
    //set styles for the button
    if($('.switch_button').length>0){
         $('.switch_button').css("position","absolute");
         $('.switch_button').css("left","500px");
         $('.switch_button').css("bottom","140px");
    }
    //function for click on the button
    $('.switch_button').click(function(){
        $('.toggler_hide').fadeToggle();
        $('.toggler_default').fadeToggle();
    });
}

function sync_default_hide(){
    console.log('sync started');
    //get the class of toggler_default parent div
    var parent_class =$('.toggler_default').parent().attr('class');
    console.log(parent_class);
    //change parent class of toggler_hide
    $( ".toggler_hide" ).parent().attr('class', parent_class);

}

$(document).ready(function(){
    if($('.toggler_default').length>0){
        init_toggler();
        SwitchClick();
        sync_default_hide();
    }
    
})