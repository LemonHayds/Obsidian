//CreateListingJSON.js

return async function(productName, description, fileURL){

var username = this.GetCurrentUsername()

//---UNREVEALED---
//Setup JSON 
var nft = 
{
    "name": "Obsidian Token | " + productName,
    "description": "Obsidian token created by " + username + "." + description,
    "image": "ipfs://QmUZfqHeDjyqB28GiMrrfaFbcXj5EXQmm3aojJbThZwRYr/1a.png",
    "animation_url": "ipfs://QmUZfqHeDjyqB28GiMrrfaFbcXj5EXQmm3aojJbThZwRYr/1a.mp4"
}

//Create .json file
var nftjson = JSON.stringify(nft);
console.log(nftjson)
const blob = new Blob([nftjson], { type: 'application/json' });
const file = new File([ blob ], 'obsidiantoken.json');
console.log(file)

//Upload JSON to IPFS
console.log('uploading unrevealed json to ipfs')
const response = await fetch("https://api.nft.storage/upload",{
    method: 'POST',
    headers: {
                'accept': 'application/json',
                'Content-Type': '*/*',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkwRmFGMjFGMTEzMzBDMDdGMzQwNkNkQTJCNURhRjEzQ0JCZTk5ZEYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NzY4NzM2MzEyMSwibmFtZSI6Ik9ic2lkaWFuIn0.M3JUgnhBvDpZgCBok283uh1j6Ruohv7m2JKouTb6rMs`
            },
    body: file
})
const data = response.json()
console.log(data)

//---SECRET FILE/PRODUCT---
var fname = document.getElementById('customFile').files[0].name 
var productFile = document.getElementById('customFile').files[0]

console.log('uploading file/product to ipfs')
const response2 = await fetch("https://api.nft.storage/upload",{
    method: 'POST',
    headers: {
                'accept': 'application/json',
                'Content-Type': '*/*',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkwRmFGMjFGMTEzMzBDMDdGMzQwNkNkQTJCNURhRjEzQ0JCZTk5ZEYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NzY4NzM2MzEyMSwibmFtZSI6Ik9ic2lkaWFuIn0.M3JUgnhBvDpZgCBok283uh1j6Ruohv7m2JKouTb6rMs`
            },
    body: productFile
})
const data2 = response2.json()
console.log(data2)

//---REVEALED--- 


}