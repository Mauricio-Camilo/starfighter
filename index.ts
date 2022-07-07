import express, { Request, Response } from "express";

const app = express();

app.get("/check/:id", (req : Request, res : Response) => {
    const id = req.params;
    const object = {
        "id": id 
    };
    res.send(object);
})

const port = +process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
