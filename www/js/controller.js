angular.module('kurukshetra')

.controller('Logincontrol',
function($scope, user){
	$scope.user = user;
	$scope.verify = function() {
        console.log("verify function");
        var data ={
        username : document.getElementById('username').value,
        password : document.getElementById('password').value,
        } ;
       
        console.log(data);
        $.ajax({
        type: 'POST',
        data: {postData: JSON.stringify(data)},
        jsonp: "callback",
        dataType: 'jsonp',

        url: 'http://www.techteam.kurukshetra.org.in/server_side.php',
       
        timeout:5000,
        success: function(data){
       
            console.log(data);
            console.log(data.status);
            if(data.status)
            {
        
                user.event_name=data.event_name;
                console.log(user.event_name);
                location.href='#/home';
            }
            else{
                alert('wrong credentials');
                location.href='#/login';
                }
            
        },
        error: function(data,request,error){
            console.log(error);
            alert("Check Internet connection");
            location.href='#/login';
            
        }
    });
     		
	}

})

.controller('Homecontrol',
function($scope, user){
     $scope.user = user;

     $scope.nextpage = function(){
         console.log(user.participant_type);
        if(user.participant_type == "Individual")
            location.href = "#/user";
        else
            location.href = "#/users";

     }
     var select = document.getElementById("event_name");
     $scope.selectAction = function(){
     	 if(user.event_type == "Quizzes")
     	 {
     	 	select.options.length=0;
     	 	select.options[0]=new Option("Sci-Tech Quiz", "Sci-Tech Quiz", true, false);
     	 	select.options[1]=new Option("School Quiz", "School Quiz", true, false);
     	 	select.options[2]=new Option("K! Open Quiz", "K! Open Quiz", true, false);
     	 	select.options[3]=new Option("Biz Quiz", "Biz Quiz", true, false);
     	 }
     	 else if(user.event_type == "General")
     	 {
     	 	select.options.length=0;
     	 	select.options[0]=new Option("Alcatraz", "Alcatraz", true, false);
     	 	select.options[1]=new Option("The Fourth Estate", "The Fourth Estate", true, false);
     	 	select.options[2]=new Option("Math Modelling", "Math Modelling", true, false);
     	 }
     	 else if(user.event_type == "Management")
     	 {
     	 	select.options.length=0;
     	 	select.options[0]=new Option("Chaos Theory", "Chaos Theory", true, false);
     	 	select.options[1]=new Option("K! Idol", "K! Idol", true, false);
     	 	select.options[2]=new Option("Marketing Madness", "Marketing Madness", true, false);
     	 }
     	 else if(user.event_type == "Robotics")
     	 {
     	 	select.options.length=0;
     	 	select.options[0]=new Option("Robowars", "Robowars", true, false);
     	 	select.options[1]=new Option("K!ronicles of Mars", "K!ronicles of Mars", true, false);
     	 	select.options[2]=new Option("To the ArK!", "To the ArK!", true, false);
     	 	select.options[3]=new Option("Hawker Bot", "THawker Bot", true, false);
     	 }
     	 else if(user.event_type == "Engineering")
     	 {
     	 	select.options.length=0;
     	 	select.options[0]=new Option("Circuit Craze", "Circuit Craze", true, false);
     	 	select.options[1]=new Option("Contraptions", "Contraptions", true, false);
     	 	select.options[2]=new Option("e-Zone", "e-Zone", true, false);
     	 	select.options[3]=new Option("Godspeed", "Godspeed", true, false);
     	 	select.options[4]=new Option("Paper Presentation", "Paper Presentation", true, false);
     	 	select.options[5]=new Option("Innovate", "Innovate", true, false);
     	 	select.options[6]=new Option("BIM", "BIM", true, false);
     	 }
     	 else if(user.event_type == "Coding")
     	 {
     	 	select.options.length=0;
     	 	select.options[0]=new Option("Onsite Programming Contest", "Onsite Programming Contest", true, false);
     	 	select.options[1]=new Option("Tame the Code", "Tame the Code", true, false);
     	 	select.options[2]=new Option("Onsite Debugging", "Onsite Debugging", true, false);
     	 	select.options[3]=new Option("Heptathlon", "Heptathlon", true, false);
     	 }
	}
})

.controller('Userscontrol',
function($scope, user){
	$scope.user = user;
	$scope.startscan1 = function() {
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			$scope.$apply(function(){
					user.qr1 = result.text ;
					})
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		});
	}
	$scope.startscan2 = function() {
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			$scope.$apply(function(){
					user.qr2 = result.text ;
					})
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		});
	}
	$scope.startscan3 = function() {
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			$scope.$apply(function(){
					user.qr3 = result.text ;
					})
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		});
	}
	$scope.startscan4 = function() {
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			$scope.$apply(function(){
					user.qr4 = result.text ;
					})
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		});
	}
	$scope.startscan5 = function() {
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			$scope.$apply(function(){
					user.qr5 = result.text ;
					})
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		});
	}
    $scope.startscan6 = function() {
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            $scope.$apply(function(){
                    user.qr6 = result.text ;
                    })
        }, 
        function (error) {
            alert("Scanning failed: " + error);
        });
    }
})



.controller('Usercontrol',
function($scope, user){
	$scope.user = user;
	$scope.startscan1 = function() {
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			$scope.$apply(function(){
					user.qr1 = result.text ;
					})
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		});
	}

})


.controller('confirmcontrol',
function($scope, user ,$ionicLoading,$location){
	$scope.user = user;
	$scope.insert = function(){
		$ionicLoading.show({template: 'Loading...'});
    var data ={
        event_name : user.event_name,
        round : user.round,
        place : user.place,
        participant_type : user.participant_type,
        teamname : user.teamname,
        qr1 : user.qr1,
        qr2 : user.qr2,
        qr3 : user.qr3,
        qr4 : user.qr4,
        qr5 : user.qr5,
        qr6 : user.qr6,
    }
    
    console.log(data);
    $.ajax({
        type: 'POST',
        data: {postData: JSON.stringify(data)},
        jsonp: "callback",
        dataType: 'jsonp',
        timeout:5000,
        url: 'http://www.techteam.kurukshetra.org.in/qr.php',
        success: function(data){
        	$ionicLoading.hide();
        	console.log(data);
            alert('Your data was successfully added');
            user.teamname="";
            user.qr1="";
            user.qr2="";
            user.qr3="";
            user.qr4="";
            user.qr5="";
            user.qr6="";
                  location.href='#/home';
        },
        error: function(request,data,error){
            $ionicLoading.hide();
            console.log(error);
            alert('There was an error in adding your data. Check Internet');
        }
    });
    
    return false;
};
	
})