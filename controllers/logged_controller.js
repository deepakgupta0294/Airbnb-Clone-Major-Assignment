
import { Card } from "../models/Schema.js";


class logged_user {
    static homepage = async (req, res) => {
      console.log("logged user is at homepage")
      // return res.render("home")/*create error and show home.ejs ---same in userController  */
    //   const result = await Card.find({});/* finding inside Card database in cluster*/
    //   console.log(result)
    //  res.redirect("/homepage",{data:result|| []})/*   */
 
     return res.redirect("home")

    }

    static admin = (req, res) => {
       return res.render("admin")
      }
    
      static hoster = (req, res) => {
       return res.render("hoster")
      }
    
      static help = (req, res) => {
       return res.render("help")
      }
    
      static booking_conf = (req, res) => {
       return res.render("booking_conf")
      }
    
      static property = (req, res) => {
       return res.render("property")
      }
}  

export default logged_user

