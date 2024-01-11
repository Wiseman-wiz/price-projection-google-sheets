function myFunction() {}

// Code.gs (Google Apps Script)

function doGet() {
  return HtmlService.createHtmlOutputFromFile("index").setTitle("Sample Form");
}

function addRecord(id, firstname, lastname) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Customers");
  sheet.appendRow([id, firstname, lastname]);
}
