import Link from "next/link";
import NavStyles from "./styles/NavStyles";
import User from "./User";
import Signout from "./Signout";

const Nav = () => (
  <User>
    {({ data }) => {
      console.log(data);
      const me = data ? data.me : null;
      function ifAdmin (){
        if(me){
          if (me.permissions[0] === "ADMIN"){
            return true
          }
          return null
        }
        return null
      }
      const admin = ifAdmin ();
      return (
        <NavStyles data-test="nav">
          <Link href="https://registry.jsonresume.org/akassabian">
            <a>Resume</a>
          </Link>
          <Link href="/tech">
            <a>Tech</a>
          </Link>
          <Link href="/health">
            <a>Health</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          {admin && (
            <>
              <Link href="/posts">
                <a>posts</a>
              </Link>
              <Link href="/me">
                <a>Account</a>
              </Link>
            </>
          )}
          {me && (
            <>              
              <Signout />
            </>
          )}
          {!me && (
            <Link href="/signup">
              <a>Login</a>
            </Link>
          )}
        </NavStyles>
      );
    }}
  </User>
);

export default Nav;
