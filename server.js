const express= require('express');
const path= require('path');

const app= express();

app.use(express.static('./dist/coreui-free-angular-admin-template-master'));

app.get('/*', (req , res) => res.sendFile('index.html', {root :'dist/angular-heroku'}),);

app.listen(process.env.PORT || 9080);