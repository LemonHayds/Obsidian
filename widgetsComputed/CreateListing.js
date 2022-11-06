return async function(){

    var product = await $dgAddRow('digitalProducts', {} )
    $dgShowEditRowModal('digitalProducts', product)

    $setUser('productRowKey', product)

}