var feature = {
    debug : false,
    profile : true,
    register : true,
    signin : true,
    import : false,
    export : false,
    donate : true,
    pay : false
};

var ftoggle = function (fname){
    feature[fname] = !feature[fname];
    return feature[fname];
}