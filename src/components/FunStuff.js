const FunStuff = () => {
    const addNetworkToMetaMask = async () => {
        if (window.ethereum) {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            chainId: '0x4BE0B',
                            chainName: 'GenesisCipher Labs',
                            rpcUrls: ['https://67.207.69.134:8545'],
                            nativeCurrency: {
                                name: 'Ethereum',
                                symbol: 'ETH',
                                decimals: 18,
                            },
                        },
                    ],
                });
                alert('Network added to MetaMask!');
            } catch (error) {
                console.error('Error adding network:', error);
                alert('Failed to add network. Please try again.');
            }
        } else {
            alert('MetaMask is not installed. Please install it to connect.');
        }
    };

    return (
        <div align="center" className="funStuff">
            <h2 align="center">Fun Stuff</h2>
            <div className="button-container">
                <button className="blockchain-button" onClick={addNetworkToMetaMask}>
                    Connect To My Private Blockchain Network
                </button>
                <a
                    href="https://www.digitalocean.com/?refcode=4a6de07d9967&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"
                    target="_blank"
                    className="digitalocean-button"
                >
                    $200 DigitalOcean Free Credits
                </a>
                <a
                    href="https://github.com/GenesisCipher-Labs/genesiscipherlabs-price-oracles"
                    target="_blank"
                    className="oracle-button"
                >
                    Start Interacting With My Network of Oracles
                </a>
            </div>
            
            <style>
                {`
                    .funStuff {
                        text-align: center;
                    }
                    .button-container {
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        gap: 10px;
                    }
                    .libutton, .ghbutton, .sebutton, .dcbutton, .igbutton, .blockchain-button, .digitalocean-button, .oracle-button {
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
                        cursor: pointer;
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
                    .blockchain-button {
                        background-color: #FF9800;
                    }
                    .digitalocean-button {
                        background-color: #0069D9;
                    }
                    .oracle-button {
                        background-color: #4CAF50; /* Distinct orange for oracle interaction */
                        text-decoration: none;
                    }
                `}
            </style>
        </div>
    );
};

export default FunStuff;
