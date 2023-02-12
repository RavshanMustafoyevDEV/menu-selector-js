let items = document.querySelectorAll('.menu-item')
let check_menu = document.querySelector(".check-menu")
let end_btn = document.querySelector(".end-btn")
let total = document.querySelector('.total')


for (let item of items){
    item.addEventListener('click', ()=>{
        item.classList.toggle("selected")
    })
}


end_btn.addEventListener('click', ()=>{
    check_menu.innerHTML = ''
    let sum = 0
    let selected_items = document.querySelectorAll('.selected')
    
    for (let item of selected_items){
        sum += Number(item.querySelector('.real-price').innerHTML)
        check_menu.innerHTML += `
        <div class="check-menu-item d-flex justify-content-between my-2 px-4 py-1 w-100">
                    ${item.innerHTML}
        </div>
        `
    }

    total.innerHTML = sum
})

