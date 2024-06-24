$(function() {
    sayHelloLorem()
})

function sayHelloLorem() {
    const $p = $('<p>')
    $p.html(`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, sint? Unde ex quos numquam reiciendis ipsam. Nulla expedita quia porro, voluptates, libero sit saepe tempore quod temporibus quasi, et exercitationem!`)
    $('body').append($p)
}