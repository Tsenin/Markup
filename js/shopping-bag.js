(function() {
    if (typeof NodeList.prototype.forEach === "function")
        return false;
    else
        NodeList.prototype.forEach = Array.prototype.forEach;
})();

(function (arr) {
    arr.forEach(function (item) {
        if (item.hasOwnProperty('remove')) {
            return;
        }
        Object.defineProperty(item, 'remove', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function remove() {
                if (this.parentNode !== null)
                    this.parentNode.removeChild(this);
            }
        });
    });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

function pluser(){
    var els = document.getElementsByClassName('bag-price');
    if (els.length == 0){
        return {
            price:"",
            elems:0
        }
    }
    return {
        price:Array.prototype.slice.call(els).reduce( addMe, 0).toFixed(2),
        elems:els.length
    }

}

function addMe(p,c){
    return p + parseFloat(c.textContent);
}

window.onload = countPrice();

function clearBag() {
    document.querySelectorAll(".item-bag").forEach(function (elem) {
        elem.remove();
    })
    countPrice();
}
document.querySelector(".emptyBag-text").onclick = function () {
    clearBag();
    document.querySelector(".after-empty").style.display = "block";
};

document.querySelector(".buy").onclick = function () {
    clearBag();
    document.querySelector(".afterBuy").style.display = "block";
};

function countPrice() {
    document.querySelectorAll('.basket__price').forEach(function (elem) {
        elem.innerHTML = pluser().price;
    })
    document.querySelectorAll('.basket__count').forEach(function (elem) {
        elem.innerHTML = pluser().elems;
    })
}

