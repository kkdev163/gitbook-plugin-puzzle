module.exports = {
    // Extend website resources and html
    website: {
        assets: ".",
        html: {
            "html:end": function() {
                return "<!-- End of book "+this.options.title+" -->"
            },
            "head:end": function() {
               return  "<!-- head:end puzzle-->"
            }
        }
    }
};
