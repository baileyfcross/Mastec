# MasTec Basic Development Assessment

There is a webservice that provides a set of recipes and another that provides what's in the users pantry.

The task is as follows:
1. Create an application using the language and platform of your choice
2. Call the recipes and pantry APIs shown below and using that information determine what recipes the user can make
3. Call the apis for each of the users in the list below.  We will verify against this list to test your implementation
4. The application is successful if it gets a success result for all users
5. Package the application so that it is ready for git submission and provide it as a zip file to recruiter.

This is a basic assessment of skills.  It should take no more than 2 hours, but hopefully much less.
We will be assessing not only the ability to successfully execute the task, but also the cleanliness and resiliency of the solution.
If you cannot complete it in a reasonable time, please submit what you can, it may be helpful.
Please feel free to reach out with any questions

## Recipes API
Returns all of the recipes a user knows how to make.

```
GET https://dev.mastecat.net/test/cooking/recipes/[user]
{
  "data": {
    "recipes": [
      {
        "name": "cookies",
        "ingredients": {
          "butter": 1,
          "eggs": 1,
          "sugar": 1,
          "flour": 1.5
        }
      }
    ]
  }
}
```

## Pantry API
Returns all of the ingredients a user has in their pantry.

```
GET https://dev.mastecat.net/test/cooking/pantry/[user]
{
	"data": {
		"pantry": [
			"butter": 4,
			"eggs": 1,
			"sugar": .5
		]
	}
}
```

## Results API
After retrieving the recipes and pantry for a user, determine what the user can make and post it to this API.

```
POST https://dev.mastec.net/test/cooking/results/[user]
{
	"canmake": [
		{
			"name": "cookies",
			"quantity": 2.0
		}
	]
}
```

**returns**
```
{
	"status": "success",
	"message": ""
}

{
    "status": "failed",
	"message": "..."
}
```

## Authentication
Use HTTP Basic authorization to connect.  Credentials will be provided.

## List of users to test against
Perform the test for the following users:
* Alex
* Victor
* Brian
* Mark
* Leigh
* Steve



## Example

Call the pantry api for george as follows  
https://dev.mastecate.net/test/cooking/pantry/george  
and receive 
```
{
  "data": {
    "pantry": {
      "butter": 4,
      "eggs": 2,
      "sugar": 4,
      "flour": 5
    }
  }
}
```

Call the recipes api for george and   
https://dev.mastecate.net/test/cooking/reciptes/george
```
{
  "data": {
    "recipes": [
      {
        "name": "cookies",
        "ingredients": {
          "butter": 1,
          "eggs": 1,
          "sugar": 1,
          "flour": 1.5
        }
      }
    ]
  }
}
```

In this example, george can make 2 cookies.

User Credentials:
Username: BCross
Password: xxYn12~~!1

