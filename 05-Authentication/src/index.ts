import express from "express"
import type {Request, Response} from "express"

const app = express();
const PORT = 8000

app.use(express.json());

type User = {
  name: string,
  email: string,
  password: string
}

const dairy: Record<string, User> = {};
const emails = new Set();

// Sign up - basically collecting data from the user to authenticate in the future
app.post("/sign-up", (req: Request, res: Response) => {

  const {email, name, password} = req.body;

  if(emails.has(email)){
    return res.status(409).json({error: "Email already exists"});
  }

  const token = Date.now();
  
  emails.add(email);
  dairy[token] = {name, email, password};

  return res.status(201).json({message: "User has been created", token});
  
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
