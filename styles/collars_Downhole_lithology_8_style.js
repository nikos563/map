var size = 0;
var placement = 'point';
function categories_collars_Downhole_lithology_8(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'clay':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(77,175,208,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11.399999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'clayey gravels':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(228,148,91,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11.399999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'clayey sand':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(146,127,233,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11.399999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'conglomerate':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(200,169,84,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11.399999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'flysch':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(207,82,149,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11.399999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'gravelly clay':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(211,49,187,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11.399999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'gravelly sand':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(139,206,14,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11.399999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'gravels':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(219,222,130,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11.399999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'limestone':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(37,228,155,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11.399999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'marl':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(109,12,205,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11.399999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'sand':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(234,49,89,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11.399999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'sandstone':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(173,18,204,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11.399999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'sandy clay':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(129,169,221,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11.399999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'sandy gravels':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(72,223,69,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11.399999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'sandy marl':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(105,207,200,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11.399999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'silt':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(91,108,231,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11.399999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'silty clay':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(159,234,121,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11.399999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'silty sand':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(202,59,44,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11.399999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(106,221,140,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11.399999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_collars_Downhole_lithology_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Lithology");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("Lithology") !== null) {
        labelText = String(feature.get("Lithology"));
    }
    
var style = categories_collars_Downhole_lithology_8(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
