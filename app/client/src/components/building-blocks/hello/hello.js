/**
 * hello Component
 *
 * @class HelloComponent
 * @module Hightail
 * @submodule Hightail.Components
 *
 * @example
 *    <ht-hello></ht-hello>
 *
 * @author justin.fiedler
 * @since 0.0.0
 *
 * @copyright (c) 2014 Hightail Inc. All Rights Reserved
 */
'use strict';

angular.wilson.component('hello', {
  
  controller: ['ComponentFactoryService', '$scope', '$attrs', function(ComponentFactoryService, $scope, $attrs) {
    var controller = this;
    ComponentFactoryService.init('hello', controller, $scope, $attrs);

//  controller.setState({
//    initial: '',
//    events: [
//      { name: '',  from: '',  to: '' }
//    ],
//    timeouts: [],
//    callbacks: {}
//  });

    $scope.message = controller.translate("Hello");
  }],
  
  link: function($scope, $element, $attrs, controller) {
  }
  
});
