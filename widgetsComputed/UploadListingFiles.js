//UploadListingFiles.js

return async function(productName, description, fileURL){

    var username = this.GetCurrentUsername()

    //Get product row
    const rowKey = $getUser('productRowKey')
    $setUser('productRowKey', null)

    //--------------------------------------UNREVEALED--------------------------------------
    //Setup JSON 
    var nft = 
    {
        "name": "Obsidian Token | " + productName,
        "description": "Obsidian token created by " + username + "." + description,
        "image": "ipfs://ipfs://bafybeidgk2gdnyhlrgtv3hrgjusyz5lg53ummeaedafry4rvbom35zlf5e/obisidian.png",
        "animation_url": "ipfs://ipfs://bafybeidgk2gdnyhlrgtv3hrgjusyz5lg53ummeaedafry4rvbom35zlf5e/obsidian.mp4"
    }

    //Create .json file
    var nftjson = JSON.stringify(nft);
    console.log(nftjson)
    const blob = new Blob([nftjson], { type: 'application/json' });
    const file = new File([ blob ], 'obsidiantoken.json');
    console.log(file)

    //Upload JSON to IPFS
    console.log('uploading unrevealed json to ipfs')
    await fetch("https://api.nft.storage/upload",{
        method: 'POST',
        headers: {
                    'accept': 'application/json',
                    'Content-Type': '*/*',
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkwRmFGMjFGMTEzMzBDMDdGMzQwNkNkQTJCNURhRjEzQ0JCZTk5ZEYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NzY4NzM2MzEyMSwibmFtZSI6Ik9ic2lkaWFuIn0.M3JUgnhBvDpZgCBok283uh1j6Ruohv7m2JKouTb6rMs`
                },
        body: file
    })
    .then(response => response.json())
    .then(result => $setUser('firstCID', result.value.cid))
    .catch(error => console.log('error', error));

    //--------------------------------------SECRET FILE/PRODUCT--------------------------------------
    //var fname = document.getElementById('customFile').files[0].name 
    var productFile = document.getElementById('customFile').files[0]

    console.log('uploading file/product to ipfs')
    await fetch("https://api.nft.storage/upload",{
        method: 'POST',
        headers: {
                    'accept': 'application/json',
                    'Content-Type': '*/*',
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkwRmFGMjFGMTEzMzBDMDdGMzQwNkNkQTJCNURhRjEzQ0JCZTk5ZEYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NzY4NzM2MzEyMSwibmFtZSI6Ik9ic2lkaWFuIn0.M3JUgnhBvDpZgCBok283uh1j6Ruohv7m2JKouTb6rMs`
                },
        body: productFile
    })
    .then(response => response.json())
    .then(result => $setUser('cid', result.value.cid))
    .catch(error => console.log('error', error));

    var fileCid = $getUser('cid')

    //var salt = Math.random().toString(36).slice(2, 7);

    //console.log('fileHASH:')
    //const fileHash = ethers.utils.keccak256([salt], [fileCid])
    //console.log(fileHash)

    $setDataGridVal('digitalProducts', rowKey + '.secretFileURL', fileCid)

    //--------------------------------------REVEALED-------------------------------------- 
    var revealedNFT = 
    {
        "name": "Obsidian Token | " + productName,
        "description": "Obsidian token created by " + username + "." + description + ' The file can be downloaded [here](ipfs://' + fileCid + '/).',
        "image": "ipfs://bafybeieht7kljjga5umd72hhtn5bbxk3hnugcpeak7abgiichklxdahliq/obsidian_dark.png",
        "animation_url": "ipfs://bafybeieht7kljjga5umd72hhtn5bbxk3hnugcpeak7abgiichklxdahliq/obsidian_dark.mp4"
    }
    $setUser('cid', null)

    //Create .json file
    var revealedJSON = JSON.stringify(revealedNFT);
    const blob2 = new Blob([revealedJSON], { type: 'application/json' });
    const file2 = new File([ blob2 ], 'obsidiantoken.json');
    console.log(file2)

    //Upload JSON to IPFS
    console.log('uploading revealed json to ipfs')
    await fetch("https://api.nft.storage/upload",{
        method: 'POST',
        headers: {
                    'accept': 'application/json',
                    'Content-Type': '*/*',
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkwRmFGMjFGMTEzMzBDMDdGMzQwNkNkQTJCNURhRjEzQ0JCZTk5ZEYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NzY4NzM2MzEyMSwibmFtZSI6Ik9ic2lkaWFuIn0.M3JUgnhBvDpZgCBok283uh1j6Ruohv7m2JKouTb6rMs`
                },
        body: file2
    })
    .then(response => response.json())
    .then(result => $setUser('cid', result.value.cid))
    .catch(error => console.log('error', error));

    var fileCid = $getUser('cid')

    console.log(revealedNFT)
    $setDataGridVal('digitalProducts', rowKey + '.revealedNFTURL', fileCid)


}