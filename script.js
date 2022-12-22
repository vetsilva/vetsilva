(function(){
    var script = {
 "definitions": [{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -6.61
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_2BAFA2EF_3B3D_0CF5_41C7_126DC17D8E69",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D042E3B_362F_FA25_41A6_847B701E51FA"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31",
 "thumbnailUrl": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_t.jpg",
 "label": "Foto 1",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_3BEDB1D3_3633_C664_41C1_F051D563052F"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3D042E3B_362F_FA25_41A6_847B701E51FA",
 "thumbnailUrl": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_t.jpg",
 "label": "Foto 2",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_387F1E5F_3632_FA1C_419E_C0C367F96083",
  "this.overlay_38AFD901_3632_C7E4_41B5_B7AEEFC402E2"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 103.59,
  "class": "PanoramaCameraPosition",
  "pitch": -15.43
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_34C5F172_3B3D_0DEF_4173_C1D0C4624D98",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3D1B8433_362D_4E24_41BB_A1E69914E967",
 "thumbnailUrl": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_t.jpg",
 "label": "Foto 11",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_22623D70_3635_3E24_41C8_3CD92CD1CA18"
 ]
},
{
 "items": [
  {
   "media": "this.panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3D042E3B_362F_FA25_41A6_847B701E51FA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3D1B8433_362D_4E24_41BB_A1E69914E967",
   "camera": "this.panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 98.45,
  "class": "PanoramaCameraPosition",
  "pitch": -8.08
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_34FA5105_3B3D_0D34_41BE_77FA9F0321E5",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310",
 "thumbnailUrl": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_t.jpg",
 "label": "Foto 8",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_245967C3_363D_CA64_41C6_9C60371E1765"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B",
 "thumbnailUrl": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_t.jpg",
 "label": "Foto 6",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_275A0D5F_363D_3E1C_41A5_49B60583CA83"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -50.69,
  "class": "PanoramaCameraPosition",
  "pitch": 2.94
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_2B62E281_3B3D_0F2C_41C9_09A243ADDB78",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281",
 "thumbnailUrl": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_t.jpg",
 "label": "Foto 7",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_27AF2FCE_363F_7A7C_4198_671BFF512F56",
  "this.overlay_27E42257_363F_4A6C_41BA_D4A0365425C8",
  "this.overlay_27C786C7_363F_CA6D_41C6_A0DF6F7AE967"
 ]
},
{
 "items": [
  {
   "media": "this.panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3D042E3B_362F_FA25_41A6_847B701E51FA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3D1B8433_362D_4E24_41BB_A1E69914E967",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D042E3B_362F_FA25_41A6_847B701E51FA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9",
 "thumbnailUrl": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_t.jpg",
 "label": "Foto 3",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_392BC14C_3637_C67C_418E_0B3B221EEA78",
  "this.overlay_39051AB7_3637_DA2C_4190_1B51F1733167",
  "this.overlay_27230259_3635_4A64_41A1_28754F85A881"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2",
 "thumbnailUrl": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_t.jpg",
 "label": "Foto 4",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_263E076E_3635_4A3F_41C2_AD373ADBA20A"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D1B8433_362D_4E24_41BB_A1E69914E967"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0",
 "thumbnailUrl": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_t.jpg",
 "label": "Foto 10",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_25AA3676_3632_CA2C_41C3_4BD22E183C57",
  "this.overlay_25FE6734_3632_CA2C_41C6_823F00C001BF"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -175.59,
  "class": "PanoramaCameraPosition",
  "pitch": -0.73
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_34DB1147_3B3D_0D35_41C7_CF5DA2C726B0",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 114.61,
  "class": "PanoramaCameraPosition",
  "pitch": -7.35
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_2B34A199_3B3D_0D5D_41B8_D18B975C41F7",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -168.24,
  "class": "PanoramaCameraPosition",
  "pitch": -8.08
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_2B00E220_3B3D_0F6B_41BB_BB64315DFEAB",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -165.31,
  "class": "PanoramaCameraPosition",
  "pitch": -6.61
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_2B5D92AB_3B3D_0F7C_4150_B1E091897C16",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -120.49,
  "class": "PanoramaCameraPosition",
  "pitch": -6.61
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_2B2671C6_3B3D_0D37_4191_C537D9A14006",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -80.82,
  "class": "PanoramaCameraPosition",
  "pitch": -2.94
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_2BBF82D8_3B3D_0CDB_41B2_F703C845FED2",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -4.41
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_34F1C11B_3B3D_0D5C_41C2_09F0E24BA5D7",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -79.35,
  "class": "PanoramaCameraPosition",
  "pitch": -4.41
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_2B4DF2C2_3B3D_0F2F_419D_A573B0CD27F5",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 2.2,
  "class": "PanoramaCameraPosition",
  "pitch": -1.47
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_34EE3131_3B3D_0D6C_41CC_00099AB565C7",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -168.98,
  "class": "PanoramaCameraPosition",
  "pitch": -5.14
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_2B73524C_3B3D_0F3B_41B2_B5B9C3846A0D",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D",
 "thumbnailUrl": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_t.jpg",
 "label": "Foto 5",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_26179FA8_3633_5A24_41C1_E47DFA1180C0",
  "this.overlay_26483313_3633_CBE4_41BC_27B68CA9AAF6",
  "this.overlay_269C8C47_3633_FE6C_41BD_0AE2133003BD"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2",
 "thumbnailUrl": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_t.jpg",
 "label": "Foto 9",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_248C3222_363D_4A24_4176_D9489841B6A5",
  "this.overlay_24CBFA8C_3632_DAE3_41BF_8823072C8368"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 47.02,
  "class": "PanoramaCameraPosition",
  "pitch": -1.47
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_2B1111F3_3B3D_0CED_41C2_1A1A30F37B44",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 99.92,
  "class": "PanoramaCameraPosition",
  "pitch": -16.9
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_34D5515C_3B3D_0DD4_4199_AF6DB1830738",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "targetPitch": 0,
   "targetStereographicFactor": 0,
   "duration": 3000,
   "easing": "cubic_in_out",
   "class": "TargetRotationalCameraDisplayMovement"
  }
 ],
 "class": "PanoramaCamera",
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 0,
  "stereographicFactor": 1,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 }
},
{
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_rotation"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "toolTipOpacity": 0.5,
 "left": 0,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minWidth": 100,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "class": "ViewerArea",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "shadow": false,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "minHeight": 50,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "progressBottom": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 10,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 7,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "data": {
  "name": "Main Viewer"
 },
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "left": "0%",
 "width": 300,
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "class": "Container",
 "verticalAlign": "top",
 "top": "0%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "--- LEFT PANEL"
 },
 "scrollBarWidth": 10,
 "overflow": "scroll"
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "verticalAlign": "top",
 "top": "0%",
 "bottom": "0%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "verticalAlign": "top",
 "top": "0%",
 "bottom": "0%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "--LOCATION"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "verticalAlign": "top",
 "top": "0%",
 "bottom": "0%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "--FLOORPLAN"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "verticalAlign": "top",
 "top": "0%",
 "bottom": "0%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "right": "0%",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "verticalAlign": "top",
 "top": "0%",
 "bottom": "0%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "--REALTOR"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "minHeight": 1,
 "id": "Image_21586916_3652_C7EC_41AB_5794FC779DF1",
 "paddingLeft": 0,
 "right": "1.49%",
 "maxWidth": 1176,
 "borderSize": 0,
 "horizontalAlign": "center",
 "width": "10.895%",
 "minWidth": 1,
 "url": "skin/Image_21586916_3652_C7EC_41AB_5794FC779DF1.png",
 "class": "Image",
 "verticalAlign": "middle",
 "top": "5.15%",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "maxHeight": 1019,
 "paddingBottom": 0,
 "data": {
  "name": "Image14892"
 },
 "height": "18.312%",
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "borderRadius": 0
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.66,
   "pitch": -34.23,
   "yaw": 1.79,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_21819121_362D_C624_41C9_422CFBDD9F8B",
   "distance": 100
  }
 ],
 "id": "overlay_3BEDB1D3_3633_C664_41C1_F051D563052F",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.66,
   "yaw": 1.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9, this.camera_34EE3131_3B3D_0D6C_41CC_00099AB565C7); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.35,
   "pitch": -32.17,
   "yaw": 42.97,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_21811125_362D_C62C_41B8_F1925920706E",
   "distance": 100
  }
 ],
 "id": "overlay_387F1E5F_3632_FA1C_419E_C0C367F96083",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 29.35,
   "yaw": 42.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31, this.camera_34DB1147_3B3D_0D35_41C7_CF5DA2C726B0); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.12,
   "pitch": -32.86,
   "yaw": -179.77,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2180A125_362D_C62C_41C3_1F8D05828EE6",
   "distance": 100
  }
 ],
 "id": "overlay_38AFD901_3632_C7E4_41B5_B7AEEFC402E2",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 29.12,
   "yaw": -179.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0, this.camera_2B00E220_3B3D_0F6B_41BB_BB64315DFEAB); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.43,
   "pitch": -42.81,
   "yaw": -157.45,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_21FD4136_362D_C62C_41A8_CA9DF9F72A75",
   "distance": 100
  }
 ],
 "id": "overlay_22623D70_3635_3E24_41C8_3CD92CD1CA18",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 25.43,
   "yaw": -157.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.81,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281, this.camera_2B34A199_3B3D_0D5D_41B8_D18B975C41F7); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.07,
   "pitch": -35.95,
   "yaw": 126.71,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_21FD6132_362D_C624_41A1_F3C0159D1315",
   "distance": 100
  }
 ],
 "id": "overlay_245967C3_363D_CA64_41C6_9C60371E1765",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.07,
   "yaw": 126.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D, this.camera_34C5F172_3B3D_0DEF_4173_C1D0C4624D98); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.01,
   "pitch": -33.2,
   "yaw": 111.27,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2182212A_362D_C624_41C5_88BAC1ED11B1",
   "distance": 100
  }
 ],
 "id": "overlay_275A0D5F_363D_3E1C_41A5_49B60583CA83",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 29.01,
   "yaw": 111.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D, this.camera_2BAFA2EF_3B3D_0CF5_41C7_126DC17D8E69); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.01,
   "pitch": -33.2,
   "yaw": -178.02,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2182712B_362D_C624_41B2_D955D0DF5AE6",
   "distance": 100
  }
 ],
 "id": "overlay_27AF2FCE_363F_7A7C_4198_671BFF512F56",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 29.01,
   "yaw": -178.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310, this.camera_2BBF82D8_3B3D_0CDB_41B2_F703C845FED2); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.31,
   "pitch": -35.26,
   "yaw": -73.71,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_21FDB12C_362D_C63C_41A8_DAC0BA065D8F",
   "distance": 100
  }
 ],
 "id": "overlay_27E42257_363F_4A6C_41BA_D4A0365425C8",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.31,
   "yaw": -73.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.66,
   "pitch": -34.23,
   "yaw": 1.79,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_21FDD12C_362D_C63C_41AB_BC1412E1AD1E",
   "distance": 100
  }
 ],
 "id": "overlay_27C786C7_363F_CA6D_41C6_A0DF6F7AE967",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.66,
   "yaw": 1.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.66,
   "pitch": -34.23,
   "yaw": 1.79,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2180F126_362D_C62C_419C_4914819D2888",
   "distance": 100
  }
 ],
 "id": "overlay_392BC14C_3637_C67C_418E_0B3B221EEA78",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.66,
   "yaw": 1.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2, this.camera_2B62E281_3B3D_0F2C_41C9_09A243ADDB78); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.24,
   "pitch": -32.52,
   "yaw": -55.87,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_21803127_362D_C62C_41CA_8B8AFAF3C597",
   "distance": 100
  }
 ],
 "id": "overlay_39051AB7_3637_DA2C_4190_1B51F1733167",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 29.24,
   "yaw": -55.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D042E3B_362F_FA25_41A6_847B701E51FA, this.camera_2B73524C_3B3D_0F3B_41B2_B5B9C3846A0D); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.95,
   "pitch": -36.29,
   "yaw": -151.27,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_21804127_362D_C62C_41C4_9F81CA4C84ED",
   "distance": 100
  }
 ],
 "id": "overlay_27230259_3635_4A64_41A1_28754F85A881",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 27.95,
   "yaw": -151.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.29,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9, this.camera_34D5515C_3B3D_0DD4_4199_AF6DB1830738); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.19,
   "pitch": -38.35,
   "yaw": 116.41,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2183E128_362D_C624_41B7_769C5F1C9802",
   "distance": 100
  }
 ],
 "id": "overlay_263E076E_3635_4A3F_41C2_AD373ADBA20A",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 27.19,
   "yaw": 116.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2, this.camera_2B2671C6_3B3D_0D37_4191_C537D9A14006); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.19,
   "pitch": -35.61,
   "yaw": -122.44,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_21FDF135_362D_C62C_41AE_D11F40DB334D",
   "distance": 100
  }
 ],
 "id": "overlay_25AA3676_3632_CA2C_41C3_4BD22E183C57",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.19,
   "yaw": -122.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D1B8433_362D_4E24_41BB_A1E69914E967, this.camera_2B1111F3_3B3D_0CED_41C2_1A1A30F37B44); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.19,
   "pitch": -35.61,
   "yaw": 36.45,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_21FD3136_362D_C62C_41AD_84C92D33CF26",
   "distance": 100
  }
 ],
 "id": "overlay_25FE6734_3632_CA2C_41C6_823F00C001BF",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.19,
   "yaw": 36.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9, this.camera_2B5D92AB_3B3D_0F7C_4150_B1E091897C16); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.13,
   "pitch": -45.9,
   "yaw": -179.43,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_21833128_362D_C624_4182_11B93B8FB196",
   "distance": 100
  }
 ],
 "id": "overlay_26179FA8_3633_5A24_41C1_E47DFA1180C0",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 24.13,
   "yaw": -179.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -45.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B, this.camera_2B4DF2C2_3B3D_0F2F_419D_A573B0CD27F5); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.19,
   "pitch": -38.35,
   "yaw": -72.68,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_21837129_362D_C624_41B1_B0AE42152470",
   "distance": 100
  }
 ],
 "id": "overlay_26483313_3633_CBE4_41BC_27B68CA9AAF6",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 27.19,
   "yaw": -72.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.66,
   "pitch": -34.23,
   "yaw": 1.79,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2182912A_362D_C624_41BC_CA3E56C0FB26",
   "distance": 100
  }
 ],
 "id": "overlay_269C8C47_3633_FE6C_41BD_0AE2133003BD",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.66,
   "yaw": 1.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0, this.camera_34FA5105_3B3D_0D34_41BE_77FA9F0321E5); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.06,
   "pitch": -38.69,
   "yaw": 71.46,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_21FC8133_362D_C624_416B_A3DEC74C5E4E",
   "distance": 100
  }
 ],
 "id": "overlay_248C3222_363D_4A24_4176_D9489841B6A5",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 27.06,
   "yaw": 71.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281, this.camera_34F1C11B_3B3D_0D5C_41C2_09F0E24BA5D7); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.67,
   "pitch": -39.72,
   "yaw": -179.75,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_21FC2134_362D_C62C_41C8_7D573458CF56",
   "distance": 100
  }
 ],
 "id": "overlay_24CBFA8C_3632_DAE3_41BF_8823072C8368",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 26.67,
   "yaw": -179.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.72,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "left": "0%",
 "width": 66,
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "class": "Container",
 "verticalAlign": "top",
 "top": "0%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "propagateClick": true,
 "data": {
  "name": "- COLLAPSE"
 },
 "visible": false,
 "scrollBarWidth": 10,
 "overflow": "scroll"
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "paddingLeft": 40,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "width": 300,
 "children": [
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
  "this.Image_2E5D286D_3653_C63C_41AB_197970EB97CD"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "verticalAlign": "top",
 "top": "0%",
 "paddingRight": 40,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.7,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 40,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 40,
 "data": {
  "name": "- EXPANDED"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "scrollBarOpacity": 0.5,
 "shadowVerticalLength": 0,
 "class": "Container",
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "horizontal",
 "minHeight": 1,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "scrollBarOpacity": 0.5,
 "shadowVerticalLength": 0,
 "class": "Container",
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "minHeight": 1,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "80%",
 "paddingRight": 20,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "scrollBarOpacity": 0.5,
 "shadowVerticalLength": 0,
 "class": "Container",
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "minHeight": 1,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "scrollBarOpacity": 0.5,
 "shadowVerticalLength": 0,
 "class": "Container",
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "horizontal",
 "minHeight": 1,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "scrollBarOpacity": 0.5,
 "shadowVerticalLength": 0,
 "class": "Container",
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "minHeight": 1,
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "80%",
 "paddingRight": 20,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3DC9FB9A_362F_3AE4_41C2_7D184FB04D31_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_21819121_362D_C624_41C9_422CFBDD9F8B",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_21811125_362D_C62C_41B8_F1925920706E",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D042E3B_362F_FA25_41A6_847B701E51FA_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2180A125_362D_C62C_41C3_1F8D05828EE6",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D1B8433_362D_4E24_41BB_A1E69914E967_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_21FD4136_362D_C62C_41A8_CA9DF9F72A75",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D1FE732_362E_CA27_41B9_52BA55AB4310_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_21FD6132_362D_C624_41A1_F3C0159D1315",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D1FFF7E_362F_5A1C_41CA_52731C99709B_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2182212A_362D_C624_41C5_88BAC1ED11B1",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2182712B_362D_C624_41B2_D955D0DF5AE6",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_21FDB12C_362D_C63C_41A8_DAC0BA065D8F",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D1D6332_362E_CA24_41AB_FB4A39E7F281_1_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_21FDD12C_362D_C63C_41AB_BC1412E1AD1E",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2180F126_362D_C62C_419C_4914819D2888",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_21803127_362D_C62C_41CA_8B8AFAF3C597",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D1D3374_362F_CA2C_41C3_09438E9A92B9_1_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_21804127_362D_C62C_41C4_9F81CA4C84ED",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D1F876E_362F_4A3C_41A2_617EFA524EA2_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2183E128_362D_C624_41B7_769C5F1C9802",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_21FDF135_362D_C62C_41AE_D11F40DB334D",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D1E5FD4_362D_3A6C_41B5_300682B125E0_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_21FD3136_362D_C62C_41AD_84C92D33CF26",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_21833128_362D_C624_4182_11B93B8FB196",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_21837129_362D_C624_41B1_B0AE42152470",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D1A2B9E_362F_7A1C_41C1_B755C71D2A5D_1_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2182912A_362D_C624_41BC_CA3E56C0FB26",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_21FC8133_362D_C624_416B_A3DEC74C5E4E",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D1CEC2F_362E_DE3C_41BB_BC6247D760F2_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_21FC2134_362D_C62C_41C8_7D573458CF56",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "left": "0%",
 "width": 36,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "class": "Container",
 "verticalAlign": "top",
 "top": "0%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.4,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "propagateClick": true,
 "data": {
  "name": "Container black"
 },
 "backgroundColorRatios": [
  0
 ],
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "transparencyActive": true,
 "minHeight": 1,
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "paddingLeft": 0,
 "maxWidth": 80,
 "minWidth": 1,
 "borderSize": 0,
 "width": 50,
 "horizontalAlign": "center",
 "class": "IconButton",
 "verticalAlign": "middle",
 "top": "40%",
 "bottom": "40%",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "maxHeight": 80,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "layout": "vertical",
 "minHeight": 1,
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DB31382_7065_343F_41D6_641BBE1B2562",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
  "this.Container_7DB32382_7065_343F_419E_6594814C420F",
  "this.Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
  "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95",
  "this.Button_7DBC8382_7065_343F_4183_17B44518DB40",
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9"
 ],
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "verticalAlign": "middle",
 "top": "25%",
 "bottom": "25%",
 "paddingRight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-Container buttons"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "minHeight": 1,
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "verticalAlign": "bottom",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "paddingRight": 0,
 "width": "100%",
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-Container footer"
 },
 "height": "26.316%",
 "propagateClick": true,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "minHeight": 1,
 "id": "Image_2E5D286D_3653_C63C_41AB_197970EB97CD",
 "paddingLeft": 0,
 "right": "-0.01%",
 "maxWidth": 1865,
 "borderSize": 0,
 "horizontalAlign": "center",
 "width": "100.011%",
 "minWidth": 1,
 "url": "skin/Image_2E5D286D_3653_C63C_41AB_197970EB97CD.png",
 "class": "Image",
 "verticalAlign": "middle",
 "top": "0.95%",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "maxHeight": 643,
 "paddingBottom": 0,
 "data": {
  "name": "Image14804"
 },
 "height": "19.063%",
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "borderRadius": 0
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "paddingRight": 0,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "height": 140,
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "itemMaxWidth": 1000,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "left": 0,
 "scrollBarVisible": "rollOver",
 "itemMode": "normal",
 "scrollBarColor": "#04A3E1",
 "itemPaddingRight": 3,
 "minWidth": 1,
 "itemLabelFontFamily": "Oswald",
 "horizontalAlign": "center",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemThumbnailOpacity": 1,
 "itemMaxHeight": 1000,
 "class": "ThumbnailGrid",
 "itemBorderRadius": 0,
 "verticalAlign": "middle",
 "paddingRight": 70,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "width": "100%",
 "itemOpacity": 1,
 "selectedItemLabelFontColor": "#04A3E1",
 "shadow": false,
 "itemLabelFontStyle": "italic",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "backgroundOpacity": 0,
 "height": "92%",
 "itemHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "itemBackgroundOpacity": 0,
 "itemPaddingLeft": 3,
 "itemThumbnailBorderRadius": 0,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "minHeight": 1,
 "paddingLeft": 70,
 "itemMinHeight": 50,
 "borderSize": 0,
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemLabelFontWeight": "normal",
 "selectedItemThumbnailShadow": true,
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "scrollBarMargin": 2,
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "gap": 26,
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "itemLabelFontColor": "#666666",
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "paddingBottom": 70,
 "data": {
  "name": "ThumbnailList"
 },
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "scrollBarWidth": 10,
 "itemThumbnailShadow": false,
 "itemLabelGap": 7,
 "itemPaddingBottom": 3,
 "itemThumbnailWidth": 220
},
{
 "minHeight": 1,
 "height": "100%",
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "100%",
 "minWidth": 1,
 "scrollEnabled": true,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "class": "WebFrame",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "insetBorder": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame48191"
 },
 "backgroundColor": [
  "#FFFFFF"
 ],
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ]
},
{
 "transparencyActive": false,
 "minHeight": 50,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "paddingLeft": 0,
 "maxWidth": 60,
 "borderSize": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "minWidth": 50,
 "class": "IconButton",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "width": "25%",
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "maxHeight": 60,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "height": "75%",
 "propagateClick": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MapViewer",
 "toolTipOpacity": 1,
 "left": 0,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minWidth": 1,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "class": "ViewerArea",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "shadow": false,
 "height": "99.975%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "minHeight": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "data": {
  "name": "Floor Plan"
 },
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "height": 140,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "minHeight": 1,
 "height": "100%",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container photo"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "minHeight": 1,
 "height": "100%",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "55%",
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "backgroundColor": [
  "#000000"
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "vertical",
 "minHeight": 1,
 "height": "100%",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "paddingLeft": 60,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "minWidth": 460,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "paddingRight": 60,
 "width": "45%",
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 1,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": false,
 "minHeight": 50,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "paddingLeft": 0,
 "maxWidth": 60,
 "borderSize": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "minWidth": 50,
 "class": "IconButton",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "width": "25%",
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "maxHeight": 60,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "height": "75%",
 "propagateClick": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "paddingRight": 0,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "height": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button Tour Info"
 },
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
 "paddingLeft": 10,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "shadowSpread": 1,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "iconHeight": 32,
 "minWidth": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": "32px",
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "gap": 5,
 "paddingTop": 0,
 "label": "VISITE NOSSO SITE",
 "borderRadius": 0,
 "click": "this.openLink('http://www.vetsilva.com', '_blank')",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "height": 50,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "paddingRight": 0,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "height": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button Panorama List"
 },
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "paddingLeft": 10,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "shadowSpread": 1,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "iconHeight": 32,
 "minWidth": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": "32px",
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "gap": 23,
 "paddingTop": 0,
 "label": "FACEBOOK",
 "borderRadius": 0,
 "click": "this.openLink('https://pt-br.facebook.com/VetSilvaJoinville/', '_blank')",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "height": 50,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "paddingRight": 0,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "height": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
 "paddingLeft": 10,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "shadowSpread": 1,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "iconHeight": 32,
 "minWidth": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": "32px",
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "gap": 5,
 "paddingTop": 0,
 "label": "INSTAGRAM",
 "borderRadius": 0,
 "click": "this.openLink('https://www.instagram.com/vetsilvajoinville/', '_blank')",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "data": {
  "name": "Button Location"
 },
 "fontStyle": "italic",
 "iconWidth": 32,
 "height": 50,
 "propagateClick": true,
 "pressedLabel": "Location",
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "paddingRight": 0,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "height": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button Floorplan"
 },
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "paddingLeft": 10,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "shadowSpread": 1,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "iconHeight": 32,
 "minWidth": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": "32px",
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "gap": 5,
 "paddingTop": 0,
 "label": "WHATSAPP",
 "borderRadius": 0,
 "click": "this.openLink('http://wa.me/5547988623682', '_blank')",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "height": 50,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "paddingRight": 0,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "height": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button Photoalbum"
 },
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_7DBC8382_7065_343F_4183_17B44518DB40",
 "paddingLeft": 10,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "shadowSpread": 1,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "iconHeight": 32,
 "minWidth": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": "32px",
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "gap": 5,
 "paddingTop": 0,
 "label": "TELEFONE",
 "borderRadius": 0,
 "click": "this.openLink('tel:047988623682', '_blank')",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "height": 50,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "paddingRight": 0,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "height": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button Contact"
 },
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
 "paddingLeft": 10,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "shadowSpread": 1,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "iconHeight": 32,
 "minWidth": 1,
 "class": "Button",
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": "32px",
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "gap": 5,
 "paddingTop": 0,
 "label": "LOCALIZA\u00c7\u00c3O",
 "borderRadius": 0,
 "click": "this.openLink('https://goo.gl/maps/nvDrAwMeYwjfji2B9', '_blank')",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "height": 50,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "paddingRight": 0,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "height": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "minHeight": 1,
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "width": 40,
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "paddingRight": 0,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 2,
 "paddingBottom": 0,
 "data": {
  "name": "blue line"
 },
 "propagateClick": true,
 "overflow": "visible",
 "backgroundColorRatios": [
  0
 ]
},
{
 "minHeight": 1,
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "this.openLink('https://goo.gl/maps/nvDrAwMeYwjfji2B9', '_blank')",
 "borderRadius": 0,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:17px;font-family:'Oswald Regular';\"><I>VET SILVA</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Oswald Regular';\"><I>Rua Ramiro Bueno da Rocha, 33</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Oswald Regular';\"><I>Boehmerwald</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Oswald Regular';\"><I>Joinville - SC</I></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText47602"
 },
 "height": 78,
 "scrollBarWidth": 10,
 "propagateClick": true
},
{
 "transparencyActive": true,
 "minHeight": 1,
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "paddingLeft": 0,
 "maxWidth": 80,
 "minWidth": 1,
 "borderSize": 0,
 "width": 42,
 "horizontalAlign": "center",
 "class": "IconButton",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "maxHeight": 80,
 "height": 42,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "minHeight": 50,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingLeft": 0,
 "right": 20,
 "maxWidth": 60,
 "borderSize": 0,
 "horizontalAlign": "right",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "minWidth": 50,
 "class": "IconButton",
 "verticalAlign": "top",
 "top": 20,
 "paddingRight": 0,
 "width": "100%",
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "maxHeight": 60,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "height": "36.14%",
 "propagateClick": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "minHeight": 50,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "paddingLeft": 0,
 "right": 20,
 "maxWidth": 60,
 "borderSize": 0,
 "horizontalAlign": "right",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "minWidth": 50,
 "class": "IconButton",
 "verticalAlign": "top",
 "top": 20,
 "paddingRight": 0,
 "width": "100%",
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "maxHeight": 60,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "height": "36.14%",
 "propagateClick": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "toolTipOpacity": 1,
 "left": "0%",
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minWidth": 1,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "class": "ViewerArea",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "shadow": false,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "minHeight": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": "0%",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "transparencyActive": false,
 "minHeight": 50,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "paddingLeft": 0,
 "maxWidth": 60,
 "borderSize": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "minWidth": 50,
 "class": "IconButton",
 "verticalAlign": "middle",
 "top": "20%",
 "bottom": "20%",
 "paddingRight": 0,
 "width": "14.22%",
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "maxHeight": 60,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton <"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "minHeight": 50,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "paddingLeft": 0,
 "right": 10,
 "maxWidth": 60,
 "borderSize": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "minWidth": 50,
 "class": "IconButton",
 "verticalAlign": "middle",
 "top": "20%",
 "bottom": "20%",
 "paddingRight": 0,
 "width": "14.22%",
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "maxHeight": 60,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton >"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "minHeight": 50,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingLeft": 0,
 "right": 20,
 "maxWidth": 60,
 "borderSize": 0,
 "horizontalAlign": "right",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "minWidth": 50,
 "class": "IconButton",
 "verticalAlign": "top",
 "top": 20,
 "paddingRight": 0,
 "width": "10%",
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "maxHeight": 60,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "height": "10%",
 "propagateClick": true,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "scaleMode": "fit_outside",
 "minHeight": 1,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "paddingLeft": 0,
 "left": "0%",
 "maxWidth": 2000,
 "borderSize": 0,
 "horizontalAlign": "center",
 "width": "100%",
 "minWidth": 1,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "class": "Image",
 "verticalAlign": "bottom",
 "top": "0%",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "maxHeight": 1000,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Image40635"
 },
 "height": "100%",
 "borderRadius": 0
},
{
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "minHeight": 0,
 "height": "5%",
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "vertical",
 "minHeight": 520,
 "height": "100%",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "minWidth": 100,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "minHeight": 1,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "width": 370,
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 40,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "minHeight": 1,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "paddingLeft": 0,
 "scrollBarOpacity": 0,
 "scrollBarColor": "#04A3E1",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.3vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.72vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.72vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "height": "46%",
 "scrollBarWidth": 10,
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "minHeight": 1,
 "height": "75%",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "Container",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "- content"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "minHeight": 1,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "paddingLeft": 0,
 "maxWidth": 200,
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "25%",
 "minWidth": 1,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "class": "Image",
 "verticalAlign": "top",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "maxHeight": 200,
 "paddingBottom": 0,
 "data": {
  "name": "agent photo"
 },
 "height": "100%",
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "borderRadius": 0
},
{
 "minHeight": 1,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "75%",
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.58vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.29vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "height": "100%",
 "scrollBarWidth": 10,
 "propagateClick": false
}],
 "scrollBarWidth": 10,
 "layout": "absolute",
 "minHeight": 20,
 "height": "100%",
 "id": "rootPlayer",
 "paddingLeft": 0,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.Image_21586916_3652_C7EC_41AB_5794FC779DF1"
 ],
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "minWidth": 20,
 "mobileMipmappingEnabled": false,
 "class": "Player",
 "scripts": {
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "existsKey": function(key){  return key in window; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "unregisterKey": function(key){  delete window[key]; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "defaultVRPointer": "laser",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "downloadEnabled": false,
 "contentOpaque": false,
 "shadow": false,
 "width": "100%",
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList])",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "mouseWheelEnabled": true,
 "paddingBottom": 0,
 "data": {
  "name": "Player468"
 },
 "desktopMipmappingEnabled": false,
 "propagateClick": true,
 "overflow": "visible"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
