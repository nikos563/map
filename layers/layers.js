var wms_layers = [];

var lyr_clipped_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "clipped",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/clipped_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2754499.480422, 4157170.669154, 2782629.715912, 4187613.534997]
                            })
                        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Springscrete_gis_2 = new ol.format.GeoJSON();
var features_Springscrete_gis_2 = format_Springscrete_gis_2.readFeatures(json_Springscrete_gis_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Springscrete_gis_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Springscrete_gis_2.addFeatures(features_Springscrete_gis_2);
var lyr_Springscrete_gis_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Springscrete_gis_2, 
                style: style_Springscrete_gis_2,
                popuplayertitle: "Springscrete_gis",
                interactive: true,
                title: '<img src="styles/legend/Springscrete_gis_2.png" /> Springscrete_gis'
            });
var lyr_crete2100_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "crete2100",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/crete2100_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2594986.151963, 4121129.797208, 2959818.570232, 4301994.758369]
                            })
                        });
var lyr_clipped_crete_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "clipped_crete",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/clipped_crete_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2767502.833168, 4161968.920734, 2781455.476293, 4175035.121722]
                            })
                        });
var format_antiskaritympaki_5 = new ol.format.GeoJSON();
var features_antiskaritympaki_5 = format_antiskaritympaki_5.readFeatures(json_antiskaritympaki_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_antiskaritympaki_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_antiskaritympaki_5.addFeatures(features_antiskaritympaki_5);
var lyr_antiskaritympaki_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_antiskaritympaki_5, 
                style: style_antiskaritympaki_5,
                popuplayertitle: "antiskari-tympaki",
                interactive: true,
    title: 'antiskari-tympaki<br />\
    <img src="styles/legend/antiskaritympaki_5_0.png" /> <br />\
    <img src="styles/legend/antiskaritympaki_5_1.png" /> al<br />\
    <img src="styles/legend/antiskaritympaki_5_2.png" /> cd<br />\
    <img src="styles/legend/antiskaritympaki_5_3.png" /> E.fi<br />\
    <img src="styles/legend/antiskaritympaki_5_4.png" /> f?<br />\
    <img src="styles/legend/antiskaritympaki_5_5.png" /> fo<br />\
    <img src="styles/legend/antiskaritympaki_5_6.png" /> ft<br />\
    <img src="styles/legend/antiskaritympaki_5_7.png" /> g<br />\
    <img src="styles/legend/antiskaritympaki_5_8.png" /> gn<br />\
    <img src="styles/legend/antiskaritympaki_5_9.png" /> gr<br />\
    <img src="styles/legend/antiskaritympaki_5_10.png" /> J.fl<br />\
    <img src="styles/legend/antiskaritympaki_5_11.png" /> Jm-E.k<br />\
    <img src="styles/legend/antiskaritympaki_5_12.png" /> Js.br<br />\
    <img src="styles/legend/antiskaritympaki_5_13.png" /> Js.f<br />\
    <img src="styles/legend/antiskaritympaki_5_14.png" /> Js.fl<br />\
    <img src="styles/legend/antiskaritympaki_5_15.png" /> Js.k.d<br />\
    <img src="styles/legend/antiskaritympaki_5_16.png" /> K-Ei.k<br />\
    <img src="styles/legend/antiskaritympaki_5_17.png" /> K.k.pl<br />\
    <img src="styles/legend/antiskaritympaki_5_18.png" /> Ks.k<br />\
    <img src="styles/legend/antiskaritympaki_5_19.png" /> M.c<br />\
    <img src="styles/legend/antiskaritympaki_5_20.png" /> M.k<br />\
    <img src="styles/legend/antiskaritympaki_5_21.png" /> M.m<br />\
    <img src="styles/legend/antiskaritympaki_5_22.png" /> o<br />\
    <img src="styles/legend/antiskaritympaki_5_23.png" /> P-E.k<br />\
    <img src="styles/legend/antiskaritympaki_5_24.png" /> ph<br />\
    <img src="styles/legend/antiskaritympaki_5_25.png" /> Pl<br />\
    <img src="styles/legend/antiskaritympaki_5_26.png" /> Pl-Pt<br />\
    <img src="styles/legend/antiskaritympaki_5_27.png" /> Pt<br />\
    <img src="styles/legend/antiskaritympaki_5_28.png" /> Pt.t<br />\
    <img src="styles/legend/antiskaritympaki_5_29.png" /> Pt.tm<br />\
    <img src="styles/legend/antiskaritympaki_5_30.png" /> SC-CS<br />\
    <img src="styles/legend/antiskaritympaki_5_31.png" /> T-E.k.d<br />\
    <img src="styles/legend/antiskaritympaki_5_32.png" /> T-K.k.h<br />\
    <img src="styles/legend/antiskaritympaki_5_33.png" /> T.ft<br />\
    <img src="styles/legend/antiskaritympaki_5_34.png" /> T.k.br<br />\
    <img src="styles/legend/antiskaritympaki_5_35.png" /> T.k.c.st<br />'
        });
