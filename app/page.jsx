import Feed from "@components/Feed.jsx";


const Home = () => {
    return (
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Discover and Share
        <br className="max-md:hidden" />
        <span className="green_gradient text-center">
          ANIME QOUTES YOU LIKE !!</span></h1>
        <p className="desc text-center"> QoutesShare is an social
         media specially made for sharing,
         posting or even create anime qoutes.</p>
      <Feed/>
      </section>
     
    );
  };
  
  export default Home