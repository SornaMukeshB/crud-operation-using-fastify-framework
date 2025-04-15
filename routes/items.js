const {getItems, getItem, postItem, deleteItem, updateItem}=require('../controller/items.js')

const Item={
    type: 'object',
    properties:{
        id:{type:'string'},
        name:{type:'string'},
    },
}
// Options for get all items
const getItemsOpts={
    schema:{
        response:{
            200:{
                type: "array",
                items: Item,
            },
        },
    },
    handler: getItems,
}
const getItemOpts={
    schema:{
        response:{
            200: Item,
        },
    },
    handler: getItem,
}

const postItemOpts={
    schema:{
        body:{
            type:'object',
            required:['name'],
            properties:{
                name:{type:'string'},
            },
        },
        response:{
            201: Item,
        },
    },
    handler: postItem,
}

const deleteItemOpts={
    schema:{
        response:{
            200:{
                type: "object",
                properties:{
                    message:{type:'string'}
                },
            },
        },
    },
    handler: deleteItem,
}

const updateItemOpts={
    schema:{
        response:{
            200: Item,
        },
    },
    handler: updateItem,
}

function itemroutes(fastify,options,done){

    //get all items
    fastify.get('/items', getItemsOpts)

    //get single items
    fastify.get('/items/:id', getItemOpts)

    //add item
    fastify.post('/items',postItemOpts)

    //delete item
    fastify.delete('/items/:id',deleteItemOpts)

    //update item
    fastify.put('/items/:id',updateItemOpts)

    done();
}

module.exports=itemroutes;
