function getDataForSearch(){
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const ws = ss.getSheetByName("Customers");
    return ws.getRange(2, 1, ws.getLastRow()-1, 3).getValues();
  }


function deleteById(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Customers");
  // converts array of array data to single array [["1"], ["2"], ["3"]] to ["1", "2", "3"]
  const custIds = ws.getRange(2, 1, ws.getLastRow()-1, 3).getValues().map(r => r[0].toString());
}
  
  
function addCustomer(customerInfo){
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const ws = ss.getSheetByName("Customers"); 
    const uniqueIDs = ws.getRange(2, 1, ws.getLastRow()-1, 1).getValues();
    var maxNum = 0;
    uniqueIDs.forEach(r => {
        maxNum = r[0] > maxNum ? r[0] : maxNum
    });

    var newID = maxNum + 1;

    // customerInfo.firstName = "testing";
    // customerInfo.lastName = "testinglastname";
    // customerInfo.phone = "10987123";
    ws.appendRow([
        newID,
        customerInfo.firstName,
        customerInfo.lastName,
        customerInfo.phone
    ]);

    // document.getElementById('add-customer-form').reset();
}


// function addCustomer(firstname, lastname, phone) {
//   const ss = SpreadsheetApp.getActiveSpreadsheet();
//   const ws = ss.getSheetByName("Customers"); 
//   const uniqueIDs = ws.getRange(2, 1, ws.getLastRow()-1, 1).getValues();
//   var maxNum = 0;
//   uniqueIDs.forEach(r => {
//     maxNum = r[0] > maxNum ? r[0] : maxNum
//   });

//   var id = maxNum + 1;
//   // var id = 0;
//   var firstname = "testfirstname";
//   var lastname = "testlastname";
//   var phone = "0987123";
//   ws.appendRow([id, firstname, lastname, phone]);
// }












