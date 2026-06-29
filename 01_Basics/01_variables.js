const accountId = 144553
let accountEmail = "nikshay@google.com"     // better - new method  (control on scope now)
var accountPassword = "12345"    //old - not used now  (no control on block/functional scope)
accountCity = "Jaipur"    //Bad method - w/o keyword
let accountState;        //semi colon lagao ya na lagao javascript mei marzi hai

// accountId = 2     //not allowed to change const

accountEmail = "nik@nik.com"
accountPassword = "1213"
accountCity = "Bengaluru"



console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

