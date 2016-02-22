angular.module("storytools.core.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("error-dialog.html","<div><div class=modal-header><h3 class=modal-title>{{title}}</h3></div><div class=modal-body><span ng-bind-html=msg></span></div><div class=modal-footer><button class=\"btn btn-primary\" ng-click=$close()>OK</button></div></div>");
$templateCache.put("legend/legend.html","<div><div id=legend-btn-border class=map-btn-border tooltip-placement=top tooltip-append-to-body=true tooltip=\"Toggle Legend\"><div id=legend-btn ng-click=toggleLegend()><i class=\"glyphicon glyphicon-list-alt\"></i></div></div><div id=legend-container class=panel><div id=legend-panel class=\"panel collapse legend-panel-body\"><div id=legend-title-heading class=panel-heading><div class=\"legend-panel-title pull-left\" id=legend-title-text translate=legend_title>Legend</div><i class=\"glyphicon glyphicon-remove legend-panel-title pull-right\" ng-click=toggleLegend()></i></div><div class=\"panel in legend-panel-body\" ng-repeat=\"layer in mapManager.storyMap.getStoryLayers().getArray();\"><div class=\"panel-heading legend-item-header\" data-toggle=collapse data-target=\"{{\'#\' + layer.get(\'name\') + \'legend\'}}\">{{layer.get(\'title\')}}</div><div class=\"panel-collapse legend-item in legend-panel-body\" id=\"{{layer.get(\'name\') + \'legend\'}}\"><img ng-src={{getLegendUrl(layer)}}></div></div></div></div></div>");
$templateCache.put("time/playback-controls.html","<button class=btn ng-click=play() tooltip-placement=top tooltip-append-to-body=true tooltip=\"{{ playbackState }}\"><i class=\"glyphicon glyphicon-{{ playbackState | lowercase }}\"></i></button><div id=slider tooltip-placement=top tooltip-append-to-body=true tooltip=\"{{ currentRange.start|isodate }}\"></div><button class=btn ng-click=prev() tooltip-placement=top tooltip-append-to-body=true tooltip=Previous><i class=\"glyphicon glyphicon-fast-backward\"></i></button> <button class=btn ng-click=next() tooltip-placement=top tooltip-append-to-body=true tooltip=Next><i class=\"glyphicon glyphicon-fast-forward\"></i></button> <button class=btn ng-click=toggleLoop() tooltip-placement=top tooltip-append-to-body=true tooltip=Repeat ng-class=\"{ \'btn-success\' : loop }\"><i class=\"glyphicon glyphicon-repeat\"></i></button> <button class=\"btn no-border\" ng-click=toggleTimeLine() tooltip-placement=top tooltip-append-to-body=true tooltip=\"Toggle Timeline\"><i class=\"glyphicon glyphicon-time\"></i></button> <button class=\"btn no-border\" data-toggle=collapse data-target=#playback-settings tooltip-placement=top tooltip-append-to-body=true tooltip=\"Playback Settings\"><i class=\"glyphicon glyphicon-cog\"></i></button> <button class=\"btn no-border\" ng-click=toggleFullScreen() tooltip-placement=top tooltip-append-to-body=true tooltip=\"Toggle Fullscreen\"><i class=\"glyphicon glyphicon-fullscreen\"></i></button>");
$templateCache.put("time/playback-settings.html","<div class=radio><label><input type=radio ng-model=playbackOptions.mode ng-change=optionsChanged() value=instant> Instant</label></div><div class=radio><label><input type=radio ng-model=playbackOptions.mode ng-change=optionsChanged() value=range> Range</label></div><div class=radio><label><input type=radio ng-model=playbackOptions.mode ng-change=optionsChanged() value=cumulative> Cumulative</label></div><div class=checkbox><label><input type=checkbox ng-model=playbackOptions.fixed ng-change=optionsChanged()> Fixed Range</label></div>");}]);