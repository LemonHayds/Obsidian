//CreateListingWeb3.js
return async function(productName, description, fileURL, fundingGoal, perPrice){

    //Create files
    document.getElementById("list__button").textContent="Uploading file to IPFS";
    //console.log(document.getElementsByClassName("spinner-border"))
    await this.UploadListingFiles(productName, description, fileURL)

    document.getElementById("list__button").textContent="Creating fundraise listing on Smart Contract";
    await this.CreateFundraiseWeb3(productName, 'OBD', fundingGoal, perPrice, 0, (Math.floor(Date.now() / 1000) + (3600 * 24 * 7)))



}