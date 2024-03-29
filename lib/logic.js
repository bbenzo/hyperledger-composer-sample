/** 
 * @param {org.example.biznet.TradeCard} trade
 * @transaction
*/
async function tradeCard(trade) {
  const currentParticipant = getCurrentParticipant(); // Get information about the transaction instantiator
  if (trade.card.forTrade) {
    // If card is available for trade
    trade.card.owner = trade.newOwner; // Change the property
    return getAssetRegistry("org.example.biznet.TradingCard")
      .then(assetRegistry => {
        return assetRegistry.update(trade.card); // Update the network registry
      })
      .then(() => {
        let event = getFactory().newEvent(
          "org.example.biznet",
          "TradeNotification"
        ); // Get a reference to the event specified in the modeling languageÙ
        event.card = trade.card;
        emit(event); // Fire off the event
      });
  }
}
