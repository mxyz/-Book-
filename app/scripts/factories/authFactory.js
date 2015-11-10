app.factory('authFactory', function ($http, $rootScope, $localStorage, $cookies) {
	return {
		setKeep: function(value) {
			$localStorage.keepLogin = value;
		},
		getAuth: function () {
			if($localStorage.keepLogin === false) {
				return $cookies.get('authToken');
			}
			else {
				return $localStorage.authToken;
			}
		},
		setAuth: function (token) {
			if($localStorage.keepLogin === false){
				$localStorage.authToken = undefined;
				$cookies.put('authToken', token);
			}
			else{
				$localStorage.authToken = token;
			}
			$rootScope.$broadcast('authenticate');
		},
		setMember: function (mem) {
			if($localStorage.keepLogin === false){
				$localStorage.member = undefined;
				$cookies.putObject('member', mem);
			}
			else{
				$localStorage.member = member;
			}
		},
		getMember: function () {
			if($localStorage.keepLogin === false) {
				return $cookies.get('member');
			}
			else {
				return $localStorage.member;
			}
		}
	};
});
