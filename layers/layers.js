var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CoordinacionSanMiguelAllende_3 = new ol.format.GeoJSON();
var features_CoordinacionSanMiguelAllende_3 = format_CoordinacionSanMiguelAllende_3.readFeatures(json_CoordinacionSanMiguelAllende_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSanMiguelAllende_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSanMiguelAllende_3.addFeatures(features_CoordinacionSanMiguelAllende_3);
var lyr_CoordinacionSanMiguelAllende_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSanMiguelAllende_3, 
                style: style_CoordinacionSanMiguelAllende_3,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionSanMiguelAllende_3.png" /> Coordinacion San Miguel Allende'
            });
var format_EduacionMediaSuperiorySuperior_4 = new ol.format.GeoJSON();
var features_EduacionMediaSuperiorySuperior_4 = format_EduacionMediaSuperiorySuperior_4.readFeatures(json_EduacionMediaSuperiorySuperior_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EduacionMediaSuperiorySuperior_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EduacionMediaSuperiorySuperior_4.addFeatures(features_EduacionMediaSuperiorySuperior_4);
var lyr_EduacionMediaSuperiorySuperior_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EduacionMediaSuperiorySuperior_4, 
                style: style_EduacionMediaSuperiorySuperior_4,
                interactive: true,
                title: '<img src="styles/legend/EduacionMediaSuperiorySuperior_4.png" /> Eduacion MediaSuperior y Superior'
            });
var format_MicroregionSMA5_5 = new ol.format.GeoJSON();
var features_MicroregionSMA5_5 = format_MicroregionSMA5_5.readFeatures(json_MicroregionSMA5_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSMA5_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSMA5_5.addFeatures(features_MicroregionSMA5_5);
var lyr_MicroregionSMA5_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSMA5_5, 
                style: style_MicroregionSMA5_5,
                interactive: false,
    title: 'Microregion SMA5<br />\
    <img src="styles/legend/MicroregionSMA5_5_0.png" /> 4 - 51 Personas<br />\
    <img src="styles/legend/MicroregionSMA5_5_1.png" /> 51 - 108 Personas<br />\
    <img src="styles/legend/MicroregionSMA5_5_2.png" /> 108 - 216 Personas<br />\
    <img src="styles/legend/MicroregionSMA5_5_3.png" /> 216 - 324 Personas<br />\
    <img src="styles/legend/MicroregionSMA5_5_4.png" /> 324 - 402 Personas<br />'
        });
var format_MicroregionSMA4_6 = new ol.format.GeoJSON();
var features_MicroregionSMA4_6 = format_MicroregionSMA4_6.readFeatures(json_MicroregionSMA4_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSMA4_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSMA4_6.addFeatures(features_MicroregionSMA4_6);
var lyr_MicroregionSMA4_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSMA4_6, 
                style: style_MicroregionSMA4_6,
                interactive: false,
    title: 'Microregion SMA4<br />\
    <img src="styles/legend/MicroregionSMA4_6_0.png" /> 1 - 36 Personas<br />\
    <img src="styles/legend/MicroregionSMA4_6_1.png" /> 36 - 82 Personas<br />\
    <img src="styles/legend/MicroregionSMA4_6_2.png" /> 82 - 170 Personas<br />\
    <img src="styles/legend/MicroregionSMA4_6_3.png" /> 170 - 374 Personas<br />\
    <img src="styles/legend/MicroregionSMA4_6_4.png" /> 374 - 511 Personas<br />'
        });
var format_MicroregionSMA3_7 = new ol.format.GeoJSON();
var features_MicroregionSMA3_7 = format_MicroregionSMA3_7.readFeatures(json_MicroregionSMA3_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSMA3_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSMA3_7.addFeatures(features_MicroregionSMA3_7);
var lyr_MicroregionSMA3_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSMA3_7, 
                style: style_MicroregionSMA3_7,
                interactive: false,
    title: 'Microregion SMA3<br />\
    <img src="styles/legend/MicroregionSMA3_7_0.png" /> 1 - 47 Personas<br />\
    <img src="styles/legend/MicroregionSMA3_7_1.png" /> 47 - 127 Personas<br />\
    <img src="styles/legend/MicroregionSMA3_7_2.png" /> 127 - 292 Personas<br />\
    <img src="styles/legend/MicroregionSMA3_7_3.png" /> 292 - 559 Personas<br />\
    <img src="styles/legend/MicroregionSMA3_7_4.png" /> 559 - 746 Personas<br />'
        });
var format_MicroregionSMA2_8 = new ol.format.GeoJSON();
var features_MicroregionSMA2_8 = format_MicroregionSMA2_8.readFeatures(json_MicroregionSMA2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSMA2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSMA2_8.addFeatures(features_MicroregionSMA2_8);
var lyr_MicroregionSMA2_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSMA2_8, 
                style: style_MicroregionSMA2_8,
                interactive: false,
    title: 'Microregion SMA2<br />\
    <img src="styles/legend/MicroregionSMA2_8_0.png" /> 1 - 18 Personas<br />\
    <img src="styles/legend/MicroregionSMA2_8_1.png" /> 18 - 45 Personas<br />\
    <img src="styles/legend/MicroregionSMA2_8_2.png" /> 45 - 86 Personas<br />\
    <img src="styles/legend/MicroregionSMA2_8_3.png" /> 86 - 158 Personas<br />\
    <img src="styles/legend/MicroregionSMA2_8_4.png" /> 158 - 304 Personas<br />'
        });
