return function(){

  let myListings = $getGrid('digitalProducts').filter(row => row.nftListed == true && row.owner == fbUser.uid)

  //let myListings = $getGrid('digitalProducts')

  console.log(myListings)

  return myListings

}