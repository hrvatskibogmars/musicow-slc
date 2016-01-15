module.exports = function(Song) {
	var isStatic = true;
	Song.disableRemoteMethod('deleteById', isStatic);
	Song.disableRemoteMethod('createChangeStream', isStatic);
	Song.disableRemoteMethod("updateAttributes", isStatic); 
	Song.disableRemoteMethod("upsert",isStatic);
	Song.disableRemoteMethod("prototype.updateAttributes",isStatic);
};
