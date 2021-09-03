(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var E="https://vmiis.github.io/wimr-email-templates"
    var E="http://localhost:8000/vmiis/wimr-email-templates"
    var m=$vm.module_list;
    var api="wimr";
    //-------------------------------------------------------------------------------------
    m[p+"preview-email"]={url:H+"/business/preview-email/form.html",prefix:p};
    m[p+"email-appointment-confirmation"]={url:E+"/appointment-confirmation.html"};
})();
