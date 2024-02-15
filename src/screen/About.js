function About(){
    return(
        <section className="flex flex-col justify-ecnetr items-center flex-wrap lg:mt-7 md:mt-9 sm:mt-9 sm:mx-5 font-sans text-[18px]">
            <h3 className=''>About the app:</h3>
            <p>the app aim to help chefs find different food recipes using <a href="http://https://www.edamam.com/terms/api/" className="underline text-red-800">Edamam API.</a></p>
            <h3>About app developer:</h3>
            <p>App developer is <a href="http://https://github.com/almahamans" className="underline text-red-800">Almaha Altamimi</a> a front-end developer and loves fine dining.</p>
        </section>
    )
}

export default About;