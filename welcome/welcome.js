function submit() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // check in database


    var check = false
    document.getElementById('result').innerHTML = html;

    return check

}

var check = document.getElementById('submit').addEventListener('click', submit);

if (check) {
    alert('Error!')
}