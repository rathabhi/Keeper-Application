import React from "react";
function Footer()
{
    const d=new Date();
    const year=d.getFullYear();
    return(
        <footer>
        <p>Copyright &copy; {year}</p>
        </footer>

    );

}

export default Footer;