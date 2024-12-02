const Social = () => {

    return (
        <div align="center" className="social">
            <h2 align="center">Socials</h2>
            <div className="button-container">
                <a 
                    className="libutton" 
                    href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=vidhanmangla" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    Follow on LinkedIn
                </a>
                <a href="https://github.com/vidhanmangla" target="_blank" rel="noreferrer" className="ghbutton">GitHub</a>
                <a href="https://discord.gg/q5XtpBGWvb" target="_blank" rel="noreferrer" className="dcbutton">Discord</a>
                <a href="https://ethereum.stackexchange.com/users/104489/vidhan-mangla?tab=profile" target="_blank" rel="noreferrer" className="sebutton">Stack Exchange</a>
                <a href="https://www.instagram.com/woooziezy/" target="_blank" rel="noreferrer" className="igbutton">Follow on Instagram</a>
            </div>
            
            <style>
                {`
                    .social {
                        text-align: center;
                    }
                    .button-container {
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        gap: 10px;
                    }
                    .libutton, .ghbutton, .sebutton, .dcbutton, .igbutton {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        padding: 7px 10px;
                        font-size: 14px;
                        font-weight: bold;
                        color: #fff;
                        text-align: center;
                        text-decoration: none;
                        border-radius: 5px;
                        font-family: Arial, sans-serif;
                        margin: 5px;
                    }
                    .libutton {
                        background-color: #0A66C2;
                        border-radius: 16px;
                    }
                    .ghbutton {
                        background-color: #333;
                    }
                    .sebutton {
                        background-color: #F48024;
                    }
                    .dcbutton {
                        background-color: #7289DA;
                    }
                    .igbutton {
                        background-color: #E1306C;
                    }
                `}
            </style>
        </div>
    );

}

export default Social
