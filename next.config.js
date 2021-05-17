module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on server-side module
    if (!isServer) {
      config.node = {
        fs: 'empty',
        net: 'empty',
        dns: 'empty',
        tls: 'empty',
        module: 'empty'
      }
    }
    return config
  }
}