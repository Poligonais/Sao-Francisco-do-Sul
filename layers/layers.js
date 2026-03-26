ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4674").setExtent([-48.669283, -26.247128, -48.395273, -26.106945]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ANEXOIVSuperfcieaqutica3_1 = new ol.format.GeoJSON();
var features_ANEXOIVSuperfcieaqutica3_1 = format_ANEXOIVSuperfcieaqutica3_1.readFeatures(json_ANEXOIVSuperfcieaqutica3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ANEXOIVSuperfcieaqutica3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANEXOIVSuperfcieaqutica3_1.addFeatures(features_ANEXOIVSuperfcieaqutica3_1);
var lyr_ANEXOIVSuperfcieaqutica3_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANEXOIVSuperfcieaqutica3_1, 
                style: style_ANEXOIVSuperfcieaqutica3_1,
                popuplayertitle: 'ANEXO IV - Superfície aquática 3',
                interactive: true,
                title: '<img src="styles/legend/ANEXOIVSuperfcieaqutica3_1.png" /> ANEXO IV - Superfície aquática 3'
            });
var format_ANEXOIIISuperfcieaqutica2_2 = new ol.format.GeoJSON();
var features_ANEXOIIISuperfcieaqutica2_2 = format_ANEXOIIISuperfcieaqutica2_2.readFeatures(json_ANEXOIIISuperfcieaqutica2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ANEXOIIISuperfcieaqutica2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANEXOIIISuperfcieaqutica2_2.addFeatures(features_ANEXOIIISuperfcieaqutica2_2);
var lyr_ANEXOIIISuperfcieaqutica2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANEXOIIISuperfcieaqutica2_2, 
                style: style_ANEXOIIISuperfcieaqutica2_2,
                popuplayertitle: 'ANEXO III - Superfície aquática 2',
                interactive: true,
                title: '<img src="styles/legend/ANEXOIIISuperfcieaqutica2_2.png" /> ANEXO III - Superfície aquática 2'
            });
var format_ANEXOIISuperfcieaqutica1_3 = new ol.format.GeoJSON();
var features_ANEXOIISuperfcieaqutica1_3 = format_ANEXOIISuperfcieaqutica1_3.readFeatures(json_ANEXOIISuperfcieaqutica1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ANEXOIISuperfcieaqutica1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANEXOIISuperfcieaqutica1_3.addFeatures(features_ANEXOIISuperfcieaqutica1_3);
var lyr_ANEXOIISuperfcieaqutica1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANEXOIISuperfcieaqutica1_3, 
                style: style_ANEXOIISuperfcieaqutica1_3,
                popuplayertitle: 'ANEXO II - Superfície aquática 1',
                interactive: true,
                title: '<img src="styles/legend/ANEXOIISuperfcieaqutica1_3.png" /> ANEXO II - Superfície aquática 1'
            });
var format_ANEXOIreaprincipal_4 = new ol.format.GeoJSON();
var features_ANEXOIreaprincipal_4 = format_ANEXOIreaprincipal_4.readFeatures(json_ANEXOIreaprincipal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ANEXOIreaprincipal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANEXOIreaprincipal_4.addFeatures(features_ANEXOIreaprincipal_4);
var lyr_ANEXOIreaprincipal_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANEXOIreaprincipal_4, 
                style: style_ANEXOIreaprincipal_4,
                popuplayertitle: 'ANEXO I - Área principal',
                interactive: true,
                title: '<img src="styles/legend/ANEXOIreaprincipal_4.png" /> ANEXO I - Área principal'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ANEXOIVSuperfcieaqutica3_1.setVisible(true);lyr_ANEXOIIISuperfcieaqutica2_2.setVisible(true);lyr_ANEXOIISuperfcieaqutica1_3.setVisible(true);lyr_ANEXOIreaprincipal_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ANEXOIVSuperfcieaqutica3_1,lyr_ANEXOIIISuperfcieaqutica2_2,lyr_ANEXOIISuperfcieaqutica1_3,lyr_ANEXOIreaprincipal_4];
lyr_ANEXOIVSuperfcieaqutica3_1.set('fieldAliases', {'Nome': 'Nome', });
lyr_ANEXOIIISuperfcieaqutica2_2.set('fieldAliases', {'Nome': 'Nome', });
lyr_ANEXOIISuperfcieaqutica1_3.set('fieldAliases', {'Nome': 'Nome', });
lyr_ANEXOIreaprincipal_4.set('fieldAliases', {'Nome': 'Nome', });
lyr_ANEXOIVSuperfcieaqutica3_1.set('fieldImages', {'Nome': 'TextEdit', });
lyr_ANEXOIIISuperfcieaqutica2_2.set('fieldImages', {'Nome': 'TextEdit', });
lyr_ANEXOIISuperfcieaqutica1_3.set('fieldImages', {'Nome': 'TextEdit', });
lyr_ANEXOIreaprincipal_4.set('fieldImages', {'Nome': '', });
lyr_ANEXOIVSuperfcieaqutica3_1.set('fieldLabels', {'Nome': 'inline label - visible with data', });
lyr_ANEXOIIISuperfcieaqutica2_2.set('fieldLabels', {'Nome': 'inline label - visible with data', });
lyr_ANEXOIISuperfcieaqutica1_3.set('fieldLabels', {'Nome': 'inline label - visible with data', });
lyr_ANEXOIreaprincipal_4.set('fieldLabels', {'Nome': 'inline label - visible with data', });
lyr_ANEXOIreaprincipal_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});