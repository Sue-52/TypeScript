import { controller, get } from "./decorators";
import { Request, Response, NextFunction } from "express";
import { use } from "./decorators";
import { post } from "./decorators";

function logger(req: Request, res: Response, next: NextFunction) {
  console.log("logger");
  next();
}

@controller("/auth")
export class LoginController {
  @get("/login")
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
   `);
  }

  @post("/login")

  postLogin(req: Request, res: Response): void {
    const { email, password } = req.body;
    res.send({ email, password });
  }
}