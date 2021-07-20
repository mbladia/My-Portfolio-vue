
module.exports = {
    css: {
        loaderOptions: {
        // pass options to sass-loader
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.sass`
        // Note: this option is named as "prependData" in sass-loader v8
            sass: {
            additionalData: `@import "~@/assets/_shared.scss";`
            },
        },
    },
    chainWebpack: config => {
        config.module
          .rule("pdf")
          .test(/\.pdf$/)
          .use("file-loader")
          .loader("file-loader");

        config
            .plugin('html')
            .tap(args => {
            args[0].title = 'Mark Bryan Ladia';
            args[0].meta = [
                { viewport: 'width=device-width,initial-scale=1,user-scalable=no' },
                {   name: 'description', content:  'My updated portfolio, made with Vue JS.'},
                { property: 'og:title', content: "Mark Bryan Ladia"},
                {property: 'og:type', content: 'website'},
                // {property: 'og:image', content: require('@/assets/meta-og-img-portfolio.jpg') }  
            ];
  
            return args;
        })
    }
};
    
