let task = document.querySelector("#task");
let button = document.querySelector("#liveToastBtn");
let list = document.querySelector("#list");

function newElement() {
    if (task.value == "") {
        $('.error').toast('show')
    } else {
        $('.success').toast('show')
        var liDOM = document.createElement("li");
        var spanClose = `<span id="closeX" class="close">&times;</span>`
        liDOM.innerHTML = task.value + spanClose;
        list.appendChild(liDOM);
        task.value = "";

        $("ul li").delegate("#closeX", "click", function() {
            $(this).parent().remove();
        });

        liDOM.onclick = select;
    }
}
function select() {
    this.classList.toggle("checked");
  }