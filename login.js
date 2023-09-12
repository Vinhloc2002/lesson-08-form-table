let userName = prompt("who's there?", '');
        if (userName == 'Admin') {
            let pass = prompt('Password?', '');
            if (pass == 'theMaster') {
                alert('welcome!');
        } else if (pass == null) {
            alert('Canceled.');
        } else {
            alert('wrong password');
        }
    } else if (userName == null) {
        alert('canceled');
    }  else {
        alert("I don't know you");
    }       