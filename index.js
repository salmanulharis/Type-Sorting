var inputtxt = document.getElementById('input')
function alphanumeric()
    { 
    if(inputtxt.value.match(/^[0-9]+$/))
        {
        var node = document.createElement("LI");
        // var btn = document.createElement("BUTTON");
        var x = inputtxt.value;
        node.append(x);
        document.getElementById("numeric").append(node);
        
        var del_btn = document.createElement('input')
        del_btn.setAttribute("type","button")
        del_btn.className = "btn btn-warning btn-sm"
        del_btn.style.marginLeft = "10px"
        del_btn.value = "Remove"
        node.append(del_btn)
        del_btn.addEventListener('click', () => {
            node.remove()
            })

        return true;
        }

    else if (inputtxt.value.match(/^[a-zA-Z]+$/))
        {
        var node = document.createElement("LI");
        var x = inputtxt.value;
        node.append(x);
        document.getElementById("alphabet").append(node);

        var del_btn = document.createElement('input')
        del_btn.setAttribute("type","button")
        del_btn.className = "btn btn-warning btn-sm"
        del_btn.style.marginLeft = "10px"
        del_btn.value = "Remove"
        node.append(del_btn)
        del_btn.addEventListener('click', () => {
            node.remove()
            })

        return true;
        }

    else if (inputtxt.value.match(/^[0-9a-zA-Z]+$/))
        {
        var node = document.createElement("LI");
        var x =inputtxt.value;
        node.append(x);
        document.getElementById("alphanumeric").append(node);

        var del_btn = document.createElement('input')
        del_btn.setAttribute("type","button")
        del_btn.className = "btn btn-warning btn-sm"
        del_btn.style.marginLeft = "10px"
        del_btn.value = "Remove"
        node.append(del_btn)
        del_btn.addEventListener('click', () => {
            node.remove()
            })

        return true;
        }

    else
        {
        alert('Please input alphanumeric characters only');
        return false;
        }
    }

