module.exports = function(Dj) {
	var isStatic = true;
	Dj.disableRemoteMethod('deleteById', isStatic);
	Dj.disableRemoteMethod('createChangeStream', isStatic);
	Dj.disableRemoteMethod("updateAttributes", isStatic); 
	Dj.disableRemoteMethod("upsert",isStatic);
	Dj.disableRemoteMethod("prototype.updateAttributes",isStatic);

};
