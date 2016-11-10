/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-leaflet-mapbox-gl',

  options: {
    nodeAssets: {
      'mapbox-gl-leaflet': {
        import: ['leaflet-mapbox-gl.js']
      },
      'mapbox-gl': {
        srcDir: 'dist',
        import: [
          'mapbox-gl.js',
          'mapbox-gl.css'
        ]
      }
    }
  }
};
