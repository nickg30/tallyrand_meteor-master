//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Mongo = Package.mongo.Mongo;
var _ = Package.underscore._;
var CollectionExtensions = Package['lai:collection-extensions'].CollectionExtensions;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/dburles_mongo-collection-instances/mongo-instances.js                                             //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var instances = [];                                                                                           // 1
                                                                                                              // 2
CollectionExtensions.addExtension(function (name, options) {                                                  // 3
  instances.push({                                                                                            // 4
    name: name,                                                                                               // 5
    instance: this,                                                                                           // 6
    options: options                                                                                          // 7
  });                                                                                                         // 8
});                                                                                                           // 9
                                                                                                              // 10
Mongo.Collection.get = function(name, options) {                                                              // 11
  options = options || {};                                                                                    // 12
  var collection = _.find(instances, function(instance) {                                                     // 13
    if (options.connection)                                                                                   // 14
      return instance.name === name &&                                                                        // 15
        instance.options && instance.options.connection._lastSessionId === options.connection._lastSessionId;
    return instance.name === name;                                                                            // 17
  });                                                                                                         // 18
                                                                                                              // 19
  return collection && collection.instance;                                                                   // 20
};                                                                                                            // 21
                                                                                                              // 22
Mongo.Collection.getAll = function() {                                                                        // 23
  return instances;                                                                                           // 24
};                                                                                                            // 25
                                                                                                              // 26
// Meteor.Collection will lack ownProperties that are added back to Mongo.Collection                          // 27
Meteor.Collection = Mongo.Collection;                                                                         // 28
                                                                                                              // 29
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['dburles:mongo-collection-instances'] = {};

})();
