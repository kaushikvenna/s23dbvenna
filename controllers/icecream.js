var icecream = require('../models/icecream');
// List of all Costumes
exports.icecream_list = function(req, res) {
res.send('NOT IMPLEMENTED: icecream list');
};
// for a specific Costume.
// exports.icecream_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: icecream detail: ' + req.params.id);
// };
// Handle Costume create on POST.
exports.icecream_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: icecream create POST');
};
// Handle Costume delete form on DELETE.
exports.icecream_delete = function(req, res) {
res.send('NOT IMPLEMENTED: icecream delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.icecream_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: icecream update PUT' + req.params.id);
};

// List of all icecream
exports.icecream_list = async function(req, res) {
    try{
    theicecream = await icecream.find();
    res.send(theicecream);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
   // VIEWS
// Handle a show all view
exports.icecream_view_all_Page = async function(req, res) {
try{
theicecream = await icecream.find();
res.render('icecream', { title: 'icecream Search Results', results: theicecream });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// Handle Costume create on POST.
exports.icecream_create_post = async function(req, res) {
console.log(req.body)
let document = new icecream();

document.flavour = req.body.flavour;
document.quantity = req.body.quantity;
document.price = req.body.price;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// for a specific eagle.
exports.icecream_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await icecream.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };

    //Handle Costume update form on PUT.
    exports.icecream_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await icecream.findById( req.params.id)
    // Do updates of properties
    if(req.body.flavour)
    toUpdate.flavour = req.body.flavour;
    if(req.body.quantity) toUpdate.quantity = req.body.quantity;
    if(req.body.price) toUpdate.price = req.body.price;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };