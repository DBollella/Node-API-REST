const express = require('express');
const auth = require('./auth');

module.exports = function(server){
    
    //Open Routes
    const openApi = express.Router();
    server.use('oapi',openApi)
    
    const AuthService = require('../api/user/authService');
    openApi.post('/login', AuthService.login);
    openApi.post('/singup', AuthService.singup);
    openApi.post('/validateToken', AuthService.validateToken);
    
    //API Routes
    const router = express.Router();
    server.use('/api', router);

   //rotas da API
   const billingCycleService = require('../api/billingCycle/billingCycleService');
   billingCycleService.register(router, '/billingCycles');

    const billingSummaryService = require('../api/billingSummary/billingSummaryService')
    router.route('/billingSummary').get(billingSummaryService.getSummary)
}