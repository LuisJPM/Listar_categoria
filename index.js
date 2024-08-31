const reqCa = fetch('http://localhost:8087/categoria/').then((resp)=>{
    resp.json().then((data)=>{
        console.log(data)

        const listCategoria = document.getElementById('listCategoria')

        data.map(({id, nombreCategoria})=> {
            const li = document.createElement('li')
            li.innerHTML =  `id: ${id} categoria: ${nombreCategoria}`
            listCategoria.appendChild(li)

        })
      
        const [{id,nombreCategoria}] = data
        console.log(id,nombreCategoria)

        const idDOM = document.getElementById('id')
        idDOM.innerHTML=id
        const nombreDom = document.getElementById('nombre Categoria')
        nombreDom.innerHTML = nombreCategoria
    })  
    
  }).catch(console.warn)

