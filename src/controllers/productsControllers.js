const getAllPrudcts = (req, res)=>{
    // res.send('Esto devuelve todos los registros')
    res.render('pages/index')
}

const getProductsById = (req, res)=>{
    // res.send('Esto devuelve un solo producto')
    res.render('pages/deteailsproduct')
}

module.exports = {getAllPrudcts, getProductsById}