var format_MicroregionSMA1_9 = new ol.format.GeoJSON();
var features_MicroregionSMA1_9 = format_MicroregionSMA1_9.readFeatures(json_MicroregionSMA1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSMA1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSMA1_9.addFeatures(features_MicroregionSMA1_9);
var lyr_MicroregionSMA1_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSMA1_9, 
                style: style_MicroregionSMA1_9,
                interactive: false,
    title: 'Microregion SMA1<br />\
    <img src="styles/legend/MicroregionSMA1_9_0.png" /> 1 - 14 Personas<br />\
    <img src="styles/legend/MicroregionSMA1_9_1.png" /> 14 - 34 Personas<br />\
    <img src="styles/legend/MicroregionSMA1_9_2.png" /> 34 - 78 Personas<br />\
    <img src="styles/legend/MicroregionSMA1_9_3.png" /> 78 - 175 Personas<br />\
    <img src="styles/legend/MicroregionSMA1_9_4.png" /> 175 - 320 Personas<br />'
        });
var format_MicroregionCOM3_10 = new ol.format.GeoJSON();
var features_MicroregionCOM3_10 = format_MicroregionCOM3_10.readFeatures(json_MicroregionCOM3_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionCOM3_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionCOM3_10.addFeatures(features_MicroregionCOM3_10);
var lyr_MicroregionCOM3_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionCOM3_10, 
                style: style_MicroregionCOM3_10,
                interactive: false,
    title: 'Microregion COM3<br />\
    <img src="styles/legend/MicroregionCOM3_10_0.png" /> 1 - 18 Personas<br />\
    <img src="styles/legend/MicroregionCOM3_10_1.png" /> 18 - 61 Personas<br />\
    <img src="styles/legend/MicroregionCOM3_10_2.png" /> 61 - 140 Personas<br />\
    <img src="styles/legend/MicroregionCOM3_10_3.png" /> 140 - 305 Personas<br />\
    <img src="styles/legend/MicroregionCOM3_10_4.png" /> 305 - 585 Personas<br />'
        });
var format_MicroregionCOM2_11 = new ol.format.GeoJSON();
var features_MicroregionCOM2_11 = format_MicroregionCOM2_11.readFeatures(json_MicroregionCOM2_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionCOM2_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionCOM2_11.addFeatures(features_MicroregionCOM2_11);
var lyr_MicroregionCOM2_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionCOM2_11, 
                style: style_MicroregionCOM2_11,
                interactive: false,
    title: 'Microregion COM2<br />\
    <img src="styles/legend/MicroregionCOM2_11_0.png" /> 3 - 33 Personas<br />\
    <img src="styles/legend/MicroregionCOM2_11_1.png" /> 33 - 81 Personas<br />\
    <img src="styles/legend/MicroregionCOM2_11_2.png" /> 81 - 159 Personas<br />\
    <img src="styles/legend/MicroregionCOM2_11_3.png" /> 159 - 306 Personas<br />\
    <img src="styles/legend/MicroregionCOM2_11_4.png" /> 306 - 539 Personas<br />'
        });
var format_MicroregionCOM1_12 = new ol.format.GeoJSON();
var features_MicroregionCOM1_12 = format_MicroregionCOM1_12.readFeatures(json_MicroregionCOM1_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionCOM1_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionCOM1_12.addFeatures(features_MicroregionCOM1_12);
var lyr_MicroregionCOM1_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionCOM1_12, 
                style: style_MicroregionCOM1_12,
                interactive: false,
    title: 'Microregion COM1<br />\
    <img src="styles/legend/MicroregionCOM1_12_0.png" /> 2 - 46 Personas<br />\
    <img src="styles/legend/MicroregionCOM1_12_1.png" /> 46 - 123 Personas<br />\
    <img src="styles/legend/MicroregionCOM1_12_2.png" /> 123 - 229 Personas<br />\
    <img src="styles/legend/MicroregionCOM1_12_3.png" /> 229 - 450 Personas<br />\
    <img src="styles/legend/MicroregionCOM1_12_4.png" /> 450 - 681 Personas<br />'
        });
var format_CoordinacionSanMigueldeAllende_13 = new ol.format.GeoJSON();
var features_CoordinacionSanMigueldeAllende_13 = format_CoordinacionSanMigueldeAllende_13.readFeatures(json_CoordinacionSanMigueldeAllende_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSanMigueldeAllende_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSanMigueldeAllende_13.addFeatures(features_CoordinacionSanMigueldeAllende_13);
var lyr_CoordinacionSanMigueldeAllende_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSanMigueldeAllende_13, 
                style: style_CoordinacionSanMigueldeAllende_13,
                interactive: true,
                title: '<img src="styles/legend/CoordinacionSanMigueldeAllende_13.png" /> Coordinacion San Miguel de Allende'
            });