var format_collars_Desurvey_6 = new ol.format.GeoJSON();
var features_collars_Desurvey_6 = format_collars_Desurvey_6.readFeatures(json_collars_Desurvey_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_collars_Desurvey_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_collars_Desurvey_6.addFeatures(features_collars_Desurvey_6);
var lyr_collars_Desurvey_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_collars_Desurvey_6, 
                style: style_collars_Desurvey_6,
                popuplayertitle: "collars_Desurvey",
                interactive: true,
                title: '<img src="styles/legend/collars_Desurvey_6.png" /> collars_Desurvey'
            });
var format_clipped_tympaki_antiskari_7 = new ol.format.GeoJSON();
var features_clipped_tympaki_antiskari_7 = format_clipped_tympaki_antiskari_7.readFeatures(json_clipped_tympaki_antiskari_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clipped_tympaki_antiskari_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clipped_tympaki_antiskari_7.addFeatures(features_clipped_tympaki_antiskari_7);
var lyr_clipped_tympaki_antiskari_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clipped_tympaki_antiskari_7, 
                style: style_clipped_tympaki_antiskari_7,
                popuplayertitle: "clipped_tympaki_antiskari",
                interactive: true,
    title: 'clipped_tympaki_antiskari<br />\
    <img src="styles/legend/clipped_tympaki_antiskari_7_0.png" /> al<br />\
    <img src="styles/legend/clipped_tympaki_antiskari_7_1.png" /> fo<br />\
    <img src="styles/legend/clipped_tympaki_antiskari_7_2.png" /> ft<br />\
    <img src="styles/legend/clipped_tympaki_antiskari_7_3.png" /> g<br />\
    <img src="styles/legend/clipped_tympaki_antiskari_7_4.png" /> gn<br />\
    <img src="styles/legend/clipped_tympaki_antiskari_7_5.png" /> J.fl<br />\
    <img src="styles/legend/clipped_tympaki_antiskari_7_6.png" /> Js.f<br />\
    <img src="styles/legend/clipped_tympaki_antiskari_7_7.png" /> K-Ei.k<br />\
    <img src="styles/legend/clipped_tympaki_antiskari_7_8.png" /> M.c<br />\
    <img src="styles/legend/clipped_tympaki_antiskari_7_9.png" /> M.k<br />\
    <img src="styles/legend/clipped_tympaki_antiskari_7_10.png" /> M.m<br />\
    <img src="styles/legend/clipped_tympaki_antiskari_7_11.png" /> o<br />\
    <img src="styles/legend/clipped_tympaki_antiskari_7_12.png" /> P-E.k<br />\
    <img src="styles/legend/clipped_tympaki_antiskari_7_13.png" /> Pl<br />\
    <img src="styles/legend/clipped_tympaki_antiskari_7_14.png" /> Pl-Pt<br />\
    <img src="styles/legend/clipped_tympaki_antiskari_7_15.png" /> Pt<br />\
    <img src="styles/legend/clipped_tympaki_antiskari_7_16.png" /> T-K.k.h<br />\
    <img src="styles/legend/clipped_tympaki_antiskari_7_17.png" /> T.ft<br />\
    <img src="styles/legend/clipped_tympaki_antiskari_7_18.png" /> <br />'
        });
