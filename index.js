const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
var t1=0,t2=0;

app.post('/joyval', async(req, res) => {         //for usage with client side
    const { thumb1,thumb2 } = req.body;

    // console.log("thumb left: "+thumb1+"\t"+"thumb right: "+thumb2);
    t1=thumb1;
    t2=thumb2;
    res.json({ thumb1,thumb2 });
  });

  app.get("/getjoy", async (req, res) => {
    try {
    //   console.log(t1+" "+t2);
    // const val = (t1+","+t2);
    // res.send(val);//change
    const val={"t1":t1,"t2":t2};
      res.json(val);
      // console.log(qry.rows);
    } catch (err) {
      console.log(err.message);
    }
  });



app.listen(5000, () => {
    console.log(`Server is running on port${5000}`);
  });