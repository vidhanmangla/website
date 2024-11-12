const Referrals = () => {
    return (
        <div align="center" className="referral">
            <h2 align="center">Referrals</h2>
            <div className="button-container">
                <a href="https://www.digitalocean.com/?refcode=4a6de07d9967&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"><img src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%202.svg" alt="DigitalOcean Referral Badge" /></a>
            </div>
            
            <style>
                {`
                    .referral {
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
};

export default Referrals;
