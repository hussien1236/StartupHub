import { DefaultSession} from "next-auth";
import { DefaultJWT } from "next-auth/jwt";
import { GithubProfile } from "next-auth/providers/github";
declare module "next-auth" {
    interface Session extends DefaultSession {
        id: string
    }
    interface JWT extends DefaultJWT {
        id:string
    }
    interface Profile extends GithubProfile{
        id: string,
        login : string,
        bio? : string
      }
}