var group_CoordinacionSanMigueldeAllendeRezago = new ol.layer.Group({
                                layers: [lyr_MicroregionSMA5_5,lyr_MicroregionSMA4_6,lyr_MicroregionSMA3_7,lyr_MicroregionSMA2_8,lyr_MicroregionSMA1_9,lyr_MicroregionCOM3_10,lyr_MicroregionCOM2_11,lyr_MicroregionCOM1_12,],
                                title: "Coordinacion San Miguel de Allende Rezago"});
var group_DatosEducacinMediaSuperiorySuperior = new ol.layer.Group({
                                layers: [lyr_EduacionMediaSuperiorySuperior_4,],
                                title: "Datos Educación Media Superior y Superior"});
var group_CapazSecundarias = new ol.layer.Group({
                                layers: [lyr_CoordinacionSanMiguelAllende_3,],
                                title: "Capaz Secundarias"});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleEarth_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,],
                                title: "Mapas Base"});

lyr_GoogleEarth_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_CoordinacionSanMiguelAllende_3.setVisible(true);lyr_EduacionMediaSuperiorySuperior_4.setVisible(true);lyr_MicroregionSMA5_5.setVisible(true);lyr_MicroregionSMA4_6.setVisible(true);lyr_MicroregionSMA3_7.setVisible(true);lyr_MicroregionSMA2_8.setVisible(true);lyr_MicroregionSMA1_9.setVisible(true);lyr_MicroregionCOM3_10.setVisible(true);lyr_MicroregionCOM2_11.setVisible(true);lyr_MicroregionCOM1_12.setVisible(true);lyr_CoordinacionSanMigueldeAllende_13.setVisible(true);
var layersList = [group_MapasBase,group_CapazSecundarias,group_DatosEducacinMediaSuperiorySuperior,group_CoordinacionSanMigueldeAllendeRezago,lyr_CoordinacionSanMigueldeAllende_13];
lyr_CoordinacionSanMiguelAllende_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldAliases', {'Clave CT': 'Clave CT', 'Nombre CT': 'Nombre CT', 'Cve. Local': 'Cve. Local', 'Cve. Munic': 'Cve. Munic', 'Ageb': 'Ageb', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Nivel': 'Nivel', });
lyr_MicroregionSMA5_5.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', });
lyr_MicroregionSMA4_6.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', });
lyr_MicroregionSMA3_7.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionSMA2_8.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionSMA1_9.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionCOM3_10.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionCOM2_11.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionCOM1_12.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionSanMigueldeAllende_13.set('fieldAliases', {'Micro': 'Micro', 'Coord': 'Coord', 'Muni': 'Muni', 'Region': 'Region', 'Analf': 'Analf', 'PrimIncom': 'PrimIncom', 'PrimComp': 'PrimComp', 'SecuComp': 'SecuComp', 'Rezago': 'Rezago', });
lyr_CoordinacionSanMiguelAllende_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldImages', {'Clave CT': 'TextEdit', 'Nombre CT': 'TextEdit', 'Cve. Local': 'TextEdit', 'Cve. Munic': 'TextEdit', 'Ageb': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Nivel': 'TextEdit', });
lyr_MicroregionSMA5_5.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', });
lyr_MicroregionSMA4_6.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', });
lyr_MicroregionSMA3_7.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionSMA2_8.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionSMA1_9.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionCOM3_10.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionCOM2_11.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionCOM1_12.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionSanMigueldeAllende_13.set('fieldImages', {'Micro': 'TextEdit', 'Coord': 'TextEdit', 'Muni': 'TextEdit', 'Region': 'TextEdit', 'Analf': 'TextEdit', 'PrimIncom': 'TextEdit', 'PrimComp': 'TextEdit', 'SecuComp': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionSanMiguelAllende_3.set('fieldLabels', {});
lyr_EduacionMediaSuperiorySuperior_4.set('fieldLabels', {});
lyr_MicroregionSMA5_5.set('fieldLabels', {});
lyr_MicroregionSMA4_6.set('fieldLabels', {});
lyr_MicroregionSMA3_7.set('fieldLabels', {});
lyr_MicroregionSMA2_8.set('fieldLabels', {});
lyr_MicroregionSMA1_9.set('fieldLabels', {});
lyr_MicroregionCOM3_10.set('fieldLabels', {});
lyr_MicroregionCOM2_11.set('fieldLabels', {});
lyr_MicroregionCOM1_12.set('fieldLabels', {});
lyr_CoordinacionSanMigueldeAllende_13.set('fieldLabels', {'Micro': 'inline label', 'Coord': 'inline label', 'Muni': 'inline label', 'Region': 'inline label', 'Analf': 'inline label', 'PrimIncom': 'inline label', 'PrimComp': 'inline label', 'SecuComp': 'inline label', 'Rezago': 'inline label', });
lyr_CoordinacionSanMigueldeAllende_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});