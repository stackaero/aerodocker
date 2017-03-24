 var ansibleClient = require('modules/anisble/ansibleClient')();
 var logger = require('log4js').getLogger();

logger.setLevel('DEBUG');

var testData =  {
    "host": "52.33.206.18",
    "port": 22,
    "username": "centos",
    "elevatedPrivelage": true,
    "localFile": "./local/playbooks/nodeplaybook.yml",
    "keyFile": "./local/keys/kp1.pem"
}


 ansibleClient.executePlaybook(testData, function (err, commandOut) {
     if (err) {
         logger.error('Error executing playbook:', err.message)
         return
     }
     logger.info('commandOut:', JSON.stringify(commandOut));  
 })