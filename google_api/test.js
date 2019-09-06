const {
    google
} = require('googleapis');
const sheets = google.sheets('v4');
const credentials=require('./credentials')


const googleAuth = require("./auth");
googleAuth(credentials,auth=>{
    sheets.spreadsheets.values.batchUpdate({
        auth,
        spreadsheetId:"18IYEK8F2qSci_C-WCeIqQsUKqV1Ao_uoVuanIHH9JVk",
        resource:{
                    "valueInputOption":"RAW",
                    "data":[
                        {
                            "range":"'工作表3'!A1:C3",
                            "majorDimension":"ROWS",
                            "values":[
                                        [
                                            "晴天",
                                            "逛百貨"    
                                        ],
                                        [
                                            "雨天",
                                            "在家裡",
                                        ],
                                        [
                                            "陰天",
                                            "出去玩"
                                        ]
                                    ]
                        }
                    ]
    
        
    
        }

        },(err,res)=>{
            if(err) console.log(err);
            else console.log(res);
        }
        
        )
})
