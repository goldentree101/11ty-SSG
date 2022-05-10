module.exports = (eleventyConfig) => {

    //This pushes our CSS/assets to the public folder (not done by default in 11ty) 
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/assets"); //takes everything in 'assets'

    return{
        dir:{
            //our workflow directories
            //the source files (to build the site), and the public files (the actual static site that is hosted - eleventy BUILDS this for us)
            input:"src",
            output:"public"
        }
    };
}