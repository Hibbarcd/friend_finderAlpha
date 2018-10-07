

const friendArray = [
    {
        name:"Sarah",
        photo:"#",
        scores: [
            '3',
            '2',
            '3',
            '3',
            '1',
            '5',
            '3',
            '3',
            '3',
            '4',
        ]
        },
    {
        name:"Abbie",
        photo:"#",
        scores: [
            '5',
            '3',
            '4',
            '3',
            '5',
            '1',
            '3',
            '3',
            '1',
            '5',
        ]
        }

    ];
    module.exports = friendArray;

//Below we create on-click event for survey.html submit button to store input data as 2 objects within the newFriend Array
    $(".submit").on("click", function(){

        // Here we grab the form elements
        var newFriend = [{
            name: $('#name').val().trim(),
            photo: $('#photo').val().trim(),
            age: $('#age').val().trim()
        },
        {
            group1: $('#group1').val().trim(),
            group2: $('#group2').val().trim(),
            group3: $('#group3').val().trim(),
            group4: $('#group4').val().trim(),
            group5: $('#group5').val().trim(),
            group6: $('#group6').val().trim(),
            group7: $('#group7').val().trim(),
            group8: $('#group8').val().trim(),
            group9: $('#group9').val().trim(),
            group10: $('#group10').val().trim(),
        }];
        
        console.log(newFriend);
        const newProfile = newFriend[1];
        console.log(newProfile);
        module.exports = newProfile;
    
    // 		// Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
    // 		// The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
    // 		// Here we get the location of the root page.
    // 		// We use this instead of explicitly saying the URL is localhost:3001 because the url will change when we deploy.
        var currentURL = window.location.origin;
    
        $.post(currentURL + `/api/friends`, newProfile,
        function(data){
            if (data == true){
                alert("You are officially added!")
            }
    
            // Clear the form on submit
            $('#name').val("");
            $('#photo').val("");
            $('#age').val("");
            $('#group1').val("");
            $('#group2').val("");
            $('#group3').val("");
            $('#group4').val("");
            $('#group5').val("");
            $('#group6').val("");
            $('#group7').val("");
            $('#group8').val("");
            $('#group9').val("");
            $('#group10').val("");
    
        });
        return false;
    });
    