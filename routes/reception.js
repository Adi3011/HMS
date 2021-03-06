const Reception = require("../models/Reception")
const router = require("express").Router();

router.post("/reception",(req,res)=>{
    const token = req.body.token.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err || !payload) {
        res.send({ err: "Something went wrong!" });
      } 
      else 
      {
    var complications=req.body.complications
    Reception.findByIdAndUpdate(
        payload._id,
        {
            complications
        }
      )
        .then((reception) => {
          res.send({ success: true });
        })
        .catch((err) => {
          console.log(err);
          res.send({ success: false });
        });
      }
  });

});