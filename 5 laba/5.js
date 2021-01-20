  
let equalButton = document.getElementById('equal');
function insert(num) {
    if (document.form.textview.value.indexOf(' 0') === -1) {
        document.form.textview.value = document.form.textview.value + num
    } else {
        alert('нельзя')
    }
}
function clean() {
    document.form.textview.value = " ";
}
equalButton.onclick = function() {
    let exp = document.form.textview.value;
    if(document.form.textview.value.indexOf('/0') !== -1){
        alert("бесконечность")
    }
    else {
        document.form.textview.value = document.form.textview.value = ` ${eval(exp)}`;
    }
};
function checkOperations(num){
    if ( (document.form.textview.value.indexOf('1') !== -1
        || document.form.textview.value.indexOf('2') !== -1
        || document.form.textview.value.indexOf('3') !== -1
        || document.form.textview.value.indexOf('4') !== -1
        || document.form.textview.value.indexOf('5') !== -1
        || document.form.textview.value.indexOf('6') !== -1
        || document.form.textview.value.indexOf('7') !== -1
        || document.form.textview.value.indexOf('8') !== -1
        || document.form.textview.value.indexOf('9') !== -1) &&
        (document.form.textview.value.indexOf('-') === -1
            && document.form.textview.value.indexOf('+') === -1
            && document.form.textview.value.indexOf('*') === -1
            && document.form.textview.value.indexOf('/') === -1)
    )
    {
        insert(num);
    } else {
        alert('нельзя');
    }
}
function checkZero(num){
    if ( document.form.textview.value.indexOf('1') !== -1
        || document.form.textview.value.indexOf('2') !== -1
        || document.form.textview.value.indexOf('3') !== -1
        || document.form.textview.value.indexOf('4') !== -1
        || document.form.textview.value.indexOf('5') !== -1
        || document.form.textview.value.indexOf('6') !== -1
        || document.form.textview.value.indexOf('7') !== -1
        || document.form.textview.value.indexOf('8') !== -1
        || document.form.textview.value.indexOf('9') !== -1)
    {
        insert(num);
    } else {
        alert('нельзя');
    }
}