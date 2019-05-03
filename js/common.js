(function() {
    if (typeof NodeList.prototype.forEach === "function")
        return false;
    else
        NodeList.prototype.forEach = Array.prototype.forEach;
})();
function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

var click = document.querySelector(".button-search");
click.onclick = function () {
    var isOpen = false;
    return function () {
        if (getWidth() <= 1024) {
            var headSearch = document.querySelector(".tablet-layout");
            headSearch.style.position = isOpen ? 'relative' : "absolute";
            headSearch.style.width = isOpen ? 'auto' : "200px";
            headSearch.style.right = isOpen ? 'auto' : "40px";
            headSearch.style.borderBottom = isOpen ? 'none' : "2px solid #E4E4E5";
            var wrap = document.querySelector(".search");
            wrap.style.display = isOpen ? 'none' : "inline";
            isOpen = !isOpen;
        }
    };
}();

var sortToggle = document.querySelectorAll(".filter-item");
sortToggle.forEach(function (elem) {
    var popup = elem.querySelector(".filter-popup");
    var container = elem.querySelector(".container");
    elem.onclick = function() {
        if (popup.style.display) popup.style.display = "";
        else {
            popup.style.display = "block";
        }
    }
    if (popup){
        var selectedLi;
        popup.onclick = function(event) {
            var li = event.target;
            if (li.className.indexOf("notSelected") == -1){
                var sortFilter = li.innerHTML;
                popup.style.display = "none";
                container.innerHTML = sortFilter;
                if (popup.parentNode.className.indexOf("small") == -1){
                    popup.parentNode.className += " small"
                }

            }
            else {
                popup.style.display = "none";
                container.innerHTML = "";
                popup.parentNode.className = popup.parentNode.className.replace("small", "");
            }
            if (li.tagName != 'LI') return;
            highlight(li);
        }
        function highlight(node) {
            if (selectedLi){
                selectedLi.classList.remove('highlight');
            }
            selectedLi = node;
            selectedLi.classList.add('highlight');
        }

    }

});


var productsList = document.querySelector(".submit-button-add");

productsList.onclick = function (event) {
    let target = event.target;

    if (target.tagName == "BUTTON") {
        let basketCounter = document.querySelector(".basket__count");
        let basketPrice = document.querySelector(".basket__price");
        if (!basketPrice.style.display) {
            basketPrice.style.display = "flex";
            basketPrice.innerHTML = Math.floor(Math.random() * (400 - 250 + 1)) + 250;
        }
        if (!basketCounter.style.display) {
            basketCounter.style.display = "flex";
            basketCounter.innerHTML = "1";
            return;
        }
        basketCounter.innerHTML = +basketCounter.innerHTML + 1;
        basketPrice.innerHTML = + basketPrice.innerHTML + Math.floor(Math.random() * (400 - 250 + 1)) + 250;
    }
};



