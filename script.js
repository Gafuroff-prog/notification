let success = document.getElementById("success");
let fail = document.getElementById("fail");
let warning = document.getElementById("warning");

success.addEventListener("click", function() {
    Toastify({
        text: "Well done!",
        duration: 3000,
        
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true, 
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onclick: function() {}
    }).showToast();
});

fail.addEventListener("click", function() {
    Toastify({
        text: "oh snap!",
        duration: 3000,
        
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true, 
        style: {
            background: "linear-gradient(to right, #FF0000, #FF0000)",
        },
        onclick: function() {}
    }).showToast();
})
warning.addEventListener("click", function() {
    Toastify({
        text: "Warning!",
        duration: 3000,
        
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true, 
        style: {
            background: "linear-gradient(to right, #FFA500, #FFA500)",
        },
        onclick: function() {}
    }).showToast();
})