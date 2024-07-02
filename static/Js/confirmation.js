const btnDelete = document.querySelectorAll('.btn-delete')

if(btnDelete){
    const btnArray = Array.from(btnDelete);
    btnArray.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            if(!confirm("¿Estas seguro de borrarlo? La informacion no podra ser recuperada.")){
                e.preventDefault();
            }
        })
    })
}
