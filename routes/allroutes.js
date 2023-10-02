const app = require("express"); //import express
const router = app.Router();

const ReportModule = require("../controllers/ReportModule");

router.post("/reports", ReportModule.reports);
router.post("/schedule", ReportModule.schedules);
router.post("/fb", ReportModule.fb);
router.post("/emergency_care_data", ReportModule.emergency_care_data);
router.post("/pd", ReportModule.pd);
router.post("/branchmainfetch", ReportModule.branchmainfetch);
router.post("/membership_revenue", ReportModule.membership_revenue);

module.exports = router; // export to use in server.js
