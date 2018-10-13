const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

css = withCSS({
  // cssModules: true,
  webpack(config, options) {
    console.log(config)
    return config
  }
})


module.exports = withSass(css)


// module.exports = {
//   plugins:{

//   },
//   webpack: config => {
//     // Fixes npm packages that depend on `fs` module
//     config.node = {
//       fs: 'empty'
//     }

//     return config
//   },
  
// }
