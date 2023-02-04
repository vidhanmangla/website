import learn_blockchain from '../assets/learn_blockchain.png';


const Blog = () => {
    
    return (

        <section align="center" className="blog">
            
            <h2 align="center">Blog</h2>

                    <div className="projects__cards">


                        <div className="projects__card">

                            <h3>123</h3>
                            
                                <img src={learn_blockchain} alt="Learn_Blockchain" />
                            
                                    <p>
                                        12345.
                                    </p>
                                    <p>
                                        12345678910.
                                    </p>

                                <a align="center" href="" target="_blank" className="button">Blog</a>

                        </div>

                    </div>

        </section>

    );

}

export default Blog;
