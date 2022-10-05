const setText=data=>{
    myContent.textContent=data
}

const getData=callback=>{
    setText("Solicitando autorizacion")
    setTimeout(()=>{
        callback(true)
    },2000)
}

const showData=callback=>{
    setText("Esperando a mostrar la informacion")
    setTimeout(()=>{
        callback({name:"Carol"})
    },2000)
}


btn.addEventListener("click",()=>{
    getData(authorization=>{
        if(authorization){
            showData(user=>{
                setText(user.name)
            })
        }
    })
})