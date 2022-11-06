/* GetCurrentUserWalletProvider.js */

return function () {
  let currentUser = this.GetCurrentUser()

  return currentUser.walletProvider
}
