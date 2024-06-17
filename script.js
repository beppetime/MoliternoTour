TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "id": "panorama_7C34A281_766F_1BE0_41DD_5C5CC115C24C",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 325.61,
    "x": 552.26,
    "angle": 142.72,
    "map": {
     "class": "Map",
     "fieldOfViewOverlayInsideOpacity": 0.41,
     "width": 779,
     "fieldOfViewOverlayInsideColor": "#000000",
     "height": 761,
     "fieldOfViewOverlayOutsideColor": "#336600",
     "minimumZoomFactor": 0.5,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 750,
        "class": "ImageResourceLevel",
        "width": 768,
        "url": "media/map_7011F4A4_7B83_1A1E_41CE_BE4687CDC00D.png"
       },
       {
        "height": 375,
        "class": "ImageResourceLevel",
        "grayscale": true,
        "width": 384,
        "url": "media/map_7011F4A4_7B83_1A1E_41CE_BE4687CDC00D_lq.png"
       }
      ]
     },
     "id": "map_7011F4A4_7B83_1A1E_41CE_BE4687CDC00D",
     "label": "mappagoogle",
     "maximumZoomFactor": 1.2,
     "overlays": [
      {
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "toolTip": "PIAZZALE CHIESA MADRE",
         "click": "this.mainPlayList.set('selectedIndex', 3)"
        }
       ],
       "id": "overlay_6A6E0A07_7B85_0E1B_41B5_14E16500C15E",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 38.26,
        "y": 626.95,
        "height": 35.09,
        "x": 90.55,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 17,
           "class": "ImageResourceLevel",
           "width": 18,
           "url": "media/map_7011F4A4_7B83_1A1E_41CE_BE4687CDC00D_HS_4_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "rollOverDisplay": false,
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 626.86,
        "x": 90.36,
        "width": 38.26,
        "height": 35.09,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 34,
           "class": "ImageResourceLevel",
           "width": 37,
           "url": "media/map_7011F4A4_7B83_1A1E_41CE_BE4687CDC00D_HS_4.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "toolTip": "CASTELLO MEDIOEVALE",
         "click": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ],
       "id": "overlay_7454884A_7B83_0A2A_41C4_5D06D654D433",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 35.23,
        "y": 307.85,
        "height": 35.68,
        "x": 534.9,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 17,
           "class": "ImageResourceLevel",
           "width": 17,
           "url": "media/map_7011F4A4_7B83_1A1E_41CE_BE4687CDC00D_HS_5_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "rollOverDisplay": false,
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 307.77,
        "x": 534.65,
        "width": 35.23,
        "height": 35.68,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 35,
           "class": "ImageResourceLevel",
           "width": 34,
           "url": "media/map_7011F4A4_7B83_1A1E_41CE_BE4687CDC00D_HS_5.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "toolTip": "TORRE LONGOBARDA\u000a",
         "click": "this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7)"
        }
       ],
       "id": "overlay_684EB6E5_7B8D_061E_41C8_76071826767E",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 44,
        "y": 189.75,
        "height": 35,
        "x": 471.6,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 17,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_7011F4A4_7B83_1A1E_41CE_BE4687CDC00D_HS_6_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "rollOverDisplay": false,
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 189.68,
        "x": 471.51,
        "width": 44,
        "height": 35,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 34,
           "class": "ImageResourceLevel",
           "width": 43,
           "url": "media/map_7011F4A4_7B83_1A1E_41CE_BE4687CDC00D_HS_6.png"
          }
         ]
        }
       },
       "useHandCursor": true
      }
     ],
     "scaleMode": "fit_inside",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "initialZoomFactor": 1,
     "fieldOfViewOverlayRadiusScale": 0.08,
     "thumbnailUrl": "media/map_7011F4A4_7B83_1A1E_41CE_BE4687CDC00D_t.png"
    }
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "class": "Panorama",
     "id": "panorama_7918563E_7667_3B23_41D1_677E20DECA7D",
     "mapLocations": [
      {
       "class": "PanoramaMapLocation",
       "y": 207.18,
       "x": 493.51,
       "angle": 184.62,
       "map": "this.map_7011F4A4_7B83_1A1E_41CE_BE4687CDC00D"
      }
     ],
     "pitch": 0,
     "hfovMax": 120,
     "hfov": 360,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "id": "panorama_78B73F27_7667_0921_41CE_30044BBCC5B6",
        "mapLocations": [
         {
          "class": "PanoramaMapLocation",
          "y": 207.18,
          "x": 493.51,
          "angle": 83.58,
          "map": "this.map_7011F4A4_7B83_1A1E_41CE_BE4687CDC00D"
         }
        ],
        "pitch": 0,
        "hfovMax": 120,
        "hfov": 360,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_7918563E_7667_3B23_41D1_677E20DECA7D",
          "yaw": 143.59,
          "distance": 1,
          "backwardYaw": -139.28
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "id": "panorama_78F5ADC5_7667_0961_41D0_820A77B55A5C",
           "mapLocations": [
            {
             "class": "PanoramaMapLocation",
             "y": 207.18,
             "x": 493.51,
             "angle": 291.47,
             "map": "this.map_7011F4A4_7B83_1A1E_41CE_BE4687CDC00D"
            }
           ],
           "pitch": 0,
           "hfovMax": 120,
           "hfov": 360,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_78B73F27_7667_0921_41CE_30044BBCC5B6",
             "yaw": 157.41,
             "distance": 1,
             "backwardYaw": -156.87
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_7918563E_7667_3B23_41D1_677E20DECA7D",
             "yaw": -141.79,
             "distance": 1,
             "backwardYaw": 160.43
            }
           ],
           "vfov": 180,
           "partial": false,
           "label": "vista castello",
           "frames": [
            {
             "thumbnailUrl": "media/panorama_78F5ADC5_7667_0961_41D0_820A77B55A5C_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3040,
                "class": "ImageResourceLevel",
                "width": 6080,
                "url": "media/panorama_78F5ADC5_7667_0961_41D0_820A77B55A5C_hq.jpeg"
               },
               {
                "height": 2001,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_78F5ADC5_7667_0961_41D0_820A77B55A5C.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "toolTip": "vista piazzale",
                 "click": "this.startPanoramaWithCamera(this.panorama_7918563E_7667_3B23_41D1_677E20DECA7D, this.camera_CA225FD4_C4F6_CF17_41C3_D9F84123FB62); this.mainPlayList.set('selectedIndex', 6)",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "id": "overlay_65BFE982_769D_09E3_41CF_8751E579E3F8",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 7.32,
                 "yaw": -141.79,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 57,
                    "class": "ImageResourceLevel",
                    "width": 64,
                    "url": "media/panorama_78F5ADC5_7667_0961_41D0_820A77B55A5C_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -15.14
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -141.79,
                 "hfov": 7.32,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 114,
                    "class": "ImageResourceLevel",
                    "width": 128,
                    "url": "media/panorama_78F5ADC5_7667_0961_41D0_820A77B55A5C_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -15.14
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "toolTip": "vista sulla valle",
                 "click": "this.startPanoramaWithCamera(this.panorama_78B73F27_7667_0921_41CE_30044BBCC5B6, this.camera_CA3D6FC5_C4F6_CF76_41D1_CD9424BD35D4); this.mainPlayList.set('selectedIndex', 7)",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "id": "overlay_650D65FD_769D_F921_41D6_E4CF5DCFCE6E",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 7.38,
                 "yaw": 157.41,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 59,
                    "class": "ImageResourceLevel",
                    "width": 64,
                    "url": "media/panorama_78F5ADC5_7667_0961_41D0_820A77B55A5C_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -13.25
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 157.41,
                 "hfov": 7.38,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 118,
                    "class": "ImageResourceLevel",
                    "width": 128,
                    "url": "media/panorama_78F5ADC5_7667_0961_41D0_820A77B55A5C_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -13.25
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "toolTip": "torna all'ingresso del castello",
                 "click": "this.mainPlayList.set('selectedIndex', 0)",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "id": "overlay_65BD3B92_769D_09E0_41D1_6343DB55F5F3",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 8.18,
                 "yaw": -171.51,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 75,
                    "class": "ImageResourceLevel",
                    "width": 75,
                    "url": "media/panorama_78F5ADC5_7667_0961_41D0_820A77B55A5C_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -23.75
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -171.51,
                 "hfov": 8.18,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 151,
                    "class": "ImageResourceLevel",
                    "width": 151,
                    "url": "media/panorama_78F5ADC5_7667_0961_41D0_820A77B55A5C_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -23.75
                }
               ]
              }
             ]
            }
           ],
           "cardboardMenu": {
            "class": "Menu",
            "rollOverFontColor": "#FFFFFF",
            "fontFamily": "Arial",
            "selectedFontColor": "#FFFFFF",
            "label": "Media",
            "rollOverOpacity": 0.8,
            "opacity": 0.4,
            "fontColor": "#FFFFFF",
            "backgroundColor": "#404040",
            "id": "Menu_C9250CE0_C4F6_D12F_41E1_21C392779042",
            "rollOverBackgroundColor": "#000000",
            "children": [
             {
              "class": "MenuItem",
              "label": "castelloFuoriIO",
              "click": "this.mainPlayList.set('selectedIndex', 0)"
             },
             {
              "class": "MenuItem",
              "label": "chiesamadrealtare",
              "click": "this.mainPlayList.set('selectedIndex', 1)"
             },
             {
              "class": "MenuItem",
              "label": "chiesamadrecentro",
              "click": "this.mainPlayList.set('selectedIndex', 2)"
             },
             {
              "class": "MenuItem",
              "label": "chiesamadrefuori",
              "click": "this.mainPlayList.set('selectedIndex', 3)"
             },
             {
              "class": "MenuItem",
              "label": "chiesamadreingresso",
              "click": "this.mainPlayList.set('selectedIndex', 4)"
             },
             {
              "class": "MenuItem",
              "label": "vista castello",
              "click": "this.mainPlayList.set('selectedIndex', 5)"
             },
             {
              "class": "MenuItem",
              "label": "vista piazzale",
              "click": "this.mainPlayList.set('selectedIndex', 6)"
             },
             {
              "class": "MenuItem",
              "label": "vista valle",
              "click": "this.mainPlayList.set('selectedIndex', 7)"
             },
             {
              "class": "MenuItem",
              "label": "1e2salaCEntro",
              "click": "this.mainPlayList.set('selectedIndex', 8)"
             },
             {
              "class": "MenuItem",
              "label": "1sala",
              "click": "this.mainPlayList.set('selectedIndex', 9)"
             },
             {
              "class": "MenuItem",
              "label": "1saladx",
              "click": "this.mainPlayList.set('selectedIndex', 10)"
             },
             {
              "class": "MenuItem",
              "label": "2 saladx",
              "click": "this.mainPlayList.set('selectedIndex', 11)"
             },
             {
              "class": "MenuItem",
              "label": "2piano",
              "click": "this.mainPlayList.set('selectedIndex', 12)"
             },
             {
              "class": "MenuItem",
              "label": "2pianofinetra",
              "click": "this.mainPlayList.set('selectedIndex', 13)"
             },
             {
              "class": "MenuItem",
              "label": "2pianoPorta",
              "click": "this.mainPlayList.set('selectedIndex', 14)"
             },
             {
              "class": "MenuItem",
              "label": "2sala",
              "click": "this.mainPlayList.set('selectedIndex', 15)"
             },
             {
              "class": "MenuItem",
              "label": "salotto",
              "click": "this.mainPlayList.set('selectedIndex', 16)"
             },
             {
              "class": "MenuItem",
              "label": "salottocx",
              "click": "this.mainPlayList.set('selectedIndex', 17)"
             },
             {
              "class": "MenuItem",
              "label": "salottodx",
              "click": "this.mainPlayList.set('selectedIndex', 18)"
             },
             {
              "class": "MenuItem",
              "label": "sottoTetto",
              "click": "this.mainPlayList.set('selectedIndex', 19)"
             },
             {
              "class": "MenuItem",
              "label": "sottoTettoscala",
              "click": "this.mainPlayList.set('selectedIndex', 20)"
             }
            ],
            "selectedBackgroundColor": "#202020"
           },
           "thumbnailUrl": "media/panorama_78F5ADC5_7667_0961_41D0_820A77B55A5C_t.jpg"
          },
          "yaw": -156.87,
          "distance": 1,
          "backwardYaw": 157.41
         }
        ],
        "vfov": 180,
        "partial": false,
        "label": "vista valle",
        "frames": [
         {
          "thumbnailUrl": "media/panorama_78B73F27_7667_0921_41CE_30044BBCC5B6_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3040,
             "class": "ImageResourceLevel",
             "width": 6080,
             "url": "media/panorama_78B73F27_7667_0921_41CE_30044BBCC5B6_hq.jpeg"
            },
            {
             "height": 2001,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_78B73F27_7667_0921_41CE_30044BBCC5B6.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "vista sul piazzale",
              "click": "this.startPanoramaWithCamera(this.panorama_7918563E_7667_3B23_41D1_677E20DECA7D, this.camera_C9DE3E3C_C4F6_D117_418E_EC7A9E68514F); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 6)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true
             }
            ],
            "id": "overlay_65736C7A_76A7_0F20_41C7_620B1DB16B70",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 8.43,
              "yaw": 143.59,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 63,
                 "class": "ImageResourceLevel",
                 "width": 72,
                 "url": "media/panorama_78B73F27_7667_0921_41CE_30044BBCC5B6_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -10.99
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 143.59,
              "hfov": 8.43,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 127,
                 "class": "ImageResourceLevel",
                 "width": 144,
                 "url": "media/panorama_78B73F27_7667_0921_41CE_30044BBCC5B6_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -10.99
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "torna all'ingresso del castello",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true
             }
            ],
            "id": "overlay_625FDC54_76AD_0F67_41D3_F427047DCB72",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 7.22,
              "yaw": 172.84,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 67,
                 "class": "ImageResourceLevel",
                 "width": 65,
                 "url": "media/panorama_78B73F27_7667_0921_41CE_30044BBCC5B6_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -22.04
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 172.84,
              "hfov": 7.22,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 135,
                 "class": "ImageResourceLevel",
                 "width": 131,
                 "url": "media/panorama_78B73F27_7667_0921_41CE_30044BBCC5B6_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -22.04
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "vista sul castello",
              "click": "this.startPanoramaWithCamera(this.panorama_78F5ADC5_7667_0961_41D0_820A77B55A5C, this.camera_C9DA8E4C_C4F6_D177_41E5_899A8B07A8B4); this.mainPlayList.set('selectedIndex', 5)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true
             }
            ],
            "id": "overlay_62BF25B0_76AF_193F_41BF_268507AB295D",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 8.42,
              "yaw": -156.87,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 63,
                 "class": "ImageResourceLevel",
                 "width": 72,
                 "url": "media/panorama_78B73F27_7667_0921_41CE_30044BBCC5B6_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": -11.24
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -156.87,
              "hfov": 8.42,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 127,
                 "class": "ImageResourceLevel",
                 "width": 144,
                 "url": "media/panorama_78B73F27_7667_0921_41CE_30044BBCC5B6_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -11.24
             }
            ]
           }
          ]
         }
        ],
        "cardboardMenu": "this.Menu_C9250CE0_C4F6_D12F_41E1_21C392779042",
        "thumbnailUrl": "media/panorama_78B73F27_7667_0921_41CE_30044BBCC5B6_t.jpg"
       },
       "yaw": -139.28,
       "distance": 1,
       "backwardYaw": 143.59
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_7C34A281_766F_1BE0_41DD_5C5CC115C24C",
       "yaw": -166.74,
       "distance": 1,
       "backwardYaw": -156.69
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_78F5ADC5_7667_0961_41D0_820A77B55A5C",
       "yaw": 160.43,
       "distance": 1,
       "backwardYaw": -141.79
      }
     ],
     "vfov": 180,
     "partial": false,
     "label": "vista piazzale",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_7918563E_7667_3B23_41D1_677E20DECA7D_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3040,
          "class": "ImageResourceLevel",
          "width": 6080,
          "url": "media/panorama_7918563E_7667_3B23_41D1_677E20DECA7D_hq.jpeg"
         },
         {
          "height": 2001,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_7918563E_7667_3B23_41D1_677E20DECA7D.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "toolTip": "vista sulla valle",
           "click": "this.startPanoramaWithCamera(this.panorama_78B73F27_7667_0921_41CE_30044BBCC5B6, this.camera_CA633DCE_C4F6_D373_41E2_3CA2D996841B); this.mainPlayList.set('selectedIndex', 7)",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true
          }
         ],
         "id": "overlay_65559F72_76A3_0920_41DA_ECF001959CE0",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 8.26,
           "yaw": -139.28,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 63,
              "class": "ImageResourceLevel",
              "width": 72,
              "url": "media/panorama_7918563E_7667_3B23_41D1_677E20DECA7D_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -15.76
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -139.28,
           "hfov": 8.26,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 127,
              "class": "ImageResourceLevel",
              "width": 144,
              "url": "media/panorama_7918563E_7667_3B23_41D1_677E20DECA7D_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -15.76
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "toolTip": "vista sul castello",
           "click": "this.startPanoramaWithCamera(this.panorama_78F5ADC5_7667_0961_41D0_820A77B55A5C, this.camera_CA468DDE_C4F6_D313_41E7_AABDD934A4A5); this.mainPlayList.set('selectedIndex', 5)",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true
          }
         ],
         "id": "overlay_63704595_76A5_19E1_419F_307110B27214",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 8.37,
           "yaw": 160.43,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 63,
              "class": "ImageResourceLevel",
              "width": 72,
              "url": "media/panorama_7918563E_7667_3B23_41D1_677E20DECA7D_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -13
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 160.43,
           "hfov": 8.37,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 127,
              "class": "ImageResourceLevel",
              "width": 144,
              "url": "media/panorama_7918563E_7667_3B23_41D1_677E20DECA7D_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -13
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "toolTip": "torna all'ingresso del castello",
           "click": "this.startPanoramaWithCamera(this.panorama_7C34A281_766F_1BE0_41DD_5C5CC115C24C, this.camera_CA56CDCE_C4F6_D373_41C1_1EE59AFD2924); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true
          }
         ],
         "id": "overlay_639CB651_76A4_FB61_41DB_D4544E9651A8",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 8.14,
           "yaw": -166.74,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 75,
              "class": "ImageResourceLevel",
              "width": 75,
              "url": "media/panorama_7918563E_7667_3B23_41D1_677E20DECA7D_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -24.51
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -166.74,
           "hfov": 8.14,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 151,
              "class": "ImageResourceLevel",
              "width": 151,
              "url": "media/panorama_7918563E_7667_3B23_41D1_677E20DECA7D_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -24.51
          }
         ]
        }
       ]
      }
     ],
     "cardboardMenu": "this.Menu_C9250CE0_C4F6_D12F_41E1_21C392779042",
     "thumbnailUrl": "media/panorama_7918563E_7667_3B23_41D1_677E20DECA7D_t.jpg"
    },
    "yaw": -156.69,
    "distance": 1,
    "backwardYaw": -166.74
   },
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "class": "Panorama",
     "id": "panorama_7D6FEAEF_766F_0B20_41D7_7F96B16323D1",
     "mapLocations": [
      {
       "class": "PanoramaMapLocation",
       "y": 644.41,
       "x": 109.49,
       "angle": 0,
       "map": "this.map_7011F4A4_7B83_1A1E_41CE_BE4687CDC00D"
      }
     ],
     "pitch": 0,
     "hfovMax": 120,
     "hfov": 360,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_7C34A281_766F_1BE0_41DD_5C5CC115C24C",
       "yaw": 89.81,
       "distance": 1,
       "backwardYaw": 43.46
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "id": "panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69",
        "mapLocations": [
         {
          "class": "PanoramaMapLocation",
          "y": 152.53,
          "x": 198.53,
          "angle": 88.35,
          "map": {
           "class": "Map",
           "fieldOfViewOverlayInsideOpacity": 0.4,
           "width": 267,
           "fieldOfViewOverlayInsideColor": "#000000",
           "height": 241,
           "fieldOfViewOverlayOutsideColor": "#000000",
           "minimumZoomFactor": 0.5,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 241,
              "class": "ImageResourceLevel",
              "width": 267,
              "url": "media/map_6A3F4136_7BD6_1B26_41CD_0A67E4F787C4.png"
             },
             {
              "height": 120,
              "class": "ImageResourceLevel",
              "grayscale": true,
              "width": 133,
              "url": "media/map_6A3F4136_7BD6_1B26_41CD_0A67E4F787C4_lq.png"
             }
            ]
           },
           "id": "map_6A3F4136_7BD6_1B26_41CD_0A67E4F787C4",
           "label": "pianoterra",
           "maximumZoomFactor": 1.2,
           "overlays": [
            {
             "class": "AreaHotspotMapOverlay",
             "areas": [
              {
               "class": "HotspotMapOverlayArea",
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 10)"
              }
             ],
             "id": "overlay_6AE904E4_7BD6_F95A_4172_F4C0232ADB14",
             "map": {
              "offsetY": 0,
              "class": "HotspotMapOverlayMap",
              "width": 23,
              "y": 168.05,
              "height": 23,
              "x": 67.05,
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 11,
                 "class": "ImageResourceLevel",
                 "width": 11,
                 "url": "media/map_6A3F4136_7BD6_1B26_41CD_0A67E4F787C4_HS_0_map.gif"
                }
               ]
              }
             },
             "data": {
              "label": "Image"
             },
             "rollOverDisplay": false,
             "image": {
              "class": "HotspotMapOverlayImage",
              "y": 168.05,
              "x": 67.05,
              "width": 23,
              "height": 23,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 23,
                 "class": "ImageResourceLevel",
                 "width": 23,
                 "url": "media/map_6A3F4136_7BD6_1B26_41CD_0A67E4F787C4_HS_0.png"
                }
               ]
              }
             },
             "useHandCursor": true
            },
            {
             "class": "AreaHotspotMapOverlay",
             "areas": [
              {
               "class": "HotspotMapOverlayArea",
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 9)"
              }
             ],
             "id": "overlay_69E3FEFC_7BCA_292A_41CE_79023FA87FBC",
             "map": {
              "offsetY": 0,
              "class": "HotspotMapOverlayMap",
              "width": 23,
              "y": 141.03,
              "height": 23,
              "x": 187.03,
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 11,
                 "class": "ImageResourceLevel",
                 "width": 11,
                 "url": "media/map_6A3F4136_7BD6_1B26_41CD_0A67E4F787C4_HS_1_map.gif"
                }
               ]
              }
             },
             "data": {
              "label": "Image"
             },
             "rollOverDisplay": false,
             "image": {
              "class": "HotspotMapOverlayImage",
              "y": 141.03,
              "x": 187.03,
              "width": 23,
              "height": 23,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 23,
                 "class": "ImageResourceLevel",
                 "width": 23,
                 "url": "media/map_6A3F4136_7BD6_1B26_41CD_0A67E4F787C4_HS_1.png"
                }
               ]
              }
             },
             "useHandCursor": true
            },
            {
             "class": "AreaHotspotMapOverlay",
             "areas": [
              {
               "class": "HotspotMapOverlayArea",
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 8)"
              }
             ],
             "id": "overlay_68804922_7BCA_28DE_41DC_7DDB1B1292B4",
             "map": {
              "offsetY": 0,
              "class": "HotspotMapOverlayMap",
              "width": 23,
              "y": 105.03,
              "height": 23,
              "x": 129.03,
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 11,
                 "class": "ImageResourceLevel",
                 "width": 11,
                 "url": "media/map_6A3F4136_7BD6_1B26_41CD_0A67E4F787C4_HS_2_map.gif"
                }
               ]
              }
             },
             "data": {
              "label": "Image"
             },
             "rollOverDisplay": false,
             "image": {
              "class": "HotspotMapOverlayImage",
              "y": 105.03,
              "x": 129.03,
              "width": 23,
              "height": 23,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 23,
                 "class": "ImageResourceLevel",
                 "width": 23,
                 "url": "media/map_6A3F4136_7BD6_1B26_41CD_0A67E4F787C4_HS_2.png"
                }
               ]
              }
             },
             "useHandCursor": true
            },
            {
             "class": "AreaHotspotMapOverlay",
             "areas": [
              {
               "class": "HotspotMapOverlayArea",
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 11)"
              }
             ],
             "id": "overlay_68CC7D9B_7BCA_6BEE_41C5_6B672DD123C8",
             "map": {
              "offsetY": 0,
              "class": "HotspotMapOverlayMap",
              "width": 23,
              "y": 67.05,
              "height": 23,
              "x": 74.03,
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 11,
                 "class": "ImageResourceLevel",
                 "width": 11,
                 "url": "media/map_6A3F4136_7BD6_1B26_41CD_0A67E4F787C4_HS_3_map.gif"
                }
               ]
              }
             },
             "data": {
              "label": "Image"
             },
             "rollOverDisplay": false,
             "image": {
              "class": "HotspotMapOverlayImage",
              "y": 67.05,
              "x": 74.03,
              "width": 23,
              "height": 23,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 23,
                 "class": "ImageResourceLevel",
                 "width": 23,
                 "url": "media/map_6A3F4136_7BD6_1B26_41CD_0A67E4F787C4_HS_3.png"
                }
               ]
              }
             },
             "useHandCursor": true
            },
            {
             "class": "AreaHotspotMapOverlay",
             "areas": [
              {
               "class": "HotspotMapOverlayArea",
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 15)"
              }
             ],
             "id": "overlay_6F4A2392_7BCA_1FFE_41BE_6181AEA0F108",
             "map": {
              "offsetY": 0,
              "class": "HotspotMapOverlayMap",
              "width": 23,
              "y": 44,
              "height": 23,
              "x": 184.03,
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 11,
                 "class": "ImageResourceLevel",
                 "width": 11,
                 "url": "media/map_6A3F4136_7BD6_1B26_41CD_0A67E4F787C4_HS_4_map.gif"
                }
               ]
              }
             },
             "data": {
              "label": "Image"
             },
             "rollOverDisplay": false,
             "image": {
              "class": "HotspotMapOverlayImage",
              "y": 44,
              "x": 184.03,
              "width": 23,
              "height": 23,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 23,
                 "class": "ImageResourceLevel",
                 "width": 23,
                 "url": "media/map_6A3F4136_7BD6_1B26_41CD_0A67E4F787C4_HS_4.png"
                }
               ]
              }
             },
             "useHandCursor": true
            },
            {
             "class": "AreaHotspotMapOverlay",
             "areas": [
              {
               "class": "HotspotMapOverlayArea",
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 3)"
              },
              {
               "class": "HotspotMapOverlayArea",
               "mapColor": "#000000"
              }
             ],
             "id": "overlay_6ECC00E0_7BCE_795A_4169_9B091CCEA7C0",
             "map": {
              "offsetY": 0,
              "class": "HotspotMapOverlayMap",
              "width": 33,
              "y": 205.33,
              "height": 33,
              "x": 157.28,
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 17,
                 "class": "ImageResourceLevel",
                 "width": 17,
                 "url": "media/map_6A3F4136_7BD6_1B26_41CD_0A67E4F787C4_HS_6_map.gif"
                }
               ]
              }
             },
             "data": {
              "label": "Polygon"
             },
             "rollOverDisplay": false,
             "image": {
              "class": "HotspotMapOverlayImage",
              "width": 33,
              "y": 205.33,
              "height": 33,
              "x": 157.28,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 35,
                 "class": "ImageResourceLevel",
                 "width": 35,
                 "url": "media/map_6A3F4136_7BD6_1B26_41CD_0A67E4F787C4_HS_6.png"
                }
               ]
              }
             },
             "useHandCursor": true
            },
            {
             "class": "AreaHotspotMapOverlay",
             "areas": [
              {
               "class": "HotspotMapOverlayArea",
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 17)"
              },
              {
               "class": "HotspotMapOverlayArea",
               "mapColor": "#000000"
              }
             ],
             "id": "overlay_68B08389_7BCE_1FEA_41C1_173EA364CF18",
             "map": {
              "offsetY": 0,
              "class": "HotspotMapOverlayMap",
              "width": 35,
              "y": 30.78,
              "height": 33,
              "x": 13.8,
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 17,
                 "class": "ImageResourceLevel",
                 "width": 18,
                 "url": "media/map_6A3F4136_7BD6_1B26_41CD_0A67E4F787C4_HS_5_map.gif"
                }
               ]
              }
             },
             "data": {
              "label": "Polygon"
             },
             "rollOverDisplay": false,
             "image": {
              "class": "HotspotMapOverlayImage",
              "width": 35,
              "y": 30.78,
              "height": 33,
              "x": 13.8,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 35,
                 "class": "ImageResourceLevel",
                 "width": 37,
                 "url": "media/map_6A3F4136_7BD6_1B26_41CD_0A67E4F787C4_HS_5.png"
                }
               ]
              }
             },
             "useHandCursor": true
            }
           ],
           "scaleMode": "fit_inside",
           "fieldOfViewOverlayOutsideOpacity": 0,
           "initialZoomFactor": 1,
           "fieldOfViewOverlayRadiusScale": 0.3,
           "thumbnailUrl": "media/map_6A3F4136_7BD6_1B26_41CD_0A67E4F787C4_t.png"
          }
         }
        ],
        "pitch": 0,
        "hfovMax": 120,
        "hfov": 360,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "id": "panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F",
           "mapLocations": [
            {
             "class": "PanoramaMapLocation",
             "y": 179.55,
             "x": 78.55,
             "angle": 247.09,
             "map": "this.map_6A3F4136_7BD6_1B26_41CD_0A67E4F787C4"
            }
           ],
           "pitch": 0,
           "hfovMax": 120,
           "hfov": 360,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69",
             "yaw": 171.23,
             "distance": 1,
             "backwardYaw": 163.19
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "id": "panorama_608555FC_76A5_1927_41D2_0C50EB6738BC",
              "mapLocations": [
               {
                "class": "PanoramaMapLocation",
                "y": 55.5,
                "x": 195.53,
                "angle": 105.57,
                "map": "this.map_6A3F4136_7BD6_1B26_41CD_0A67E4F787C4"
               }
              ],
              "pitch": 0,
              "hfovMax": 120,
              "hfov": 360,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F",
                "yaw": 116.84,
                "distance": 1,
                "backwardYaw": 110.18
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "class": "Panorama",
                 "id": "panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4",
                 "mapLocations": [
                  {
                   "class": "PanoramaMapLocation",
                   "y": 116.53,
                   "x": 140.53,
                   "angle": -90.14,
                   "map": "this.map_6A3F4136_7BD6_1B26_41CD_0A67E4F787C4"
                  }
                 ],
                 "pitch": 0,
                 "hfovMax": 120,
                 "hfov": 360,
                 "hfovMin": 60,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69",
                   "yaw": -143.05,
                   "distance": 1,
                   "backwardYaw": -124.96
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "class": "Panorama",
                    "id": "panorama_609CB5A2_76A5_1923_4172_7195185EF63E",
                    "mapLocations": [
                     {
                      "class": "PanoramaMapLocation",
                      "y": 78.55,
                      "x": 85.53,
                      "angle": 270.21,
                      "map": "this.map_6A3F4136_7BD6_1B26_41CD_0A67E4F787C4"
                     }
                    ],
                    "pitch": 0,
                    "hfovMax": 120,
                    "hfov": 360,
                    "hfovMin": 60,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "class": "Panorama",
                       "id": "panorama_6083C644_76A5_FB67_41AF_715BE60BC47E",
                       "mapLocations": [
                        {
                         "class": "PanoramaMapLocation",
                         "y": 462.65,
                         "x": 358.45,
                         "angle": 183.56,
                         "map": {
                          "class": "Map",
                          "fieldOfViewOverlayInsideOpacity": 0.4,
                          "width": 700,
                          "fieldOfViewOverlayInsideColor": "#000000",
                          "height": 575,
                          "fieldOfViewOverlayOutsideColor": "#000000",
                          "minimumZoomFactor": 0.5,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 575,
                             "class": "ImageResourceLevel",
                             "width": 700,
                             "url": "media/map_6A18B046_7BD6_1966_41C9_5D10D8972CB8.png"
                            },
                            {
                             "height": 287,
                             "class": "ImageResourceLevel",
                             "grayscale": true,
                             "width": 350,
                             "url": "media/map_6A18B046_7BD6_1966_41C9_5D10D8972CB8_lq.png"
                            }
                           ]
                          },
                          "id": "map_6A18B046_7BD6_1966_41C9_5D10D8972CB8",
                          "label": "mappasecondopiano",
                          "maximumZoomFactor": 1.2,
                          "overlays": [
                           {
                            "class": "AreaHotspotMapOverlay",
                            "areas": [
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 16)"
                             }
                            ],
                            "id": "overlay_6FDDA148_7BCE_1B6A_41D4_2A9A9426E63E",
                            "map": {
                             "offsetY": 0,
                             "class": "HotspotMapOverlayMap",
                             "width": 42,
                             "y": 316.77,
                             "height": 44,
                             "x": 154.79,
                             "offsetX": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 22,
                                "class": "ImageResourceLevel",
                                "width": 21,
                                "url": "media/map_6A18B046_7BD6_1966_41C9_5D10D8972CB8_HS_0_map.gif"
                               }
                              ]
                             }
                            },
                            "data": {
                             "label": "Image"
                            },
                            "rollOverDisplay": false,
                            "image": {
                             "class": "HotspotMapOverlayImage",
                             "y": 316.6,
                             "x": 154.4,
                             "width": 42,
                             "height": 44,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 44,
                                "class": "ImageResourceLevel",
                                "width": 42,
                                "url": "media/map_6A18B046_7BD6_1966_41C9_5D10D8972CB8_HS_0.png"
                               }
                              ]
                             }
                            },
                            "useHandCursor": true
                           },
                           {
                            "class": "AreaHotspotMapOverlay",
                            "areas": [
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 17)"
                             }
                            ],
                            "id": "overlay_6E14BBB2_7BCA_2F3E_41D9_E29A0A2D300A",
                            "map": {
                             "offsetY": 0,
                             "class": "HotspotMapOverlayMap",
                             "width": 44,
                             "y": 440.87,
                             "height": 44,
                             "x": 336.73,
                             "offsetX": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 22,
                                "class": "ImageResourceLevel",
                                "width": 22,
                                "url": "media/map_6A18B046_7BD6_1966_41C9_5D10D8972CB8_HS_1_map.gif"
                               }
                              ]
                             }
                            },
                            "data": {
                             "label": "Image"
                            },
                            "rollOverDisplay": false,
                            "image": {
                             "class": "HotspotMapOverlayImage",
                             "y": 440.65,
                             "x": 336.45,
                             "width": 44,
                             "height": 44,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 44,
                                "class": "ImageResourceLevel",
                                "width": 44,
                                "url": "media/map_6A18B046_7BD6_1966_41C9_5D10D8972CB8_HS_1.png"
                               }
                              ]
                             }
                            },
                            "useHandCursor": true
                           },
                           {
                            "class": "AreaHotspotMapOverlay",
                            "areas": [
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 18)"
                             }
                            ],
                            "id": "overlay_6D934C82_7BCA_29DE_41C8_24EA40B8C992",
                            "map": {
                             "offsetY": 0,
                             "class": "HotspotMapOverlayMap",
                             "width": 44,
                             "y": 347.82,
                             "height": 44,
                             "x": 504.79,
                             "offsetX": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 22,
                                "class": "ImageResourceLevel",
                                "width": 22,
                                "url": "media/map_6A18B046_7BD6_1966_41C9_5D10D8972CB8_HS_2_map.gif"
                               }
                              ]
                             }
                            },
                            "data": {
                             "label": "Image"
                            },
                            "rollOverDisplay": false,
                            "image": {
                             "class": "HotspotMapOverlayImage",
                             "y": 347.6,
                             "x": 504.4,
                             "width": 44,
                             "height": 44,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 44,
                                "class": "ImageResourceLevel",
                                "width": 44,
                                "url": "media/map_6A18B046_7BD6_1966_41C9_5D10D8972CB8_HS_2.png"
                               }
                              ]
                             }
                            },
                            "useHandCursor": true
                           },
                           {
                            "class": "AreaHotspotMapOverlay",
                            "areas": [
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 20)"
                             },
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#000000"
                             }
                            ],
                            "id": "overlay_6E85DD92_7BCA_6BFE_41B1_2775E1225660",
                            "map": {
                             "offsetY": 0,
                             "class": "HotspotMapOverlayMap",
                             "width": 53,
                             "y": 140,
                             "height": 65,
                             "x": 204.81,
                             "offsetX": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 33,
                                "class": "ImageResourceLevel",
                                "width": 27,
                                "url": "media/map_6A18B046_7BD6_1966_41C9_5D10D8972CB8_HS_5_map.gif"
                               }
                              ]
                             }
                            },
                            "data": {
                             "label": "Polygon"
                            },
                            "rollOverDisplay": false,
                            "image": {
                             "class": "HotspotMapOverlayImage",
                             "width": 53,
                             "y": 139.8,
                             "height": 65,
                             "x": 204.55,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 67,
                                "class": "ImageResourceLevel",
                                "width": 55,
                                "url": "media/map_6A18B046_7BD6_1966_41C9_5D10D8972CB8_HS_5.png"
                               }
                              ]
                             }
                            },
                            "useHandCursor": true
                           },
                           {
                            "class": "AreaHotspotMapOverlay",
                            "areas": [
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 14)"
                             },
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#000000"
                             }
                            ],
                            "id": "overlay_6E59273D_7BCA_272A_41D6_A1E056460B54",
                            "map": {
                             "offsetY": 0,
                             "class": "HotspotMapOverlayMap",
                             "width": 64,
                             "y": 97.1,
                             "height": 41,
                             "x": 573.9,
                             "offsetX": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 21,
                                "class": "ImageResourceLevel",
                                "width": 33,
                                "url": "media/map_6A18B046_7BD6_1966_41C9_5D10D8972CB8_HS_4_map.gif"
                               }
                              ]
                             }
                            },
                            "data": {
                             "label": "Polygon"
                            },
                            "rollOverDisplay": false,
                            "image": {
                             "class": "HotspotMapOverlayImage",
                             "width": 64,
                             "y": 96.85,
                             "height": 41,
                             "x": 573.55,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 43,
                                "class": "ImageResourceLevel",
                                "width": 66,
                                "url": "media/map_6A18B046_7BD6_1966_41C9_5D10D8972CB8_HS_4.png"
                               }
                              ]
                             }
                            },
                            "useHandCursor": true
                           },
                           {
                            "class": "AreaHotspotMapOverlay",
                            "areas": [
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 11)"
                             },
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#000000"
                             }
                            ],
                            "id": "overlay_6E81972A_7BCA_272E_41DD_5A656B1189EB",
                            "map": {
                             "offsetY": 0,
                             "class": "HotspotMapOverlayMap",
                             "width": 47,
                             "y": 13.08,
                             "height": 67,
                             "x": 465.98,
                             "offsetX": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 34,
                                "class": "ImageResourceLevel",
                                "width": 24,
                                "url": "media/map_6A18B046_7BD6_1966_41C9_5D10D8972CB8_HS_3_map.gif"
                               }
                              ]
                             }
                            },
                            "data": {
                             "label": "Polygon"
                            },
                            "rollOverDisplay": false,
                            "image": {
                             "class": "HotspotMapOverlayImage",
                             "width": 47,
                             "y": 12.9,
                             "height": 67,
                             "x": 465.6,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 69,
                                "class": "ImageResourceLevel",
                                "width": 49,
                                "url": "media/map_6A18B046_7BD6_1966_41C9_5D10D8972CB8_HS_3.png"
                               }
                              ]
                             }
                            },
                            "useHandCursor": true
                           }
                          ],
                          "scaleMode": "fit_inside",
                          "fieldOfViewOverlayOutsideOpacity": 0,
                          "initialZoomFactor": 1,
                          "fieldOfViewOverlayRadiusScale": 0.3,
                          "thumbnailUrl": "media/map_6A18B046_7BD6_1966_41C9_5D10D8972CB8_t.png"
                         }
                        }
                       ],
                       "pitch": 0,
                       "hfovMax": 120,
                       "hfov": 360,
                       "hfovMin": 60,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "class": "Panorama",
                          "id": "panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92",
                          "mapLocations": [
                           {
                            "class": "PanoramaMapLocation",
                            "y": 121.1,
                            "x": 123.15,
                            "angle": 0,
                            "map": {
                             "class": "Map",
                             "fieldOfViewOverlayInsideOpacity": 0.4,
                             "width": 376,
                             "fieldOfViewOverlayInsideColor": "#000000",
                             "height": 575,
                             "fieldOfViewOverlayOutsideColor": "#000000",
                             "minimumZoomFactor": 0.5,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 575,
                                "class": "ImageResourceLevel",
                                "width": 376,
                                "url": "media/map_6B166230_7BD6_193A_41DD_6DE84AE85BF2.png"
                               },
                               {
                                "height": 287,
                                "class": "ImageResourceLevel",
                                "grayscale": true,
                                "width": 188,
                                "url": "media/map_6B166230_7BD6_193A_41DD_6DE84AE85BF2_lq.png"
                               }
                              ]
                             },
                             "id": "map_6B166230_7BD6_193A_41DD_6DE84AE85BF2",
                             "label": "secondastanza",
                             "maximumZoomFactor": 1.2,
                             "overlays": [
                              {
                               "class": "AreaHotspotMapOverlay",
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 14)"
                                }
                               ],
                               "id": "overlay_6E8F8F1E_7BF6_68E6_41CA_392973436E07",
                               "map": {
                                "offsetY": 0,
                                "class": "HotspotMapOverlayMap",
                                "width": 44,
                                "y": 99.25,
                                "height": 44,
                                "x": 101.25,
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 22,
                                   "class": "ImageResourceLevel",
                                   "width": 21,
                                   "url": "media/map_6B166230_7BD6_193A_41DD_6DE84AE85BF2_HS_0_map.gif"
                                  }
                                 ]
                                }
                               },
                               "data": {
                                "label": "Image"
                               },
                               "rollOverDisplay": false,
                               "image": {
                                "class": "HotspotMapOverlayImage",
                                "y": 99.1,
                                "x": 101.15,
                                "width": 44,
                                "height": 44,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 44,
                                   "class": "ImageResourceLevel",
                                   "width": 43,
                                   "url": "media/map_6B166230_7BD6_193A_41DD_6DE84AE85BF2_HS_0.png"
                                  }
                                 ]
                                }
                               },
                               "useHandCursor": true
                              },
                              {
                               "class": "AreaHotspotMapOverlay",
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 13)"
                                }
                               ],
                               "id": "overlay_6E3D8E40_7BF6_295A_41DA_AFE8765EDC5E",
                               "map": {
                                "offsetY": 0,
                                "class": "HotspotMapOverlayMap",
                                "width": 44,
                                "y": 433.15,
                                "height": 44,
                                "x": 92.3,
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 22,
                                   "class": "ImageResourceLevel",
                                   "width": 21,
                                   "url": "media/map_6B166230_7BD6_193A_41DD_6DE84AE85BF2_HS_1_map.gif"
                                  }
                                 ]
                                }
                               },
                               "data": {
                                "label": "Image"
                               },
                               "rollOverDisplay": false,
                               "image": {
                                "class": "HotspotMapOverlayImage",
                                "y": 433,
                                "x": 92.2,
                                "width": 44,
                                "height": 44,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 44,
                                   "class": "ImageResourceLevel",
                                   "width": 43,
                                   "url": "media/map_6B166230_7BD6_193A_41DD_6DE84AE85BF2_HS_1.png"
                                  }
                                 ]
                                }
                               },
                               "useHandCursor": true
                              },
                              {
                               "class": "AreaHotspotMapOverlay",
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 12)"
                                }
                               ],
                               "id": "overlay_6E0351EB_7BF6_3B2E_41D1_5A32820BDE01",
                               "map": {
                                "offsetY": 0,
                                "class": "HotspotMapOverlayMap",
                                "width": 44,
                                "y": 433.15,
                                "height": 44,
                                "x": 227.3,
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 22,
                                   "class": "ImageResourceLevel",
                                   "width": 21,
                                   "url": "media/map_6B166230_7BD6_193A_41DD_6DE84AE85BF2_HS_2_map.gif"
                                  }
                                 ]
                                }
                               },
                               "data": {
                                "label": "Image"
                               },
                               "rollOverDisplay": false,
                               "image": {
                                "class": "HotspotMapOverlayImage",
                                "y": 433,
                                "x": 227.2,
                                "width": 44,
                                "height": 44,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 44,
                                   "class": "ImageResourceLevel",
                                   "width": 43,
                                   "url": "media/map_6B166230_7BD6_193A_41DD_6DE84AE85BF2_HS_2.png"
                                  }
                                 ]
                                }
                               },
                               "useHandCursor": true
                              },
                              {
                               "class": "AreaHotspotMapOverlay",
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 17)"
                                },
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#000000"
                                }
                               ],
                               "id": "overlay_6CF2520C_7BFA_18EA_41D2_ECBF7F16929E",
                               "map": {
                                "offsetY": 0,
                                "class": "HotspotMapOverlayMap",
                                "width": 72,
                                "y": 2.35,
                                "height": 96,
                                "x": 211.5,
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 49,
                                   "class": "ImageResourceLevel",
                                   "width": 37,
                                   "url": "media/map_6B166230_7BD6_193A_41DD_6DE84AE85BF2_HS_3_map.gif"
                                  }
                                 ]
                                }
                               },
                               "data": {
                                "label": "Polygon"
                               },
                               "rollOverDisplay": false,
                               "image": {
                                "class": "HotspotMapOverlayImage",
                                "width": 72,
                                "y": 2.25,
                                "height": 96,
                                "x": 211.4,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 98,
                                   "class": "ImageResourceLevel",
                                   "width": 74,
                                   "url": "media/map_6B166230_7BD6_193A_41DD_6DE84AE85BF2_HS_3.png"
                                  }
                                 ]
                                }
                               },
                               "useHandCursor": true
                              }
                             ],
                             "scaleMode": "fit_inside",
                             "fieldOfViewOverlayOutsideOpacity": 0,
                             "initialZoomFactor": 1,
                             "fieldOfViewOverlayRadiusScale": 0.3,
                             "thumbnailUrl": "media/map_6B166230_7BD6_193A_41DD_6DE84AE85BF2_t.png"
                            }
                           }
                          ],
                          "pitch": 0,
                          "hfovMax": 120,
                          "hfov": 360,
                          "hfovMin": 60,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_6083C644_76A5_FB67_41AF_715BE60BC47E",
                            "yaw": 89.51,
                            "distance": 1,
                            "backwardYaw": -158.14
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "class": "Panorama",
                             "id": "panorama_609C9DA4_76A5_0927_41C1_7965BA72A422",
                             "mapLocations": [
                              {
                               "class": "PanoramaMapLocation",
                               "y": 455,
                               "x": 249.2,
                               "angle": 118.89,
                               "map": "this.map_6B166230_7BD6_193A_41DD_6DE84AE85BF2"
                              }
                             ],
                             "pitch": 0,
                             "hfovMax": 120,
                             "hfov": 360,
                             "hfovMin": 60,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92",
                               "yaw": -154.6,
                               "distance": 1,
                               "backwardYaw": -155.36
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "class": "Panorama",
                                "id": "panorama_608415CE_76A5_3963_41B0_9D7A41C890CE",
                                "mapLocations": [
                                 {
                                  "class": "PanoramaMapLocation",
                                  "y": 455,
                                  "x": 114.2,
                                  "angle": 264.77,
                                  "map": "this.map_6B166230_7BD6_193A_41DD_6DE84AE85BF2"
                                 }
                                ],
                                "pitch": 0,
                                "hfovMax": 120,
                                "hfov": 360,
                                "hfovMin": 60,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92",
                                  "yaw": 94.1,
                                  "distance": 1,
                                  "backwardYaw": -110.39
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_609C9DA4_76A5_0927_41C1_7965BA72A422",
                                  "yaw": 172.49,
                                  "distance": 1,
                                  "backwardYaw": 124.75
                                 }
                                ],
                                "vfov": 180,
                                "partial": false,
                                "label": "2pianofinetra",
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_608415CE_76A5_3963_41B0_9D7A41C890CE_t.jpg",
                                  "class": "SphericPanoramaFrame",
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "height": 3040,
                                     "class": "ImageResourceLevel",
                                     "width": 6080,
                                     "url": "media/panorama_608415CE_76A5_3963_41B0_9D7A41C890CE_hq.jpeg"
                                    },
                                    {
                                     "height": 2001,
                                     "class": "ImageResourceLevel",
                                     "width": 4002,
                                     "url": "media/panorama_608415CE_76A5_3963_41B0_9D7A41C890CE.jpeg"
                                    }
                                   ]
                                  },
                                  "overlays": [
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "toolTip": "cambia visuale",
                                      "click": "this.startPanoramaWithCamera(this.panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92, this.camera_CA5FEFA5_C4F6_CF31_41E8_7298091289F2); this.mainPlayList.set('selectedIndex', 14)",
                                      "mapColor": "#FF0000",
                                      "displayTooltipInTouchScreens": true
                                     }
                                    ],
                                    "id": "overlay_546DBE99_77A5_0BE1_41DA_992E663111CE",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 7.66,
                                      "yaw": 94.1,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 63,
                                         "class": "ImageResourceLevel",
                                         "width": 72,
                                         "url": "media/panorama_608415CE_76A5_3963_41B0_9D7A41C890CE_0_HS_0_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -26.82
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 94.1,
                                      "hfov": 7.66,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 127,
                                         "class": "ImageResourceLevel",
                                         "width": 144,
                                         "url": "media/panorama_608415CE_76A5_3963_41B0_9D7A41C890CE_0_HS_0_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -26.82
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "toolTip": "cambia visuale",
                                      "click": "this.startPanoramaWithCamera(this.panorama_609C9DA4_76A5_0927_41C1_7965BA72A422, this.camera_CA4F1FB5_C4F6_CF11_41E4_E2C44FCDFF6D); this.mainPlayList.set('selectedIndex', 12)",
                                      "mapColor": "#FF0000",
                                      "displayTooltipInTouchScreens": true
                                     }
                                    ],
                                    "id": "overlay_52AFBE6E_77A5_0B23_41D2_8D8FACE200BA",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 6.29,
                                      "yaw": 172.49,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 63,
                                         "class": "ImageResourceLevel",
                                         "width": 72,
                                         "url": "media/panorama_608415CE_76A5_3963_41B0_9D7A41C890CE_0_HS_1_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -42.9
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 172.49,
                                      "hfov": 6.29,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 127,
                                         "class": "ImageResourceLevel",
                                         "width": 144,
                                         "url": "media/panorama_608415CE_76A5_3963_41B0_9D7A41C890CE_0_HS_1_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -42.9
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "toolTip": "vai alla sala Pio Joris",
                                      "click": "this.mainPlayList.set('selectedIndex', 17)",
                                      "mapColor": "#FF0000",
                                      "displayTooltipInTouchScreens": true
                                     }
                                    ],
                                    "id": "overlay_52ECFBF8_77A7_092F_41D1_497D39D9B083",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 8.92,
                                      "yaw": 112.37,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 75,
                                         "class": "ImageResourceLevel",
                                         "width": 75,
                                         "url": "media/panorama_608415CE_76A5_3963_41B0_9D7A41C890CE_0_HS_2_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -4.16
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 112.37,
                                      "hfov": 8.92,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 150,
                                         "class": "ImageResourceLevel",
                                         "width": 150,
                                         "url": "media/panorama_608415CE_76A5_3963_41B0_9D7A41C890CE_0_HS_2_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -4.16
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "toolTip": "ammira l'opera",
                                      "click": "this.showPopupPanoramaOverlay(this.popup_45A7B5D7_77E7_1961_41AD_07A5318B4BEC, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_403DB65B_77A7_1B61_4195_1EF87149434D, null, null, null, null, false)",
                                      "mapColor": "#FF0000",
                                      "displayTooltipInTouchScreens": true
                                     }
                                    ],
                                    "id": "overlay_413D1F84_77E7_09E7_41D6_CEBE7DD57062",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 52.61,
                                      "yaw": -6.78,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 160,
                                         "class": "ImageResourceLevel",
                                         "width": 200,
                                         "url": "media/panorama_608415CE_76A5_3963_41B0_9D7A41C890CE_0_HS_3_1_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": 12.81
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Polygon"
                                    },
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": -6.78,
                                      "hfov": 52.61,
                                      "roll": 0,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 766,
                                         "class": "ImageResourceLevel",
                                         "width": 956,
                                         "url": "media/panorama_608415CE_76A5_3963_41B0_9D7A41C890CE_0_HS_3_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": 12.81
                                     }
                                    ]
                                   },
                                   {
                                    "class": "PopupPanoramaOverlay",
                                    "rotationZ": 0,
                                    "yaw": -6.78,
                                    "hideEasing": "cubic_out",
                                    "pitch": 12.81,
                                    "hfov": 48.26,
                                    "showDuration": 500,
                                    "hideDuration": 500,
                                    "showEasing": "cubic_in",
                                    "id": "popup_45A7B5D7_77E7_1961_41AD_07A5318B4BEC",
                                    "rotationX": 0,
                                    "popupMaxWidth": "95%",
                                    "image": {
                                     "class": "ImageResource",
                                     "levels": [
                                      {
                                       "height": 949,
                                       "class": "ImageResourceLevel",
                                       "width": 1024,
                                       "url": "media/popup_45A7B5D7_77E7_1961_41AD_07A5318B4BEC_0_2.jpg"
                                      }
                                     ]
                                    },
                                    "rotationY": 0,
                                    "popupMaxHeight": "95%"
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "toolTip": "ammira l'opera",
                                      "click": "this.showPopupPanoramaOverlay(this.popup_4497A267_77E7_1B21_41D8_758B4050B01C, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_403D365B_77A7_1B61_41A9_45CB569DFABF, null, null, null, null, false)",
                                      "mapColor": "#FF0000",
                                      "displayTooltipInTouchScreens": true
                                     }
                                    ],
                                    "id": "overlay_447FC449_77E7_1F61_41C5_2F887401325F",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 27.58,
                                      "yaw": 35.57,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 200,
                                         "class": "ImageResourceLevel",
                                         "width": 188,
                                         "url": "media/panorama_608415CE_76A5_3963_41B0_9D7A41C890CE_0_HS_4_1_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": 12.92
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Polygon"
                                    },
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 35.57,
                                      "hfov": 27.58,
                                      "roll": 0,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 502,
                                         "class": "ImageResourceLevel",
                                         "width": 474,
                                         "url": "media/panorama_608415CE_76A5_3963_41B0_9D7A41C890CE_0_HS_4_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": 12.92
                                     }
                                    ]
                                   },
                                   {
                                    "class": "PopupPanoramaOverlay",
                                    "rotationZ": 0,
                                    "yaw": 35.57,
                                    "hideEasing": "cubic_out",
                                    "pitch": 12.92,
                                    "hfov": 24.95,
                                    "showDuration": 500,
                                    "hideDuration": 500,
                                    "showEasing": "cubic_in",
                                    "id": "popup_4497A267_77E7_1B21_41D8_758B4050B01C",
                                    "rotationX": 0,
                                    "popupMaxWidth": "95%",
                                    "image": {
                                     "class": "ImageResource",
                                     "levels": [
                                      {
                                       "height": 1024,
                                       "class": "ImageResourceLevel",
                                       "width": 967,
                                       "url": "media/popup_4497A267_77E7_1B21_41D8_758B4050B01C_0_2.jpg"
                                      }
                                     ]
                                    },
                                    "rotationY": 0,
                                    "popupMaxHeight": "95%"
                                   }
                                  ]
                                 }
                                ],
                                "cardboardMenu": "this.Menu_C9250CE0_C4F6_D12F_41E1_21C392779042",
                                "thumbnailUrl": "media/panorama_608415CE_76A5_3963_41B0_9D7A41C890CE_t.jpg"
                               },
                               "yaw": 124.75,
                               "distance": 1,
                               "backwardYaw": 172.49
                              }
                             ],
                             "vfov": 180,
                             "partial": false,
                             "label": "2piano",
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_609C9DA4_76A5_0927_41C1_7965BA72A422_t.jpg",
                               "class": "SphericPanoramaFrame",
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 3040,
                                  "class": "ImageResourceLevel",
                                  "width": 6080,
                                  "url": "media/panorama_609C9DA4_76A5_0927_41C1_7965BA72A422_hq.jpeg"
                                 },
                                 {
                                  "height": 2001,
                                  "class": "ImageResourceLevel",
                                  "width": 4002,
                                  "url": "media/panorama_609C9DA4_76A5_0927_41C1_7965BA72A422.jpeg"
                                 }
                                ]
                               },
                               "overlays": [
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "cambia visuale",
                                   "click": "this.startPanoramaWithCamera(this.panorama_608415CE_76A5_3963_41B0_9D7A41C890CE, this.camera_CA97BF76_C4F6_CF13_4184_15ED4D9D1DDD); this.mainPlayList.set('selectedIndex', 13)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "id": "overlay_56F36469_779D_1F21_41CF_1D6B192F8DD2",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 6.47,
                                   "yaw": 124.75,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 63,
                                      "class": "ImageResourceLevel",
                                      "width": 72,
                                      "url": "media/panorama_609C9DA4_76A5_0927_41C1_7965BA72A422_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -41.14
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 124.75,
                                   "hfov": 6.47,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 127,
                                      "class": "ImageResourceLevel",
                                      "width": 144,
                                      "url": "media/panorama_609C9DA4_76A5_0927_41C1_7965BA72A422_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -41.14
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92, this.camera_CAA0DF66_C4F6_CF33_41E2_1D05534CDDB9); this.mainPlayList.set('selectedIndex', 14)"
                                  }
                                 ],
                                 "id": "overlay_5313183D_779D_3721_41DA_4B4BE57221C8",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 7.73,
                                   "yaw": -154.6,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 63,
                                      "class": "ImageResourceLevel",
                                      "width": 72,
                                      "url": "media/panorama_609C9DA4_76A5_0927_41C1_7965BA72A422_0_HS_1_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -25.81
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -154.6,
                                   "hfov": 7.73,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 127,
                                      "class": "ImageResourceLevel",
                                      "width": 144,
                                      "url": "media/panorama_609C9DA4_76A5_0927_41C1_7965BA72A422_0_HS_1_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -25.81
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "vai alla sala Pio Joris",
                                   "click": "this.mainPlayList.set('selectedIndex', 17)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "id": "overlay_54D7EFB6_77A3_0923_41BE_523C05B68A2F",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 8.71,
                                   "yaw": -123.02,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 75,
                                      "class": "ImageResourceLevel",
                                      "width": 75,
                                      "url": "media/panorama_609C9DA4_76A5_0927_41C1_7965BA72A422_0_HS_2_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -12.95
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -123.02,
                                   "hfov": 8.71,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 151,
                                      "class": "ImageResourceLevel",
                                      "width": 151,
                                      "url": "media/panorama_609C9DA4_76A5_0927_41C1_7965BA72A422_0_HS_2_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -12.95
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "ammira l'opera",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_46CB1E62_77ED_0B23_41DC_FA9F6671BE4F, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_4022E656_77A7_1B63_41DD_01B9872154D3, null, null, null, null, false)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "id": "overlay_47CB02B0_77ED_3B3F_41BE_7853DAD359FA",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 26.24,
                                   "yaw": 68.18,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 200,
                                      "class": "ImageResourceLevel",
                                      "width": 162,
                                      "url": "media/panorama_609C9DA4_76A5_0927_41C1_7965BA72A422_0_HS_3_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": 10.11
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 68.18,
                                   "hfov": 26.24,
                                   "roll": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 554,
                                      "class": "ImageResourceLevel",
                                      "width": 451,
                                      "url": "media/panorama_609C9DA4_76A5_0927_41C1_7965BA72A422_0_HS_3_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": 10.11
                                  }
                                 ]
                                },
                                {
                                 "class": "PopupPanoramaOverlay",
                                 "rotationZ": 0,
                                 "yaw": 68.18,
                                 "hideEasing": "cubic_out",
                                 "pitch": 10.11,
                                 "hfov": 24.32,
                                 "showDuration": 500,
                                 "hideDuration": 500,
                                 "showEasing": "cubic_in",
                                 "id": "popup_46CB1E62_77ED_0B23_41DC_FA9F6671BE4F",
                                 "rotationX": 0,
                                 "popupMaxWidth": "95%",
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "height": 1000,
                                    "class": "ImageResourceLevel",
                                    "width": 1024,
                                    "url": "media/popup_46CB1E62_77ED_0B23_41DC_FA9F6671BE4F_0_2.jpg"
                                   }
                                  ]
                                 },
                                 "rotationY": 0,
                                 "popupMaxHeight": "95%"
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "ammira l'opera",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_46B5FFCF_77EF_0961_41DD_9419C381F7AB, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_40224656_77A7_1B63_41D0_302939F4B33A, null, null, null, null, false)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "id": "overlay_46253A90_77EF_0BFF_41D0_F7C3CF8D0F32",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 44.25,
                                   "yaw": 28.37,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 197,
                                      "class": "ImageResourceLevel",
                                      "width": 200,
                                      "url": "media/panorama_609C9DA4_76A5_0927_41C1_7965BA72A422_0_HS_4_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": 8.58
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 28.37,
                                   "hfov": 44.25,
                                   "roll": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 779,
                                      "class": "ImageResourceLevel",
                                      "width": 786,
                                      "url": "media/panorama_609C9DA4_76A5_0927_41C1_7965BA72A422_0_HS_4_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": 8.58
                                  }
                                 ]
                                },
                                {
                                 "class": "PopupPanoramaOverlay",
                                 "rotationZ": 0,
                                 "yaw": 28.37,
                                 "hideEasing": "cubic_out",
                                 "pitch": 8.58,
                                 "hfov": 41.47,
                                 "showDuration": 500,
                                 "hideDuration": 500,
                                 "showEasing": "cubic_in",
                                 "id": "popup_46B5FFCF_77EF_0961_41DD_9419C381F7AB",
                                 "rotationX": 0,
                                 "popupMaxWidth": "95%",
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "height": 761,
                                    "class": "ImageResourceLevel",
                                    "width": 1023,
                                    "url": "media/popup_46B5FFCF_77EF_0961_41DD_9419C381F7AB_0_2.jpg"
                                   }
                                  ]
                                 },
                                 "rotationY": 0,
                                 "popupMaxHeight": "95%"
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "ammira l'opera",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_46AFE6B6_77ED_1B23_41BF_7278A2F45526, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_403DD656_77A7_1B6C_41CF_266A17F58940, null, null, null, null, false)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "id": "overlay_46079A32_77ED_0B23_41C6_8C208D890835",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 34.34,
                                   "yaw": -48.48,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 152,
                                      "class": "ImageResourceLevel",
                                      "width": 200,
                                      "url": "media/panorama_609C9DA4_76A5_0927_41C1_7965BA72A422_0_HS_5_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": 26.49
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -48.48,
                                   "hfov": 34.34,
                                   "roll": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 456,
                                      "class": "ImageResourceLevel",
                                      "width": 598,
                                      "url": "media/panorama_609C9DA4_76A5_0927_41C1_7965BA72A422_0_HS_5_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": 26.49
                                  }
                                 ]
                                },
                                {
                                 "class": "PopupPanoramaOverlay",
                                 "rotationZ": 0,
                                 "yaw": -48.48,
                                 "hideEasing": "cubic_out",
                                 "pitch": 26.49,
                                 "hfov": 30.42,
                                 "showDuration": 500,
                                 "hideDuration": 500,
                                 "showEasing": "cubic_in",
                                 "id": "popup_46AFE6B6_77ED_1B23_41BF_7278A2F45526",
                                 "rotationX": 0,
                                 "popupMaxWidth": "95%",
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "height": 733,
                                    "class": "ImageResourceLevel",
                                    "width": 1024,
                                    "url": "media/popup_46AFE6B6_77ED_1B23_41BF_7278A2F45526_0_2.jpg"
                                   }
                                  ]
                                 },
                                 "rotationY": 0,
                                 "popupMaxHeight": "95%"
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "ammira l'opera",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_46720844_77ED_3767_41CC_C033880D1980, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_403DB65B_77A7_1B61_41C5_CCD94FA97B1F, null, null, null, null, false)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "id": "overlay_47C58444_77ED_1F67_41D6_E58A356F9602",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 28.36,
                                   "yaw": -48.92,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 199,
                                      "class": "ImageResourceLevel",
                                      "width": 168,
                                      "url": "media/panorama_609C9DA4_76A5_0927_41C1_7965BA72A422_0_HS_6_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -4.01
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -48.92,
                                   "hfov": 28.36,
                                   "roll": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 579,
                                      "class": "ImageResourceLevel",
                                      "width": 489,
                                      "url": "media/panorama_609C9DA4_76A5_0927_41C1_7965BA72A422_0_HS_6_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -4.01
                                  }
                                 ]
                                },
                                {
                                 "class": "PopupPanoramaOverlay",
                                 "rotationZ": 0,
                                 "yaw": -48.92,
                                 "hideEasing": "cubic_out",
                                 "pitch": -4.01,
                                 "hfov": 27.14,
                                 "showDuration": 500,
                                 "hideDuration": 500,
                                 "showEasing": "cubic_in",
                                 "id": "popup_46720844_77ED_3767_41CC_C033880D1980",
                                 "rotationX": 0,
                                 "popupMaxWidth": "95%",
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "height": 948,
                                    "class": "ImageResourceLevel",
                                    "width": 1024,
                                    "url": "media/popup_46720844_77ED_3767_41CC_C033880D1980_0_2.jpg"
                                   }
                                  ]
                                 },
                                 "rotationY": 0,
                                 "popupMaxHeight": "95%"
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "ammira l'opera",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_4699E93E_77E3_0923_41D1_5CD4DB30E1C5, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_403D065B_77A7_1B61_41D1_2BB91EE6CD9A, null, null, null, null, false)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "id": "overlay_4638E086_77E3_17E3_41D9_D8A869257AE6",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 25.44,
                                   "yaw": -9.8,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 200,
                                      "class": "ImageResourceLevel",
                                      "width": 185,
                                      "url": "media/panorama_609C9DA4_76A5_0927_41C1_7965BA72A422_0_HS_7_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": 24.05
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -9.8,
                                   "hfov": 25.44,
                                   "roll": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 470,
                                      "class": "ImageResourceLevel",
                                      "width": 436,
                                      "url": "media/panorama_609C9DA4_76A5_0927_41C1_7965BA72A422_0_HS_7_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": 24.05
                                  }
                                 ]
                                },
                                {
                                 "class": "PopupPanoramaOverlay",
                                 "rotationZ": 0,
                                 "yaw": -9.8,
                                 "hideEasing": "cubic_out",
                                 "pitch": 24.05,
                                 "hfov": 22.25,
                                 "showDuration": 500,
                                 "hideDuration": 500,
                                 "showEasing": "cubic_in",
                                 "id": "popup_4699E93E_77E3_0923_41D1_5CD4DB30E1C5",
                                 "rotationX": 0,
                                 "popupMaxWidth": "95%",
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "height": 768,
                                    "class": "ImageResourceLevel",
                                    "width": 1024,
                                    "url": "media/popup_4699E93E_77E3_0923_41D1_5CD4DB30E1C5_0_2.jpg"
                                   }
                                  ]
                                 },
                                 "rotationY": 0,
                                 "popupMaxHeight": "95%"
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "ammira l'opera",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_468A72F9_77E3_3B21_41C3_F4A05C9C82CB, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_4022165B_77A7_1B61_41C5_6607A3CF6D71, null, null, null, null, false)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "id": "overlay_46777091_77E3_77E0_41BF_9B25DE223186",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 22.36,
                                   "yaw": -9.8,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 200,
                                      "class": "ImageResourceLevel",
                                      "width": 178,
                                      "url": "media/panorama_609C9DA4_76A5_0927_41C1_7965BA72A422_0_HS_8_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -1.57
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -9.8,
                                   "hfov": 22.36,
                                   "roll": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 429,
                                      "class": "ImageResourceLevel",
                                      "width": 382,
                                      "url": "media/panorama_609C9DA4_76A5_0927_41C1_7965BA72A422_0_HS_8_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -1.57
                                  }
                                 ]
                                },
                                {
                                 "class": "PopupPanoramaOverlay",
                                 "rotationZ": 0,
                                 "yaw": -9.8,
                                 "hideEasing": "cubic_out",
                                 "pitch": -1.57,
                                 "hfov": 21.35,
                                 "showDuration": 500,
                                 "hideDuration": 500,
                                 "showEasing": "cubic_in",
                                 "id": "popup_468A72F9_77E3_3B21_41C3_F4A05C9C82CB",
                                 "rotationX": 0,
                                 "popupMaxWidth": "95%",
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "height": 740,
                                    "class": "ImageResourceLevel",
                                    "width": 1024,
                                    "url": "media/popup_468A72F9_77E3_3B21_41C3_F4A05C9C82CB_0_2.jpg"
                                   }
                                  ]
                                 },
                                 "rotationY": 0,
                                 "popupMaxHeight": "95%"
                                }
                               ]
                              }
                             ],
                             "cardboardMenu": "this.Menu_C9250CE0_C4F6_D12F_41E1_21C392779042",
                             "thumbnailUrl": "media/panorama_609C9DA4_76A5_0927_41C1_7965BA72A422_t.jpg"
                            },
                            "yaw": -155.36,
                            "distance": 1,
                            "backwardYaw": -154.6
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_608415CE_76A5_3963_41B0_9D7A41C890CE",
                            "yaw": -110.39,
                            "distance": 1,
                            "backwardYaw": 94.1
                           }
                          ],
                          "vfov": 180,
                          "partial": false,
                          "label": "2pianoPorta",
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_t.jpg",
                            "class": "SphericPanoramaFrame",
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 3040,
                               "class": "ImageResourceLevel",
                               "width": 6080,
                               "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_hq.jpeg"
                              },
                              {
                               "height": 2001,
                               "class": "ImageResourceLevel",
                               "width": 4002,
                               "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92.jpeg"
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "vai alla sala Pio Joris",
                                "click": "this.startPanoramaWithCamera(this.panorama_6083C644_76A5_FB67_41AF_715BE60BC47E, this.camera_CAD8EF47_C4F6_CF71_41E6_0BDA36E7D206); this.mainPlayList.set('selectedIndex', 17)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "id": "overlay_53A48889_77A5_17E1_41CA_F46070EA4402",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 8.49,
                                "yaw": 89.51,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 75,
                                   "class": "ImageResourceLevel",
                                   "width": 75,
                                   "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -18.22
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 89.51,
                                "hfov": 8.49,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 151,
                                   "class": "ImageResourceLevel",
                                   "width": 151,
                                   "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "pitch": -18.22
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "cambia visuale",
                                "click": "this.startPanoramaWithCamera(this.panorama_608415CE_76A5_3963_41B0_9D7A41C890CE, this.camera_CAB2BF66_C4F6_CF33_41E3_EF355BEC73D1); this.mainPlayList.set('selectedIndex', 13)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "id": "overlay_5093E6CD_77A5_1B61_41D8_A4A14719ADB2",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 7.52,
                                "yaw": -110.39,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 63,
                                   "class": "ImageResourceLevel",
                                   "width": 72,
                                   "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_0_HS_1_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -28.83
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -110.39,
                                "hfov": 7.52,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 127,
                                   "class": "ImageResourceLevel",
                                   "width": 144,
                                   "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_0_HS_1_0.png"
                                  }
                                 ]
                                },
                                "pitch": -28.83
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "cambia visuale",
                                "click": "this.startPanoramaWithCamera(this.panorama_609C9DA4_76A5_0927_41C1_7965BA72A422, this.camera_CACE7F57_C4F6_CF12_41E7_A1D35834B98B); this.mainPlayList.set('selectedIndex', 12)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "id": "overlay_51A7DF7F_77A3_0921_41D5_423D97D12521",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 7.5,
                                "yaw": -155.36,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 63,
                                   "class": "ImageResourceLevel",
                                   "width": 72,
                                   "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_0_HS_2_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -29.08
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -155.36,
                                "hfov": 7.5,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 127,
                                   "class": "ImageResourceLevel",
                                   "width": 144,
                                   "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_0_HS_2_0.png"
                                  }
                                 ]
                                },
                                "pitch": -29.08
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "ammira l'opera",
                                "click": "this.showPopupPanoramaOverlay(this.popup_4599DFF6_77E5_0923_41D7_3A7978EDC46B, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_403C7660_77A7_1B5F_41D2_7A9CC847A70F, null, null, null, null, false)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "id": "overlay_4498173D_77E5_7921_41D3_4E9523D8C6BE",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 53.79,
                                "yaw": 37.16,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 179,
                                   "class": "ImageResourceLevel",
                                   "width": 200,
                                   "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_0_HS_3_1_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": 4.65
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 37.16,
                                "hfov": 53.79,
                                "roll": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 878,
                                   "class": "ImageResourceLevel",
                                   "width": 981,
                                   "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_0_HS_3_0.png"
                                  }
                                 ]
                                },
                                "pitch": 4.65
                               }
                              ]
                             },
                             {
                              "class": "PopupPanoramaOverlay",
                              "rotationZ": 0,
                              "yaw": 37.16,
                              "hideEasing": "cubic_out",
                              "pitch": 4.65,
                              "hfov": 51.58,
                              "showDuration": 500,
                              "hideDuration": 500,
                              "showEasing": "cubic_in",
                              "id": "popup_4599DFF6_77E5_0923_41D7_3A7978EDC46B",
                              "rotationX": 0,
                              "popupMaxWidth": "95%",
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "height": 772,
                                 "class": "ImageResourceLevel",
                                 "width": 1024,
                                 "url": "media/popup_4599DFF6_77E5_0923_41D7_3A7978EDC46B_0_2.jpg"
                                }
                               ]
                              },
                              "rotationY": 0,
                              "popupMaxHeight": "95%"
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "ammira l'opera",
                                "click": "this.showPopupPanoramaOverlay(this.popup_445BE2BA_77E5_7B23_41D0_870B94ECF149, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_403C2660_77A7_1B5F_41DB_CB1F9A17D881, null, null, null, null, false)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "id": "overlay_443AA8D1_77E5_3761_41D2_7BA010FC592E",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 14.75,
                                "yaw": -3.9,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 179,
                                   "class": "ImageResourceLevel",
                                   "width": 125,
                                   "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_0_HS_4_1_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": 19.29
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -3.9,
                                "hfov": 14.75,
                                "roll": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 358,
                                   "class": "ImageResourceLevel",
                                   "width": 250,
                                   "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_0_HS_4_0.png"
                                  }
                                 ]
                                },
                                "pitch": 19.29
                               }
                              ]
                             },
                             {
                              "class": "PopupPanoramaOverlay",
                              "rotationZ": 0,
                              "yaw": -3.9,
                              "hideEasing": "cubic_out",
                              "pitch": 19.29,
                              "hfov": 13.3,
                              "showDuration": 500,
                              "hideDuration": 500,
                              "showEasing": "cubic_in",
                              "id": "popup_445BE2BA_77E5_7B23_41D0_870B94ECF149",
                              "rotationX": 0,
                              "popupMaxWidth": "95%",
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "height": 997,
                                 "class": "ImageResourceLevel",
                                 "width": 1024,
                                 "url": "media/popup_445BE2BA_77E5_7B23_41D0_870B94ECF149_0_2.jpg"
                                }
                               ]
                              },
                              "rotationY": 0,
                              "popupMaxHeight": "95%"
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "ammira l'opera",
                                "click": "this.showPopupPanoramaOverlay(this.popup_44B20AD5_77E3_0B61_41D7_BEBFB39E45C2, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_403FA660_77A7_1B5F_41A7_FFEF8990EB10, null, null, null, null, false)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "id": "overlay_440D9153_77E3_1960_418C_19F18C4C7220",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 15.36,
                                "yaw": -21.54,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 162,
                                   "class": "ImageResourceLevel",
                                   "width": 130,
                                   "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_0_HS_5_1_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": 20.8
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -21.54,
                                "hfov": 15.36,
                                "roll": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 325,
                                   "class": "ImageResourceLevel",
                                   "width": 260,
                                   "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_0_HS_5_0.png"
                                  }
                                 ]
                                },
                                "pitch": 20.8
                               }
                              ]
                             },
                             {
                              "class": "PopupPanoramaOverlay",
                              "rotationZ": 0,
                              "yaw": -21.54,
                              "hideEasing": "cubic_out",
                              "pitch": 20.8,
                              "hfov": 12.74,
                              "showDuration": 500,
                              "hideDuration": 500,
                              "showEasing": "cubic_in",
                              "id": "popup_44B20AD5_77E3_0B61_41D7_BEBFB39E45C2",
                              "rotationX": 0,
                              "popupMaxWidth": "95%",
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "height": 1024,
                                 "class": "ImageResourceLevel",
                                 "width": 780,
                                 "url": "media/popup_44B20AD5_77E3_0B61_41D7_BEBFB39E45C2_0_2.jpg"
                                }
                               ]
                              },
                              "rotationY": 0,
                              "popupMaxHeight": "95%"
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "ammira l'opera",
                                "click": "this.showPopupPanoramaOverlay(this.popup_445B3E53_77E3_0B60_41AA_7D69318981E8, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_403EC660_77A7_1B5F_41D8_D48F6D48E942, null, null, null, null, false)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "id": "overlay_443A5445_77E3_1F61_41C5_7980BF5FB8B1",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 29.9,
                                "yaw": -46.85,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 200,
                                   "class": "ImageResourceLevel",
                                   "width": 177,
                                   "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_0_HS_6_1_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": 12.45
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -46.85,
                                "hfov": 29.9,
                                "roll": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 581,
                                   "class": "ImageResourceLevel",
                                   "width": 516,
                                   "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_0_HS_6_0.png"
                                  }
                                 ]
                                },
                                "pitch": 12.45
                               }
                              ]
                             },
                             {
                              "class": "PopupPanoramaOverlay",
                              "rotationZ": 0,
                              "yaw": -46.85,
                              "hideEasing": "cubic_out",
                              "pitch": 12.45,
                              "hfov": 21.8,
                              "showDuration": 500,
                              "hideDuration": 500,
                              "showEasing": "cubic_in",
                              "id": "popup_445B3E53_77E3_0B60_41AA_7D69318981E8",
                              "rotationX": 0,
                              "popupMaxWidth": "95%",
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "height": 1024,
                                 "class": "ImageResourceLevel",
                                 "width": 728,
                                 "url": "media/popup_445B3E53_77E3_0B60_41AA_7D69318981E8_0_2.jpg"
                                }
                               ]
                              },
                              "rotationY": 0,
                              "popupMaxHeight": "95%"
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "ammira l'opera",
                                "click": "this.showPopupPanoramaOverlay(this.popup_443F815D_779D_7961_41CF_AD1420C18418, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_403E4660_77A7_1B5F_41C1_EE6A78DEB6FB, null, null, null, null, false)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "id": "overlay_446587BD_779D_3920_41D1_EB38F8235920",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 24.72,
                                "yaw": -75.32,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 200,
                                   "class": "ImageResourceLevel",
                                   "width": 158,
                                   "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_0_HS_7_1_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": 9.92
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -75.32,
                                "hfov": 24.72,
                                "roll": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 536,
                                   "class": "ImageResourceLevel",
                                   "width": 424,
                                   "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_0_HS_7_0.png"
                                  }
                                 ]
                                },
                                "pitch": 9.92
                               }
                              ]
                             },
                             {
                              "class": "PopupPanoramaOverlay",
                              "rotationZ": 0,
                              "yaw": -75.32,
                              "hideEasing": "cubic_out",
                              "pitch": 9.92,
                              "hfov": 23.2,
                              "showDuration": 500,
                              "hideDuration": 500,
                              "showEasing": "cubic_in",
                              "id": "popup_443F815D_779D_7961_41CF_AD1420C18418",
                              "rotationX": 0,
                              "popupMaxWidth": "95%",
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "height": 1006,
                                 "class": "ImageResourceLevel",
                                 "width": 1024,
                                 "url": "media/popup_443F815D_779D_7961_41CF_AD1420C18418_0_2.jpg"
                                }
                               ]
                              },
                              "rotationY": 0,
                              "popupMaxHeight": "95%"
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "ammira l'opera",
                                "click": "this.showPopupPanoramaOverlay(this.popup_449A975D_779D_1960_41A3_B2AF51987967, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_403E2660_77A7_1B5F_41CA_BE652399CFB7, null, null, null, null, false)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "id": "overlay_4471EABD_779D_0B21_41DA_598D437DEC46",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 12.76,
                                "yaw": -3.43,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 137,
                                   "class": "ImageResourceLevel",
                                   "width": 108,
                                   "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_0_HS_8_1_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": 1.41
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -3.43,
                                "hfov": 12.76,
                                "roll": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 274,
                                   "class": "ImageResourceLevel",
                                   "width": 216,
                                   "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_0_HS_8_0.png"
                                  }
                                 ]
                                },
                                "pitch": 1.41
                               }
                              ]
                             },
                             {
                              "class": "PopupPanoramaOverlay",
                              "rotationZ": 0,
                              "yaw": -3.43,
                              "hideEasing": "cubic_out",
                              "pitch": 1.41,
                              "hfov": 11.82,
                              "showDuration": 500,
                              "hideDuration": 500,
                              "showEasing": "cubic_in",
                              "id": "popup_449A975D_779D_1960_41A3_B2AF51987967",
                              "rotationX": 0,
                              "popupMaxWidth": "95%",
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "height": 787,
                                 "class": "ImageResourceLevel",
                                 "width": 1024,
                                 "url": "media/popup_449A975D_779D_1960_41A3_B2AF51987967_0_2.jpg"
                                }
                               ]
                              },
                              "rotationY": 0,
                              "popupMaxHeight": "95%"
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "ammira l'opera",
                                "click": "this.showPopupPanoramaOverlay(this.popup_4D1F0719_779F_3AE1_41D1_9BEEB2380024, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_4039B660_77A7_1B23_41A9_02C95080DC06, null, null, null, null, false)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "id": "overlay_4FC26DE5_779F_0921_41DC_78467474423F",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 12.69,
                                "yaw": -21.35,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 135,
                                   "class": "ImageResourceLevel",
                                   "width": 107,
                                   "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_0_HS_9_1_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": 1.97
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -21.35,
                                "hfov": 12.69,
                                "roll": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 270,
                                   "class": "ImageResourceLevel",
                                   "width": 215,
                                   "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_0_HS_9_0.png"
                                  }
                                 ]
                                },
                                "pitch": 1.97
                               }
                              ]
                             },
                             {
                              "class": "PopupPanoramaOverlay",
                              "rotationZ": 0,
                              "yaw": -21.35,
                              "hideEasing": "cubic_out",
                              "pitch": 1.97,
                              "hfov": 11.87,
                              "showDuration": 500,
                              "hideDuration": 500,
                              "showEasing": "cubic_in",
                              "id": "popup_4D1F0719_779F_3AE1_41D1_9BEEB2380024",
                              "rotationX": 0,
                              "popupMaxWidth": "95%",
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "height": 905,
                                 "class": "ImageResourceLevel",
                                 "width": 1024,
                                 "url": "media/popup_4D1F0719_779F_3AE1_41D1_9BEEB2380024_0_1.jpg"
                                }
                               ]
                              },
                              "rotationY": 0,
                              "popupMaxHeight": "95%"
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "ammira l'opera",
                                "click": "this.showPopupPanoramaOverlay(this.popup_4170A165_779D_F921_41CD_0CA044A68FA9, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_403EB664_77A7_1B27_41CB_5663DA4E74A9, null, null, null, null, false)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "id": "overlay_42DD5082_779D_37E0_41CE_B84C2AFEC9A8",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 17.79,
                                "yaw": 129.28,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 181,
                                   "class": "ImageResourceLevel",
                                   "width": 151,
                                   "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_0_HS_10_1_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -0.24
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 129.28,
                                "hfov": 17.79,
                                "roll": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 363,
                                   "class": "ImageResourceLevel",
                                   "width": 302,
                                   "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_0_HS_10_0.png"
                                  }
                                 ]
                                },
                                "pitch": -0.24
                               }
                              ]
                             },
                             {
                              "class": "PopupPanoramaOverlay",
                              "rotationZ": 0,
                              "yaw": 129.28,
                              "hideEasing": "cubic_out",
                              "pitch": -0.24,
                              "hfov": 15.27,
                              "showDuration": 500,
                              "hideDuration": 500,
                              "showEasing": "cubic_in",
                              "id": "popup_4170A165_779D_F921_41CD_0CA044A68FA9",
                              "rotationX": 0,
                              "popupMaxWidth": "95%",
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "height": 1024,
                                 "class": "ImageResourceLevel",
                                 "width": 774,
                                 "url": "media/popup_4170A165_779D_F921_41CD_0CA044A68FA9_0_2.jpg"
                                }
                               ]
                              },
                              "rotationY": 0,
                              "popupMaxHeight": "95%"
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "ammira l'opera",
                                "click": "this.showPopupPanoramaOverlay(this.popup_42A2AA6E_779D_0B23_41BB_6FE50F770B81, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_403E6664_77A7_1B27_419E_EA95AD2AB158, null, null, null, null, false)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "id": "overlay_422BB8FE_779D_1723_41CF_A87E589293D0",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 18.9,
                                "yaw": 129.35,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 138,
                                   "class": "ImageResourceLevel",
                                   "width": 161,
                                   "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_0_HS_11_1_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": 18.04
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 129.35,
                                "hfov": 18.9,
                                "roll": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 277,
                                   "class": "ImageResourceLevel",
                                   "width": 322,
                                   "url": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_0_HS_11_0.png"
                                  }
                                 ]
                                },
                                "pitch": 18.04
                               }
                              ]
                             },
                             {
                              "class": "PopupPanoramaOverlay",
                              "rotationZ": 0,
                              "yaw": 129.35,
                              "hideEasing": "cubic_out",
                              "pitch": 18.04,
                              "hfov": 17.26,
                              "showDuration": 500,
                              "hideDuration": 500,
                              "showEasing": "cubic_in",
                              "id": "popup_42A2AA6E_779D_0B23_41BB_6FE50F770B81",
                              "rotationX": 0,
                              "popupMaxWidth": "95%",
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "height": 734,
                                 "class": "ImageResourceLevel",
                                 "width": 1024,
                                 "url": "media/popup_42A2AA6E_779D_0B23_41BB_6FE50F770B81_0_2.jpg"
                                }
                               ]
                              },
                              "rotationY": 0,
                              "popupMaxHeight": "95%"
                             }
                            ]
                           }
                          ],
                          "cardboardMenu": "this.Menu_C9250CE0_C4F6_D12F_41E1_21C392779042",
                          "thumbnailUrl": "media/panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_t.jpg"
                         },
                         "yaw": -158.14,
                         "distance": 1,
                         "backwardYaw": 89.51
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "class": "Panorama",
                          "id": "panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33",
                          "mapLocations": [
                           {
                            "class": "PanoramaMapLocation",
                            "y": 369.6,
                            "x": 526.4,
                            "angle": 138.31,
                            "map": "this.map_6A18B046_7BD6_1966_41C9_5D10D8972CB8"
                           }
                          ],
                          "pitch": 0,
                          "hfovMax": 120,
                          "hfov": 360,
                          "hfovMin": 60,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_6083C644_76A5_FB67_41AF_715BE60BC47E",
                            "yaw": 104.66,
                            "distance": 1,
                            "backwardYaw": -117.42
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "class": "Panorama",
                             "id": "panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8",
                             "mapLocations": [
                              {
                               "class": "PanoramaMapLocation",
                               "y": 338.6,
                               "x": 175.4,
                               "angle": -53.27,
                               "map": "this.map_6A18B046_7BD6_1966_41C9_5D10D8972CB8"
                              }
                             ],
                             "pitch": 0,
                             "hfovMax": 120,
                             "hfov": 360,
                             "hfovMin": 60,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_6083C644_76A5_FB67_41AF_715BE60BC47E",
                               "yaw": -154.35,
                               "distance": 1,
                               "backwardYaw": 149.12
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33",
                               "yaw": 167.96,
                               "distance": 1,
                               "backwardYaw": 171.98
                              }
                             ],
                             "vfov": 180,
                             "partial": false,
                             "label": "salotto",
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8_t.jpg",
                               "class": "SphericPanoramaFrame",
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 3040,
                                  "class": "ImageResourceLevel",
                                  "width": 6080,
                                  "url": "media/panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8_hq.jpeg"
                                 },
                                 {
                                  "height": 2001,
                                  "class": "ImageResourceLevel",
                                  "width": 4002,
                                  "url": "media/panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8.jpeg"
                                 }
                                ]
                               },
                               "overlays": [
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "scendi al piano terra",
                                   "click": "this.mainPlayList.set('selectedIndex', 11)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "id": "overlay_6B932778_767F_F92F_41C9_AC44531739AB",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 8.94,
                                   "yaw": 72.93,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 75,
                                      "class": "ImageResourceLevel",
                                      "width": 75,
                                      "url": "media/panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": 0.87
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 72.93,
                                   "hfov": 8.94,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 151,
                                      "class": "ImageResourceLevel",
                                      "width": 151,
                                      "url": "media/panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": 0.87
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "vai alla sala Carotenuto-Signorino",
                                   "click": "this.mainPlayList.set('selectedIndex', 14)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "id": "overlay_6A74B53E_767D_1923_41DB_628F11E416A8",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 7.09,
                                   "yaw": 91.44,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 53,
                                      "class": "ImageResourceLevel",
                                      "width": 61,
                                      "url": "media/panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8_0_HS_1_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -13.41
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 91.44,
                                   "hfov": 7.09,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 107,
                                      "class": "ImageResourceLevel",
                                      "width": 123,
                                      "url": "media/panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8_0_HS_1_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -13.41
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "cambia visuale",
                                   "click": "this.startPanoramaWithCamera(this.panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33, this.camera_CA7D3DBF_C4F6_D311_4199_71E143E5465B); this.mainPlayList.set('selectedIndex', 18)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "id": "overlay_6BF591AF_7663_7921_41C6_8BA7696DDABF",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 6.85,
                                   "yaw": 167.96,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 63,
                                      "class": "ImageResourceLevel",
                                      "width": 72,
                                      "url": "media/panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8_0_HS_2_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -37.12
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 167.96,
                                   "hfov": 6.85,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 127,
                                      "class": "ImageResourceLevel",
                                      "width": 144,
                                      "url": "media/panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8_0_HS_2_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -37.12
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "cambia visuale",
                                   "click": "this.startPanoramaWithCamera(this.panorama_6083C644_76A5_FB67_41AF_715BE60BC47E, this.camera_CA8D5DAF_C4F6_D331_41D5_3433D3E8E240); this.mainPlayList.set('selectedIndex', 17)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "id": "overlay_6BCF80D9_7663_F760_41AA_63DB6B935B50",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 6.85,
                                   "yaw": -154.35,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 63,
                                      "class": "ImageResourceLevel",
                                      "width": 72,
                                      "url": "media/panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8_0_HS_3_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -37.12
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -154.35,
                                   "hfov": 6.85,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 127,
                                      "class": "ImageResourceLevel",
                                      "width": 144,
                                      "url": "media/panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8_0_HS_3_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -37.12
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "sali nel sottotetto",
                                   "click": "this.mainPlayList.set('selectedIndex', 20)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "id": "overlay_6AD3A0B3_7663_1721_41A4_91D5B9D6993F",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 5.81,
                                   "yaw": 55.14,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 49,
                                      "class": "ImageResourceLevel",
                                      "width": 50,
                                      "url": "media/panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8_0_HS_4_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -15.67
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 55.14,
                                   "hfov": 5.81,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 98,
                                      "class": "ImageResourceLevel",
                                      "width": 101,
                                      "url": "media/panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8_0_HS_4_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -15.67
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "ammira l'opera",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_4291AC06_77A3_0EE3_41DA_9E83B5CEE57E, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_403BA66A_77A7_1B23_41C9_BA4F2DD113EA, null, null, null, null, false)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "id": "overlay_4206DFB4_77A3_0927_41DA_C025D2FA626E",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 17.96,
                                   "yaw": -23.8,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 194,
                                      "class": "ImageResourceLevel",
                                      "width": 152,
                                      "url": "media/panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8_0_HS_5_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": 31.06
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -23.8,
                                   "hfov": 17.96,
                                   "roll": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 388,
                                      "class": "ImageResourceLevel",
                                      "width": 305,
                                      "url": "media/panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8_0_HS_5_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": 31.06
                                  }
                                 ]
                                },
                                {
                                 "class": "PopupPanoramaOverlay",
                                 "rotationZ": 0,
                                 "yaw": -23.8,
                                 "hideEasing": "cubic_out",
                                 "pitch": 31.06,
                                 "hfov": 17.7,
                                 "showDuration": 500,
                                 "hideDuration": 500,
                                 "showEasing": "cubic_in",
                                 "id": "popup_4291AC06_77A3_0EE3_41DA_9E83B5CEE57E",
                                 "rotationX": 0,
                                 "popupMaxWidth": "95%",
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "height": 1024,
                                    "class": "ImageResourceLevel",
                                    "width": 992,
                                    "url": "media/popup_4291AC06_77A3_0EE3_41DA_9E83B5CEE57E_0_2.jpg"
                                   }
                                  ]
                                 },
                                 "rotationY": 0,
                                 "popupMaxHeight": "95%"
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "ammira l'opera",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_42F92F48_77A5_096F_41BF_5937EB8A05A0, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_403B266A_77A7_1B23_41CF_FEBC0800AC5A, null, null, null, null, false)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "id": "overlay_4218956C_77A4_F927_41DB_C40B61EF339E",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 20.2,
                                   "yaw": -23.25,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 200,
                                      "class": "ImageResourceLevel",
                                      "width": 154,
                                      "url": "media/panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8_0_HS_6_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": 6.3
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -23.25,
                                   "hfov": 20.2,
                                   "roll": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 447,
                                      "class": "ImageResourceLevel",
                                      "width": 344,
                                      "url": "media/panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8_0_HS_6_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": 6.3
                                  }
                                 ]
                                },
                                {
                                 "class": "PopupPanoramaOverlay",
                                 "rotationZ": 0,
                                 "yaw": -23.25,
                                 "hideEasing": "cubic_out",
                                 "pitch": 6.3,
                                 "hfov": 19.11,
                                 "showDuration": 500,
                                 "hideDuration": 500,
                                 "showEasing": "cubic_in",
                                 "id": "popup_42F92F48_77A5_096F_41BF_5937EB8A05A0",
                                 "rotationX": 0,
                                 "popupMaxWidth": "95%",
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "height": 967,
                                    "class": "ImageResourceLevel",
                                    "width": 1024,
                                    "url": "media/popup_42F92F48_77A5_096F_41BF_5937EB8A05A0_0_2.jpg"
                                   }
                                  ]
                                 },
                                 "rotationY": 0,
                                 "popupMaxHeight": "95%"
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "ammira l'opera",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_42F35F7D_77A5_0921_41CE_1F5F7BF8195E, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_403A866A_77A7_1B23_41BE_67CFD6E8EB0B, null, null, null, null, false)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "id": "overlay_421B2866_77A5_F723_41D3_79844CD51C95",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 22.19,
                                   "yaw": 22.63,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 200,
                                      "class": "ImageResourceLevel",
                                      "width": 154,
                                      "url": "media/panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8_0_HS_7_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": 30.15
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 22.63,
                                   "hfov": 22.19,
                                   "roll": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 491,
                                      "class": "ImageResourceLevel",
                                      "width": 379,
                                      "url": "media/panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8_0_HS_7_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": 30.15
                                  }
                                 ]
                                },
                                {
                                 "class": "PopupPanoramaOverlay",
                                 "rotationZ": 0,
                                 "yaw": 22.63,
                                 "hideEasing": "cubic_out",
                                 "pitch": 30.15,
                                 "hfov": 22.75,
                                 "showDuration": 500,
                                 "hideDuration": 500,
                                 "showEasing": "cubic_in",
                                 "id": "popup_42F35F7D_77A5_0921_41CE_1F5F7BF8195E",
                                 "rotationX": 0,
                                 "popupMaxWidth": "95%",
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "height": 1024,
                                    "class": "ImageResourceLevel",
                                    "width": 1003,
                                    "url": "media/popup_42F35F7D_77A5_0921_41CE_1F5F7BF8195E_0_2.jpg"
                                   }
                                  ]
                                 },
                                 "rotationY": 0,
                                 "popupMaxHeight": "95%"
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "ammira l'opera",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_42BC0364_77A7_7927_41C9_285CB14C63B6, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_403A166A_77A7_1B23_41DA_613522176330, null, null, null, null, false)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "id": "overlay_42DEBAFA_77A7_0B20_41C1_86B9BBAD33D8",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 25.32,
                                   "yaw": 23.09,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 177,
                                      "class": "ImageResourceLevel",
                                      "width": 200,
                                      "url": "media/panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8_0_HS_8_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": 6.26
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 23.09,
                                   "hfov": 25.32,
                                   "roll": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 386,
                                      "class": "ImageResourceLevel",
                                      "width": 434,
                                      "url": "media/panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8_0_HS_8_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": 6.26
                                  }
                                 ]
                                },
                                {
                                 "class": "PopupPanoramaOverlay",
                                 "rotationZ": 0,
                                 "yaw": 23.09,
                                 "hideEasing": "cubic_out",
                                 "pitch": 6.26,
                                 "hfov": 24.02,
                                 "showDuration": 500,
                                 "hideDuration": 500,
                                 "showEasing": "cubic_in",
                                 "id": "popup_42BC0364_77A7_7927_41C9_285CB14C63B6",
                                 "rotationX": 0,
                                 "popupMaxWidth": "95%",
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "height": 646,
                                    "class": "ImageResourceLevel",
                                    "width": 1023,
                                    "url": "media/popup_42BC0364_77A7_7927_41C9_285CB14C63B6_0_2.jpg"
                                   }
                                  ]
                                 },
                                 "rotationY": 0,
                                 "popupMaxHeight": "95%"
                                }
                               ]
                              }
                             ],
                             "cardboardMenu": "this.Menu_C9250CE0_C4F6_D12F_41E1_21C392779042",
                             "thumbnailUrl": "media/panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8_t.jpg"
                            },
                            "yaw": 171.98,
                            "distance": 1,
                            "backwardYaw": 167.96
                           }
                          ],
                          "vfov": 180,
                          "partial": false,
                          "label": "salottodx",
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33_t.jpg",
                            "class": "SphericPanoramaFrame",
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 3040,
                               "class": "ImageResourceLevel",
                               "width": 6080,
                               "url": "media/panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33_hq.jpeg"
                              },
                              {
                               "height": 2001,
                               "class": "ImageResourceLevel",
                               "width": 4002,
                               "url": "media/panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33.jpeg"
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "cambia visuale",
                                "click": "this.startPanoramaWithCamera(this.panorama_6083C644_76A5_FB67_41AF_715BE60BC47E, this.camera_C9C3CE4C_C4F6_D177_41D4_4CAC71129D27); this.mainPlayList.set('selectedIndex', 17)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "id": "overlay_56D0E44B_7667_1F61_41D9_BAE836544B61",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 5.67,
                                "yaw": 104.66,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 63,
                                   "class": "ImageResourceLevel",
                                   "width": 72,
                                   "url": "media/panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -48.67
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 104.66,
                                "hfov": 5.67,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 127,
                                   "class": "ImageResourceLevel",
                                   "width": 144,
                                   "url": "media/panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "pitch": -48.67
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "cambia visuale",
                                "click": "this.startPanoramaWithCamera(this.panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8, this.camera_C9CABE5B_C4F6_D111_41DB_73313A1CA883); this.mainPlayList.set('selectedIndex', 16)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "id": "overlay_5703C065_7665_7721_4198_78FE674F3721",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 7.11,
                                "yaw": 171.98,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 63,
                                   "class": "ImageResourceLevel",
                                   "width": 72,
                                   "url": "media/panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33_0_HS_1_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -34.1
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 171.98,
                                "hfov": 7.11,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 127,
                                   "class": "ImageResourceLevel",
                                   "width": 144,
                                   "url": "media/panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33_0_HS_1_0.png"
                                  }
                                 ]
                                },
                                "pitch": -34.1
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "sali nel sottotetto",
                                "click": "this.mainPlayList.set('selectedIndex', 20)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "id": "overlay_57006283_7665_1BE1_41D6_9FB5A34F1842",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 7.32,
                                "yaw": -149.1,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 64,
                                   "class": "ImageResourceLevel",
                                   "width": 63,
                                   "url": "media/panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33_0_HS_2_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -13.79
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -149.1,
                                "hfov": 7.32,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 128,
                                   "class": "ImageResourceLevel",
                                   "width": 127,
                                   "url": "media/panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33_0_HS_2_0.png"
                                  }
                                 ]
                                },
                                "pitch": -13.79
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "scendi al pianoterra",
                                "click": "this.mainPlayList.set('selectedIndex', 11)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "id": "overlay_57F45FB5_7663_0921_41D9_B21FB0564138",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 8.93,
                                "yaw": -122.02,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 75,
                                   "class": "ImageResourceLevel",
                                   "width": 75,
                                   "url": "media/panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33_0_HS_3_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": 2.88
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -122.02,
                                "hfov": 8.93,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 151,
                                   "class": "ImageResourceLevel",
                                   "width": 151,
                                   "url": "media/panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33_0_HS_3_0.png"
                                  }
                                 ]
                                },
                                "pitch": 2.88
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "ammira l'opera",
                                "click": "this.showPopupPanoramaOverlay(this.popup_42C9509C_77A3_37E7_41B9_51A2E5EE573B, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_403A366F_77A7_1B21_41D9_6C1EEA59AA2B, null, null, null, null, false)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "id": "overlay_43BCA2EC_77A3_7B27_4179_5CE2F5ACEF24",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 26.92,
                                "yaw": -5.89,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 172,
                                   "class": "ImageResourceLevel",
                                   "width": 200,
                                   "url": "media/panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33_0_HS_4_1_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -32.16
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -5.89,
                                "hfov": 26.92,
                                "roll": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 399,
                                   "class": "ImageResourceLevel",
                                   "width": 463,
                                   "url": "media/panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33_0_HS_4_0.png"
                                  }
                                 ]
                                },
                                "pitch": -32.16
                               }
                              ]
                             },
                             {
                              "class": "PopupPanoramaOverlay",
                              "rotationZ": 0,
                              "yaw": -5.89,
                              "hideEasing": "cubic_out",
                              "pitch": -32.16,
                              "hfov": 17.16,
                              "showDuration": 500,
                              "hideDuration": 500,
                              "showEasing": "cubic_in",
                              "id": "popup_42C9509C_77A3_37E7_41B9_51A2E5EE573B",
                              "rotationX": 0,
                              "popupMaxWidth": "95%",
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "height": 1024,
                                 "class": "ImageResourceLevel",
                                 "width": 963,
                                 "url": "media/popup_42C9509C_77A3_37E7_41B9_51A2E5EE573B_0_2.jpg"
                                }
                               ]
                              },
                              "rotationY": 0,
                              "popupMaxHeight": "95%"
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "ammira l'opera",
                                "click": "this.showPopupPanoramaOverlay(this.popup_42C11E57_77A3_0B61_41C6_12661D0E6571, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_4035966F_77A7_1B21_4193_BA8FDEF221E8, null, null, null, null, false)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "id": "overlay_427B3F5C_77A3_0967_41BF_C2FFB1CECCA6",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 17.54,
                                "yaw": 24.59,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 101,
                                   "class": "ImageResourceLevel",
                                   "width": 149,
                                   "url": "media/panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33_0_HS_5_1_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -24.4
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 24.59,
                                "hfov": 17.54,
                                "roll": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 203,
                                   "class": "ImageResourceLevel",
                                   "width": 298,
                                   "url": "media/panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33_0_HS_5_0.png"
                                  }
                                 ]
                                },
                                "pitch": -24.4
                               }
                              ]
                             },
                             {
                              "class": "PopupPanoramaOverlay",
                              "rotationZ": 0,
                              "yaw": 24.59,
                              "hideEasing": "cubic_out",
                              "pitch": -24.4,
                              "hfov": 7.15,
                              "showDuration": 500,
                              "hideDuration": 500,
                              "showEasing": "cubic_in",
                              "id": "popup_42C11E57_77A3_0B61_41C6_12661D0E6571",
                              "rotationX": 0,
                              "popupMaxWidth": "95%",
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "height": 1024,
                                 "class": "ImageResourceLevel",
                                 "width": 739,
                                 "url": "media/popup_42C11E57_77A3_0B61_41C6_12661D0E6571_0_2.jpg"
                                }
                               ]
                              },
                              "rotationY": 0,
                              "popupMaxHeight": "95%"
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "ammira l'opera",
                                "click": "this.showPopupPanoramaOverlay(this.popup_42BCE224_77AD_1B20_41CC_E421E3916BF6, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_4035166F_77A7_1B21_41D3_4845314F5200, null, null, null, null, false)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "id": "overlay_423E5EC0_77AD_0B5F_41D1_8D77FDB0F602",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 31.14,
                                "yaw": -4.24,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 200,
                                   "class": "ImageResourceLevel",
                                   "width": 173,
                                   "url": "media/panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33_0_HS_6_1_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": 6.9
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -4.24,
                                "hfov": 31.14,
                                "roll": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 621,
                                   "class": "ImageResourceLevel",
                                   "width": 539,
                                   "url": "media/panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33_0_HS_6_0.png"
                                  }
                                 ]
                                },
                                "pitch": 6.9
                               }
                              ]
                             },
                             {
                              "class": "PopupPanoramaOverlay",
                              "rotationZ": 0,
                              "yaw": -4.24,
                              "hideEasing": "cubic_out",
                              "pitch": 6.9,
                              "hfov": 29.42,
                              "showDuration": 500,
                              "hideDuration": 500,
                              "showEasing": "cubic_in",
                              "id": "popup_42BCE224_77AD_1B20_41CC_E421E3916BF6",
                              "rotationX": 0,
                              "popupMaxWidth": "95%",
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "height": 739,
                                 "class": "ImageResourceLevel",
                                 "width": 1024,
                                 "url": "media/popup_42BCE224_77AD_1B20_41CC_E421E3916BF6_0_2.jpg"
                                }
                               ]
                              },
                              "rotationY": 0,
                              "popupMaxHeight": "95%"
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "ammira l'opera",
                                "click": "this.showPopupPanoramaOverlay(this.popup_4F20AF2C_77AD_0920_41D5_51E74CDB883A, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_4034966F_77A7_1B21_41C5_1BC082542430, null, null, null, null, false)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "id": "overlay_40AB6456_77AD_1F63_41CC_26522E9C4661",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 39.63,
                                "yaw": -54.03,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 154,
                                   "class": "ImageResourceLevel",
                                   "width": 200,
                                   "url": "media/panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33_0_HS_7_1_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": 8.24
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -54.03,
                                "hfov": 39.63,
                                "roll": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 538,
                                   "class": "ImageResourceLevel",
                                   "width": 697,
                                   "url": "media/panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33_0_HS_7_0.png"
                                  }
                                 ]
                                },
                                "pitch": 8.24
                               }
                              ]
                             },
                             {
                              "class": "PopupPanoramaOverlay",
                              "rotationZ": 0,
                              "yaw": -54.03,
                              "hideEasing": "cubic_out",
                              "pitch": 8.24,
                              "hfov": 37.42,
                              "showDuration": 500,
                              "hideDuration": 500,
                              "showEasing": "cubic_in",
                              "id": "popup_4F20AF2C_77AD_0920_41D5_51E74CDB883A",
                              "rotationX": 0,
                              "popupMaxWidth": "95%",
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "height": 656,
                                 "class": "ImageResourceLevel",
                                 "width": 1024,
                                 "url": "media/popup_4F20AF2C_77AD_0920_41D5_51E74CDB883A_0_2.jpg"
                                }
                               ]
                              },
                              "rotationY": 0,
                              "popupMaxHeight": "95%"
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "ammira l'opera",
                                "click": "this.showPopupPanoramaOverlay(this.popup_4082F7A4_77AF_7927_418A_241D47A6A38B, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_40346672_77A7_1B23_41BD_06655B0D286F, null, null, null, null, false)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "id": "overlay_40285DF0_77AF_093F_41DC_A087FD9642BB",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 19.63,
                                "yaw": -86.53,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 200,
                                   "class": "ImageResourceLevel",
                                   "width": 153,
                                   "url": "media/panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33_0_HS_8_1_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": 6.37
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -86.53,
                                "hfov": 19.63,
                                "roll": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 435,
                                   "class": "ImageResourceLevel",
                                   "width": 334,
                                   "url": "media/panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33_0_HS_8_0.png"
                                  }
                                 ]
                                },
                                "pitch": 6.37
                               }
                              ]
                             },
                             {
                              "class": "PopupPanoramaOverlay",
                              "rotationZ": 0,
                              "yaw": -86.53,
                              "hideEasing": "cubic_out",
                              "pitch": 6.37,
                              "hfov": 18.52,
                              "showDuration": 500,
                              "hideDuration": 500,
                              "showEasing": "cubic_in",
                              "id": "popup_4082F7A4_77AF_7927_418A_241D47A6A38B",
                              "rotationX": 0,
                              "popupMaxWidth": "95%",
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "height": 702,
                                 "class": "ImageResourceLevel",
                                 "width": 1024,
                                 "url": "media/popup_4082F7A4_77AF_7927_418A_241D47A6A38B_0_2.jpg"
                                }
                               ]
                              },
                              "rotationY": 0,
                              "popupMaxHeight": "95%"
                             }
                            ]
                           }
                          ],
                          "cardboardMenu": "this.Menu_C9250CE0_C4F6_D12F_41E1_21C392779042",
                          "thumbnailUrl": "media/panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33_t.jpg"
                         },
                         "yaw": -117.42,
                         "distance": 1,
                         "backwardYaw": 104.66
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8",
                         "yaw": 149.12,
                         "distance": 1,
                         "backwardYaw": -154.35
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_609CB5A2_76A5_1923_4172_7195185EF63E",
                         "yaw": -168.5,
                         "distance": 1,
                         "backwardYaw": 46.35
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "class": "Panorama",
                          "id": "panorama_609BAEA9_76A5_0B21_41C1_0B3F2A61B16C",
                          "mapLocations": [
                           {
                            "class": "PanoramaMapLocation",
                            "y": 123.75,
                            "x": 283.6,
                            "angle": 0,
                            "map": {
                             "class": "Map",
                             "fieldOfViewOverlayInsideOpacity": 0.4,
                             "width": 510,
                             "fieldOfViewOverlayInsideColor": "#000000",
                             "height": 391,
                             "fieldOfViewOverlayOutsideColor": "#000000",
                             "minimumZoomFactor": 0.5,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 391,
                                "class": "ImageResourceLevel",
                                "width": 510,
                                "url": "media/map_6B156322_7BD6_18DE_41AF_8CFE279F63F6.png"
                               },
                               {
                                "height": 195,
                                "class": "ImageResourceLevel",
                                "grayscale": true,
                                "width": 255,
                                "url": "media/map_6B156322_7BD6_18DE_41AF_8CFE279F63F6_lq.png"
                               }
                              ]
                             },
                             "id": "map_6B156322_7BD6_18DE_41AF_8CFE279F63F6",
                             "label": "sottotetto",
                             "maximumZoomFactor": 1.2,
                             "overlays": [
                              {
                               "class": "AreaHotspotMapOverlay",
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 20)"
                                }
                               ],
                               "id": "overlay_6D110639_7BFA_F92A_41AF_D2E1C4A89C38",
                               "map": {
                                "offsetY": 0,
                                "class": "HotspotMapOverlayMap",
                                "width": 44,
                                "y": 101.85,
                                "height": 44,
                                "x": 261.75,
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 22,
                                   "class": "ImageResourceLevel",
                                   "width": 22,
                                   "url": "media/map_6B156322_7BD6_18DE_41AF_8CFE279F63F6_HS_0_map.gif"
                                  }
                                 ]
                                }
                               },
                               "data": {
                                "label": "Image"
                               },
                               "rollOverDisplay": false,
                               "image": {
                                "class": "HotspotMapOverlayImage",
                                "y": 101.75,
                                "x": 261.6,
                                "width": 44,
                                "height": 44,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 44,
                                   "class": "ImageResourceLevel",
                                   "width": 44,
                                   "url": "media/map_6B156322_7BD6_18DE_41AF_8CFE279F63F6_HS_0.png"
                                  }
                                 ]
                                }
                               },
                               "useHandCursor": true
                              },
                              {
                               "class": "AreaHotspotMapOverlay",
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 19)"
                                }
                               ],
                               "id": "overlay_6CFA9334_7BFA_7F3A_41D7_90E6B9F52E9E",
                               "map": {
                                "offsetY": 0,
                                "class": "HotspotMapOverlayMap",
                                "width": 44,
                                "y": 163.8,
                                "height": 44,
                                "x": 98.65,
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 22,
                                   "class": "ImageResourceLevel",
                                   "width": 22,
                                   "url": "media/map_6B156322_7BD6_18DE_41AF_8CFE279F63F6_HS_1_map.gif"
                                  }
                                 ]
                                }
                               },
                               "data": {
                                "label": "Image"
                               },
                               "rollOverDisplay": false,
                               "image": {
                                "class": "HotspotMapOverlayImage",
                                "y": 163.7,
                                "x": 98.5,
                                "width": 44,
                                "height": 44,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 44,
                                   "class": "ImageResourceLevel",
                                   "width": 44,
                                   "url": "media/map_6B156322_7BD6_18DE_41AF_8CFE279F63F6_HS_1.png"
                                  }
                                 ]
                                }
                               },
                               "useHandCursor": true
                              },
                              {
                               "class": "AreaHotspotMapOverlay",
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 17)"
                                },
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#000000"
                                }
                               ],
                               "id": "overlay_63589E42_7BFE_295E_41D2_DC9EF55B77B5",
                               "map": {
                                "offsetY": 0,
                                "class": "HotspotMapOverlayMap",
                                "width": 118,
                                "y": 5.95,
                                "height": 68,
                                "x": 62.8,
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 35,
                                   "class": "ImageResourceLevel",
                                   "width": 60,
                                   "url": "media/map_6B156322_7BD6_18DE_41AF_8CFE279F63F6_HS_2_map.gif"
                                  }
                                 ]
                                }
                               },
                               "data": {
                                "label": "Polygon"
                               },
                               "rollOverDisplay": false,
                               "image": {
                                "class": "HotspotMapOverlayImage",
                                "width": 118,
                                "y": 5.95,
                                "height": 68,
                                "x": 62.7,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 70,
                                   "class": "ImageResourceLevel",
                                   "width": 120,
                                   "url": "media/map_6B156322_7BD6_18DE_41AF_8CFE279F63F6_HS_2.png"
                                  }
                                 ]
                                }
                               },
                               "useHandCursor": true
                              }
                             ],
                             "scaleMode": "fit_inside",
                             "fieldOfViewOverlayOutsideOpacity": 0,
                             "initialZoomFactor": 1,
                             "fieldOfViewOverlayRadiusScale": 0.3,
                             "thumbnailUrl": "media/map_6B156322_7BD6_18DE_41AF_8CFE279F63F6_t.png"
                            }
                           }
                          ],
                          "pitch": 0,
                          "hfovMax": 120,
                          "hfov": 360,
                          "hfovMin": 60,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "class": "Panorama",
                             "id": "panorama_60805689_76A5_1BE1_41B6_C9EAA20CF131",
                             "mapLocations": [
                              {
                               "class": "PanoramaMapLocation",
                               "y": 185.7,
                               "x": 120.5,
                               "angle": -86.44,
                               "map": "this.map_6B156322_7BD6_18DE_41AF_8CFE279F63F6"
                              }
                             ],
                             "pitch": 0,
                             "hfovMax": 120,
                             "hfov": 360,
                             "hfovMin": 60,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_609BAEA9_76A5_0B21_41C1_0B3F2A61B16C",
                               "yaw": 140.58,
                               "distance": 1,
                               "backwardYaw": -131.24
                              }
                             ],
                             "vfov": 180,
                             "partial": false,
                             "label": "sottoTetto",
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_60805689_76A5_1BE1_41B6_C9EAA20CF131_t.jpg",
                               "class": "SphericPanoramaFrame",
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 3040,
                                  "class": "ImageResourceLevel",
                                  "width": 6080,
                                  "url": "media/panorama_60805689_76A5_1BE1_41B6_C9EAA20CF131_hq.jpeg"
                                 },
                                 {
                                  "height": 2001,
                                  "class": "ImageResourceLevel",
                                  "width": 4002,
                                  "url": "media/panorama_60805689_76A5_1BE1_41B6_C9EAA20CF131.jpeg"
                                 }
                                ]
                               },
                               "overlays": [
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "cambia visuale",
                                   "click": "this.startPanoramaWithCamera(this.panorama_609BAEA9_76A5_0B21_41C1_0B3F2A61B16C, this.camera_C928EEF8_C4F6_D11F_41E4_654854C5E9DE); this.mainPlayList.set('selectedIndex', 20)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "id": "overlay_5569CE09_779F_0AE1_41C7_BA50A0F9A029",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 7.7,
                                   "yaw": 140.58,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 63,
                                      "class": "ImageResourceLevel",
                                      "width": 72,
                                      "url": "media/panorama_60805689_76A5_1BE1_41B6_C9EAA20CF131_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -26.32
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 140.58,
                                   "hfov": 7.7,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 127,
                                      "class": "ImageResourceLevel",
                                      "width": 144,
                                      "url": "media/panorama_60805689_76A5_1BE1_41B6_C9EAA20CF131_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -26.32
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "ammira l'opera",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_409A7C93_77A3_0FE1_41A6_A9CE922E9D52, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_40379672_77A7_1B23_41B4_1B1BB0E7937E, null, null, null, null, false)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "id": "overlay_4002D041_77A3_3761_41D8_C1C5EB49B44A",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 35.67,
                                   "yaw": -23.78,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 200,
                                      "class": "ImageResourceLevel",
                                      "width": 145,
                                      "url": "media/panorama_60805689_76A5_1BE1_41B6_C9EAA20CF131_0_HS_1_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": 4.84
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -23.78,
                                   "hfov": 35.67,
                                   "roll": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 855,
                                      "class": "ImageResourceLevel",
                                      "width": 622,
                                      "url": "media/panorama_60805689_76A5_1BE1_41B6_C9EAA20CF131_0_HS_1_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": 4.84
                                  }
                                 ]
                                },
                                {
                                 "class": "PopupPanoramaOverlay",
                                 "rotationZ": 0,
                                 "yaw": -23.78,
                                 "hideEasing": "cubic_out",
                                 "pitch": 4.84,
                                 "hfov": 34.01,
                                 "showDuration": 500,
                                 "hideDuration": 500,
                                 "showEasing": "cubic_in",
                                 "id": "popup_409A7C93_77A3_0FE1_41A6_A9CE922E9D52",
                                 "rotationX": 0,
                                 "popupMaxWidth": "95%",
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "height": 977,
                                    "class": "ImageResourceLevel",
                                    "width": 1024,
                                    "url": "media/popup_409A7C93_77A3_0FE1_41A6_A9CE922E9D52_0_2.jpg"
                                   }
                                  ]
                                 },
                                 "rotationY": 0,
                                 "popupMaxHeight": "95%"
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "toolTip": "ammira l'opera",
                                   "click": "this.showPopupPanoramaOverlay(this.popup_40FEBBE3_77A3_0921_41D1_7F1877FCA02C, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_40376672_77A7_1B23_41B1_DEFCD7AA074D, null, null, null, null, false)",
                                   "mapColor": "#FF0000",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "id": "overlay_4013D563_77A3_7921_41DD_7D6AC49C2737",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 40.75,
                                   "yaw": 19.74,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 174,
                                      "class": "ImageResourceLevel",
                                      "width": 200,
                                      "url": "media/panorama_60805689_76A5_1BE1_41B6_C9EAA20CF131_0_HS_2_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": 7.35
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 19.74,
                                   "hfov": 40.75,
                                   "roll": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 628,
                                      "class": "ImageResourceLevel",
                                      "width": 718,
                                      "url": "media/panorama_60805689_76A5_1BE1_41B6_C9EAA20CF131_0_HS_2_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": 7.35
                                  }
                                 ]
                                },
                                {
                                 "class": "PopupPanoramaOverlay",
                                 "rotationZ": 0,
                                 "yaw": 19.74,
                                 "hideEasing": "cubic_out",
                                 "pitch": 7.35,
                                 "hfov": 38.58,
                                 "showDuration": 500,
                                 "hideDuration": 500,
                                 "showEasing": "cubic_in",
                                 "id": "popup_40FEBBE3_77A3_0921_41D1_7F1877FCA02C",
                                 "rotationX": 0,
                                 "popupMaxWidth": "95%",
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "height": 675,
                                    "class": "ImageResourceLevel",
                                    "width": 1024,
                                    "url": "media/popup_40FEBBE3_77A3_0921_41D1_7F1877FCA02C_0_2.jpg"
                                   }
                                  ]
                                 },
                                 "rotationY": 0,
                                 "popupMaxHeight": "95%"
                                }
                               ]
                              }
                             ],
                             "cardboardMenu": "this.Menu_C9250CE0_C4F6_D12F_41E1_21C392779042",
                             "thumbnailUrl": "media/panorama_60805689_76A5_1BE1_41B6_C9EAA20CF131_t.jpg"
                            },
                            "yaw": -131.24,
                            "distance": 1,
                            "backwardYaw": 140.58
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_6083C644_76A5_FB67_41AF_715BE60BC47E",
                            "yaw": -79.81,
                            "distance": 1,
                            "backwardYaw": 169.95
                           }
                          ],
                          "vfov": 180,
                          "partial": false,
                          "label": "sottoTettoscala",
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_609BAEA9_76A5_0B21_41C1_0B3F2A61B16C_t.jpg",
                            "class": "SphericPanoramaFrame",
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 3040,
                               "class": "ImageResourceLevel",
                               "width": 6080,
                               "url": "media/panorama_609BAEA9_76A5_0B21_41C1_0B3F2A61B16C_hq.jpeg"
                              },
                              {
                               "height": 2001,
                               "class": "ImageResourceLevel",
                               "width": 4002,
                               "url": "media/panorama_609BAEA9_76A5_0B21_41C1_0B3F2A61B16C.jpeg"
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "cambia visuale",
                                "click": "this.startPanoramaWithCamera(this.panorama_60805689_76A5_1BE1_41B6_C9EAA20CF131, this.camera_C973BEAA_C4F6_D133_41DD_9224CC974327); this.mainPlayList.set('selectedIndex', 19)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "id": "overlay_56894F41_779D_0961_41DC_99EBC4484DF2",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 7.43,
                                "yaw": -131.24,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 63,
                                   "class": "ImageResourceLevel",
                                   "width": 72,
                                   "url": "media/panorama_609BAEA9_76A5_0B21_41C1_0B3F2A61B16C_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -30.08
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -131.24,
                                "hfov": 7.43,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 127,
                                   "class": "ImageResourceLevel",
                                   "width": 144,
                                   "url": "media/panorama_609BAEA9_76A5_0B21_41C1_0B3F2A61B16C_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "pitch": -30.08
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "scendi alla sala Pio Joris",
                                "click": "this.startPanoramaWithCamera(this.panorama_6083C644_76A5_FB67_41AF_715BE60BC47E, this.camera_C964EEBA_C4F6_D112_41E0_83C178A71B64); this.mainPlayList.set('selectedIndex', 17)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "id": "overlay_544297BE_779D_3920_41DA_413A1F34C6D0",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 5.61,
                                "yaw": -79.81,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 75,
                                   "class": "ImageResourceLevel",
                                   "width": 75,
                                   "url": "media/panorama_609BAEA9_76A5_0B21_41C1_0B3F2A61B16C_0_HS_1_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -51.13
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -79.81,
                                "hfov": 5.61,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 151,
                                   "class": "ImageResourceLevel",
                                   "width": 151,
                                   "url": "media/panorama_609BAEA9_76A5_0B21_41C1_0B3F2A61B16C_0_HS_1_0.png"
                                  }
                                 ]
                                },
                                "pitch": -51.13
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "ammira l'opera",
                                "click": "this.showPopupPanoramaOverlay(this.popup_40FA997D_77A5_0921_41B8_27EC74460CF1, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_4036B674_77A7_1B27_41AD_ACCB43E9D958, null, null, null, null, false)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "id": "overlay_406BFB9B_77A5_09E1_41C2_F3EC84094C3D",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 36.74,
                                "yaw": -33.34,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 200,
                                   "class": "ImageResourceLevel",
                                   "width": 162,
                                   "url": "media/panorama_609BAEA9_76A5_0B21_41C1_0B3F2A61B16C_0_HS_2_1_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": 14.47
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -33.34,
                                "hfov": 36.74,
                                "roll": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 791,
                                   "class": "ImageResourceLevel",
                                   "width": 642,
                                   "url": "media/panorama_609BAEA9_76A5_0B21_41C1_0B3F2A61B16C_0_HS_2_0.png"
                                  }
                                 ]
                                },
                                "pitch": 14.47
                               }
                              ]
                             },
                             {
                              "class": "PopupPanoramaOverlay",
                              "rotationZ": 0,
                              "yaw": -33.34,
                              "hideEasing": "cubic_out",
                              "pitch": 14.47,
                              "hfov": 39.26,
                              "showDuration": 500,
                              "hideDuration": 500,
                              "showEasing": "cubic_in",
                              "id": "popup_40FA997D_77A5_0921_41B8_27EC74460CF1",
                              "rotationX": 0,
                              "popupMaxWidth": "95%",
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "height": 1024,
                                 "class": "ImageResourceLevel",
                                 "width": 1006,
                                 "url": "media/popup_40FA997D_77A5_0921_41B8_27EC74460CF1_0_2.jpg"
                                }
                               ]
                              },
                              "rotationY": 0,
                              "popupMaxHeight": "95%"
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "toolTip": "ammira l'opera",
                                "click": "this.showPopupPanoramaOverlay(this.popup_40D6EC03_77A7_0EE1_41DB_E3921CB3D5C3, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_40361674_77A7_1B27_41D3_237437E40BE3, null, null, null, null, false)",
                                "mapColor": "#FF0000",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "id": "overlay_406381A3_77A7_F921_4195_F898972709F0",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 32.67,
                                "yaw": 29.26,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 186,
                                   "class": "ImageResourceLevel",
                                   "width": 200,
                                   "url": "media/panorama_609BAEA9_76A5_0B21_41C1_0B3F2A61B16C_0_HS_3_1_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": 20.75
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 29.26,
                                "hfov": 32.67,
                                "roll": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 528,
                                   "class": "ImageResourceLevel",
                                   "width": 567,
                                   "url": "media/panorama_609BAEA9_76A5_0B21_41C1_0B3F2A61B16C_0_HS_3_0.png"
                                  }
                                 ]
                                },
                                "pitch": 20.75
                               }
                              ]
                             },
                             {
                              "class": "PopupPanoramaOverlay",
                              "rotationZ": 0,
                              "yaw": 29.26,
                              "hideEasing": "cubic_out",
                              "pitch": 20.75,
                              "hfov": 29.27,
                              "showDuration": 500,
                              "hideDuration": 500,
                              "showEasing": "cubic_in",
                              "id": "popup_40D6EC03_77A7_0EE1_41DB_E3921CB3D5C3",
                              "rotationX": 0,
                              "popupMaxWidth": "95%",
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "height": 971,
                                 "class": "ImageResourceLevel",
                                 "width": 1024,
                                 "url": "media/popup_40D6EC03_77A7_0EE1_41DB_E3921CB3D5C3_0_2.jpg"
                                }
                               ]
                              },
                              "rotationY": 0,
                              "popupMaxHeight": "95%"
                             }
                            ]
                           }
                          ],
                          "cardboardMenu": "this.Menu_C9250CE0_C4F6_D12F_41E1_21C392779042",
                          "thumbnailUrl": "media/panorama_609BAEA9_76A5_0B21_41C1_0B3F2A61B16C_t.jpg"
                         },
                         "yaw": 169.95,
                         "distance": 1,
                         "backwardYaw": -79.81
                        }
                       ],
                       "vfov": 180,
                       "partial": false,
                       "label": "salottocx",
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_6083C644_76A5_FB67_41AF_715BE60BC47E_t.jpg",
                         "class": "SphericPanoramaFrame",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 3040,
                            "class": "ImageResourceLevel",
                            "width": 6080,
                            "url": "media/panorama_6083C644_76A5_FB67_41AF_715BE60BC47E_hq.jpeg"
                           },
                           {
                            "height": 2001,
                            "class": "ImageResourceLevel",
                            "width": 4002,
                            "url": "media/panorama_6083C644_76A5_FB67_41AF_715BE60BC47E.jpeg"
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "toolTip": "scendi al piano terra",
                             "click": "this.startPanoramaWithCamera(this.panorama_609CB5A2_76A5_1923_4172_7195185EF63E, this.camera_CABE8D90_C4F6_D3EE_41E6_8C9CFFE08BA8); this.mainPlayList.set('selectedIndex', 11)",
                             "mapColor": "#FF0000",
                             "displayTooltipInTouchScreens": true
                            }
                           ],
                           "id": "overlay_686EDB51_766F_0961_41DC_97338125A9F9",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 7.43,
                             "yaw": -168.5,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 64,
                                "class": "ImageResourceLevel",
                                "width": 62,
                                "url": "media/panorama_6083C644_76A5_FB67_41AF_715BE60BC47E_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": 0.24
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "rollOverDisplay": false,
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -168.5,
                             "hfov": 7.43,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 129,
                                "class": "ImageResourceLevel",
                                "width": 125,
                                "url": "media/panorama_6083C644_76A5_FB67_41AF_715BE60BC47E_0_HS_0_0.png"
                               }
                              ]
                             },
                             "pitch": 0.24
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "toolTip": "cambia visuale",
                             "click": "this.startPanoramaWithCamera(this.panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33, this.camera_CADB1D70_C4F6_D32F_41E0_3852480BDF6E); this.mainPlayList.set('selectedIndex', 18)",
                             "mapColor": "#FF0000",
                             "displayTooltipInTouchScreens": true
                            }
                           ],
                           "id": "overlay_69C86ABD_766D_0B21_41D2_F06943CD8F8A",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 5.11,
                             "yaw": -117.42,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 63,
                                "class": "ImageResourceLevel",
                                "width": 72,
                                "url": "media/panorama_6083C644_76A5_FB67_41AF_715BE60BC47E_0_HS_1_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -53.45
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "rollOverDisplay": false,
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -117.42,
                             "hfov": 5.11,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 127,
                                "class": "ImageResourceLevel",
                                "width": 144,
                                "url": "media/panorama_6083C644_76A5_FB67_41AF_715BE60BC47E_0_HS_1_0.png"
                               }
                              ]
                             },
                             "pitch": -53.45
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "toolTip": "cambia visuale",
                             "click": "this.startPanoramaWithCamera(this.panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8, this.camera_CAC84D80_C4F6_D3EF_41E6_8A0429EEA032); this.mainPlayList.set('selectedIndex', 16)",
                             "mapColor": "#FF0000",
                             "displayTooltipInTouchScreens": true
                            }
                           ],
                           "id": "overlay_692555CE_7663_1963_41D6_4701CEB331CE",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 6.59,
                             "yaw": 149.12,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 63,
                                "class": "ImageResourceLevel",
                                "width": 72,
                                "url": "media/panorama_6083C644_76A5_FB67_41AF_715BE60BC47E_0_HS_2_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -39.88
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "rollOverDisplay": false,
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 149.12,
                             "hfov": 6.59,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 127,
                                "class": "ImageResourceLevel",
                                "width": 144,
                                "url": "media/panorama_6083C644_76A5_FB67_41AF_715BE60BC47E_0_HS_2_0.png"
                               }
                              ]
                             },
                             "pitch": -39.88
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "toolTip": "sali nel sottotetto",
                             "click": "this.startPanoramaWithCamera(this.panorama_609BAEA9_76A5_0B21_41C1_0B3F2A61B16C, this.camera_CAAE6D9F_C4F6_D311_41CE_83AAE345A402); this.mainPlayList.set('selectedIndex', 20)",
                             "mapColor": "#FF0000",
                             "displayTooltipInTouchScreens": true
                            }
                           ],
                           "id": "overlay_56FB1931_7667_0921_41BA_896F838AABC5",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 7.38,
                             "yaw": 169.95,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 64,
                                "class": "ImageResourceLevel",
                                "width": 63,
                                "url": "media/panorama_6083C644_76A5_FB67_41AF_715BE60BC47E_0_HS_3_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -11.53
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "rollOverDisplay": false,
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 169.95,
                             "hfov": 7.38,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 128,
                                "class": "ImageResourceLevel",
                                "width": 127,
                                "url": "media/panorama_6083C644_76A5_FB67_41AF_715BE60BC47E_0_HS_3_0.png"
                               }
                              ]
                             },
                             "pitch": -11.53
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "toolTip": "ammira l'opera",
                             "click": "this.showPopupPanoramaOverlay(this.popup_42EE6274_77A7_3B27_41D3_D027D352DD8E, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_4035766A_77A7_1B23_41D8_D9E8013198BA, null, null, null, null, false)",
                             "mapColor": "#FF0000",
                             "displayTooltipInTouchScreens": true
                            }
                           ],
                           "id": "overlay_426C1AF0_77A7_0B20_41C6_9F2CA5E96338",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 42.71,
                             "yaw": -0.79,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 135,
                                "class": "ImageResourceLevel",
                                "width": 200,
                                "url": "media/panorama_6083C644_76A5_FB67_41AF_715BE60BC47E_0_HS_4_1_0_map.gif"
                               }
                              ]
                             },
                             "pitch": 14.26
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Polygon"
                           },
                           "rollOverDisplay": false,
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -0.79,
                             "hfov": 42.71,
                             "roll": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 515,
                                "class": "ImageResourceLevel",
                                "width": 756,
                                "url": "media/panorama_6083C644_76A5_FB67_41AF_715BE60BC47E_0_HS_4_0.png"
                               }
                              ]
                             },
                             "pitch": 14.26
                            }
                           ]
                          },
                          {
                           "class": "PopupPanoramaOverlay",
                           "rotationZ": 0,
                           "yaw": -0.79,
                           "hideEasing": "cubic_out",
                           "pitch": 14.26,
                           "hfov": 39.49,
                           "showDuration": 500,
                           "hideDuration": 500,
                           "showEasing": "cubic_in",
                           "id": "popup_42EE6274_77A7_3B27_41D3_D027D352DD8E",
                           "rotationX": 0,
                           "popupMaxWidth": "95%",
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "height": 661,
                              "class": "ImageResourceLevel",
                              "width": 1024,
                              "url": "media/popup_42EE6274_77A7_3B27_41D3_D027D352DD8E_0_2.jpg"
                             }
                            ]
                           },
                           "rotationY": 0,
                           "popupMaxHeight": "95%"
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "toolTip": "vai alla sala Carotenuto-Signorino",
                             "click": "this.startPanoramaWithCamera(this.panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92, this.camera_CAD5BD51_C4F6_D311_41E6_E05536B54A02); this.mainPlayList.set('selectedIndex', 14)",
                             "mapColor": "#FF0000",
                             "displayTooltipInTouchScreens": true
                            }
                           ],
                           "id": "overlay_4F26F10C_77A3_16E7_41DC_8513D88ED9A0",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 4.93,
                             "yaw": -158.14,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 51,
                                "class": "ImageResourceLevel",
                                "width": 42,
                                "url": "media/panorama_6083C644_76A5_FB67_41AF_715BE60BC47E_0_HS_5_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -11.27
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "rollOverDisplay": false,
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -158.14,
                             "hfov": 4.93,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 102,
                                "class": "ImageResourceLevel",
                                "width": 84,
                                "url": "media/panorama_6083C644_76A5_FB67_41AF_715BE60BC47E_0_HS_5_0.png"
                               }
                              ]
                             },
                             "pitch": -11.27
                            }
                           ]
                          }
                         ]
                        }
                       ],
                       "cardboardMenu": "this.Menu_C9250CE0_C4F6_D12F_41E1_21C392779042",
                       "thumbnailUrl": "media/panorama_6083C644_76A5_FB67_41AF_715BE60BC47E_t.jpg"
                      },
                      "yaw": 46.35,
                      "distance": 1,
                      "backwardYaw": -168.5
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_608555FC_76A5_1927_41D2_0C50EB6738BC",
                      "yaw": 146.36,
                      "distance": 1,
                      "backwardYaw": 162.94
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69",
                      "yaw": -124.96,
                      "distance": 1,
                      "backwardYaw": -129.23
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4",
                      "yaw": -111.14,
                      "distance": 1,
                      "backwardYaw": 57.17
                     }
                    ],
                    "vfov": 180,
                    "partial": false,
                    "label": "2 saladx",
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_609CB5A2_76A5_1923_4172_7195185EF63E_t.jpg",
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 3040,
                         "class": "ImageResourceLevel",
                         "width": 6080,
                         "url": "media/panorama_609CB5A2_76A5_1923_4172_7195185EF63E_hq.jpeg"
                        },
                        {
                         "height": 2001,
                         "class": "ImageResourceLevel",
                         "width": 4002,
                         "url": "media/panorama_609CB5A2_76A5_1923_4172_7195185EF63E.jpeg"
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "toolTip": "cambia visuale",
                          "click": "this.startPanoramaWithCamera(this.panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4, this.camera_C989FE9A_C4F6_D113_41D2_BCCB8F4374F8); this.mainPlayList.set('selectedIndex', 8)",
                          "mapColor": "#FF0000",
                          "displayTooltipInTouchScreens": true
                         }
                        ],
                        "id": "overlay_6C52DB83_766F_09E1_41CB_A4072A11B312",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 7.33,
                          "yaw": -111.14,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 63,
                             "class": "ImageResourceLevel",
                             "width": 72,
                             "url": "media/panorama_609CB5A2_76A5_1923_4172_7195185EF63E_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -31.34
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -111.14,
                          "hfov": 7.33,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 127,
                             "class": "ImageResourceLevel",
                             "width": 144,
                             "url": "media/panorama_609CB5A2_76A5_1923_4172_7195185EF63E_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -31.34
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "toolTip": "cambia visuale",
                          "click": "this.startPanoramaWithCamera(this.panorama_608555FC_76A5_1927_41D2_0C50EB6738BC, this.camera_C99D0E8B_C4F6_D1F2_41D0_B54F40311532); this.mainPlayList.set('selectedIndex', 15)",
                          "mapColor": "#FF0000",
                          "displayTooltipInTouchScreens": true
                         }
                        ],
                        "id": "overlay_6A57254D_766D_1961_41DB_1D4EEEC5AF6D",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 7.11,
                          "yaw": 146.36,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 63,
                             "class": "ImageResourceLevel",
                             "width": 72,
                             "url": "media/panorama_609CB5A2_76A5_1923_4172_7195185EF63E_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -34.1
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 146.36,
                          "hfov": 7.11,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 127,
                             "class": "ImageResourceLevel",
                             "width": 144,
                             "url": "media/panorama_609CB5A2_76A5_1923_4172_7195185EF63E_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": -34.1
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "toolTip": "vai alla sala Pio Joris",
                          "click": "this.startPanoramaWithCamera(this.panorama_6083C644_76A5_FB67_41AF_715BE60BC47E, this.camera_C9A89E7B_C4F6_D111_41C4_F318E6CF7664); this.mainPlayList.set('selectedIndex', 17)",
                          "mapColor": "#FF0000",
                          "displayTooltipInTouchScreens": true
                         }
                        ],
                        "id": "overlay_6AE814F5_766D_7F21_41D7_A75A34A1F726",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 7.44,
                          "yaw": 46.35,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 64,
                             "class": "ImageResourceLevel",
                             "width": 63,
                             "url": "media/panorama_609CB5A2_76A5_1923_4172_7195185EF63E_0_HS_2_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -9.26
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 46.35,
                          "hfov": 7.44,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 128,
                             "class": "ImageResourceLevel",
                             "width": 127,
                             "url": "media/panorama_609CB5A2_76A5_1923_4172_7195185EF63E_0_HS_2_0.png"
                            }
                           ]
                          },
                          "pitch": -9.26
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "toolTip": "ammira l'opera",
                          "click": "this.showPopupPanoramaOverlay(this.popup_5BAEB436_77FD_7F23_41AB_475141A7BCE6, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_592BC1DD_77FF_3961_41D9_CD76FE7C6913, null, null, null, null, false)",
                          "mapColor": "#FF0000",
                          "displayTooltipInTouchScreens": true
                         }
                        ],
                        "id": "overlay_5B2B73CA_77FD_3963_41CE_A9347963FE1C",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 55.56,
                          "yaw": 4.9,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 139,
                             "class": "ImageResourceLevel",
                             "width": 200,
                             "url": "media/panorama_609CB5A2_76A5_1923_4172_7195185EF63E_0_HS_3_1_0_map.gif"
                            }
                           ]
                          },
                          "pitch": 4.67
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Polygon"
                        },
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 4.9,
                          "hfov": 55.56,
                          "roll": 0,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 710,
                             "class": "ImageResourceLevel",
                             "width": 1019,
                             "url": "media/panorama_609CB5A2_76A5_1923_4172_7195185EF63E_0_HS_3_0.png"
                            }
                           ]
                          },
                          "pitch": 4.67
                         }
                        ]
                       },
                       {
                        "class": "PopupPanoramaOverlay",
                        "rotationZ": 0,
                        "yaw": 4.9,
                        "hideEasing": "cubic_out",
                        "pitch": 4.67,
                        "hfov": 53.58,
                        "showDuration": 500,
                        "hideDuration": 500,
                        "showEasing": "cubic_in",
                        "id": "popup_5BAEB436_77FD_7F23_41AB_475141A7BCE6",
                        "rotationX": 0,
                        "popupMaxWidth": "95%",
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "height": 650,
                           "class": "ImageResourceLevel",
                           "width": 1024,
                           "url": "media/popup_5BAEB436_77FD_7F23_41AB_475141A7BCE6_0_2.jpg"
                          }
                         ]
                        },
                        "rotationY": 0,
                        "popupMaxHeight": "95%"
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "toolTip": "esci dal museo Aiello\u000a",
                          "click": "this.mainPlayList.set('selectedIndex', 3)",
                          "mapColor": "#FF0000",
                          "displayTooltipInTouchScreens": true
                         }
                        ],
                        "id": "overlay_59D2EE86_77E5_0BE3_41BE_FDD430FAC93B",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 8.93,
                          "yaw": -96.65,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 75,
                             "class": "ImageResourceLevel",
                             "width": 75,
                             "url": "media/panorama_609CB5A2_76A5_1923_4172_7195185EF63E_0_HS_5_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -2.4
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -96.65,
                          "hfov": 8.93,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 151,
                             "class": "ImageResourceLevel",
                             "width": 151,
                             "url": "media/panorama_609CB5A2_76A5_1923_4172_7195185EF63E_0_HS_5_0.png"
                            }
                           ]
                          },
                          "pitch": -2.4
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "toolTip": "cambia visuale",
                          "click": "this.startPanoramaWithCamera(this.panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69, this.camera_C984AE9A_C4F6_D113_41DE_76FFC626D545); this.mainPlayList.set('selectedIndex', 9)",
                          "mapColor": "#FF0000",
                          "displayTooltipInTouchScreens": true
                         }
                        ],
                        "id": "overlay_45698F24_77E5_0920_41A1_FD7FE8BF1447",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 6.73,
                          "yaw": -124.96,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 50,
                             "class": "ImageResourceLevel",
                             "width": 59,
                             "url": "media/panorama_609CB5A2_76A5_1923_4172_7195185EF63E_0_HS_6_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -18.03
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -124.96,
                          "hfov": 6.73,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 101,
                             "class": "ImageResourceLevel",
                             "width": 119,
                             "url": "media/panorama_609CB5A2_76A5_1923_4172_7195185EF63E_0_HS_6_0.png"
                            }
                           ]
                          },
                          "pitch": -18.03
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "cardboardMenu": "this.Menu_C9250CE0_C4F6_D12F_41E1_21C392779042",
                    "thumbnailUrl": "media/panorama_609CB5A2_76A5_1923_4172_7195185EF63E_t.jpg"
                   },
                   "yaw": 57.17,
                   "distance": 1,
                   "backwardYaw": -111.14
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F",
                   "yaw": -56.88,
                   "distance": 1,
                   "backwardYaw": 112.19
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_608555FC_76A5_1927_41D2_0C50EB6738BC",
                   "yaw": 111.19,
                   "distance": 1,
                   "backwardYaw": 114.7
                  }
                 ],
                 "vfov": 180,
                 "partial": false,
                 "label": "1e2salaCEntro",
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 3040,
                      "class": "ImageResourceLevel",
                      "width": 6080,
                      "url": "media/panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4_hq.jpeg"
                     },
                     {
                      "height": 2001,
                      "class": "ImageResourceLevel",
                      "width": 4002,
                      "url": "media/panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4.jpeg"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "toolTip": "cambia visuale",
                       "click": "this.startPanoramaWithCamera(this.panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F, this.camera_CA78AF9D_C4F6_CF11_41D7_3F67AC839B80); this.mainPlayList.set('selectedIndex', 10)",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "id": "overlay_616E2A55_76AD_0B61_419A_1CCE3F2B4328",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 7.78,
                       "yaw": -56.88,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 63,
                          "class": "ImageResourceLevel",
                          "width": 72,
                          "url": "media/panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -25.06
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -56.88,
                       "hfov": 7.78,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 127,
                          "class": "ImageResourceLevel",
                          "width": 144,
                          "url": "media/panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -25.06
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69, this.camera_CA85CF86_C4F6_CFF2_41E1_97A5BEC2733B); this.mainPlayList.set('selectedIndex', 9)"
                      }
                     ],
                     "id": "overlay_61690717_76AD_1AE1_41D8_8EDC3C766593",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 7.68,
                       "yaw": -143.05,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 63,
                          "class": "ImageResourceLevel",
                          "width": 72,
                          "url": "media/panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -26.57
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -143.05,
                       "hfov": 7.68,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 127,
                          "class": "ImageResourceLevel",
                          "width": 144,
                          "url": "media/panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -26.57
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "toolTip": "esci dal museo Aiello",
                       "click": "this.mainPlayList.set('selectedIndex', 3)",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "id": "overlay_6E313E1D_76A3_0AE1_41AF_306C6401095F",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 8.92,
                       "yaw": -93.13,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 75,
                          "class": "ImageResourceLevel",
                          "width": 75,
                          "url": "media/panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4_0_HS_2_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -3.91
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -93.13,
                       "hfov": 8.92,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 151,
                          "class": "ImageResourceLevel",
                          "width": 151,
                          "url": "media/panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4_0_HS_2_0.png"
                         }
                        ]
                       },
                       "pitch": -3.91
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "toolTip": "cambia visuale",
                       "click": "this.startPanoramaWithCamera(this.panorama_608555FC_76A5_1927_41D2_0C50EB6738BC, this.camera_CA683FA5_C4F6_CF31_41E1_D7F208034841); this.mainPlayList.set('selectedIndex', 15)",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "id": "overlay_6E93FFDC_7663_091C_41BC_D279EF8B84B6",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 8.15,
                       "yaw": 111.19,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 63,
                          "class": "ImageResourceLevel",
                          "width": 72,
                          "url": "media/panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4_0_HS_3_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -18.28
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 111.19,
                       "hfov": 8.15,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 127,
                          "class": "ImageResourceLevel",
                          "width": 144,
                          "url": "media/panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4_0_HS_3_0.png"
                         }
                        ]
                       },
                       "pitch": -18.28
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_609CB5A2_76A5_1923_4172_7195185EF63E, this.camera_CA8B1F86_C4F6_CFF2_41E2_5599F42952B1); this.mainPlayList.set('selectedIndex', 11)"
                      }
                     ],
                     "id": "overlay_6FDC41C8_7665_396F_415E_C934047195E4",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 7.47,
                       "yaw": 57.17,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 63,
                          "class": "ImageResourceLevel",
                          "width": 72,
                          "url": "media/panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4_0_HS_4_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -29.58
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 57.17,
                       "hfov": 7.47,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 127,
                          "class": "ImageResourceLevel",
                          "width": 144,
                          "url": "media/panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4_0_HS_4_0.png"
                         }
                        ]
                       },
                       "pitch": -29.58
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "toolTip": "vai alla sala Pio Joris",
                       "click": "this.mainPlayList.set('selectedIndex', 17)",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "id": "overlay_6FFD4C32_7667_0F23_41AF_2D973C3464B1",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 7.51,
                       "yaw": 53.38,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 64,
                          "class": "ImageResourceLevel",
                          "width": 63,
                          "url": "media/panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4_0_HS_5_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -4.49
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 53.38,
                       "hfov": 7.51,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 128,
                          "class": "ImageResourceLevel",
                          "width": 127,
                          "url": "media/panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4_0_HS_5_0.png"
                         }
                        ]
                       },
                       "pitch": -4.49
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "toolTip": "ammira il quadro",
                       "click": "this.showPopupPanoramaOverlay(this.popup_5DD4EB21_77A3_0921_41DA_0441408962CE, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_5D2D3825_77BF_1721_41D9_E0472A6BEA02, null, null, null, null, false)",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "id": "overlay_508370E3_77A5_7721_41B9_B1A9AC1157C3",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 31.61,
                       "yaw": -4.02,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 200,
                          "class": "ImageResourceLevel",
                          "width": 182,
                          "url": "media/panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4_0_HS_6_1_0_map.gif"
                         }
                        ]
                       },
                       "pitch": 3.22
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Polygon"
                     },
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -4.02,
                       "hfov": 31.61,
                       "roll": 0,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 601,
                          "class": "ImageResourceLevel",
                          "width": 547,
                          "url": "media/panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4_0_HS_6_0.png"
                         }
                        ]
                       },
                       "pitch": 3.22
                      }
                     ]
                    },
                    {
                     "class": "PopupPanoramaOverlay",
                     "rotationZ": 0,
                     "yaw": -4.02,
                     "hideEasing": "cubic_out",
                     "pitch": 3.22,
                     "hfov": 30.35,
                     "showDuration": 500,
                     "hideDuration": 500,
                     "showEasing": "cubic_in",
                     "id": "popup_5DD4EB21_77A3_0921_41DA_0441408962CE",
                     "rotationX": 0,
                     "popupMaxWidth": "95%",
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "height": 968,
                        "class": "ImageResourceLevel",
                        "width": 1024,
                        "url": "media/popup_5DD4EB21_77A3_0921_41DA_0441408962CE_0_2.jpg"
                       }
                      ]
                     },
                     "rotationY": 0,
                     "popupMaxHeight": "95%"
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "toolTip": "osserva il quadro",
                       "click": "this.showPopupPanoramaOverlay(this.popup_597BF05D_77BF_1760_41C1_97A0CA4A5304, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_5D2C9827_77BF_1721_41CE_9207CB12612A, null, null, null, null, false)",
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "id": "overlay_5D640225_77BD_3B20_41CD_587E8EA3194C",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 22.52,
                       "yaw": -179.25,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 199,
                          "class": "ImageResourceLevel",
                          "width": 119,
                          "url": "media/panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4_0_HS_7_1_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -2.17
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Polygon"
                     },
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -179.25,
                       "hfov": 22.52,
                       "roll": 0,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 644,
                          "class": "ImageResourceLevel",
                          "width": 385,
                          "url": "media/panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4_0_HS_7_0.png"
                         }
                        ]
                       },
                       "pitch": -2.17
                      }
                     ]
                    },
                    {
                     "class": "PopupPanoramaOverlay",
                     "rotationZ": 0,
                     "yaw": -179.25,
                     "hideEasing": "cubic_out",
                     "pitch": -2.17,
                     "hfov": 28.23,
                     "showDuration": 500,
                     "hideDuration": 500,
                     "showEasing": "cubic_in",
                     "id": "popup_597BF05D_77BF_1760_41C1_97A0CA4A5304",
                     "rotationX": 0,
                     "popupMaxWidth": "95%",
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "height": 1023,
                        "class": "ImageResourceLevel",
                        "width": 811,
                        "url": "media/popup_597BF05D_77BF_1760_41C1_97A0CA4A5304_0_2.jpg"
                       }
                      ]
                     },
                     "rotationY": 0,
                     "popupMaxHeight": "95%"
                    }
                   ]
                  }
                 ],
                 "cardboardMenu": "this.Menu_C9250CE0_C4F6_D12F_41E1_21C392779042",
                 "thumbnailUrl": "media/panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4_t.jpg"
                },
                "yaw": 114.7,
                "distance": 1,
                "backwardYaw": 111.19
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_609CB5A2_76A5_1923_4172_7195185EF63E",
                "yaw": 162.94,
                "distance": 1,
                "backwardYaw": 146.36
               }
              ],
              "vfov": 180,
              "partial": false,
              "label": "2sala",
              "frames": [
               {
                "thumbnailUrl": "media/panorama_608555FC_76A5_1927_41D2_0C50EB6738BC_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3040,
                   "class": "ImageResourceLevel",
                   "width": 6080,
                   "url": "media/panorama_608555FC_76A5_1927_41D2_0C50EB6738BC_hq.jpeg"
                  },
                  {
                   "height": 2001,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_608555FC_76A5_1927_41D2_0C50EB6738BC.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "cambia visuale",
                    "click": "this.startPanoramaWithCamera(this.panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4, this.camera_CA244DEE_C4F6_D332_41E0_E4900E85BE80); this.mainPlayList.set('selectedIndex', 8)",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "id": "overlay_6D0F9E12_7665_0AE3_41DA_F9D8703993F0",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 7.79,
                    "yaw": 114.7,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 63,
                       "class": "ImageResourceLevel",
                       "width": 72,
                       "url": "media/panorama_608555FC_76A5_1927_41D2_0C50EB6738BC_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -24.81
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 114.7,
                    "hfov": 7.79,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 127,
                       "class": "ImageResourceLevel",
                       "width": 144,
                       "url": "media/panorama_608555FC_76A5_1927_41D2_0C50EB6738BC_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -24.81
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "cambia visuale",
                    "click": "this.mainPlayList.set('selectedIndex', 17)",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "id": "overlay_6BDF9C50_7665_0F7F_41DB_9D46C13489E1",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 7.48,
                    "yaw": -174.47,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 64,
                       "class": "ImageResourceLevel",
                       "width": 63,
                       "url": "media/panorama_608555FC_76A5_1927_41D2_0C50EB6738BC_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -7.25
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -174.47,
                    "hfov": 7.48,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 128,
                       "class": "ImageResourceLevel",
                       "width": 127,
                       "url": "media/panorama_608555FC_76A5_1927_41D2_0C50EB6738BC_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -7.25
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "cambia visuale",
                    "click": "this.startPanoramaWithCamera(this.panorama_609CB5A2_76A5_1923_4172_7195185EF63E, this.camera_CA147DFD_C4F6_D311_41DF_73721FED6DD4); this.mainPlayList.set('selectedIndex', 11)",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "id": "overlay_6A9A68D6_7667_1760_41BD_6A27DA3B8178",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 7.17,
                    "yaw": 162.94,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 63,
                       "class": "ImageResourceLevel",
                       "width": 72,
                       "url": "media/panorama_608555FC_76A5_1927_41D2_0C50EB6738BC_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -33.35
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 162.94,
                    "hfov": 7.17,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 127,
                       "class": "ImageResourceLevel",
                       "width": 144,
                       "url": "media/panorama_608555FC_76A5_1927_41D2_0C50EB6738BC_0_HS_2_0.png"
                      }
                     ]
                    },
                    "pitch": -33.35
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "ammira l'opera",
                    "click": "this.showPopupPanoramaOverlay(this.popup_583490AD_77E5_3721_41C5_C0D97F8C51E5, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_40395664_77A7_1B27_41D0_688C5731998C, null, null, null, null, false)",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "id": "overlay_59439997_77E5_09E1_41DA_2BFFC566E5A4",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 38.54,
                    "yaw": -29.49,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 188,
                       "class": "ImageResourceLevel",
                       "width": 200,
                       "url": "media/panorama_608555FC_76A5_1927_41D2_0C50EB6738BC_0_HS_3_1_0_map.gif"
                      }
                     ]
                    },
                    "pitch": 7.48
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Polygon"
                  },
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -29.49,
                    "hfov": 38.54,
                    "roll": 0,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 637,
                       "class": "ImageResourceLevel",
                       "width": 676,
                       "url": "media/panorama_608555FC_76A5_1927_41D2_0C50EB6738BC_0_HS_3_0.png"
                      }
                     ]
                    },
                    "pitch": 7.48
                   }
                  ]
                 },
                 {
                  "class": "PopupPanoramaOverlay",
                  "rotationZ": 0,
                  "yaw": -29.49,
                  "hideEasing": "cubic_out",
                  "pitch": 7.48,
                  "hfov": 36.35,
                  "showDuration": 500,
                  "hideDuration": 500,
                  "showEasing": "cubic_in",
                  "id": "popup_583490AD_77E5_3721_41C5_C0D97F8C51E5",
                  "rotationX": 0,
                  "popupMaxWidth": "95%",
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "height": 576,
                     "class": "ImageResourceLevel",
                     "width": 1024,
                     "url": "media/popup_583490AD_77E5_3721_41C5_C0D97F8C51E5_0_2.jpg"
                    }
                   ]
                  },
                  "rotationY": 0,
                  "popupMaxHeight": "95%"
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "ammira l'opera",
                    "click": "this.showPopupPanoramaOverlay(this.popup_47267A60_77E7_0B5F_41C2_67409D16B719, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_40393664_77A7_1B27_41C5_1F7518FC3D84, null, null, null, null, false)",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "id": "overlay_59F9246D_77E5_1F21_41DD_861317FC9F12",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 34.22,
                    "yaw": 35.55,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 200,
                       "class": "ImageResourceLevel",
                       "width": 168,
                       "url": "media/panorama_608555FC_76A5_1927_41D2_0C50EB6738BC_0_HS_4_1_0_map.gif"
                      }
                     ]
                    },
                    "pitch": 8.1
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Polygon"
                  },
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 35.55,
                    "hfov": 34.22,
                    "roll": 0,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 704,
                       "class": "ImageResourceLevel",
                       "width": 595,
                       "url": "media/panorama_608555FC_76A5_1927_41D2_0C50EB6738BC_0_HS_4_0.png"
                      }
                     ]
                    },
                    "pitch": 8.1
                   }
                  ]
                 },
                 {
                  "class": "PopupPanoramaOverlay",
                  "rotationZ": 0,
                  "yaw": 35.55,
                  "hideEasing": "cubic_out",
                  "pitch": 8.1,
                  "hfov": 32.33,
                  "showDuration": 500,
                  "hideDuration": 500,
                  "showEasing": "cubic_in",
                  "id": "popup_47267A60_77E7_0B5F_41C2_67409D16B719",
                  "rotationX": 0,
                  "popupMaxWidth": "95%",
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "height": 778,
                     "class": "ImageResourceLevel",
                     "width": 1024,
                     "url": "media/popup_47267A60_77E7_0B5F_41C2_67409D16B719_0_2.jpg"
                    }
                   ]
                  },
                  "rotationY": 0,
                  "popupMaxHeight": "95%"
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "ammira l'opera",
                    "click": "this.showPopupPanoramaOverlay(this.popup_58D80759_77E7_3961_41CB_23330839D675, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_4038A664_77A7_1B27_41B4_0A1732AB522A, null, null, null, null, false)",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "id": "overlay_58BF0F03_77E7_0AE1_41D7_B303E3E96FA8",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 39.72,
                    "yaw": -92.21,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 99,
                       "class": "ImageResourceLevel",
                       "width": 200,
                       "url": "media/panorama_608555FC_76A5_1927_41D2_0C50EB6738BC_0_HS_5_1_0_map.gif"
                      }
                     ]
                    },
                    "pitch": 5.23
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Polygon"
                  },
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -92.21,
                    "hfov": 39.72,
                    "roll": 0,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 346,
                       "class": "ImageResourceLevel",
                       "width": 699,
                       "url": "media/panorama_608555FC_76A5_1927_41D2_0C50EB6738BC_0_HS_5_0.png"
                      }
                     ]
                    },
                    "pitch": 5.23
                   }
                  ]
                 },
                 {
                  "class": "PopupPanoramaOverlay",
                  "rotationZ": 0,
                  "yaw": -92.21,
                  "hideEasing": "cubic_out",
                  "pitch": 5.23,
                  "hfov": 38.37,
                  "showDuration": 500,
                  "hideDuration": 500,
                  "showEasing": "cubic_in",
                  "id": "popup_58D80759_77E7_3961_41CB_23330839D675",
                  "rotationX": 0,
                  "popupMaxWidth": "95%",
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "height": 454,
                     "class": "ImageResourceLevel",
                     "width": 1024,
                     "url": "media/popup_58D80759_77E7_3961_41CB_23330839D675_0_2.jpg"
                    }
                   ]
                  },
                  "rotationY": 0,
                  "popupMaxHeight": "95%"
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "esci dal museo aiello",
                    "click": "this.mainPlayList.set('selectedIndex', 3)",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "id": "overlay_58CAC945_77E3_0961_41D8_B1C5CABD3349",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 8.93,
                    "yaw": 97.3,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 75,
                       "class": "ImageResourceLevel",
                       "width": 75,
                       "url": "media/panorama_608555FC_76A5_1927_41D2_0C50EB6738BC_0_HS_6_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -2.4
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 97.3,
                    "hfov": 8.93,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 151,
                       "class": "ImageResourceLevel",
                       "width": 151,
                       "url": "media/panorama_608555FC_76A5_1927_41D2_0C50EB6738BC_0_HS_6_0.png"
                      }
                     ]
                    },
                    "pitch": -2.4
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "cambia visuale",
                    "click": "this.startPanoramaWithCamera(this.panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F, this.camera_CA348DEE_C4F6_D332_41D2_3E5D865C8218); this.mainPlayList.set('selectedIndex', 10)",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "id": "overlay_44C388C8_77E3_3760_41D7_1A9411934623",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 6.66,
                    "yaw": 116.84,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 50,
                       "class": "ImageResourceLevel",
                       "width": 57,
                       "url": "media/panorama_608555FC_76A5_1927_41D2_0C50EB6738BC_0_HS_7_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -12.75
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 116.84,
                    "hfov": 6.66,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 101,
                       "class": "ImageResourceLevel",
                       "width": 115,
                       "url": "media/panorama_608555FC_76A5_1927_41D2_0C50EB6738BC_0_HS_7_0.png"
                      }
                     ]
                    },
                    "pitch": -12.75
                   }
                  ]
                 }
                ]
               }
              ],
              "cardboardMenu": "this.Menu_C9250CE0_C4F6_D12F_41E1_21C392779042",
              "thumbnailUrl": "media/panorama_608555FC_76A5_1927_41D2_0C50EB6738BC_t.jpg"
             },
             "yaw": 110.18,
             "distance": 1,
             "backwardYaw": 116.84
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4",
             "yaw": 112.19,
             "distance": 1,
             "backwardYaw": -56.88
            }
           ],
           "vfov": 180,
           "partial": false,
           "label": "1saladx",
           "frames": [
            {
             "thumbnailUrl": "media/panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3040,
                "class": "ImageResourceLevel",
                "width": 6080,
                "url": "media/panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F_hq.jpeg"
               },
               {
                "height": 2001,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "toolTip": "cambia visuale",
                 "click": "this.startPanoramaWithCamera(this.panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4, this.camera_CAD57F47_C4F6_CF71_4189_430294B457D4); this.mainPlayList.set('selectedIndex', 8)",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "id": "overlay_6C942F21_7663_0921_41B9_78A3B371AA2C",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 7.54,
                 "yaw": 112.19,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 63,
                    "class": "ImageResourceLevel",
                    "width": 72,
                    "url": "media/panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -28.58
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 112.19,
                 "hfov": 7.54,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 127,
                    "class": "ImageResourceLevel",
                    "width": 144,
                    "url": "media/panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -28.58
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "toolTip": "cambia visuale",
                 "click": "this.startPanoramaWithCamera(this.panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69, this.camera_CAFDDF27_C4F6_CF31_41B7_4F9474AC4C2A); this.mainPlayList.set('selectedIndex', 9)",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "id": "overlay_6C833289_7663_3BE1_41B1_7CED5DC8A1DF",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 7.35,
                 "yaw": 171.23,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 63,
                    "class": "ImageResourceLevel",
                    "width": 72,
                    "url": "media/panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -31.09
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 171.23,
                 "hfov": 7.35,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 127,
                    "class": "ImageResourceLevel",
                    "width": 144,
                    "url": "media/panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -31.09
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "toolTip": "esci dal museo Aiello",
                 "click": "this.mainPlayList.set('selectedIndex', 3)",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "id": "overlay_6D4C8231_766D_1B21_41CA_E3CCCD5B5611",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 8.93,
                 "yaw": -108.45,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 75,
                    "class": "ImageResourceLevel",
                    "width": 75,
                    "url": "media/panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -2.9
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -108.45,
                 "hfov": 8.93,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 150,
                    "class": "ImageResourceLevel",
                    "width": 150,
                    "url": "media/panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -2.9
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "toolTip": "cambia visuale",
                 "click": "this.startPanoramaWithCamera(this.panorama_608555FC_76A5_1927_41D2_0C50EB6738BC, this.camera_CAE1DF39_C4F6_CF11_41E2_0C3897B28178); this.mainPlayList.set('selectedIndex', 15)",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "id": "overlay_5C66BCE1_77A3_0F21_41BB_7A58FA0E1594",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 5.42,
                 "yaw": 110.18,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 53,
                    "class": "ImageResourceLevel",
                    "width": 47,
                    "url": "media/panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F_0_HS_3_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -13.38
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 110.18,
                 "hfov": 5.42,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 106,
                    "class": "ImageResourceLevel",
                    "width": 94,
                    "url": "media/panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F_0_HS_3_0.png"
                   }
                  ]
                 },
                 "pitch": -13.38
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "toolTip": "ammira l'opera",
                 "click": "this.showPopupPanoramaOverlay(this.popup_5BDBA4F6_77E7_1F23_41DD_6DA7DD30A9F2, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_592941DD_77FF_3961_41DC_3EBA48A52846, null, null, null, null, false)",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "id": "overlay_5B502A61_77E7_0B20_41DA_F7D1CB0DC10C",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 46.75,
                 "yaw": -14.46,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 187,
                    "class": "ImageResourceLevel",
                    "width": 200,
                    "url": "media/panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F_0_HS_4_1_0_map.gif"
                   }
                  ]
                 },
                 "pitch": 5.22
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Polygon"
               },
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -14.46,
                 "hfov": 46.75,
                 "roll": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 783,
                    "class": "ImageResourceLevel",
                    "width": 836,
                    "url": "media/panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F_0_HS_4_0.png"
                   }
                  ]
                 },
                 "pitch": 5.22
                }
               ]
              },
              {
               "class": "PopupPanoramaOverlay",
               "rotationZ": 0,
               "yaw": -14.46,
               "hideEasing": "cubic_out",
               "pitch": 5.22,
               "hfov": 44.64,
               "showDuration": 500,
               "hideDuration": 500,
               "showEasing": "cubic_in",
               "id": "popup_5BDBA4F6_77E7_1F23_41DD_6DA7DD30A9F2",
               "rotationX": 0,
               "popupMaxWidth": "95%",
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "height": 740,
                  "class": "ImageResourceLevel",
                  "width": 1024,
                  "url": "media/popup_5BDBA4F6_77E7_1F23_41DD_6DA7DD30A9F2_0_2.jpg"
                 }
                ]
               },
               "rotationY": 0,
               "popupMaxHeight": "95%"
              },
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "toolTip": "ammira l'opera",
                 "click": "this.showPopupPanoramaOverlay(this.popup_5BFE4C39_77E5_0F21_41D5_4A0F45184F37, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_5928E1DD_77FF_3961_41CC_3F811EF2DABF, null, null, null, null, false)",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "id": "overlay_5B5ABF3D_77E5_0921_41CF_A77125D9FC4B",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 31.34,
                 "yaw": 31.51,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 190,
                    "class": "ImageResourceLevel",
                    "width": 200,
                    "url": "media/panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F_0_HS_5_1_0_map.gif"
                   }
                  ]
                 },
                 "pitch": 5.28
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Polygon"
               },
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 31.51,
                 "hfov": 31.34,
                 "roll": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 517,
                    "class": "ImageResourceLevel",
                    "width": 542,
                    "url": "media/panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F_0_HS_5_0.png"
                   }
                  ]
                 },
                 "pitch": 5.28
                }
               ]
              },
              {
               "class": "PopupPanoramaOverlay",
               "rotationZ": 0,
               "yaw": 31.51,
               "hideEasing": "cubic_out",
               "pitch": 5.28,
               "hfov": 30.15,
               "showDuration": 500,
               "hideDuration": 500,
               "showEasing": "cubic_in",
               "id": "popup_5BFE4C39_77E5_0F21_41D5_4A0F45184F37",
               "rotationX": 0,
               "popupMaxWidth": "95%",
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "height": 662,
                  "class": "ImageResourceLevel",
                  "width": 1024,
                  "url": "media/popup_5BFE4C39_77E5_0F21_41D5_4A0F45184F37_0_2.jpg"
                 }
                ]
               },
               "rotationY": 0,
               "popupMaxHeight": "95%"
              },
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "toolTip": "ammira l'opera",
                 "click": "this.showPopupPanoramaOverlay(this.popup_5CF9AED2_77E3_0B60_41D0_A3D8226DB343, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_592861DD_77FF_3961_41C8_9D6342FA3378, null, null, null, null, false)",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "id": "overlay_5BB1685E_77E5_7763_41D4_B9FA9AEBE782",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 30.72,
                 "yaw": -82.86,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 159,
                    "class": "ImageResourceLevel",
                    "width": 200,
                    "url": "media/panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F_0_HS_6_1_0_map.gif"
                   }
                  ]
                 },
                 "pitch": 3.81
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Polygon"
               },
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -82.86,
                 "hfov": 30.72,
                 "roll": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 423,
                    "class": "ImageResourceLevel",
                    "width": 531,
                    "url": "media/panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F_0_HS_6_0.png"
                   }
                  ]
                 },
                 "pitch": 3.81
                }
               ]
              },
              {
               "class": "PopupPanoramaOverlay",
               "rotationZ": 0,
               "yaw": -82.86,
               "hideEasing": "cubic_out",
               "pitch": 3.81,
               "hfov": 29.63,
               "showDuration": 500,
               "hideDuration": 500,
               "showEasing": "cubic_in",
               "id": "popup_5CF9AED2_77E3_0B60_41D0_A3D8226DB343",
               "rotationX": 0,
               "popupMaxWidth": "95%",
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "height": 695,
                  "class": "ImageResourceLevel",
                  "width": 1024,
                  "url": "media/popup_5CF9AED2_77E3_0B60_41D0_A3D8226DB343_0_2.jpg"
                 }
                ]
               },
               "rotationY": 0,
               "popupMaxHeight": "95%"
              }
             ]
            }
           ],
           "cardboardMenu": "this.Menu_C9250CE0_C4F6_D12F_41E1_21C392779042",
           "thumbnailUrl": "media/panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F_t.jpg"
          },
          "yaw": 163.19,
          "distance": 1,
          "backwardYaw": 171.23
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4",
          "yaw": -124.96,
          "distance": 1,
          "backwardYaw": -143.05
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_7D6FEAEF_766F_0B20_41D7_7F96B16323D1",
          "yaw": 105.08,
          "distance": 1,
          "backwardYaw": 167.14
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_609CB5A2_76A5_1923_4172_7195185EF63E",
          "yaw": -129.23,
          "distance": 1,
          "backwardYaw": -124.96
         }
        ],
        "vfov": 180,
        "partial": false,
        "label": "1sala",
        "frames": [
         {
          "thumbnailUrl": "media/panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3040,
             "class": "ImageResourceLevel",
             "width": 6080,
             "url": "media/panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69_hq.jpeg"
            },
            {
             "height": 2001,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "esci dal museo Aiello",
              "click": "this.startPanoramaWithCamera(this.panorama_7D6FEAEF_766F_0B20_41D7_7F96B16323D1, this.camera_C9335EE9_C4F6_D131_41E2_D7EFB682F05E); this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true
             }
            ],
            "id": "overlay_6040075E_76A3_1963_41D0_D757D5C4A4E0",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 8.9,
              "yaw": 105.08,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 75,
                 "class": "ImageResourceLevel",
                 "width": 75,
                 "url": "media/panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -5.66
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 105.08,
              "hfov": 8.9,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 151,
                 "class": "ImageResourceLevel",
                 "width": 151,
                 "url": "media/panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -5.66
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "cambia visuale",
              "click": "this.startPanoramaWithCamera(this.panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F, this.camera_C944CED9_C4F6_D111_41CC_2E6F8E472D13); this.mainPlayList.set('selectedIndex', 10)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true
             }
            ],
            "id": "overlay_61DAD940_76AD_095F_41D6_6DF5FB9A022C",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 7.91,
              "yaw": 163.19,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 63,
                 "class": "ImageResourceLevel",
                 "width": 72,
                 "url": "media/panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -22.8
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 163.19,
              "hfov": 7.91,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 127,
                 "class": "ImageResourceLevel",
                 "width": 144,
                 "url": "media/panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -22.8
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "cambiavisuale",
              "click": "this.startPanoramaWithCamera(this.panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4, this.camera_C9480ED9_C4F6_D111_41E3_C4ECDA90126A); this.mainPlayList.set('selectedIndex', 8)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true
             }
            ],
            "id": "overlay_61D38D32_76AF_0920_41CB_353E00CC2AD0",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 7.37,
              "yaw": -124.96,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 63,
                 "class": "ImageResourceLevel",
                 "width": 72,
                 "url": "media/panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": -30.84
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -124.96,
              "hfov": 7.37,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 127,
                 "class": "ImageResourceLevel",
                 "width": 144,
                 "url": "media/panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -30.84
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "cambia visuale",
              "click": "this.startPanoramaWithCamera(this.panorama_609CB5A2_76A5_1923_4172_7195185EF63E, this.camera_C9273EF8_C4F6_D11F_4193_BF694FF63C63); this.mainPlayList.set('selectedIndex', 11)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true
             }
            ],
            "id": "overlay_5DF51886_77BD_77E3_41C0_1D961766500E",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 6.26,
              "yaw": -129.23,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 50,
                 "class": "ImageResourceLevel",
                 "width": 55,
                 "url": "media/panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69_0_HS_3_0_0_map.gif"
                }
               ]
              },
              "pitch": -17.77
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -129.23,
              "hfov": 6.26,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 101,
                 "class": "ImageResourceLevel",
                 "width": 111,
                 "url": "media/panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69_0_HS_3_0.png"
                }
               ]
              },
              "pitch": -17.77
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "vai alla sala Pio Joris",
              "click": "this.mainPlayList.set('selectedIndex', 17)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true
             }
            ],
            "id": "overlay_592F6208_77A3_1AEF_41DC_3583238F16A2",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 5.49,
              "yaw": -128.25,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 55,
                 "class": "ImageResourceLevel",
                 "width": 46,
                 "url": "media/panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69_0_HS_4_0_0_map.gif"
                }
               ]
              },
              "pitch": -6.75
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -128.25,
              "hfov": 5.49,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 111,
                 "class": "ImageResourceLevel",
                 "width": 93,
                 "url": "media/panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69_0_HS_4_0.png"
                }
               ]
              },
              "pitch": -6.75
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "ammira l'opera",
              "click": "this.showPopupPanoramaOverlay(this.popup_5A487021_77E3_F721_41D9_56D9616FC5E3, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_5926A1DD_77FF_3961_41DB_E1815AD8901C, null, null, null, null, false)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true
             }
            ],
            "id": "overlay_5B8BB960_77E3_0920_41B1_A916E7D694E5",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 43.22,
              "yaw": -23.37,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 166,
                 "class": "ImageResourceLevel",
                 "width": 200,
                 "url": "media/panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69_0_HS_5_1_0_map.gif"
                }
               ]
              },
              "pitch": 3.22
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Polygon"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -23.37,
              "hfov": 43.22,
              "roll": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 637,
                 "class": "ImageResourceLevel",
                 "width": 766,
                 "url": "media/panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69_0_HS_5_0.png"
                }
               ]
              },
              "pitch": 3.22
             }
            ]
           },
           {
            "class": "PopupPanoramaOverlay",
            "rotationZ": 0,
            "yaw": -23.37,
            "hideEasing": "cubic_out",
            "pitch": 3.22,
            "hfov": 41.84,
            "showDuration": 500,
            "hideDuration": 500,
            "showEasing": "cubic_in",
            "id": "popup_5A487021_77E3_F721_41D9_56D9616FC5E3",
            "rotationX": 0,
            "popupMaxWidth": "95%",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "height": 631,
               "class": "ImageResourceLevel",
               "width": 1023,
               "url": "media/popup_5A487021_77E3_F721_41D9_56D9616FC5E3_0_2.jpg"
              }
             ]
            },
            "rotationY": 0,
            "popupMaxHeight": "95%"
           },
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "ammira l'opera",
              "click": "this.showPopupPanoramaOverlay(this.popup_5A70726F_77E5_7B21_41D8_D5BFCDBF0D38, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_5926F1DD_77FF_3961_41C0_5E151BFD35FE, null, null, null, null, false)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true
             }
            ],
            "id": "overlay_5B4BE9B1_77E5_0921_4185_2536CEA933C3",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 21.21,
              "yaw": 25.44,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 200,
                 "class": "ImageResourceLevel",
                 "width": 139,
                 "url": "media/panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69_0_HS_6_1_0_map.gif"
                }
               ]
              },
              "pitch": 0.81
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Polygon"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 25.44,
              "hfov": 21.21,
              "roll": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 521,
                 "class": "ImageResourceLevel",
                 "width": 362,
                 "url": "media/panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69_0_HS_6_0.png"
                }
               ]
              },
              "pitch": 0.81
             }
            ]
           },
           {
            "class": "PopupPanoramaOverlay",
            "rotationZ": 0,
            "yaw": 25.44,
            "hideEasing": "cubic_out",
            "pitch": 0.81,
            "hfov": 20.41,
            "showDuration": 500,
            "hideDuration": 500,
            "showEasing": "cubic_in",
            "id": "popup_5A70726F_77E5_7B21_41D8_D5BFCDBF0D38",
            "rotationX": 0,
            "popupMaxWidth": "95%",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "height": 943,
               "class": "ImageResourceLevel",
               "width": 1024,
               "url": "media/popup_5A70726F_77E5_7B21_41D8_D5BFCDBF0D38_0_2.jpg"
              }
             ]
            },
            "rotationY": 0,
            "popupMaxHeight": "95%"
           },
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "ammira l'opera",
              "click": "this.showPopupPanoramaOverlay(this.popup_5A4D9FC7_77E5_0961_41C6_911D912BECBF, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_592611DD_77FF_3961_41B7_F28F65110282, null, null, null, null, false)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true
             }
            ],
            "id": "overlay_5BD68FEC_77E5_0927_41CD_72AB43662F70",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 26.92,
              "yaw": -61.28,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 200,
                 "class": "ImageResourceLevel",
                 "width": 185,
                 "url": "media/panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69_0_HS_7_1_0_map.gif"
                }
               ]
              },
              "pitch": 3.87
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Polygon"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -61.28,
              "hfov": 26.92,
              "roll": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 498,
                 "class": "ImageResourceLevel",
                 "width": 463,
                 "url": "media/panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69_0_HS_7_0.png"
                }
               ]
              },
              "pitch": 3.87
             }
            ]
           },
           {
            "class": "PopupPanoramaOverlay",
            "rotationZ": 0,
            "yaw": -61.28,
            "hideEasing": "cubic_out",
            "pitch": 3.87,
            "hfov": 26.71,
            "showDuration": 500,
            "hideDuration": 500,
            "showEasing": "cubic_in",
            "id": "popup_5A4D9FC7_77E5_0961_41C6_911D912BECBF",
            "rotationX": 0,
            "popupMaxWidth": "95%",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "height": 1024,
               "class": "ImageResourceLevel",
               "width": 1003,
               "url": "media/popup_5A4D9FC7_77E5_0961_41C6_911D912BECBF_0_2.jpg"
              }
             ]
            },
            "rotationY": 0,
            "popupMaxHeight": "95%"
           },
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "info",
              "click": "this.showPopupPanoramaOverlay(this.popup_5A38D6FE_77E7_1B20_41B2_CAC945574EA8, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_592991DD_77FF_3961_41C8_EBCAB7EE29F9, null, null, null, null, false)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true
             }
            ],
            "id": "overlay_5BBA9757_77E7_3961_41B9_A22112B9FC80",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 13.89,
              "yaw": 76.62,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 118,
                 "class": "ImageResourceLevel",
                 "width": 117,
                 "url": "media/panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69_0_HS_8_1_0_map.gif"
                }
               ]
              },
              "pitch": 6.4
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Polygon"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 76.62,
              "hfov": 13.89,
              "roll": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 237,
                 "class": "ImageResourceLevel",
                 "width": 235,
                 "url": "media/panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69_0_HS_8_0.png"
                }
               ]
              },
              "pitch": 6.4
             }
            ]
           },
           {
            "class": "PopupPanoramaOverlay",
            "rotationZ": 0,
            "yaw": 76.62,
            "hideEasing": "cubic_out",
            "pitch": 6.4,
            "hfov": 12.94,
            "showDuration": 500,
            "hideDuration": 500,
            "showEasing": "cubic_in",
            "id": "popup_5A38D6FE_77E7_1B20_41B2_CAC945574EA8",
            "rotationX": 0,
            "popupMaxWidth": "95%",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "height": 1016,
               "class": "ImageResourceLevel",
               "width": 1024,
               "url": "media/popup_5A38D6FE_77E7_1B20_41B2_CAC945574EA8_0_2.jpg"
              }
             ]
            },
            "rotationY": 0,
            "popupMaxHeight": "95%"
           }
          ]
         }
        ],
        "cardboardMenu": "this.Menu_C9250CE0_C4F6_D12F_41E1_21C392779042",
        "thumbnailUrl": "media/panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69_t.jpg"
       },
       "yaw": 167.14,
       "distance": 1,
       "backwardYaw": 105.08
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "id": "panorama_7D514B44_766D_0967_41BB_A41650765883",
        "mapLocations": [
         {
          "class": "PanoramaMapLocation",
          "y": 424.7,
          "x": 135.75,
          "angle": 191.85,
          "map": {
           "class": "Map",
           "fieldOfViewOverlayInsideOpacity": 0.4,
           "width": 251,
           "fieldOfViewOverlayInsideColor": "#000000",
           "height": 520,
           "fieldOfViewOverlayOutsideColor": "#000000",
           "minimumZoomFactor": 0.5,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 520,
              "class": "ImageResourceLevel",
              "width": 251,
              "url": "media/map_7022FB52_7BB6_2F7E_41CB_9B21BB139E44.png"
             },
             {
              "height": 260,
              "class": "ImageResourceLevel",
              "grayscale": true,
              "width": 125,
              "url": "media/map_7022FB52_7BB6_2F7E_41CB_9B21BB139E44_lq.png"
             }
            ]
           },
           "id": "map_7022FB52_7BB6_2F7E_41CB_9B21BB139E44",
           "label": "mappachiesamadre - Copia",
           "maximumZoomFactor": 1.2,
           "overlays": [
            {
             "class": "AreaHotspotMapOverlay",
             "areas": [
              {
               "class": "HotspotMapOverlayArea",
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 4)"
              }
             ],
             "id": "overlay_70747DD0_7BB6_6B7A_41CE_8B0E019ECB86",
             "map": {
              "offsetY": 0,
              "class": "HotspotMapOverlayMap",
              "width": 30,
              "y": 403.8,
              "height": 42,
              "x": 120.85,
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 20,
                 "class": "ImageResourceLevel",
                 "width": 14,
                 "url": "media/map_7022FB52_7BB6_2F7E_41CB_9B21BB139E44_HS_0_map.gif"
                }
               ]
              }
             },
             "data": {
              "label": "Image"
             },
             "rollOverDisplay": false,
             "image": {
              "class": "HotspotMapOverlayImage",
              "y": 403.7,
              "x": 120.75,
              "width": 30,
              "height": 42,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 41,
                 "class": "ImageResourceLevel",
                 "width": 29,
                 "url": "media/map_7022FB52_7BB6_2F7E_41CB_9B21BB139E44_HS_0.png"
                }
               ]
              }
             },
             "useHandCursor": true
            },
            {
             "class": "AreaHotspotMapOverlay",
             "areas": [
              {
               "class": "HotspotMapOverlayArea",
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 2)"
              }
             ],
             "id": "overlay_77D98602_7BB6_18DE_41DD_FD199D3F6BBB",
             "map": {
              "offsetY": 0,
              "class": "HotspotMapOverlayMap",
              "width": 29,
              "y": 261.8,
              "height": 50,
              "x": 117.85,
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 25,
                 "class": "ImageResourceLevel",
                 "width": 14,
                 "url": "media/map_7022FB52_7BB6_2F7E_41CB_9B21BB139E44_HS_1_map.gif"
                }
               ]
              }
             },
             "data": {
              "label": "Image"
             },
             "rollOverDisplay": false,
             "image": {
              "class": "HotspotMapOverlayImage",
              "y": 261.7,
              "x": 117.75,
              "width": 29,
              "height": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 50,
                 "class": "ImageResourceLevel",
                 "width": 29,
                 "url": "media/map_7022FB52_7BB6_2F7E_41CB_9B21BB139E44_HS_1.png"
                }
               ]
              }
             },
             "useHandCursor": true
            },
            {
             "class": "AreaHotspotMapOverlay",
             "areas": [
              {
               "class": "HotspotMapOverlayArea",
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 1)"
              }
             ],
             "id": "overlay_77579938_7BB6_2B2A_41D8_C931852714A0",
             "map": {
              "offsetY": 0,
              "class": "HotspotMapOverlayMap",
              "width": 29,
              "y": 144.85,
              "height": 36,
              "x": 119.85,
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 18,
                 "class": "ImageResourceLevel",
                 "width": 14,
                 "url": "media/map_7022FB52_7BB6_2F7E_41CB_9B21BB139E44_HS_2_map.gif"
                }
               ]
              }
             },
             "data": {
              "label": "Image"
             },
             "rollOverDisplay": false,
             "image": {
              "class": "HotspotMapOverlayImage",
              "y": 144.75,
              "x": 119.75,
              "width": 29,
              "height": 36,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 36,
                 "class": "ImageResourceLevel",
                 "width": 29,
                 "url": "media/map_7022FB52_7BB6_2F7E_41CB_9B21BB139E44_HS_2.png"
                }
               ]
              }
             },
             "useHandCursor": true
            }
           ],
           "scaleMode": "fit_inside",
           "fieldOfViewOverlayOutsideOpacity": 0,
           "initialZoomFactor": 1,
           "fieldOfViewOverlayRadiusScale": 0.12,
           "thumbnailUrl": "media/map_7022FB52_7BB6_2F7E_41CB_9B21BB139E44_t.png"
          }
         }
        ],
        "pitch": 0,
        "hfovMax": 120,
        "hfov": 360,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "id": "panorama_7D4A9AD7_766F_0B60_4187_7344E95CC9BC",
           "mapLocations": [
            {
             "class": "PanoramaMapLocation",
             "y": 286.7,
             "x": 132.25,
             "angle": 134.34,
             "map": "this.map_7022FB52_7BB6_2F7E_41CB_9B21BB139E44"
            }
           ],
           "pitch": 0,
           "hfovMax": 120,
           "hfov": 360,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "id": "panorama_7D4D8AC3_766F_0B61_41D5_60D7F689F17C",
              "mapLocations": [
               {
                "class": "PanoramaMapLocation",
                "y": 162.75,
                "x": 134.25,
                "angle": 176.73,
                "map": "this.map_7022FB52_7BB6_2F7E_41CB_9B21BB139E44"
               }
              ],
              "pitch": 0,
              "hfovMax": 120,
              "hfov": 360,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_7D4A9AD7_766F_0B60_4187_7344E95CC9BC",
                "yaw": 4.8,
                "distance": 1,
                "backwardYaw": -135.39
               }
              ],
              "vfov": 180,
              "partial": false,
              "label": "chiesamadrealtare",
              "frames": [
               {
                "thumbnailUrl": "media/panorama_7D4D8AC3_766F_0B61_41D5_60D7F689F17C_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3040,
                   "class": "ImageResourceLevel",
                   "width": 6080,
                   "url": "media/panorama_7D4D8AC3_766F_0B61_41D5_60D7F689F17C_hq.jpeg"
                  },
                  {
                   "height": 2001,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_7D4D8AC3_766F_0B61_41D5_60D7F689F17C.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "vai al centro della navata",
                    "click": "this.startPanoramaWithCamera(this.panorama_7D4A9AD7_766F_0B60_4187_7344E95CC9BC, this.camera_CA9F5DAF_C4F6_D331_41E0_D0B214C92726); this.mainPlayList.set('selectedIndex', 2)",
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "id": "overlay_79B16B94_7663_09E0_41BE_E9376EA8BC36",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 6.77,
                    "yaw": 4.8,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 53,
                       "class": "ImageResourceLevel",
                       "width": 57,
                       "url": "media/panorama_7D4D8AC3_766F_0B61_41D5_60D7F689F17C_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -7.35
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 4.8,
                    "hfov": 6.77,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 106,
                       "class": "ImageResourceLevel",
                       "width": 115,
                       "url": "media/panorama_7D4D8AC3_766F_0B61_41D5_60D7F689F17C_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -7.35
                   }
                  ]
                 }
                ]
               }
              ],
              "cardboardMenu": "this.Menu_C9250CE0_C4F6_D12F_41E1_21C392779042",
              "thumbnailUrl": "media/panorama_7D4D8AC3_766F_0B61_41D5_60D7F689F17C_t.jpg"
             },
             "yaw": -135.39,
             "distance": 1,
             "backwardYaw": 4.8
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_7D514B44_766D_0967_41BB_A41650765883",
             "yaw": 44.11,
             "distance": 1,
             "backwardYaw": 171.33
            }
           ],
           "vfov": 180,
           "partial": false,
           "label": "chiesamadrecentro",
           "frames": [
            {
             "thumbnailUrl": "media/panorama_7D4A9AD7_766F_0B60_4187_7344E95CC9BC_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3040,
                "class": "ImageResourceLevel",
                "width": 6080,
                "url": "media/panorama_7D4A9AD7_766F_0B60_4187_7344E95CC9BC_hq.jpeg"
               },
               {
                "height": 2001,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_7D4A9AD7_766F_0B60_4187_7344E95CC9BC.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "toolTip": "vai all'altare",
                 "click": "this.startPanoramaWithCamera(this.panorama_7D4D8AC3_766F_0B61_41D5_60D7F689F17C, this.camera_C9BF0E71_C4F6_D12E_41CE_D581191B4479); this.mainPlayList.set('selectedIndex', 1)",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "id": "overlay_7818701A_766F_16E3_41D3_072174647153",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 5.79,
                 "yaw": -135.39,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 50,
                    "class": "ImageResourceLevel",
                    "width": 49,
                    "url": "media/panorama_7D4A9AD7_766F_0B60_4187_7344E95CC9BC_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -6.22
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -135.39,
                 "hfov": 5.79,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 101,
                    "class": "ImageResourceLevel",
                    "width": 98,
                    "url": "media/panorama_7D4A9AD7_766F_0B60_4187_7344E95CC9BC_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -6.22
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "toolTip": "vai all'ingresso",
                 "click": "this.startPanoramaWithCamera(this.panorama_7D514B44_766D_0967_41BB_A41650765883, this.camera_C9A61E7B_C4F6_D111_41BB_DE3162CAB690); this.mainPlayList.set('selectedIndex', 4)",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "id": "overlay_66053C5D_766D_0F61_41CD_40B572999154",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 6.03,
                 "yaw": 44.11,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 48,
                    "class": "ImageResourceLevel",
                    "width": 51,
                    "url": "media/panorama_7D4A9AD7_766F_0B60_4187_7344E95CC9BC_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -6.85
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 44.11,
                 "hfov": 6.03,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 97,
                    "class": "ImageResourceLevel",
                    "width": 102,
                    "url": "media/panorama_7D4A9AD7_766F_0B60_4187_7344E95CC9BC_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -6.85
                }
               ]
              }
             ]
            }
           ],
           "cardboardMenu": "this.Menu_C9250CE0_C4F6_D12F_41E1_21C392779042",
           "thumbnailUrl": "media/panorama_7D4A9AD7_766F_0B60_4187_7344E95CC9BC_t.jpg"
          },
          "yaw": 171.33,
          "distance": 1,
          "backwardYaw": 44.11
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_7D6FEAEF_766F_0B20_41D7_7F96B16323D1",
          "yaw": -8.72,
          "distance": 1,
          "backwardYaw": -3.44
         }
        ],
        "vfov": 180,
        "partial": false,
        "label": "chiesamadreingresso",
        "frames": [
         {
          "thumbnailUrl": "media/panorama_7D514B44_766D_0967_41BB_A41650765883_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3040,
             "class": "ImageResourceLevel",
             "width": 6080,
             "url": "media/panorama_7D514B44_766D_0967_41BB_A41650765883_hq.jpeg"
            },
            {
             "height": 2001,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_7D514B44_766D_0967_41BB_A41650765883.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "esci dalla chiesa madre",
              "click": "this.startPanoramaWithCamera(this.panorama_7D6FEAEF_766F_0B20_41D7_7F96B16323D1, this.camera_CA081E1D_C4F6_D111_41C9_A6064E891337); this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true
             }
            ],
            "id": "overlay_79F9E14D_766D_1961_41DA_0A7017851636",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 8.91,
              "yaw": -8.72,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 75,
                 "class": "ImageResourceLevel",
                 "width": 75,
                 "url": "media/panorama_7D514B44_766D_0967_41BB_A41650765883_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -4.66
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -8.72,
              "hfov": 8.91,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 151,
                 "class": "ImageResourceLevel",
                 "width": 151,
                 "url": "media/panorama_7D514B44_766D_0967_41BB_A41650765883_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -4.66
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "vai al centro della navata",
              "click": "this.startPanoramaWithCamera(this.panorama_7D4A9AD7_766F_0B60_4187_7344E95CC9BC, this.camera_CA1A6E0D_C4F6_D0F1_41D3_904502542EFC); this.mainPlayList.set('selectedIndex', 2)",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true
             }
            ],
            "id": "overlay_6656D638_766F_7B2F_41B1_6C9D66D2AD12",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 6.74,
              "yaw": 171.33,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 46,
                 "class": "ImageResourceLevel",
                 "width": 57,
                 "url": "media/panorama_7D514B44_766D_0967_41BB_A41650765883_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -6.47
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 171.33,
              "hfov": 6.74,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 93,
                 "class": "ImageResourceLevel",
                 "width": 114,
                 "url": "media/panorama_7D514B44_766D_0967_41BB_A41650765883_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -6.47
             }
            ]
           }
          ]
         }
        ],
        "cardboardMenu": "this.Menu_C9250CE0_C4F6_D12F_41E1_21C392779042",
        "thumbnailUrl": "media/panorama_7D514B44_766D_0967_41BB_A41650765883_t.jpg"
       },
       "yaw": -3.44,
       "distance": 1,
       "backwardYaw": -8.72
      }
     ],
     "vfov": 180,
     "partial": false,
     "label": "chiesamadrefuori",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_7D6FEAEF_766F_0B20_41D7_7F96B16323D1_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3040,
          "class": "ImageResourceLevel",
          "width": 6080,
          "url": "media/panorama_7D6FEAEF_766F_0B20_41D7_7F96B16323D1_hq.jpeg"
         },
         {
          "height": 2001,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_7D6FEAEF_766F_0B20_41D7_7F96B16323D1.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "toolTip": "sali al castello medioevale",
           "click": "this.startPanoramaWithCamera(this.panorama_7C34A281_766F_1BE0_41DD_5C5CC115C24C, this.camera_C91DAF08_C4F6_D0FF_41E3_4032DD601B49); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true
          }
         ],
         "id": "overlay_797BA0CB_7667_7761_41C7_120D653F28EC",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 4.52,
           "yaw": 89.81,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 42,
              "class": "ImageResourceLevel",
              "width": 38,
              "url": "media/panorama_7D6FEAEF_766F_0B20_41D7_7F96B16323D1_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": 1.79
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 89.81,
           "hfov": 4.52,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 85,
              "class": "ImageResourceLevel",
              "width": 76,
              "url": "media/panorama_7D6FEAEF_766F_0B20_41D7_7F96B16323D1_0_HS_0_0.png"
             }
            ]
           },
           "pitch": 1.79
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "toolTip": "entra nel museo Aiello del paesaggio\u000a",
           "click": "this.startPanoramaWithCamera(this.panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69, this.camera_C907EF18_C4F6_CF1E_41E2_55270348B4BC); this.mainPlayList.set('selectedIndex', 9)",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true
          }
         ],
         "id": "overlay_78A4A769_7665_1921_41CD_C79C9B5F4364",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 6.85,
           "yaw": 167.14,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 69,
              "class": "ImageResourceLevel",
              "width": 58,
              "url": "media/panorama_7D6FEAEF_766F_0B20_41D7_7F96B16323D1_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -8.55
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 167.14,
           "hfov": 6.85,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 138,
              "class": "ImageResourceLevel",
              "width": 117,
              "url": "media/panorama_7D6FEAEF_766F_0B20_41D7_7F96B16323D1_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -8.55
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "toolTip": "entra nella chiesa madre S. Maria Assunta",
           "click": "this.startPanoramaWithCamera(this.panorama_7D514B44_766D_0967_41BB_A41650765883, this.camera_C90B9F27_C4F6_CF31_4186_18A0EB8913FA); this.mainPlayList.set('selectedIndex', 4)",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true
          }
         ],
         "id": "overlay_799D3A87_7663_0BE1_4191_063518F7515D",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 8.89,
           "yaw": -3.44,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 75,
              "class": "ImageResourceLevel",
              "width": 75,
              "url": "media/panorama_7D6FEAEF_766F_0B20_41D7_7F96B16323D1_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -5.91
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -3.44,
           "hfov": 8.89,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 151,
              "class": "ImageResourceLevel",
              "width": 151,
              "url": "media/panorama_7D6FEAEF_766F_0B20_41D7_7F96B16323D1_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -5.91
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "toolTip": "info chiesa madre",
           "click": "this.showPopupPanoramaOverlay(this.popup_60F660A1_76A3_1721_41C5_D3BBE891367A, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_60D8C0AF_76A5_3721_41B7_4EFF1C63E9B4, null, null, null, null, false)",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true
          }
         ],
         "id": "overlay_788AB53F_7663_3920_41D5_AEB83A1449C0",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 5.85,
           "yaw": -119.77,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 44,
              "class": "ImageResourceLevel",
              "width": 49,
              "url": "media/panorama_7D6FEAEF_766F_0B20_41D7_7F96B16323D1_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "pitch": 7.22
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -119.77,
           "hfov": 5.85,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 89,
              "class": "ImageResourceLevel",
              "width": 99,
              "url": "media/panorama_7D6FEAEF_766F_0B20_41D7_7F96B16323D1_0_HS_3_0.png"
             }
            ]
           },
           "pitch": 7.22
          }
         ]
        },
        {
         "class": "PopupPanoramaOverlay",
         "rotationZ": 0,
         "yaw": -119.77,
         "hideEasing": "cubic_out",
         "pitch": 7.22,
         "hfov": 3.52,
         "showDuration": 500,
         "hideDuration": 500,
         "showEasing": "cubic_in",
         "id": "popup_60F660A1_76A3_1721_41C5_D3BBE891367A",
         "rotationX": 0,
         "popupMaxWidth": "95%",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "height": 1024,
            "class": "ImageResourceLevel",
            "width": 689,
            "url": "media/popup_60F660A1_76A3_1721_41C5_D3BBE891367A_0_2.jpg"
           }
          ]
         },
         "rotationY": 0,
         "popupMaxHeight": "95%"
        },
        {
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_C91F45E1_C4F7_5331_41DB_9C34197414A7",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 7.98,
           "yaw": -103.03,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 23,
              "class": "ImageResourceLevel",
              "width": 67,
              "url": "media/panorama_7D6FEAEF_766F_0B20_41D7_7F96B16323D1_0_HS_4_1_0_map.gif"
             }
            ]
           },
           "pitch": -9.53
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Polygon"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -103.03,
           "hfov": 7.98,
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 47,
              "class": "ImageResourceLevel",
              "width": 134,
              "url": "media/panorama_7D6FEAEF_766F_0B20_41D7_7F96B16323D1_0_HS_4_0.png"
             }
            ]
           },
           "pitch": -9.53
          }
         ]
        }
       ]
      }
     ],
     "cardboardMenu": "this.Menu_C9250CE0_C4F6_D12F_41E1_21C392779042",
     "thumbnailUrl": "media/panorama_7D6FEAEF_766F_0B20_41D7_7F96B16323D1_t.jpg"
    },
    "yaw": 43.46,
    "distance": 1,
    "backwardYaw": 89.81
   }
  ],
  "vfov": 180,
  "partial": false,
  "label": "castelloFuoriIO",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_7C34A281_766F_1BE0_41DD_5C5CC115C24C_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "class": "ImageResourceLevel",
       "width": 6080,
       "url": "media/panorama_7C34A281_766F_1BE0_41DD_5C5CC115C24C_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_7C34A281_766F_1BE0_41DD_5C5CC115C24C.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "sali sulla torre",
        "click": "this.startPanoramaWithCamera(this.panorama_7918563E_7667_3B23_41D1_677E20DECA7D, this.camera_C96EDEBA_C4F6_D112_41D0_9F69F722B65F); this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true
       }
      ],
      "id": "overlay_7BB7C7E2_7663_1923_41D4_50F488FC7611",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.94,
        "yaw": -156.69,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 75,
           "class": "ImageResourceLevel",
           "width": 75,
           "url": "media/panorama_7C34A281_766F_1BE0_41DD_5C5CC115C24C_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -0.89
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -156.69,
        "hfov": 8.94,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 150,
           "class": "ImageResourceLevel",
           "width": 150,
           "url": "media/panorama_7C34A281_766F_1BE0_41DD_5C5CC115C24C_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -0.89
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "verso la chiesa madre",
        "click": "this.startPanoramaWithCamera(this.panorama_7D6FEAEF_766F_0B20_41D7_7F96B16323D1, this.camera_C9534EC9_C4F6_D171_41CB_B6CF6AA25B6E); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true
       }
      ],
      "id": "overlay_794AE8A3_7663_1720_41BA_CC53894B33A3",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.59,
        "yaw": 43.46,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 42,
           "class": "ImageResourceLevel",
           "width": 40,
           "url": "media/panorama_7C34A281_766F_1BE0_41DD_5C5CC115C24C_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -16.05
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 43.46,
        "hfov": 4.59,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 85,
           "class": "ImageResourceLevel",
           "width": 80,
           "url": "media/panorama_7C34A281_766F_1BE0_41DD_5C5CC115C24C_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -16.05
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "info sul castello",
        "click": "this.showPopupPanoramaOverlay(this.popup_7961CAD5_7665_0B61_41D1_8857E06192E0, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'paddingTop':5,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_60C2D0A4_76A5_3720_41CB_5533D6D3E9D5, null, null, null, null, false)",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true
       }
      ],
      "id": "overlay_78B45DC9_7665_0961_41D7_9114A09ED41F",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.96,
        "yaw": 162.47,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 46,
           "class": "ImageResourceLevel",
           "width": 51,
           "url": "media/panorama_7C34A281_766F_1BE0_41DD_5C5CC115C24C_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": 14.13
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 162.47,
        "hfov": 5.96,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 93,
           "class": "ImageResourceLevel",
           "width": 103,
           "url": "media/panorama_7C34A281_766F_1BE0_41DD_5C5CC115C24C_0_HS_2_0.png"
          }
         ]
        },
        "pitch": 14.13
       }
      ]
     },
     {
      "class": "PopupPanoramaOverlay",
      "rotationZ": 0,
      "yaw": 162.47,
      "hideEasing": "cubic_out",
      "pitch": 14.13,
      "hfov": 3.57,
      "showDuration": 500,
      "hideDuration": 500,
      "showEasing": "cubic_in",
      "id": "popup_7961CAD5_7665_0B61_41D1_8857E06192E0",
      "rotationX": 0,
      "popupMaxWidth": "95%",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 1024,
         "class": "ImageResourceLevel",
         "width": 682,
         "url": "media/popup_7961CAD5_7665_0B61_41D1_8857E06192E0_0_2.jpg"
        }
       ]
      },
      "rotationY": 0,
      "popupMaxHeight": "95%"
     }
    ]
   }
  ],
  "cardboardMenu": "this.Menu_C9250CE0_C4F6_D12F_41E1_21C392779042",
  "thumbnailUrl": "media/panorama_7C34A281_766F_1BE0_41DD_5C5CC115C24C_t.jpg"
 },
 {
  "class": "PanoramaPlayer",
  "buttonMoveLeft": {
   "verticalAlign": "middle",
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "height": 40,
   "paddingTop": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41B2_0F85303B4491_rollover.png",
   "borderSize": 0,
   "pressedIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41B2_0F85303B4491_pressed.png",
   "horizontalAlign": "center",
   "minHeight": 0,
   "cursor": "hand",
   "shadow": false,
   "id": "IconButton_52EFFDBA_5F1E_E744_41B2_0F85303B4491",
   "data": {
    "name": "Button6562"
   },
   "iconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41B2_0F85303B4491.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "transparencyActive": true,
   "minWidth": 0
  },
  "viewerArea": "this.MainViewer",
  "buttonPause": {
   "verticalAlign": "middle",
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "toggle",
   "width": 40,
   "height": 40,
   "paddingTop": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "pressedIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41C7_B9851D2BBED4_pressed.png",
   "horizontalAlign": "center",
   "minHeight": 0,
   "cursor": "hand",
   "shadow": false,
   "id": "IconButton_52EFFDBA_5F1E_E744_41C7_B9851D2BBED4",
   "data": {
    "name": "Button6565"
   },
   "iconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41C7_B9851D2BBED4.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "transparencyActive": true,
   "minWidth": 0
  },
  "gyroscopeEnabled": true,
  "buttonPlayLeft": {
   "verticalAlign": "middle",
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "height": 40,
   "paddingTop": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41C8_0716A5EF571C_rollover.png",
   "borderSize": 0,
   "pressedIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41C8_0716A5EF571C_pressed.png",
   "horizontalAlign": "center",
   "minHeight": 0,
   "cursor": "hand",
   "shadow": false,
   "id": "IconButton_52EFFDBA_5F1E_E744_41C8_0716A5EF571C",
   "data": {
    "name": "Button6561"
   },
   "iconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41C8_0716A5EF571C.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "transparencyActive": true,
   "minWidth": 0
  },
  "preloadEnabled": false,
  "buttonMoveDown": {
   "verticalAlign": "middle",
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "height": 40,
   "paddingTop": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41CB_F6879A3461A0_rollover.png",
   "borderSize": 0,
   "pressedIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41CB_F6879A3461A0_pressed.png",
   "horizontalAlign": "center",
   "minHeight": 0,
   "cursor": "hand",
   "shadow": false,
   "id": "IconButton_52EFFDBA_5F1E_E744_41CB_F6879A3461A0",
   "data": {
    "name": "Button6566"
   },
   "iconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41CB_F6879A3461A0.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "transparencyActive": true,
   "minWidth": 0
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "buttonPlayRight": {
   "verticalAlign": "middle",
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "height": 40,
   "paddingTop": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41D1_3BFDF2C580F9_rollover.png",
   "borderSize": 0,
   "pressedIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41D1_3BFDF2C580F9_pressed.png",
   "horizontalAlign": "center",
   "minHeight": 0,
   "cursor": "hand",
   "shadow": false,
   "id": "IconButton_52EFFDBA_5F1E_E744_41D1_3BFDF2C580F9",
   "data": {
    "name": "Button6568"
   },
   "iconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41D1_3BFDF2C580F9.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "transparencyActive": true,
   "minWidth": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonMoveRight": {
   "verticalAlign": "middle",
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "height": 40,
   "paddingTop": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41C6_388165D2943C_rollover.png",
   "borderSize": 0,
   "pressedIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41C6_388165D2943C_pressed.png",
   "horizontalAlign": "center",
   "minHeight": 0,
   "cursor": "hand",
   "shadow": false,
   "id": "IconButton_52EFFDBA_5F1E_E744_41C6_388165D2943C",
   "iconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41C6_388165D2943C.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "transparencyActive": true,
   "minWidth": 0
  },
  "buttonMoveUp": {
   "verticalAlign": "middle",
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "height": 40,
   "paddingTop": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41BA_441B2FBE0236_rollover.png",
   "borderSize": 0,
   "pressedIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41BA_441B2FBE0236_pressed.png",
   "horizontalAlign": "center",
   "minHeight": 0,
   "cursor": "hand",
   "shadow": false,
   "id": "IconButton_52EFFDBA_5F1E_E744_41BA_441B2FBE0236",
   "data": {
    "name": "Button6564"
   },
   "iconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41BA_441B2FBE0236.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "transparencyActive": true,
   "minWidth": 0
  },
  "buttonRestart": {
   "verticalAlign": "middle",
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "height": 40,
   "paddingTop": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41D6_4079C1212818_rollover.png",
   "borderSize": 0,
   "pressedIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41D6_4079C1212818_pressed.png",
   "horizontalAlign": "center",
   "minHeight": 0,
   "cursor": "hand",
   "shadow": false,
   "id": "IconButton_52EFFDBA_5F1E_E744_41D6_4079C1212818",
   "data": {
    "name": "Button6560"
   },
   "iconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41D6_4079C1212818.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "transparencyActive": true,
   "minWidth": 0
  },
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "buttonZoomOut": {
   "verticalAlign": "middle",
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "height": 40,
   "paddingTop": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41B2_8B164A9C987C_rollover.png",
   "borderSize": 0,
   "pressedIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41B2_8B164A9C987C_pressed.png",
   "horizontalAlign": "center",
   "minHeight": 0,
   "cursor": "hand",
   "shadow": false,
   "id": "IconButton_52EFFDBA_5F1E_E744_41B2_8B164A9C987C",
   "data": {
    "name": "Button6559"
   },
   "iconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41B2_8B164A9C987C.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "transparencyActive": true,
   "minWidth": 0
  },
  "buttonZoomIn": {
   "verticalAlign": "middle",
   "class": "IconButton",
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "height": 40,
   "paddingTop": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_4195_E83334EB0320_rollover.png",
   "borderSize": 0,
   "pressedIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_4195_E83334EB0320_pressed.png",
   "horizontalAlign": "center",
   "minHeight": 0,
   "cursor": "hand",
   "shadow": false,
   "id": "IconButton_52EFFDBA_5F1E_E744_4195_E83334EB0320",
   "data": {
    "name": "Button6570"
   },
   "iconURL": "skin/IconButton_52EFFDBA_5F1E_E744_4195_E83334EB0320.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "transparencyActive": true,
   "minWidth": 0
  },
  "buttonCardboardView": "this.IconButton_65ECF1C3_76AF_1961_41D8_A0140F813705"
 },
 {
  "class": "MapPlayer",
  "id": "ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer",
  "movementMode": "constrained",
  "viewerArea": "this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5",
  "buttonZoomOut": "this.IconButton_52EFFDBA_5F1E_E744_41B2_8B164A9C987C",
  "buttonZoomIn": "this.IconButton_52EFFDBA_5F1E_E744_4195_E83334EB0320"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_7C34A281_766F_1BE0_41DD_5C5CC115C24C_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -158.14,
   "pitch": 3.83
  }
 },
 "this.panorama_7D4D8AC3_766F_0B61_41D5_60D7F689F17C",
 {
  "class": "PanoramaCamera",
  "id": "panorama_7D4D8AC3_766F_0B61_41D5_60D7F689F17C_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -173.8,
   "pitch": 13.34
  }
 },
 "this.panorama_7D4A9AD7_766F_0B60_4187_7344E95CC9BC",
 {
  "class": "PanoramaCamera",
  "id": "panorama_7D4A9AD7_766F_0B60_4187_7344E95CC9BC_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -143.17,
   "pitch": -0.58
  }
 },
 "this.panorama_7D6FEAEF_766F_0B20_41D7_7F96B16323D1",
 {
  "class": "PanoramaCamera",
  "id": "panorama_7D6FEAEF_766F_0B20_41D7_7F96B16323D1_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -1.6,
   "pitch": 26.26
  }
 },
 "this.panorama_7D514B44_766D_0967_41BB_A41650765883",
 {
  "class": "PanoramaCamera",
  "id": "panorama_7D514B44_766D_0967_41BB_A41650765883_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 174.56,
   "pitch": 8.92
  }
 },
 "this.panorama_78F5ADC5_7667_0961_41D0_820A77B55A5C",
 {
  "class": "PanoramaCamera",
  "id": "panorama_78F5ADC5_7667_0961_41D0_820A77B55A5C_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -34.13,
   "pitch": 0.73
  }
 },
 "this.panorama_7918563E_7667_3B23_41D1_677E20DECA7D",
 {
  "class": "PanoramaCamera",
  "id": "panorama_7918563E_7667_3B23_41D1_677E20DECA7D_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -18.02,
   "pitch": -0.82
  }
 },
 "this.panorama_78B73F27_7667_0921_41CE_30044BBCC5B6",
 {
  "class": "PanoramaCamera",
  "id": "panorama_78B73F27_7667_0921_41CE_30044BBCC5B6_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -29.4,
   "pitch": -0.87
  }
 },
 "this.panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4",
 {
  "class": "PanoramaCamera",
  "id": "panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -96.74,
   "pitch": 3.34
  }
 },
 "this.panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69",
 {
  "class": "PanoramaCamera",
  "id": "panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 114.63,
   "pitch": -1.82
  }
 },
 "this.panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F",
 {
  "class": "PanoramaCamera",
  "id": "panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -125.93,
   "pitch": 0.11
  }
 },
 "this.panorama_609CB5A2_76A5_1923_4172_7195185EF63E",
 {
  "class": "PanoramaCamera",
  "id": "panorama_609CB5A2_76A5_1923_4172_7195185EF63E_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 27.87,
   "pitch": 3.16
  }
 },
 "this.panorama_609C9DA4_76A5_0927_41C1_7965BA72A422",
 {
  "class": "PanoramaCamera",
  "id": "panorama_609C9DA4_76A5_0927_41C1_7965BA72A422_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 23.44,
   "pitch": 0.87
  }
 },
 "this.panorama_608415CE_76A5_3963_41B0_9D7A41C890CE",
 {
  "class": "PanoramaCamera",
  "id": "panorama_608415CE_76A5_3963_41B0_9D7A41C890CE_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 4.03,
   "pitch": -0.75
  }
 },
 "this.panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92",
 {
  "class": "PanoramaCamera",
  "id": "panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 69.38,
   "pitch": -2.85
  }
 },
 "this.panorama_608555FC_76A5_1927_41D2_0C50EB6738BC",
 {
  "class": "PanoramaCamera",
  "id": "panorama_608555FC_76A5_1927_41D2_0C50EB6738BC_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -56.22,
   "pitch": -1.33
  }
 },
 "this.panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8",
 {
  "class": "PanoramaCamera",
  "id": "panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -7.57,
   "pitch": 8.19
  }
 },
 "this.panorama_6083C644_76A5_FB67_41AF_715BE60BC47E",
 {
  "class": "PanoramaCamera",
  "id": "panorama_6083C644_76A5_FB67_41AF_715BE60BC47E_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 177.47,
   "pitch": -0.26
  }
 },
 "this.panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33",
 {
  "class": "PanoramaCamera",
  "id": "panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -20.45,
   "pitch": -2.93
  }
 },
 "this.panorama_60805689_76A5_1BE1_41B6_C9EAA20CF131",
 {
  "class": "PanoramaCamera",
  "id": "panorama_60805689_76A5_1BE1_41B6_C9EAA20CF131_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.96,
   "pitch": -1.03
  }
 },
 "this.panorama_609BAEA9_76A5_0B21_41C1_0B3F2A61B16C",
 {
  "class": "PanoramaCamera",
  "id": "panorama_609BAEA9_76A5_0B21_41C1_0B3F2A61B16C_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -137.66,
   "pitch": -6.8
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_7C34A281_766F_1BE0_41DD_5C5CC115C24C_camera",
    "media": "this.panorama_7C34A281_766F_1BE0_41DD_5C5CC115C24C",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C9377CD3_C4F6_D111_41E6_FBA645E78FC9, this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "id": "PanoramaPlayListItem_C9377CD3_C4F6_D111_41E6_FBA645E78FC9",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_7D4D8AC3_766F_0B61_41D5_60D7F689F17C_camera",
    "media": "this.panorama_7D4D8AC3_766F_0B61_41D5_60D7F689F17C",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C9362CD3_C4F6_D111_41D3_5D8EA3FF5967, this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "id": "PanoramaPlayListItem_C9362CD3_C4F6_D111_41D3_5D8EA3FF5967",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_7D4A9AD7_766F_0B60_4187_7344E95CC9BC_camera",
    "media": "this.panorama_7D4A9AD7_766F_0B60_4187_7344E95CC9BC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C9305CD3_C4F6_D111_41A4_D7269C1E80C0, this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "id": "PanoramaPlayListItem_C9305CD3_C4F6_D111_41A4_D7269C1E80C0",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_7D6FEAEF_766F_0B20_41D7_7F96B16323D1_camera",
    "media": "this.panorama_7D6FEAEF_766F_0B20_41D7_7F96B16323D1",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C930ECD3_C4F6_D111_4192_C84A48541E28, this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "id": "PanoramaPlayListItem_C930ECD3_C4F6_D111_4192_C84A48541E28",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_7D514B44_766D_0967_41BB_A41650765883_camera",
    "media": "this.panorama_7D514B44_766D_0967_41BB_A41650765883",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C9337CD3_C4F6_D111_41BC_61731696ECD4, this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "id": "PanoramaPlayListItem_C9337CD3_C4F6_D111_41BC_61731696ECD4",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_78F5ADC5_7667_0961_41D0_820A77B55A5C_camera",
    "media": "this.panorama_78F5ADC5_7667_0961_41D0_820A77B55A5C",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C9339CD3_C4F6_D111_41CD_00FA220ADBCE, this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "id": "PanoramaPlayListItem_C9339CD3_C4F6_D111_41CD_00FA220ADBCE",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_7918563E_7667_3B23_41D1_677E20DECA7D_camera",
    "media": "this.panorama_7918563E_7667_3B23_41D1_677E20DECA7D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C9322CD3_C4F6_D111_41DB_A44A7322B36C, this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "id": "PanoramaPlayListItem_C9322CD3_C4F6_D111_41DB_A44A7322B36C",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_78B73F27_7667_0921_41CE_30044BBCC5B6_camera",
    "media": "this.panorama_78B73F27_7667_0921_41CE_30044BBCC5B6",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C932ACD3_C4F6_D111_412E_AF524EA9ED14, this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "id": "PanoramaPlayListItem_C932ACD3_C4F6_D111_412E_AF524EA9ED14",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4_camera",
    "media": "this.panorama_60C83D4D_76A5_0961_41DA_7C096FB80CB4",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C93D2CD3_C4F6_D111_41CE_1C6A48516366, this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "id": "PanoramaPlayListItem_C93D2CD3_C4F6_D111_41CE_1C6A48516366",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69_camera",
    "media": "this.panorama_6195558E_76A5_79E3_4151_69BCFCBC7D69",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C93DACD3_C4F6_D111_41DE_6F61C9AEE6AC, this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "id": "PanoramaPlayListItem_C93DACD3_C4F6_D111_41DE_6F61C9AEE6AC",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F_camera",
    "media": "this.panorama_6099DD8C_76A5_09E7_41C5_243C0156FA3F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C93C3CD3_C4F6_D111_41CD_AFDAB21E2494, this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "id": "PanoramaPlayListItem_C93C3CD3_C4F6_D111_41CD_AFDAB21E2494",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_609CB5A2_76A5_1923_4172_7195185EF63E_camera",
    "media": "this.panorama_609CB5A2_76A5_1923_4172_7195185EF63E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C93C9CD3_C4F6_D111_41D3_441E35CE7410, this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "id": "PanoramaPlayListItem_C93C9CD3_C4F6_D111_41D3_441E35CE7410",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_609C9DA4_76A5_0927_41C1_7965BA72A422_camera",
    "media": "this.panorama_609C9DA4_76A5_0927_41C1_7965BA72A422",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C93F3CD3_C4F6_D111_41D0_199B2557A4D3, this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "id": "PanoramaPlayListItem_C93F3CD3_C4F6_D111_41D0_199B2557A4D3",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_608415CE_76A5_3963_41B0_9D7A41C890CE_camera",
    "media": "this.panorama_608415CE_76A5_3963_41B0_9D7A41C890CE",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C93F4CD3_C4F6_D111_41CD_B8AFC366DCE1, this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "id": "PanoramaPlayListItem_C93F4CD3_C4F6_D111_41CD_B8AFC366DCE1",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92_camera",
    "media": "this.panorama_609A1DF3_76A5_0921_41D8_DD5B4B210A92",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C93E2CD3_C4F6_D111_41DF_CECD9C9089E7, this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "id": "PanoramaPlayListItem_C93E2CD3_C4F6_D111_41DF_CECD9C9089E7",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_608555FC_76A5_1927_41D2_0C50EB6738BC_camera",
    "media": "this.panorama_608555FC_76A5_1927_41D2_0C50EB6738BC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C93EBCD3_C4F6_D111_41E0_C4B20C07EF57, this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "id": "PanoramaPlayListItem_C93EBCD3_C4F6_D111_41E0_C4B20C07EF57",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8_camera",
    "media": "this.panorama_6094EE13_76A5_0AE1_41C5_3CCE928B33E8",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C9393CD3_C4F6_D111_41DB_3CE1527B7E29, this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "id": "PanoramaPlayListItem_C9393CD3_C4F6_D111_41DB_3CE1527B7E29",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6083C644_76A5_FB67_41AF_715BE60BC47E_camera",
    "media": "this.panorama_6083C644_76A5_FB67_41AF_715BE60BC47E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C9394CD3_C4F6_D111_41DE_4045F10DDB9E, this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "id": "PanoramaPlayListItem_C9394CD3_C4F6_D111_41DE_4045F10DDB9E",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33_camera",
    "media": "this.panorama_6085DE63_76A5_0B21_41D1_689ED6B53F33",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C9383CD3_C4F6_D111_41E5_35E878730D58, this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "id": "PanoramaPlayListItem_C9383CD3_C4F6_D111_41E5_35E878730D58",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_60805689_76A5_1BE1_41B6_C9EAA20CF131_camera",
    "media": "this.panorama_60805689_76A5_1BE1_41B6_C9EAA20CF131",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C9384CD3_C4F6_D111_41E1_EFC71489CD33, this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "id": "PanoramaPlayListItem_C9384CD3_C4F6_D111_41E1_EFC71489CD33",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_609BAEA9_76A5_0B21_41C1_0B3F2A61B16C_camera",
    "media": "this.panorama_609BAEA9_76A5_0B21_41C1_0B3F2A61B16C",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C938CCD3_C4F6_D111_41D2_A170DB55B05B, this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 0)",
    "id": "PanoramaPlayListItem_C938CCD3_C4F6_D111_41D2_A170DB55B05B",
    "end": "this.trigger('tourEnded')",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.map_7011F4A4_7B83_1A1E_41CE_BE4687CDC00D",
 {
  "class": "PlayList",
  "id": "playList_C948BCC4_C4F6_D176_41E5_567CE66F1B0C",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer",
    "media": "this.map_7011F4A4_7B83_1A1E_41CE_BE4687CDC00D",
    "begin": "this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 "this.map_7022FB52_7BB6_2F7E_41CB_9B21BB139E44",
 {
  "class": "PlayList",
  "id": "playList_C9489CC4_C4F6_D176_41E6_0AF9BF3AB7B3",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer",
    "media": "this.map_7022FB52_7BB6_2F7E_41CB_9B21BB139E44",
    "begin": "this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 "this.map_6A3F4136_7BD6_1B26_41CD_0A67E4F787C4",
 {
  "class": "PlayList",
  "id": "playList_C9488CC4_C4F6_D176_41D4_E16B212A60B0",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer",
    "media": "this.map_6A3F4136_7BD6_1B26_41CD_0A67E4F787C4",
    "begin": "this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 "this.map_6A18B046_7BD6_1966_41C9_5D10D8972CB8",
 {
  "class": "PlayList",
  "id": "playList_C948DCC4_C4F6_D176_41D8_4FBA355A15CB",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer",
    "media": "this.map_6A18B046_7BD6_1966_41C9_5D10D8972CB8",
    "begin": "this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 "this.map_6B166230_7BD6_193A_41DD_6DE84AE85BF2",
 {
  "class": "PlayList",
  "id": "playList_C948CCC4_C4F6_D176_41E6_4995606D8F96",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer",
    "media": "this.map_6B166230_7BD6_193A_41DD_6DE84AE85BF2",
    "begin": "this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 "this.map_6B156322_7BD6_18DE_41AF_8CFE279F63F6",
 {
  "class": "PlayList",
  "id": "playList_C94B3CC4_C4F6_D176_41E2_5992FA7291A6",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer",
    "media": "this.map_6B156322_7BD6_18DE_41AF_8CFE279F63F6",
    "begin": "this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_C94B1CC4_C4F6_D176_41D8_04946639C531",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer",
    "media": "this.map_7011F4A4_7B83_1A1E_41CE_BE4687CDC00D",
    "begin": "this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_C94B6CC4_C4F6_D176_41BF_15E537291573",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer",
    "media": "this.map_7022FB52_7BB6_2F7E_41CB_9B21BB139E44",
    "begin": "this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_C94B4CC4_C4F6_D176_41B7_D3DD2DE200BD",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer",
    "media": "this.map_6A3F4136_7BD6_1B26_41CD_0A67E4F787C4",
    "begin": "this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_C94BBCC4_C4F6_D176_41DC_04A65FBB641C",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer",
    "media": "this.map_6A18B046_7BD6_1966_41C9_5D10D8972CB8",
    "begin": "this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_C94B9CC4_C4F6_D176_41C4_DBBB08EB1BE6",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer",
    "media": "this.map_6B166230_7BD6_193A_41DD_6DE84AE85BF2",
    "begin": "this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_C94BFCC4_C4F6_D176_41C8_D83CCC111E95",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer",
    "media": "this.map_6B156322_7BD6_18DE_41AF_8CFE279F63F6",
    "begin": "this.ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5MapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 "this.Menu_C9250CE0_C4F6_D12F_41E1_21C392779042",
 "this.popup_7961CAD5_7665_0B61_41D1_8857E06192E0",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 3308,
    "class": "ImageResourceLevel",
    "width": 2204,
    "url": "media/popup_7961CAD5_7665_0B61_41D1_8857E06192E0_0_0.jpg"
   },
   {
    "height": 2048,
    "class": "ImageResourceLevel",
    "width": 1364,
    "url": "media/popup_7961CAD5_7665_0B61_41D1_8857E06192E0_0_1.jpg"
   },
   {
    "height": 1024,
    "class": "ImageResourceLevel",
    "width": 682,
    "url": "media/popup_7961CAD5_7665_0B61_41D1_8857E06192E0_0_2.jpg"
   },
   {
    "height": 512,
    "class": "ImageResourceLevel",
    "width": 341,
    "url": "media/popup_7961CAD5_7665_0B61_41D1_8857E06192E0_0_3.jpg"
   }
  ],
  "id": "ImageResource_60C2D0A4_76A5_3720_41CB_5533D6D3E9D5"
 },
 "this.popup_60F660A1_76A3_1721_41C5_D3BBE891367A",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 3219,
    "class": "ImageResourceLevel",
    "width": 2166,
    "url": "media/popup_60F660A1_76A3_1721_41C5_D3BBE891367A_0_0.jpg"
   },
   {
    "height": 2048,
    "class": "ImageResourceLevel",
    "width": 1378,
    "url": "media/popup_60F660A1_76A3_1721_41C5_D3BBE891367A_0_1.jpg"
   },
   {
    "height": 1024,
    "class": "ImageResourceLevel",
    "width": 689,
    "url": "media/popup_60F660A1_76A3_1721_41C5_D3BBE891367A_0_2.jpg"
   },
   {
    "height": 512,
    "class": "ImageResourceLevel",
    "width": 344,
    "url": "media/popup_60F660A1_76A3_1721_41C5_D3BBE891367A_0_3.jpg"
   }
  ],
  "id": "ImageResource_60D8C0AF_76A5_3721_41B7_4EFF1C63E9B4"
 },
 "this.popup_5DD4EB21_77A3_0921_41DA_0441408962CE",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2572,
    "class": "ImageResourceLevel",
    "width": 2718,
    "url": "media/popup_5DD4EB21_77A3_0921_41DA_0441408962CE_0_0.jpg"
   },
   {
    "height": 1937,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_5DD4EB21_77A3_0921_41DA_0441408962CE_0_1.jpg"
   },
   {
    "height": 968,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_5DD4EB21_77A3_0921_41DA_0441408962CE_0_2.jpg"
   },
   {
    "height": 484,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_5DD4EB21_77A3_0921_41DA_0441408962CE_0_3.jpg"
   }
  ],
  "id": "ImageResource_5D2D3825_77BF_1721_41D9_E0472A6BEA02"
 },
 "this.popup_597BF05D_77BF_1760_41C1_97A0CA4A5304",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 3217,
    "class": "ImageResourceLevel",
    "width": 2548,
    "url": "media/popup_597BF05D_77BF_1760_41C1_97A0CA4A5304_0_0.jpg"
   },
   {
    "height": 2047,
    "class": "ImageResourceLevel",
    "width": 1622,
    "url": "media/popup_597BF05D_77BF_1760_41C1_97A0CA4A5304_0_1.jpg"
   },
   {
    "height": 1023,
    "class": "ImageResourceLevel",
    "width": 811,
    "url": "media/popup_597BF05D_77BF_1760_41C1_97A0CA4A5304_0_2.jpg"
   },
   {
    "height": 511,
    "class": "ImageResourceLevel",
    "width": 405,
    "url": "media/popup_597BF05D_77BF_1760_41C1_97A0CA4A5304_0_3.jpg"
   }
  ],
  "id": "ImageResource_5D2C9827_77BF_1721_41CE_9207CB12612A"
 },
 "this.popup_5A487021_77E3_F721_41D9_56D9616FC5E3",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2333,
    "class": "ImageResourceLevel",
    "width": 3783,
    "url": "media/popup_5A487021_77E3_F721_41D9_56D9616FC5E3_0_0.jpg"
   },
   {
    "height": 1263,
    "class": "ImageResourceLevel",
    "width": 2047,
    "url": "media/popup_5A487021_77E3_F721_41D9_56D9616FC5E3_0_1.jpg"
   },
   {
    "height": 631,
    "class": "ImageResourceLevel",
    "width": 1023,
    "url": "media/popup_5A487021_77E3_F721_41D9_56D9616FC5E3_0_2.jpg"
   },
   {
    "height": 315,
    "class": "ImageResourceLevel",
    "width": 511,
    "url": "media/popup_5A487021_77E3_F721_41D9_56D9616FC5E3_0_3.jpg"
   }
  ],
  "id": "ImageResource_5926A1DD_77FF_3961_41DB_E1815AD8901C"
 },
 "this.popup_5A70726F_77E5_7B21_41D8_D5BFCDBF0D38",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2661,
    "class": "ImageResourceLevel",
    "width": 2889,
    "url": "media/popup_5A70726F_77E5_7B21_41D8_D5BFCDBF0D38_0_0.jpg"
   },
   {
    "height": 1886,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_5A70726F_77E5_7B21_41D8_D5BFCDBF0D38_0_1.jpg"
   },
   {
    "height": 943,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_5A70726F_77E5_7B21_41D8_D5BFCDBF0D38_0_2.jpg"
   },
   {
    "height": 471,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_5A70726F_77E5_7B21_41D8_D5BFCDBF0D38_0_3.jpg"
   }
  ],
  "id": "ImageResource_5926F1DD_77FF_3961_41C0_5E151BFD35FE"
 },
 "this.popup_5A4D9FC7_77E5_0961_41C6_911D912BECBF",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2695,
    "class": "ImageResourceLevel",
    "width": 2641,
    "url": "media/popup_5A4D9FC7_77E5_0961_41C6_911D912BECBF_0_0.jpg"
   },
   {
    "height": 2048,
    "class": "ImageResourceLevel",
    "width": 2006,
    "url": "media/popup_5A4D9FC7_77E5_0961_41C6_911D912BECBF_0_1.jpg"
   },
   {
    "height": 1024,
    "class": "ImageResourceLevel",
    "width": 1003,
    "url": "media/popup_5A4D9FC7_77E5_0961_41C6_911D912BECBF_0_2.jpg"
   },
   {
    "height": 512,
    "class": "ImageResourceLevel",
    "width": 501,
    "url": "media/popup_5A4D9FC7_77E5_0961_41C6_911D912BECBF_0_3.jpg"
   }
  ],
  "id": "ImageResource_592611DD_77FF_3961_41B7_F28F65110282"
 },
 "this.popup_5A38D6FE_77E7_1B20_41B2_CAC945574EA8",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2484,
    "class": "ImageResourceLevel",
    "width": 2502,
    "url": "media/popup_5A38D6FE_77E7_1B20_41B2_CAC945574EA8_0_0.jpg"
   },
   {
    "height": 2033,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_5A38D6FE_77E7_1B20_41B2_CAC945574EA8_0_1.jpg"
   },
   {
    "height": 1016,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_5A38D6FE_77E7_1B20_41B2_CAC945574EA8_0_2.jpg"
   },
   {
    "height": 508,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_5A38D6FE_77E7_1B20_41B2_CAC945574EA8_0_3.jpg"
   }
  ],
  "id": "ImageResource_592991DD_77FF_3961_41C8_EBCAB7EE29F9"
 },
 "this.popup_5BDBA4F6_77E7_1F23_41DD_6DA7DD30A9F2",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2664,
    "class": "ImageResourceLevel",
    "width": 3684,
    "url": "media/popup_5BDBA4F6_77E7_1F23_41DD_6DA7DD30A9F2_0_0.jpg"
   },
   {
    "height": 1480,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_5BDBA4F6_77E7_1F23_41DD_6DA7DD30A9F2_0_1.jpg"
   },
   {
    "height": 740,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_5BDBA4F6_77E7_1F23_41DD_6DA7DD30A9F2_0_2.jpg"
   },
   {
    "height": 370,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_5BDBA4F6_77E7_1F23_41DD_6DA7DD30A9F2_0_3.jpg"
   }
  ],
  "id": "ImageResource_592941DD_77FF_3961_41DC_3EBA48A52846"
 },
 "this.popup_5BFE4C39_77E5_0F21_41D5_4A0F45184F37",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2481,
    "class": "ImageResourceLevel",
    "width": 3833,
    "url": "media/popup_5BFE4C39_77E5_0F21_41D5_4A0F45184F37_0_0.jpg"
   },
   {
    "height": 1325,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_5BFE4C39_77E5_0F21_41D5_4A0F45184F37_0_1.jpg"
   },
   {
    "height": 662,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_5BFE4C39_77E5_0F21_41D5_4A0F45184F37_0_2.jpg"
   },
   {
    "height": 331,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_5BFE4C39_77E5_0F21_41D5_4A0F45184F37_0_3.jpg"
   }
  ],
  "id": "ImageResource_5928E1DD_77FF_3961_41CC_3F811EF2DABF"
 },
 "this.popup_5CF9AED2_77E3_0B60_41D0_A3D8226DB343",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2441,
    "class": "ImageResourceLevel",
    "width": 3594,
    "url": "media/popup_5CF9AED2_77E3_0B60_41D0_A3D8226DB343_0_0.jpg"
   },
   {
    "height": 1390,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_5CF9AED2_77E3_0B60_41D0_A3D8226DB343_0_1.jpg"
   },
   {
    "height": 695,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_5CF9AED2_77E3_0B60_41D0_A3D8226DB343_0_2.jpg"
   },
   {
    "height": 347,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_5CF9AED2_77E3_0B60_41D0_A3D8226DB343_0_3.jpg"
   }
  ],
  "id": "ImageResource_592861DD_77FF_3961_41C8_9D6342FA3378"
 },
 "this.popup_5BAEB436_77FD_7F23_41AB_475141A7BCE6",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2310,
    "class": "ImageResourceLevel",
    "width": 3639,
    "url": "media/popup_5BAEB436_77FD_7F23_41AB_475141A7BCE6_0_0.jpg"
   },
   {
    "height": 1300,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_5BAEB436_77FD_7F23_41AB_475141A7BCE6_0_1.jpg"
   },
   {
    "height": 650,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_5BAEB436_77FD_7F23_41AB_475141A7BCE6_0_2.jpg"
   },
   {
    "height": 325,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_5BAEB436_77FD_7F23_41AB_475141A7BCE6_0_3.jpg"
   }
  ],
  "id": "ImageResource_592BC1DD_77FF_3961_41D9_CD76FE7C6913"
 },
 "this.popup_46CB1E62_77ED_0B23_41DC_FA9F6671BE4F",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2409,
    "class": "ImageResourceLevel",
    "width": 2466,
    "url": "media/popup_46CB1E62_77ED_0B23_41DC_FA9F6671BE4F_0_0.jpg"
   },
   {
    "height": 2000,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_46CB1E62_77ED_0B23_41DC_FA9F6671BE4F_0_1.jpg"
   },
   {
    "height": 1000,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_46CB1E62_77ED_0B23_41DC_FA9F6671BE4F_0_2.jpg"
   },
   {
    "height": 500,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_46CB1E62_77ED_0B23_41DC_FA9F6671BE4F_0_3.jpg"
   }
  ],
  "id": "ImageResource_4022E656_77A7_1B63_41DD_01B9872154D3"
 },
 "this.popup_46B5FFCF_77EF_0961_41DD_9419C381F7AB",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2431,
    "class": "ImageResourceLevel",
    "width": 3270,
    "url": "media/popup_46B5FFCF_77EF_0961_41DD_9419C381F7AB_0_0.jpg"
   },
   {
    "height": 1522,
    "class": "ImageResourceLevel",
    "width": 2047,
    "url": "media/popup_46B5FFCF_77EF_0961_41DD_9419C381F7AB_0_1.jpg"
   },
   {
    "height": 761,
    "class": "ImageResourceLevel",
    "width": 1023,
    "url": "media/popup_46B5FFCF_77EF_0961_41DD_9419C381F7AB_0_2.jpg"
   },
   {
    "height": 380,
    "class": "ImageResourceLevel",
    "width": 511,
    "url": "media/popup_46B5FFCF_77EF_0961_41DD_9419C381F7AB_0_3.jpg"
   }
  ],
  "id": "ImageResource_40224656_77A7_1B63_41D0_302939F4B33A"
 },
 "this.popup_46AFE6B6_77ED_1B23_41BF_7278A2F45526",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2351,
    "class": "ImageResourceLevel",
    "width": 3282,
    "url": "media/popup_46AFE6B6_77ED_1B23_41BF_7278A2F45526_0_0.jpg"
   },
   {
    "height": 1467,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_46AFE6B6_77ED_1B23_41BF_7278A2F45526_0_1.jpg"
   },
   {
    "height": 733,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_46AFE6B6_77ED_1B23_41BF_7278A2F45526_0_2.jpg"
   },
   {
    "height": 366,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_46AFE6B6_77ED_1B23_41BF_7278A2F45526_0_3.jpg"
   }
  ],
  "id": "ImageResource_403DD656_77A7_1B6C_41CF_266A17F58940"
 },
 "this.popup_46720844_77ED_3767_41CC_C033880D1980",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2050,
    "class": "ImageResourceLevel",
    "width": 2214,
    "url": "media/popup_46720844_77ED_3767_41CC_C033880D1980_0_0.jpg"
   },
   {
    "height": 1896,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_46720844_77ED_3767_41CC_C033880D1980_0_1.jpg"
   },
   {
    "height": 948,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_46720844_77ED_3767_41CC_C033880D1980_0_2.jpg"
   },
   {
    "height": 474,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_46720844_77ED_3767_41CC_C033880D1980_0_3.jpg"
   }
  ],
  "id": "ImageResource_403DB65B_77A7_1B61_41C5_CCD94FA97B1F"
 },
 "this.popup_4699E93E_77E3_0923_41D1_5CD4DB30E1C5",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 3024,
    "class": "ImageResourceLevel",
    "width": 4032,
    "url": "media/popup_4699E93E_77E3_0923_41D1_5CD4DB30E1C5_0_0.jpg"
   },
   {
    "height": 1536,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_4699E93E_77E3_0923_41D1_5CD4DB30E1C5_0_1.jpg"
   },
   {
    "height": 768,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_4699E93E_77E3_0923_41D1_5CD4DB30E1C5_0_2.jpg"
   },
   {
    "height": 384,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_4699E93E_77E3_0923_41D1_5CD4DB30E1C5_0_3.jpg"
   }
  ],
  "id": "ImageResource_403D065B_77A7_1B61_41D1_2BB91EE6CD9A"
 },
 "this.popup_468A72F9_77E3_3B21_41C3_F4A05C9C82CB",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2663,
    "class": "ImageResourceLevel",
    "width": 3681,
    "url": "media/popup_468A72F9_77E3_3B21_41C3_F4A05C9C82CB_0_0.jpg"
   },
   {
    "height": 1481,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_468A72F9_77E3_3B21_41C3_F4A05C9C82CB_0_1.jpg"
   },
   {
    "height": 740,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_468A72F9_77E3_3B21_41C3_F4A05C9C82CB_0_2.jpg"
   },
   {
    "height": 370,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_468A72F9_77E3_3B21_41C3_F4A05C9C82CB_0_3.jpg"
   }
  ],
  "id": "ImageResource_4022165B_77A7_1B61_41C5_6607A3CF6D71"
 },
 "this.popup_45A7B5D7_77E7_1961_41AD_07A5318B4BEC",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2913,
    "class": "ImageResourceLevel",
    "width": 3143,
    "url": "media/popup_45A7B5D7_77E7_1961_41AD_07A5318B4BEC_0_0.jpg"
   },
   {
    "height": 1898,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_45A7B5D7_77E7_1961_41AD_07A5318B4BEC_0_1.jpg"
   },
   {
    "height": 949,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_45A7B5D7_77E7_1961_41AD_07A5318B4BEC_0_2.jpg"
   },
   {
    "height": 474,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_45A7B5D7_77E7_1961_41AD_07A5318B4BEC_0_3.jpg"
   }
  ],
  "id": "ImageResource_403DB65B_77A7_1B61_4195_1EF87149434D"
 },
 "this.popup_4497A267_77E7_1B21_41D8_758B4050B01C",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2842,
    "class": "ImageResourceLevel",
    "width": 2685,
    "url": "media/popup_4497A267_77E7_1B21_41D8_758B4050B01C_0_0.jpg"
   },
   {
    "height": 2048,
    "class": "ImageResourceLevel",
    "width": 1934,
    "url": "media/popup_4497A267_77E7_1B21_41D8_758B4050B01C_0_1.jpg"
   },
   {
    "height": 1024,
    "class": "ImageResourceLevel",
    "width": 967,
    "url": "media/popup_4497A267_77E7_1B21_41D8_758B4050B01C_0_2.jpg"
   },
   {
    "height": 512,
    "class": "ImageResourceLevel",
    "width": 483,
    "url": "media/popup_4497A267_77E7_1B21_41D8_758B4050B01C_0_3.jpg"
   }
  ],
  "id": "ImageResource_403D365B_77A7_1B61_41A9_45CB569DFABF"
 },
 "this.popup_4599DFF6_77E5_0923_41D7_3A7978EDC46B",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2778,
    "class": "ImageResourceLevel",
    "width": 3681,
    "url": "media/popup_4599DFF6_77E5_0923_41D7_3A7978EDC46B_0_0.jpg"
   },
   {
    "height": 1545,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_4599DFF6_77E5_0923_41D7_3A7978EDC46B_0_1.jpg"
   },
   {
    "height": 772,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_4599DFF6_77E5_0923_41D7_3A7978EDC46B_0_2.jpg"
   },
   {
    "height": 386,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_4599DFF6_77E5_0923_41D7_3A7978EDC46B_0_3.jpg"
   }
  ],
  "id": "ImageResource_403C7660_77A7_1B5F_41D2_7A9CC847A70F"
 },
 "this.popup_445BE2BA_77E5_7B23_41D0_870B94ECF149",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2452,
    "class": "ImageResourceLevel",
    "width": 2517,
    "url": "media/popup_445BE2BA_77E5_7B23_41D0_870B94ECF149_0_0.jpg"
   },
   {
    "height": 1995,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_445BE2BA_77E5_7B23_41D0_870B94ECF149_0_1.jpg"
   },
   {
    "height": 997,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_445BE2BA_77E5_7B23_41D0_870B94ECF149_0_2.jpg"
   },
   {
    "height": 498,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_445BE2BA_77E5_7B23_41D0_870B94ECF149_0_3.jpg"
   }
  ],
  "id": "ImageResource_403C2660_77A7_1B5F_41DB_CB1F9A17D881"
 },
 "this.popup_44B20AD5_77E3_0B61_41D7_BEBFB39E45C2",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2348,
    "class": "ImageResourceLevel",
    "width": 1789,
    "url": "media/popup_44B20AD5_77E3_0B61_41D7_BEBFB39E45C2_0_0.jpg"
   },
   {
    "height": 2048,
    "class": "ImageResourceLevel",
    "width": 1560,
    "url": "media/popup_44B20AD5_77E3_0B61_41D7_BEBFB39E45C2_0_1.jpg"
   },
   {
    "height": 1024,
    "class": "ImageResourceLevel",
    "width": 780,
    "url": "media/popup_44B20AD5_77E3_0B61_41D7_BEBFB39E45C2_0_2.jpg"
   },
   {
    "height": 512,
    "class": "ImageResourceLevel",
    "width": 390,
    "url": "media/popup_44B20AD5_77E3_0B61_41D7_BEBFB39E45C2_0_3.jpg"
   }
  ],
  "id": "ImageResource_403FA660_77A7_1B5F_41A7_FFEF8990EB10"
 },
 "this.popup_445B3E53_77E3_0B60_41AA_7D69318981E8",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 3320,
    "class": "ImageResourceLevel",
    "width": 2363,
    "url": "media/popup_445B3E53_77E3_0B60_41AA_7D69318981E8_0_0.jpg"
   },
   {
    "height": 2048,
    "class": "ImageResourceLevel",
    "width": 1457,
    "url": "media/popup_445B3E53_77E3_0B60_41AA_7D69318981E8_0_1.jpg"
   },
   {
    "height": 1024,
    "class": "ImageResourceLevel",
    "width": 728,
    "url": "media/popup_445B3E53_77E3_0B60_41AA_7D69318981E8_0_2.jpg"
   },
   {
    "height": 512,
    "class": "ImageResourceLevel",
    "width": 364,
    "url": "media/popup_445B3E53_77E3_0B60_41AA_7D69318981E8_0_3.jpg"
   }
  ],
  "id": "ImageResource_403EC660_77A7_1B5F_41D8_D48F6D48E942"
 },
 "this.popup_443F815D_779D_7961_41CF_AD1420C18418",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2971,
    "class": "ImageResourceLevel",
    "width": 3024,
    "url": "media/popup_443F815D_779D_7961_41CF_AD1420C18418_0_0.jpg"
   },
   {
    "height": 2012,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_443F815D_779D_7961_41CF_AD1420C18418_0_1.jpg"
   },
   {
    "height": 1006,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_443F815D_779D_7961_41CF_AD1420C18418_0_2.jpg"
   },
   {
    "height": 503,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_443F815D_779D_7961_41CF_AD1420C18418_0_3.jpg"
   }
  ],
  "id": "ImageResource_403E4660_77A7_1B5F_41C1_EE6A78DEB6FB"
 },
 "this.popup_449A975D_779D_1960_41A3_B2AF51987967",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2325,
    "class": "ImageResourceLevel",
    "width": 3024,
    "url": "media/popup_449A975D_779D_1960_41A3_B2AF51987967_0_0.jpg"
   },
   {
    "height": 1574,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_449A975D_779D_1960_41A3_B2AF51987967_0_1.jpg"
   },
   {
    "height": 787,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_449A975D_779D_1960_41A3_B2AF51987967_0_2.jpg"
   },
   {
    "height": 393,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_449A975D_779D_1960_41A3_B2AF51987967_0_3.jpg"
   }
  ],
  "id": "ImageResource_403E2660_77A7_1B5F_41CA_BE652399CFB7"
 },
 "this.popup_4D1F0719_779F_3AE1_41D1_9BEEB2380024",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 1693,
    "class": "ImageResourceLevel",
    "width": 1914,
    "url": "media/popup_4D1F0719_779F_3AE1_41D1_9BEEB2380024_0_0.jpg"
   },
   {
    "height": 905,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_4D1F0719_779F_3AE1_41D1_9BEEB2380024_0_1.jpg"
   },
   {
    "height": 452,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_4D1F0719_779F_3AE1_41D1_9BEEB2380024_0_2.jpg"
   }
  ],
  "id": "ImageResource_4039B660_77A7_1B23_41A9_02C95080DC06"
 },
 "this.popup_4170A165_779D_F921_41CD_0CA044A68FA9",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 3197,
    "class": "ImageResourceLevel",
    "width": 2417,
    "url": "media/popup_4170A165_779D_F921_41CD_0CA044A68FA9_0_0.jpg"
   },
   {
    "height": 2048,
    "class": "ImageResourceLevel",
    "width": 1548,
    "url": "media/popup_4170A165_779D_F921_41CD_0CA044A68FA9_0_1.jpg"
   },
   {
    "height": 1024,
    "class": "ImageResourceLevel",
    "width": 774,
    "url": "media/popup_4170A165_779D_F921_41CD_0CA044A68FA9_0_2.jpg"
   },
   {
    "height": 512,
    "class": "ImageResourceLevel",
    "width": 387,
    "url": "media/popup_4170A165_779D_F921_41CD_0CA044A68FA9_0_3.jpg"
   }
  ],
  "id": "ImageResource_403EB664_77A7_1B27_41CB_5663DA4E74A9"
 },
 "this.popup_42A2AA6E_779D_0B23_41BB_6FE50F770B81",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2048,
    "class": "ImageResourceLevel",
    "width": 2857,
    "url": "media/popup_42A2AA6E_779D_0B23_41BB_6FE50F770B81_0_0.jpg"
   },
   {
    "height": 1468,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_42A2AA6E_779D_0B23_41BB_6FE50F770B81_0_1.jpg"
   },
   {
    "height": 734,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_42A2AA6E_779D_0B23_41BB_6FE50F770B81_0_2.jpg"
   },
   {
    "height": 367,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_42A2AA6E_779D_0B23_41BB_6FE50F770B81_0_3.jpg"
   }
  ],
  "id": "ImageResource_403E6664_77A7_1B27_419E_EA95AD2AB158"
 },
 "this.popup_583490AD_77E5_3721_41C5_C0D97F8C51E5",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2193,
    "class": "ImageResourceLevel",
    "width": 3892,
    "url": "media/popup_583490AD_77E5_3721_41C5_C0D97F8C51E5_0_0.jpg"
   },
   {
    "height": 1153,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_583490AD_77E5_3721_41C5_C0D97F8C51E5_0_1.jpg"
   },
   {
    "height": 576,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_583490AD_77E5_3721_41C5_C0D97F8C51E5_0_2.jpg"
   },
   {
    "height": 288,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_583490AD_77E5_3721_41C5_C0D97F8C51E5_0_3.jpg"
   }
  ],
  "id": "ImageResource_40395664_77A7_1B27_41D0_688C5731998C"
 },
 "this.popup_47267A60_77E7_0B5F_41C2_67409D16B719",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2597,
    "class": "ImageResourceLevel",
    "width": 3416,
    "url": "media/popup_47267A60_77E7_0B5F_41C2_67409D16B719_0_0.jpg"
   },
   {
    "height": 1556,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_47267A60_77E7_0B5F_41C2_67409D16B719_0_1.jpg"
   },
   {
    "height": 778,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_47267A60_77E7_0B5F_41C2_67409D16B719_0_2.jpg"
   },
   {
    "height": 389,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_47267A60_77E7_0B5F_41C2_67409D16B719_0_3.jpg"
   }
  ],
  "id": "ImageResource_40393664_77A7_1B27_41C5_1F7518FC3D84"
 },
 "this.popup_58D80759_77E7_3961_41CB_23330839D675",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 1728,
    "class": "ImageResourceLevel",
    "width": 3893,
    "url": "media/popup_58D80759_77E7_3961_41CB_23330839D675_0_0.jpg"
   },
   {
    "height": 909,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_58D80759_77E7_3961_41CB_23330839D675_0_1.jpg"
   },
   {
    "height": 454,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_58D80759_77E7_3961_41CB_23330839D675_0_2.jpg"
   },
   {
    "height": 227,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_58D80759_77E7_3961_41CB_23330839D675_0_3.jpg"
   }
  ],
  "id": "ImageResource_4038A664_77A7_1B27_41B4_0A1732AB522A"
 },
 "this.popup_4291AC06_77A3_0EE3_41DA_9E83B5CEE57E",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2386,
    "class": "ImageResourceLevel",
    "width": 2312,
    "url": "media/popup_4291AC06_77A3_0EE3_41DA_9E83B5CEE57E_0_0.jpg"
   },
   {
    "height": 2048,
    "class": "ImageResourceLevel",
    "width": 1984,
    "url": "media/popup_4291AC06_77A3_0EE3_41DA_9E83B5CEE57E_0_1.jpg"
   },
   {
    "height": 1024,
    "class": "ImageResourceLevel",
    "width": 992,
    "url": "media/popup_4291AC06_77A3_0EE3_41DA_9E83B5CEE57E_0_2.jpg"
   },
   {
    "height": 512,
    "class": "ImageResourceLevel",
    "width": 496,
    "url": "media/popup_4291AC06_77A3_0EE3_41DA_9E83B5CEE57E_0_3.jpg"
   }
  ],
  "id": "ImageResource_403BA66A_77A7_1B23_41C9_BA4F2DD113EA"
 },
 "this.popup_42F92F48_77A5_096F_41BF_5937EB8A05A0",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2312,
    "class": "ImageResourceLevel",
    "width": 2448,
    "url": "media/popup_42F92F48_77A5_096F_41BF_5937EB8A05A0_0_0.jpg"
   },
   {
    "height": 1934,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_42F92F48_77A5_096F_41BF_5937EB8A05A0_0_1.jpg"
   },
   {
    "height": 967,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_42F92F48_77A5_096F_41BF_5937EB8A05A0_0_2.jpg"
   },
   {
    "height": 483,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_42F92F48_77A5_096F_41BF_5937EB8A05A0_0_3.jpg"
   }
  ],
  "id": "ImageResource_403B266A_77A7_1B23_41CF_FEBC0800AC5A"
 },
 "this.popup_42F35F7D_77A5_0921_41CE_1F5F7BF8195E",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2743,
    "class": "ImageResourceLevel",
    "width": 2687,
    "url": "media/popup_42F35F7D_77A5_0921_41CE_1F5F7BF8195E_0_0.jpg"
   },
   {
    "height": 2048,
    "class": "ImageResourceLevel",
    "width": 2006,
    "url": "media/popup_42F35F7D_77A5_0921_41CE_1F5F7BF8195E_0_1.jpg"
   },
   {
    "height": 1024,
    "class": "ImageResourceLevel",
    "width": 1003,
    "url": "media/popup_42F35F7D_77A5_0921_41CE_1F5F7BF8195E_0_2.jpg"
   },
   {
    "height": 512,
    "class": "ImageResourceLevel",
    "width": 501,
    "url": "media/popup_42F35F7D_77A5_0921_41CE_1F5F7BF8195E_0_3.jpg"
   }
  ],
  "id": "ImageResource_403A866A_77A7_1B23_41BE_67CFD6E8EB0B"
 },
 "this.popup_42BC0364_77A7_7927_41C9_285CB14C63B6",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2111,
    "class": "ImageResourceLevel",
    "width": 3346,
    "url": "media/popup_42BC0364_77A7_7927_41C9_285CB14C63B6_0_0.jpg"
   },
   {
    "height": 1292,
    "class": "ImageResourceLevel",
    "width": 2047,
    "url": "media/popup_42BC0364_77A7_7927_41C9_285CB14C63B6_0_1.jpg"
   },
   {
    "height": 646,
    "class": "ImageResourceLevel",
    "width": 1023,
    "url": "media/popup_42BC0364_77A7_7927_41C9_285CB14C63B6_0_2.jpg"
   },
   {
    "height": 323,
    "class": "ImageResourceLevel",
    "width": 511,
    "url": "media/popup_42BC0364_77A7_7927_41C9_285CB14C63B6_0_3.jpg"
   }
  ],
  "id": "ImageResource_403A166A_77A7_1B23_41DA_613522176330"
 },
 "this.popup_42EE6274_77A7_3B27_41D3_D027D352DD8E",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2132,
    "class": "ImageResourceLevel",
    "width": 3301,
    "url": "media/popup_42EE6274_77A7_3B27_41D3_D027D352DD8E_0_0.jpg"
   },
   {
    "height": 1322,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_42EE6274_77A7_3B27_41D3_D027D352DD8E_0_1.jpg"
   },
   {
    "height": 661,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_42EE6274_77A7_3B27_41D3_D027D352DD8E_0_2.jpg"
   },
   {
    "height": 330,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_42EE6274_77A7_3B27_41D3_D027D352DD8E_0_3.jpg"
   }
  ],
  "id": "ImageResource_4035766A_77A7_1B23_41D8_D9E8013198BA"
 },
 "this.popup_42C9509C_77A3_37E7_41B9_51A2E5EE573B",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2712,
    "class": "ImageResourceLevel",
    "width": 2552,
    "url": "media/popup_42C9509C_77A3_37E7_41B9_51A2E5EE573B_0_0.jpg"
   },
   {
    "height": 2048,
    "class": "ImageResourceLevel",
    "width": 1927,
    "url": "media/popup_42C9509C_77A3_37E7_41B9_51A2E5EE573B_0_1.jpg"
   },
   {
    "height": 1024,
    "class": "ImageResourceLevel",
    "width": 963,
    "url": "media/popup_42C9509C_77A3_37E7_41B9_51A2E5EE573B_0_2.jpg"
   },
   {
    "height": 512,
    "class": "ImageResourceLevel",
    "width": 481,
    "url": "media/popup_42C9509C_77A3_37E7_41B9_51A2E5EE573B_0_3.jpg"
   }
  ],
  "id": "ImageResource_403A366F_77A7_1B21_41D9_6C1EEA59AA2B"
 },
 "this.popup_42C11E57_77A3_0B61_41C6_12661D0E6571",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2704,
    "class": "ImageResourceLevel",
    "width": 1952,
    "url": "media/popup_42C11E57_77A3_0B61_41C6_12661D0E6571_0_0.jpg"
   },
   {
    "height": 2048,
    "class": "ImageResourceLevel",
    "width": 1478,
    "url": "media/popup_42C11E57_77A3_0B61_41C6_12661D0E6571_0_1.jpg"
   },
   {
    "height": 1024,
    "class": "ImageResourceLevel",
    "width": 739,
    "url": "media/popup_42C11E57_77A3_0B61_41C6_12661D0E6571_0_2.jpg"
   },
   {
    "height": 512,
    "class": "ImageResourceLevel",
    "width": 369,
    "url": "media/popup_42C11E57_77A3_0B61_41C6_12661D0E6571_0_3.jpg"
   }
  ],
  "id": "ImageResource_4035966F_77A7_1B21_4193_BA8FDEF221E8"
 },
 "this.popup_42BCE224_77AD_1B20_41CC_E421E3916BF6",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2334,
    "class": "ImageResourceLevel",
    "width": 3233,
    "url": "media/popup_42BCE224_77AD_1B20_41CC_E421E3916BF6_0_0.jpg"
   },
   {
    "height": 1478,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_42BCE224_77AD_1B20_41CC_E421E3916BF6_0_1.jpg"
   },
   {
    "height": 739,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_42BCE224_77AD_1B20_41CC_E421E3916BF6_0_2.jpg"
   },
   {
    "height": 369,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_42BCE224_77AD_1B20_41CC_E421E3916BF6_0_3.jpg"
   }
  ],
  "id": "ImageResource_4035166F_77A7_1B21_41D3_4845314F5200"
 },
 "this.popup_4F20AF2C_77AD_0920_41D5_51E74CDB883A",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2074,
    "class": "ImageResourceLevel",
    "width": 3233,
    "url": "media/popup_4F20AF2C_77AD_0920_41D5_51E74CDB883A_0_0.jpg"
   },
   {
    "height": 1313,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_4F20AF2C_77AD_0920_41D5_51E74CDB883A_0_1.jpg"
   },
   {
    "height": 656,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_4F20AF2C_77AD_0920_41D5_51E74CDB883A_0_2.jpg"
   },
   {
    "height": 328,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_4F20AF2C_77AD_0920_41D5_51E74CDB883A_0_3.jpg"
   }
  ],
  "id": "ImageResource_4034966F_77A7_1B21_41C5_1BC082542430"
 },
 "this.popup_4082F7A4_77AF_7927_418A_241D47A6A38B",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2476,
    "class": "ImageResourceLevel",
    "width": 3610,
    "url": "media/popup_4082F7A4_77AF_7927_418A_241D47A6A38B_0_0.jpg"
   },
   {
    "height": 1404,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_4082F7A4_77AF_7927_418A_241D47A6A38B_0_1.jpg"
   },
   {
    "height": 702,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_4082F7A4_77AF_7927_418A_241D47A6A38B_0_2.jpg"
   },
   {
    "height": 351,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_4082F7A4_77AF_7927_418A_241D47A6A38B_0_3.jpg"
   }
  ],
  "id": "ImageResource_40346672_77A7_1B23_41BD_06655B0D286F"
 },
 "this.popup_409A7C93_77A3_0FE1_41A6_A9CE922E9D52",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2692,
    "class": "ImageResourceLevel",
    "width": 2820,
    "url": "media/popup_409A7C93_77A3_0FE1_41A6_A9CE922E9D52_0_0.jpg"
   },
   {
    "height": 1955,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_409A7C93_77A3_0FE1_41A6_A9CE922E9D52_0_1.jpg"
   },
   {
    "height": 977,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_409A7C93_77A3_0FE1_41A6_A9CE922E9D52_0_2.jpg"
   },
   {
    "height": 488,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_409A7C93_77A3_0FE1_41A6_A9CE922E9D52_0_3.jpg"
   }
  ],
  "id": "ImageResource_40379672_77A7_1B23_41B4_1B1BB0E7937E"
 },
 "this.popup_40FEBBE3_77A3_0921_41D1_7F1877FCA02C",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2368,
    "class": "ImageResourceLevel",
    "width": 3588,
    "url": "media/popup_40FEBBE3_77A3_0921_41D1_7F1877FCA02C_0_0.jpg"
   },
   {
    "height": 1351,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_40FEBBE3_77A3_0921_41D1_7F1877FCA02C_0_1.jpg"
   },
   {
    "height": 675,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_40FEBBE3_77A3_0921_41D1_7F1877FCA02C_0_2.jpg"
   },
   {
    "height": 337,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_40FEBBE3_77A3_0921_41D1_7F1877FCA02C_0_3.jpg"
   }
  ],
  "id": "ImageResource_40376672_77A7_1B23_41B1_DEFCD7AA074D"
 },
 "this.popup_40FA997D_77A5_0921_41B8_27EC74460CF1",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 3078,
    "class": "ImageResourceLevel",
    "width": 3024,
    "url": "media/popup_40FA997D_77A5_0921_41B8_27EC74460CF1_0_0.jpg"
   },
   {
    "height": 2048,
    "class": "ImageResourceLevel",
    "width": 2012,
    "url": "media/popup_40FA997D_77A5_0921_41B8_27EC74460CF1_0_1.jpg"
   },
   {
    "height": 1024,
    "class": "ImageResourceLevel",
    "width": 1006,
    "url": "media/popup_40FA997D_77A5_0921_41B8_27EC74460CF1_0_2.jpg"
   },
   {
    "height": 512,
    "class": "ImageResourceLevel",
    "width": 503,
    "url": "media/popup_40FA997D_77A5_0921_41B8_27EC74460CF1_0_3.jpg"
   }
  ],
  "id": "ImageResource_4036B674_77A7_1B27_41AD_ACCB43E9D958"
 },
 "this.popup_40D6EC03_77A7_0EE1_41DB_E3921CB3D5C3",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2831,
    "class": "ImageResourceLevel",
    "width": 2983,
    "url": "media/popup_40D6EC03_77A7_0EE1_41DB_E3921CB3D5C3_0_0.jpg"
   },
   {
    "height": 1943,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_40D6EC03_77A7_0EE1_41DB_E3921CB3D5C3_0_1.jpg"
   },
   {
    "height": 971,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_40D6EC03_77A7_0EE1_41DB_E3921CB3D5C3_0_2.jpg"
   },
   {
    "height": 485,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_40D6EC03_77A7_0EE1_41DB_E3921CB3D5C3_0_3.jpg"
   }
  ],
  "id": "ImageResource_40361674_77A7_1B27_41D3_237437E40BE3"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CAD5BD51_C4F6_D311_41E6_E05536B54A02",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -90.49,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CADB1D70_C4F6_D32F_41E0_3852480BDF6E",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -75.34,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CAC84D80_C4F6_D3EF_41E6_8A0429EEA032",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 25.65,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CABE8D90_C4F6_D3EE_41E6_8C9CFFE08BA8",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -133.65,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CAAE6D9F_C4F6_D311_41CE_83AAE345A402",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 100.19,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CA9F5DAF_C4F6_D331_41E0_D0B214C92726",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 44.61,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CA8D5DAF_C4F6_D331_41D5_3433D3E8E240",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -30.88,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CA7D3DBF_C4F6_D311_4199_71E143E5465B",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -8.02,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CA633DCE_C4F6_D373_41E2_3CA2D996841B",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -36.41,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CA56CDCE_C4F6_D373_41C1_1EE59AFD2924",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 23.31,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CA468DDE_C4F6_D313_41E7_AABDD934A4A5",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 38.21,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CA348DEE_C4F6_D332_41D2_3E5D865C8218",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -69.82,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CA244DEE_C4F6_D332_41E0_E4900E85BE80",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -68.81,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CA147DFD_C4F6_D311_41DF_73721FED6DD4",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -33.64,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CA1A6E0D_C4F6_D0F1_41D3_904502542EFC",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -135.89,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CA081E1D_C4F6_D111_41C9_A6064E891337",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 176.56,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C9DE3E3C_C4F6_D117_418E_EC7A9E68514F",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 40.72,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C9DA8E4C_C4F6_D177_41E5_899A8B07A8B4",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -22.59,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C9C3CE4C_C4F6_D177_41D4_4CAC71129D27",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 62.58,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C9CABE5B_C4F6_D111_41DB_73313A1CA883",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -12.04,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C9BF0E71_C4F6_D12E_41CE_D581191B4479",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.2,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C9A61E7B_C4F6_D111_41BB_DE3162CAB690",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -8.67,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C9A89E7B_C4F6_D111_41C4_F318E6CF7664",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 11.5,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C99D0E8B_C4F6_D1F2_41D0_B54F40311532",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -17.06,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C984AE9A_C4F6_D113_41DE_76FFC626D545",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 50.77,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C989FE9A_C4F6_D113_41D2_BCCB8F4374F8",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -122.83,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C973BEAA_C4F6_D133_41DD_9224CC974327",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -39.42,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C964EEBA_C4F6_D112_41E0_83C178A71B64",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -10.05,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C96EDEBA_C4F6_D112_41D0_9F69F722B65F",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 13.26,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C9534EC9_C4F6_D171_41CB_B6CF6AA25B6E",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -90.19,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C944CED9_C4F6_D111_41CC_2E6F8E472D13",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -8.77,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C9480ED9_C4F6_D111_41E3_C4ECDA90126A",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 36.95,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C9335EE9_C4F6_D131_41E2_D7EFB682F05E",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -12.86,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C9273EF8_C4F6_D11F_4193_BF694FF63C63",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 55.04,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C928EEF8_C4F6_D11F_41E4_654854C5E9DE",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 48.76,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C91DAF08_C4F6_D0FF_41E3_4032DD601B49",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -136.54,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C907EF18_C4F6_CF1E_41E2_55270348B4BC",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -74.92,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C90B9F27_C4F6_CF31_4186_18A0EB8913FA",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 171.28,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CAFDDF27_C4F6_CF31_41B7_4F9474AC4C2A",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -16.81,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CAE1DF39_C4F6_CF11_41E2_0C3897B28178",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -63.16,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CAD57F47_C4F6_CF71_4189_430294B457D4",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 123.12,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CAD8EF47_C4F6_CF71_41E6_0BDA36E7D206",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 21.86,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CACE7F57_C4F6_CF12_41E7_A1D35834B98B",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 25.4,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CAB2BF66_C4F6_CF33_41E3_EF355BEC73D1",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -85.9,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CAA0DF66_C4F6_CF33_41E2_1D05534CDDB9",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 24.64,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CA97BF76_C4F6_CF13_4184_15ED4D9D1DDD",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -7.51,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CA85CF86_C4F6_CFF2_41E1_97A5BEC2733B",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 55.04,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CA8B1F86_C4F6_CFF2_41E2_5599F42952B1",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 68.86,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CA78AF9D_C4F6_CF11_41D7_3F67AC839B80",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -67.81,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CA683FA5_C4F6_CF31_41E1_D7F208034841",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -65.3,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CA5FEFA5_C4F6_CF31_41E8_7298091289F2",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 69.61,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CA4F1FB5_C4F6_CF11_41E4_E2C44FCDFF6D",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -55.25,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CA3D6FC5_C4F6_CF76_41D1_CD9424BD35D4",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 23.13,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CA225FD4_C4F6_CF17_41C3_D9F84123FB62",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -19.57,
   "pitch": 0
  }
 }
], "children": [
 {
  "class": "ViewerArea",
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipTextShadowOpacity": 0,
  "paddingRight": 0,
  "borderSize": 0,
  "playbackBarBorderSize": 2,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBorderRadius": 4,
  "borderRadius": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadow": true,
  "toolTipPaddingLeft": 6,
  "progressOpacity": 1,
  "playbackBarBorderRadius": 4,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "toolTipShadowColor": "#333333",
  "minHeight": 50,
  "shadow": false,
  "toolTipFontSize": 12,
  "progressBorderSize": 2,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBottom": 10,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBorderRadius": 0,
  "progressLeft": 10,
  "progressBorderColor": "#AAAAAA",
  "playbackBarHeadBorderSize": 0,
  "playbackBarOpacity": 1,
  "paddingBottom": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipFontStyle": "normal",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeight": 20,
  "toolTipShadowBlurRadius": 3,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarProgressBorderColor": "#000000",
  "minWidth": 100,
  "progressBackgroundOpacity": 1,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "progressBarOpacity": 1,
  "toolTipBorderSize": 1,
  "width": "100%",
  "toolTipPaddingBottom": 4,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontColor": "#606060",
  "paddingTop": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "height": "100%",
  "toolTipBorderRadius": 3,
  "playbackBarLeft": 0,
  "paddingLeft": 0,
  "playbackBarHeadHeight": 30,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBarBorderRadius": 4,
  "progressBottom": 1,
  "playbackBarHeadWidth": 6,
  "playbackBarRight": 0,
  "progressBarBorderColor": "#000000",
  "toolTipFontFamily": "Arial",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowColor": "#000000",
  "progressHeight": 20,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "top": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadShadowVerticalLength": 0,
  "transitionMode": "blending",
  "toolTipDisplayTime": 600,
  "id": "MainViewer",
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipOpacity": 1,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "transitionDuration": 500,
  "progressBarBorderSize": 0,
  "toolTipShadowSpread": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipPaddingTop": 4,
  "left": 0,
  "playbackBarBorderColor": "#AAAAAA",
  "progressRight": 10,
  "toolTipBorderColor": "#767676"
 },
 {
  "class": "Container",
  "children": [
   {
    "class": "Container",
    "children": [
     "this.IconButton_52EFFDBA_5F1E_E744_41B2_8B164A9C987C",
     "this.IconButton_52EFFDBA_5F1E_E744_41D6_4079C1212818",
     "this.IconButton_52EFFDBA_5F1E_E744_41C8_0716A5EF571C",
     "this.IconButton_52EFFDBA_5F1E_E744_41B2_0F85303B4491",
     {
      "class": "Container",
      "children": [
       "this.IconButton_52EFFDBA_5F1E_E744_41BA_441B2FBE0236",
       "this.IconButton_52EFFDBA_5F1E_E744_41C7_B9851D2BBED4",
       "this.IconButton_52EFFDBA_5F1E_E744_41CB_F6879A3461A0"
      ],
      "overflow": "hidden",
      "paddingRight": 0,
      "scrollBarColor": "#000000",
      "width": 40,
      "paddingTop": 0,
      "gap": 4,
      "paddingLeft": 0,
      "borderRadius": 0,
      "verticalAlign": "middle",
      "scrollBarWidth": 10,
      "borderSize": 0,
      "height": "100%",
      "horizontalAlign": "center",
      "layout": "vertical",
      "scrollBarMargin": 2,
      "creationPolicy": "delayed",
      "minHeight": 20,
      "shadow": false,
      "id": "Container_52EFFDBA_5F1E_E744_41C3_F77D1A22E975",
      "data": {
       "name": "Container6563"
      },
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarVisible": "rollOver",
      "contentOpaque": false,
      "minWidth": 20
     },
     "this.IconButton_52EFFDBA_5F1E_E744_41C6_388165D2943C",
     "this.IconButton_52EFFDBA_5F1E_E744_41D1_3BFDF2C580F9",
     {
      "verticalAlign": "middle",
      "class": "IconButton",
      "paddingRight": 0,
      "mode": "toggle",
      "width": 40,
      "height": 40,
      "paddingTop": 0,
      "paddingLeft": 0,
      "borderRadius": 0,
      "borderSize": 0,
      "pressedIconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41C3_9571AC923236_pressed.png",
      "horizontalAlign": "center",
      "minHeight": 0,
      "cursor": "hand",
      "shadow": false,
      "id": "IconButton_52EFFDBA_5F1E_E744_41C3_9571AC923236",
      "data": {
       "name": "Button6569"
      },
      "iconURL": "skin/IconButton_52EFFDBA_5F1E_E744_41C3_9571AC923236.png",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "transparencyActive": true,
      "minWidth": 0
     },
     "this.IconButton_52EFFDBA_5F1E_E744_4195_E83334EB0320"
    ],
    "overflow": "hidden",
    "paddingRight": 0,
    "scrollBarColor": "#000000",
    "width": 392,
    "paddingTop": 0,
    "gap": 4,
    "paddingLeft": 0,
    "borderRadius": 0,
    "verticalAlign": "middle",
    "scrollBarWidth": 10,
    "borderSize": 0,
    "height": "100%",
    "horizontalAlign": "center",
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "creationPolicy": "delayed",
    "minHeight": 20,
    "visible": false,
    "shadow": false,
    "id": "Container_52EFFDBA_5F1E_E744_41A4_790C8B877FA2",
    "data": {
     "name": "Container6558"
    },
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarVisible": "rollOver",
    "contentOpaque": false,
    "minWidth": 392
   }
  ],
  "overflow": "scroll",
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "height": 142,
  "paddingTop": 0,
  "gap": 10,
  "paddingLeft": 0,
  "verticalAlign": "middle",
  "scrollBarWidth": 10,
  "borderSize": 0,
  "horizontalAlign": "center",
  "width": "100%",
  "scrollBarMargin": 2,
  "creationPolicy": "delayed",
  "minHeight": 1,
  "shadow": false,
  "data": {
   "name": "Container44746"
  },
  "bottom": "0%",
  "backgroundOpacity": 0,
  "layout": "horizontal",
  "paddingBottom": 0,
  "left": "0%",
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "minWidth": 1
 },
 {
  "class": "IconButton",
  "paddingRight": 0,
  "mode": "push",
  "width": 42,
  "height": 43,
  "maxHeight": 43,
  "paddingTop": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "verticalAlign": "middle",
  "borderSize": 0,
  "horizontalAlign": "center",
  "minHeight": 1,
  "top": "15.02%",
  "cursor": "hand",
  "shadow": false,
  "id": "IconButton_65ECF1C3_76AF_1961_41D8_A0140F813705",
  "iconURL": "skin/IconButton_65ECF1C3_76AF_1961_41D8_A0140F813705.png",
  "maxWidth": 42,
  "paddingBottom": 0,
  "data": {
   "name": "IconButton13821"
  },
  "left": "0.79%",
  "backgroundOpacity": 0,
  "transparencyActive": false,
  "minWidth": 1
 },
 {
  "class": "IconButton",
  "toolTipBorderColor": "#767676",
  "toolTipTextShadowOpacity": 0,
  "paddingRight": 0,
  "toolTipPaddingRight": 6,
  "toolTipShadowHorizontalLength": 0,
  "mode": "toggle",
  "toolTipBorderSize": 1,
  "width": 55,
  "toolTipShadowOpacity": 1,
  "toolTipFontColor": "#606060",
  "height": 40,
  "maxHeight": 128,
  "paddingTop": 0,
  "toolTipPaddingBottom": 4,
  "toolTipPaddingLeft": 6,
  "toolTipBorderRadius": 3,
  "toolTip": "Fullscreen",
  "paddingLeft": 0,
  "borderRadius": 0,
  "verticalAlign": "middle",
  "toolTipTextShadowBlurRadius": 3,
  "horizontalAlign": "center",
  "toolTipFontFamily": "Arial",
  "borderSize": 0,
  "toolTipShadowColor": "#333333",
  "minHeight": 1,
  "toolTipFontWeight": "normal",
  "top": "1.21%",
  "cursor": "hand",
  "shadow": false,
  "toolTipDisplayTime": 600,
  "toolTipFontSize": 12,
  "id": "IconButton_6250113C_76AC_F927_41D0_59F70AF309A6",
  "toolTipOpacity": 1,
  "iconURL": "skin/IconButton_6250113C_76AC_F927_41D0_59F70AF309A6.png",
  "maxWidth": 128,
  "data": {
   "name": "IconButton1493"
  },
  "paddingBottom": 0,
  "toolTipShadowSpread": 0,
  "left": "0.36%",
  "toolTipFontStyle": "normal",
  "backgroundOpacity": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingTop": 4,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowBlurRadius": 3,
  "toolTipBackgroundColor": "#F6F6F6",
  "transparencyActive": true,
  "minWidth": 1
 },
 {
  "class": "ViewerArea",
  "toolTipTextShadowBlurRadius": 3,
  "toolTipTextShadowOpacity": 0,
  "paddingRight": 0,
  "borderSize": 0,
  "playbackBarBorderSize": 2,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBorderRadius": 4,
  "borderRadius": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadow": true,
  "toolTipPaddingLeft": 6,
  "progressOpacity": 1,
  "playbackBarBorderRadius": 4,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "toolTipShadowColor": "#333333",
  "minHeight": 1,
  "shadow": false,
  "toolTipFontSize": 12,
  "progressBorderSize": 2,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBottom": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBorderRadius": 0,
  "progressLeft": 10,
  "progressBorderColor": "#AAAAAA",
  "playbackBarHeadBorderSize": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarOpacity": 1,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "paddingBottom": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeight": 20,
  "toolTipShadowBlurRadius": 3,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarProgressBorderColor": "#000000",
  "minWidth": 1,
  "toolTipFontStyle": "normal",
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "progressBarOpacity": 1,
  "toolTipBorderSize": 1,
  "width": "22.014%",
  "toolTipPaddingBottom": 4,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontColor": "#606060",
  "paddingTop": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "height": "29.386%",
  "toolTipBorderRadius": 3,
  "playbackBarLeft": 0,
  "paddingLeft": 0,
  "playbackBarHeadHeight": 30,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBarBorderRadius": 4,
  "progressBottom": 2,
  "playbackBarHeadWidth": 6,
  "playbackBarRight": 0,
  "progressBarBorderColor": "#000000",
  "toolTipFontFamily": "Arial",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowColor": "#000000",
  "progressHeight": 20,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadShadowVerticalLength": 0,
  "visible": false,
  "transitionMode": "fade_out_fade_in",
  "bottom": "3.95%",
  "id": "MapViewer",
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipOpacity": 1,
  "toolTipDisplayTime": 600,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "transitionDuration": 500,
  "progressBarBorderSize": 0,
  "toolTipShadowSpread": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipPaddingTop": 4,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "right": "1.45%",
  "progressRight": 10,
  "toolTipBorderColor": "#767676",
  "playbackBarBorderColor": "#AAAAAA"
 },
 {
  "class": "ViewerArea",
  "toolTipTextShadowBlurRadius": 3,
  "toolTipTextShadowOpacity": 0,
  "paddingRight": 0,
  "borderSize": 0,
  "playbackBarBorderSize": 2,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBorderRadius": 4,
  "borderRadius": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadow": true,
  "toolTipPaddingLeft": 6,
  "progressOpacity": 1,
  "playbackBarBorderRadius": 4,
  "playbackBarBackgroundOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowColor": "#333333",
  "minHeight": 1,
  "shadow": false,
  "toolTipFontSize": 12,
  "progressBorderSize": 2,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderRadius": 0,
  "playbackBarBottom": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressLeft": 10,
  "progressBorderColor": "#AAAAAA",
  "playbackBarHeadBorderSize": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarOpacity": 1,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "paddingBottom": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeight": 20,
  "toolTipShadowBlurRadius": 3,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarProgressBorderColor": "#000000",
  "minWidth": 1,
  "toolTipFontStyle": "normal",
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "progressBarOpacity": 1,
  "toolTipBorderSize": 1,
  "width": "20.326%",
  "toolTipPaddingBottom": 4,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontColor": "#606060",
  "paddingTop": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipBorderRadius": 3,
  "playbackBarLeft": 0,
  "paddingLeft": 0,
  "playbackBarHeadHeight": 30,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBarBorderRadius": 4,
  "progressBottom": 2,
  "playbackBarHeadWidth": 6,
  "playbackBarRight": 0,
  "progressBarBorderColor": "#000000",
  "toolTipFontFamily": "Arial",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowColor": "#000000",
  "progressHeight": 20,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "top": "70.26%",
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadShadowVerticalLength": 0,
  "transitionMode": "fade_out_fade_in",
  "bottom": "1.64%",
  "id": "ViewerAreaLabeled_6B780C67_7B83_0A1B_41C9_8A7FD2865EB5",
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipOpacity": 1,
  "toolTipDisplayTime": 600,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "transitionDuration": 500,
  "progressBarBorderSize": 0,
  "toolTipShadowSpread": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipPaddingTop": 4,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "right": "0%",
  "progressRight": 10,
  "toolTipBorderColor": "#767676",
  "playbackBarBorderColor": "#AAAAAA"
 },
 {
  "class": "IconButton",
  "toolTipBorderColor": "#767676",
  "toolTipTextShadowOpacity": 0,
  "paddingRight": 0,
  "toolTipPaddingRight": 6,
  "toolTipShadowHorizontalLength": 0,
  "mode": "push",
  "toolTipBorderSize": 1,
  "width": 53.05,
  "toolTipShadowOpacity": 1,
  "toolTipFontColor": "#606060",
  "height": 46,
  "maxHeight": 1095,
  "paddingTop": 0,
  "toolTipPaddingBottom": 4,
  "toolTipPaddingLeft": 6,
  "toolTipBorderRadius": 3,
  "toolTip": "TORNA ALL'INIZIO DEL TOUR",
  "paddingLeft": 0,
  "borderRadius": 0,
  "verticalAlign": "middle",
  "toolTipTextShadowBlurRadius": 3,
  "click": "this.mainPlayList.set('selectedIndex', 0)",
  "horizontalAlign": "center",
  "toolTipFontFamily": "Arial",
  "borderSize": 0,
  "toolTipShadowColor": "#333333",
  "minHeight": 1,
  "toolTipFontWeight": "normal",
  "top": "7.99%",
  "cursor": "hand",
  "shadow": false,
  "toolTipDisplayTime": 600,
  "toolTipFontSize": 12,
  "id": "IconButton_65426CF7_7BD6_2926_41D9_220B7AD15E82",
  "toolTipOpacity": 1,
  "iconURL": "skin/IconButton_65426CF7_7BD6_2926_41D9_220B7AD15E82.png",
  "maxWidth": 1095,
  "data": {
   "name": "IconButton23852"
  },
  "paddingBottom": 0,
  "toolTipShadowSpread": 0,
  "left": "0.42%",
  "toolTipFontStyle": "normal",
  "backgroundOpacity": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingTop": 4,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowBlurRadius": 3,
  "toolTipBackgroundColor": "#F6F6F6",
  "transparencyActive": false,
  "minWidth": 1
 },
 {
  "class": "UIComponent",
  "backgroundColorDirection": "vertical",
  "paddingRight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "backgroundColorRatios": [
   0
  ],
  "paddingTop": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "borderSize": 0,
  "minHeight": 0,
  "top": 0,
  "visible": false,
  "shadow": false,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "data": {
   "name": "UIComponent2224"
  },
  "backgroundOpacity": 0.55,
  "paddingBottom": 0,
  "left": 0,
  "right": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "minWidth": 0
 },
 {
  "class": "ZoomImage",
  "backgroundColorDirection": "vertical",
  "paddingRight": 0,
  "backgroundColor": [],
  "backgroundColorRatios": [],
  "paddingTop": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "borderSize": 0,
  "scaleMode": "custom",
  "minHeight": 0,
  "top": 0,
  "visible": false,
  "shadow": false,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "data": {
   "name": "ZoomImage2225"
  },
  "backgroundOpacity": 1,
  "paddingBottom": 0,
  "left": 0,
  "right": 0,
  "minWidth": 0
 },
 {
  "class": "CloseButton",
  "shadowColor": "#000000",
  "iconHeight": 20,
  "backgroundColorDirection": "vertical",
  "paddingRight": 5,
  "fontSize": 12,
  "mode": "push",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingTop": 5,
  "gap": 5,
  "paddingLeft": 5,
  "borderRadius": 0,
  "verticalAlign": "middle",
  "textDecoration": "none",
  "fontFamily": "Arial",
  "borderSize": 0,
  "fontStyle": "normal",
  "horizontalAlign": "center",
  "iconWidth": 20,
  "fontWeight": "normal",
  "rollOverIconColor": "#666666",
  "minHeight": 0,
  "top": 10,
  "cursor": "hand",
  "layout": "horizontal",
  "visible": false,
  "iconLineWidth": 5,
  "shadow": false,
  "id": "closeButtonPopupPanorama",
  "borderColor": "#000000",
  "fontColor": "#FFFFFF",
  "backgroundOpacity": 0.3,
  "shadowSpread": 1,
  "pressedIconColor": "#888888",
  "paddingBottom": 5,
  "iconBeforeLabel": true,
  "label": "",
  "shadowBlurRadius": 6,
  "data": {
   "name": "CloseButton2226"
  },
  "right": 10,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "iconColor": "#000000",
  "minWidth": 0
 }
], 
 "class": "Player",
 "overflow": "visible",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "gap": 10,
 "paddingLeft": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderSize": 0,
 "mobileMipmappingEnabled": true,
 "vrPolyfillScale": 1,
 "height": "100%",
 "horizontalAlign": "left",
 "buttonToggleMute": "this.IconButton_52EFFDBA_5F1E_E744_41C3_9571AC923236",
 "width": "100%",
 "mouseWheelEnabled": true,
 "scrollBarMargin": 2,
 "scripts": {
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getKey": function(key){  return window[key]; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "existsKey": function(key){  return key in window; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } }
 },
 "creationPolicy": "delayed",
 "minHeight": 20,
 "shadow": false,
 "id": "rootPlayer",
 "data": {
  "name": "Player43899"
 },
 "desktopMipmappingEnabled": true,
 "layout": "absolute",
 "buttonToggleFullscreen": "this.IconButton_6250113C_76AC_F927_41D0_59F70AF309A6",
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "scrollBarOpacity": 0.5,
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_65ECF1C3_76AF_1961_41D8_A0140F813705], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0); this.playList_C94B1CC4_C4F6_D176_41D8_04946639C531.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_6250113C_76AC_F927_41D0_59F70AF309A6].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "contentOpaque": false,
 "minWidth": 20
})