#!/usr/bin/env node

var program = require('commander');
program
  .arguments('<file>')
  .option('-i, --instance <instance>', 'Instance to connect to')
  .option('-t, --tablename <tablename>', 'Table')
  .option('-u, --username <username>', 'The user to authenticate as')
  .option('-p, --password <password>', 'The user\'s password')
  .option('-s, --sysid <sys_id>', 'The sys_id of the record')
  .action(function(file) {
    var Attachment = require('servicenow-rest').attachment;
    var gr = new Attachment(program.instance, program.username, program.password)
    console.log(gr);
    gr.attachFile(program.tablename, program.sysid, file).then(function(value) {});
  })
  .parse(process.argv);
