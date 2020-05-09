const path = require('path');
const router = require('express').Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use(function(req,res) {
  res.sendFIle(path.join(__dirname, "../client/build/index.html"));
});
// router.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
//   console.log(res.data);  // testing
// });

// // Place this route below all others to send he index.html file
// // to any request that is not explicitly defined above
// router.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

module.exports = router;