var format_collars_Downhole_lithology_8 = new ol.format.GeoJSON();
var features_collars_Downhole_lithology_8 = format_collars_Downhole_lithology_8.readFeatures(json_collars_Downhole_lithology_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_collars_Downhole_lithology_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_collars_Downhole_lithology_8.addFeatures(features_collars_Downhole_lithology_8);
var lyr_collars_Downhole_lithology_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_collars_Downhole_lithology_8, 
                style: style_collars_Downhole_lithology_8,
                popuplayertitle: "collars_Downhole_lithology",
                interactive: true,
    title: 'collars_Downhole_lithology<br />\
    <img src="styles/legend/collars_Downhole_lithology_8_0.png" /> clay<br />\
    <img src="styles/legend/collars_Downhole_lithology_8_1.png" /> clayey gravels<br />\
    <img src="styles/legend/collars_Downhole_lithology_8_2.png" /> clayey sand<br />\
    <img src="styles/legend/collars_Downhole_lithology_8_3.png" /> conglomerate<br />\
    <img src="styles/legend/collars_Downhole_lithology_8_4.png" /> flysch<br />\
    <img src="styles/legend/collars_Downhole_lithology_8_5.png" /> gravelly clay<br />\
    <img src="styles/legend/collars_Downhole_lithology_8_6.png" /> gravelly sand<br />\
    <img src="styles/legend/collars_Downhole_lithology_8_7.png" /> gravels<br />\
    <img src="styles/legend/collars_Downhole_lithology_8_8.png" /> limestone<br />\
    <img src="styles/legend/collars_Downhole_lithology_8_9.png" /> marl<br />\
    <img src="styles/legend/collars_Downhole_lithology_8_10.png" /> sand<br />\
    <img src="styles/legend/collars_Downhole_lithology_8_11.png" /> sandstone<br />\
    <img src="styles/legend/collars_Downhole_lithology_8_12.png" /> sandy clay<br />\
    <img src="styles/legend/collars_Downhole_lithology_8_13.png" /> sandy gravels<br />\
    <img src="styles/legend/collars_Downhole_lithology_8_14.png" /> sandy marl<br />\
    <img src="styles/legend/collars_Downhole_lithology_8_15.png" /> silt<br />\
    <img src="styles/legend/collars_Downhole_lithology_8_16.png" /> silty clay<br />\
    <img src="styles/legend/collars_Downhole_lithology_8_17.png" /> silty sand<br />\
    <img src="styles/legend/collars_Downhole_lithology_8_18.png" /> <br />'
        });
var format_collars_9 = new ol.format.GeoJSON();
var features_collars_9 = format_collars_9.readFeatures(json_collars_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_collars_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_collars_9.addFeatures(features_collars_9);
var lyr_collars_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_collars_9, 
                style: style_collars_9,
                popuplayertitle: "collars",
                interactive: true,
                title: '<img src="styles/legend/collars_9.png" /> collars'
            });
var format_collars_3D_10 = new ol.format.GeoJSON();
var features_collars_3D_10 = format_collars_3D_10.readFeatures(json_collars_3D_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_collars_3D_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_collars_3D_10.addFeatures(features_collars_3D_10);
var lyr_collars_3D_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_collars_3D_10, 
                style: style_collars_3D_10,
                popuplayertitle: "collars_3D",
                interactive: true,
                title: '<img src="styles/legend/collars_3D_10.png" /> collars_3D'
            });

lyr_clipped_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Springscrete_gis_2.setVisible(true);lyr_crete2100_3.setVisible(true);lyr_clipped_crete_4.setVisible(true);lyr_antiskaritympaki_5.setVisible(true);lyr_collars_Desurvey_6.setVisible(true);lyr_clipped_tympaki_antiskari_7.setVisible(true);lyr_collars_Downhole_lithology_8.setVisible(true);lyr_collars_9.setVisible(true);lyr_collars_3D_10.setVisible(true);
var layersList = [lyr_clipped_0,lyr_OpenStreetMap_1,lyr_Springscrete_gis_2,lyr_crete2100_3,lyr_clipped_crete_4,lyr_antiskaritympaki_5,lyr_collars_Desurvey_6,lyr_clipped_tympaki_antiskari_7,lyr_collars_Downhole_lithology_8,lyr_collars_9,lyr_collars_3D_10];
lyr_Springscrete_gis_2.set('fieldAliases', {'Station ID': 'Station ID', 'X coordinate': 'X coordinate', 'Y coordinate': 'Y coordinate', 'Elevation': 'Elevation', 'Temperature': 'Temperature', 'pH (field)': 'pH (field)', 'El. Cond.': 'El. Cond.', 'TDS': 'TDS', 'Ca': 'Ca', 'Mg': 'Mg', 'Na': 'Na', 'K': 'K', 'Cl': 'Cl', 'HCO3': 'HCO3', 'SO4': 'SO4', 'F': 'F', });
lyr_antiskaritympaki_5.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ANTISKARI_': 'ANTISKARI_', 'ANTISKARI__1': 'ANTISKARI__1', 'FORMATION': 'FORMATION', 'RASTER': 'RASTER', 'HYDRO': 'HYDRO', 'TYMBAKI_': 'TYMBAKI_', 'TYMBAKI_ID': 'TYMBAKI_ID', 'layer': 'layer', 'path': 'path', });
lyr_collars_Desurvey_6.set('fieldAliases', {'fid': 'fid', 'CollarID': 'CollarID', 'SegLength': 'SegLength', });
lyr_clipped_tympaki_antiskari_7.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ANTISKARI_': 'ANTISKARI_', 'ANTISKARI__1': 'ANTISKARI__1', 'FORMATION': 'FORMATION', 'RASTER': 'RASTER', 'HYDRO': 'HYDRO', 'TYMBAKI_': 'TYMBAKI_', 'TYMBAKI_ID': 'TYMBAKI_ID', 'layer': 'layer', 'path': 'path', });
lyr_collars_Downhole_lithology_8.set('fieldAliases', {'fid': 'fid', 'HoleID': 'HoleID', 'DepthFrom': 'DepthFrom', 'DepthTo': 'DepthTo', 'Lithology': 'Lithology', '_From_x': '_From_x', '_From_y': '_From_y', '_From_z': '_From_z', '_To_x': '_To_x', '_To_y': '_To_y', '_To_z': '_To_z', '_Mid_x': '_Mid_x', '_Mid_y': '_Mid_y', '_Mid_z': '_Mid_z', });
lyr_collars_9.set('fieldAliases', {'HoleID': 'HoleID', 'DepthFrom': 'DepthFrom', 'DepthTo': 'DepthTo', 'Easting': 'Easting', 'Northing': 'Northing', 'elevation': 'elevation', 'Azimuth': 'Azimuth', 'Dip': 'Dip', 'EOH': 'EOH', });
lyr_collars_3D_10.set('fieldAliases', {'fid': 'fid', 'HoleID': 'HoleID', 'DepthFrom': 'DepthFrom', 'DepthTo': 'DepthTo', 'Easting': 'Easting', 'Northing': 'Northing', 'elevation': 'elevation', 'Azimuth': 'Azimuth', 'Dip': 'Dip', 'EOH': 'EOH', });
lyr_Springscrete_gis_2.set('fieldImages', {'Station ID': 'TextEdit', 'X coordinate': 'Range', 'Y coordinate': 'Range', 'Elevation': 'Range', 'Temperature': 'TextEdit', 'pH (field)': 'TextEdit', 'El. Cond.': 'TextEdit', 'TDS': 'TextEdit', 'Ca': 'TextEdit', 'Mg': 'TextEdit', 'Na': 'TextEdit', 'K': 'TextEdit', 'Cl': 'TextEdit', 'HCO3': 'TextEdit', 'SO4': 'TextEdit', 'F': 'TextEdit', });
lyr_antiskaritympaki_5.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'ANTISKARI_': 'TextEdit', 'ANTISKARI__1': 'TextEdit', 'FORMATION': 'TextEdit', 'RASTER': 'TextEdit', 'HYDRO': 'TextEdit', 'TYMBAKI_': 'TextEdit', 'TYMBAKI_ID': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_collars_Desurvey_6.set('fieldImages', {'fid': 'TextEdit', 'CollarID': 'TextEdit', 'SegLength': 'TextEdit', });
lyr_clipped_tympaki_antiskari_7.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'ANTISKARI_': 'TextEdit', 'ANTISKARI__1': 'TextEdit', 'FORMATION': 'TextEdit', 'RASTER': 'TextEdit', 'HYDRO': 'TextEdit', 'TYMBAKI_': 'TextEdit', 'TYMBAKI_ID': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_collars_Downhole_lithology_8.set('fieldImages', {'fid': 'TextEdit', 'HoleID': 'TextEdit', 'DepthFrom': 'TextEdit', 'DepthTo': 'TextEdit', 'Lithology': 'TextEdit', '_From_x': 'TextEdit', '_From_y': 'TextEdit', '_From_z': 'TextEdit', '_To_x': 'TextEdit', '_To_y': 'TextEdit', '_To_z': 'TextEdit', '_Mid_x': 'TextEdit', '_Mid_y': 'TextEdit', '_Mid_z': 'TextEdit', });
lyr_collars_9.set('fieldImages', {'HoleID': 'TextEdit', 'DepthFrom': 'TextEdit', 'DepthTo': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'elevation': 'TextEdit', 'Azimuth': 'TextEdit', 'Dip': 'TextEdit', 'EOH': 'TextEdit', });
lyr_collars_3D_10.set('fieldImages', {'fid': '', 'HoleID': '', 'DepthFrom': '', 'DepthTo': '', 'Easting': '', 'Northing': '', 'elevation': '', 'Azimuth': '', 'Dip': '', 'EOH': '', });
lyr_Springscrete_gis_2.set('fieldLabels', {'Station ID': 'no label', 'X coordinate': 'no label', 'Y coordinate': 'no label', 'Elevation': 'no label', 'Temperature': 'no label', 'pH (field)': 'no label', 'El. Cond.': 'no label', 'TDS': 'no label', 'Ca': 'no label', 'Mg': 'no label', 'Na': 'no label', 'K': 'no label', 'Cl': 'no label', 'HCO3': 'no label', 'SO4': 'no label', 'F': 'no label', });
lyr_antiskaritympaki_5.set('fieldLabels', {'fid': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'ANTISKARI_': 'no label', 'ANTISKARI__1': 'no label', 'FORMATION': 'no label', 'RASTER': 'no label', 'HYDRO': 'no label', 'TYMBAKI_': 'no label', 'TYMBAKI_ID': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_collars_Desurvey_6.set('fieldLabels', {'fid': 'no label', 'CollarID': 'no label', 'SegLength': 'no label', });
lyr_clipped_tympaki_antiskari_7.set('fieldLabels', {'fid': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'ANTISKARI_': 'no label', 'ANTISKARI__1': 'no label', 'FORMATION': 'no label', 'RASTER': 'no label', 'HYDRO': 'no label', 'TYMBAKI_': 'no label', 'TYMBAKI_ID': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_collars_Downhole_lithology_8.set('fieldLabels', {'fid': 'no label', 'HoleID': 'no label', 'DepthFrom': 'no label', 'DepthTo': 'no label', 'Lithology': 'no label', '_From_x': 'no label', '_From_y': 'no label', '_From_z': 'no label', '_To_x': 'no label', '_To_y': 'no label', '_To_z': 'no label', '_Mid_x': 'no label', '_Mid_y': 'no label', '_Mid_z': 'no label', });
lyr_collars_9.set('fieldLabels', {'HoleID': 'no label', 'DepthFrom': 'no label', 'DepthTo': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'elevation': 'no label', 'Azimuth': 'no label', 'Dip': 'no label', 'EOH': 'no label', });
lyr_collars_3D_10.set('fieldLabels', {'fid': 'no label', 'HoleID': 'no label', 'DepthFrom': 'no label', 'DepthTo': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'elevation': 'no label', 'Azimuth': 'no label', 'Dip': 'no label', 'EOH': 'no label', });
lyr_collars_3D_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});